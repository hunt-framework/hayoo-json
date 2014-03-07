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
        "word": "NXT"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA message-based control of a NXT brick via remotely executed \u003ccode\u003eMotorControl\u003c/code\u003e program. The main goal of this approach is to achieve\nbetter precision of motor movements as program monitors and adapts motor commands on the NXT brick itself. For example, common\nmotor's overshoot is thus removed in most cases.\n\u003c/p\u003e\u003cp\u003eYou should download/compile \u003ccode\u003eMotorControl\u003c/code\u003e program from \u003ca\u003ehttp://www.mindstorms.rwth-aachen.de/trac/wiki/MotorControl\u003c/a\u003e and upload\nit to the NXT brick with \u003ccode\u003enxt-upload\u003c/code\u003e program. This module will then run that program and sends it messages to control the NXT brick.\nBecause commands will be executed and controlled directly on the NXT brick more powerful and precise control is possible.\n\u003c/p\u003e\u003cp\u003ePlease refer to original documentation of \u003ccode\u003eMotorControl\u003c/code\u003e program for more information, description of commands and explanations\nhow to use them. This interface also implements static pauses between commands mentioned there and required by \u003ccode\u003eMotorControl\u003c/code\u003e. This\nmeans functions calls will block for this time so consider using special Haskell thread for communication with the NXT brick.\nDynamic/minimal pauses are not implemented and have to be taken care of by user of this interface.\n\u003c/p\u003e\u003cp\u003eCheck \u003ca\u003eRobotics.NXT.Remote\u003c/a\u003e for another (simpler) approach to message-based control. It would be great to one day combine\n\u003ccode\u003eMotorControl\u003c/code\u003e's precision with API (especially interruptability) of \u003ccode\u003eremote.nxc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "MotorControl",
          "package": "NXT",
          "source": "src/Robotics-NXT-MotorControl.html",
          "type": "module"
        },
        "index": {
          "description": "message-based control of NXT brick via remotely executed MotorControl program The main goal of this approach is to achieve better precision of motor movements as program monitors and adapts motor commands on the NXT brick itself For example common motor overshoot is thus removed in most cases You should download compile MotorControl program from http www.mindstorms.rwth-aachen.de trac wiki MotorControl and upload it to the NXT brick with nxt-upload program This module will then run that program and sends it messages to control the NXT brick Because commands will be executed and controlled directly on the NXT brick more powerful and precise control is possible Please refer to original documentation of MotorControl program for more information description of commands and explanations how to use them This interface also implements static pauses between commands mentioned there and required by MotorControl This means functions calls will block for this time so consider using special Haskell thread for communication with the NXT brick Dynamic minimal pauses are not implemented and have to be taken care of by user of this interface Check Robotics.NXT.Remote for another simpler approach to message-based control It would be great to one day combine MotorControl precision with API especially interruptability of remote.nxc",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "MotorControl",
          "package": "NXT",
          "partial": "Motor Control",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT.MotorControl",
          "name": "MotorControlMode",
          "package": "NXT",
          "source": "src/Robotics-NXT-MotorControl.html#MotorControlMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "MotorControlMode",
          "package": "NXT",
          "partial": "Motor Control Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#t:MotorControlMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould in a case of a load on the motor its power be adapted to retain the same speed? Really works only if there is room for that\n(not that motor is already running at the maximum power).\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "SpeedRegulation",
          "package": "NXT",
          "source": "src/Robotics-NXT-MotorControl.html#SpeedRegulation",
          "type": "type"
        },
        "index": {
          "description": "Should in case of load on the motor its power be adapted to retain the same speed Really works only if there is room for that not that motor is already running at the maximum power",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "SpeedRegulation",
          "package": "NXT",
          "partial": "Speed Regulation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#t:SpeedRegulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeeps active brake on after the end of the movement.\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "HoldBrake",
          "package": "NXT",
          "signature": "HoldBrake",
          "source": "src/Robotics-NXT-MotorControl.html#MotorControlMode",
          "type": "function"
        },
        "index": {
          "description": "Keeps active brake on after the end of the movement",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "HoldBrake",
          "package": "NXT",
          "partial": "Hold Brake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:HoldBrake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmoothly starts the movement.\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "SmoothStart",
          "package": "NXT",
          "signature": "SmoothStart",
          "source": "src/Robotics-NXT-MotorControl.html#MotorControlMode",
          "type": "function"
        },
        "index": {
          "description": "Smoothly starts the movement",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "SmoothStart",
          "package": "NXT",
          "partial": "Smooth Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:SmoothStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn a case of a load on the motor adapt motor power to retain the same speed. Really works only if there is\n room for that (not that motor is already running at the maximum power).\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "SpeedRegulation",
          "package": "NXT",
          "signature": "SpeedRegulation",
          "source": "src/Robotics-NXT-MotorControl.html#MotorControlMode",
          "type": "function"
        },
        "index": {
          "description": "In case of load on the motor adapt motor power to retain the same speed Really works only if there is room for that not that motor is already running at the maximum power",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "SpeedRegulation",
          "package": "NXT",
          "partial": "Speed Regulation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:SpeedRegulation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface to \u003ccode\u003eCLASSIC_MOTORCMD\u003c/code\u003e command which is very similar to \u003ccode\u003e\u003ca\u003esetOutputState\u003c/a\u003e\u003c/code\u003e but better interacts with \u003ccode\u003eMotorControl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eRequires dynamic/minimal pauses.\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "classicMotorCmd",
          "package": "NXT",
          "signature": "[OutputPort] -\u003e OutputPower -\u003e TachoLimit -\u003e SpeedRegulation -\u003e NXT ()",
          "source": "src/Robotics-NXT-MotorControl.html#classicMotorCmd",
          "type": "function"
        },
        "index": {
          "description": "Interface to CLASSIC MOTORCMD command which is very similar to setOutputState but better interacts with MotorControl Requires dynamic minimal pauses",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "classicMotorCmd",
          "normalized": "[OutputPort]-\u003eOutputPower-\u003eTachoLimit-\u003eSpeedRegulation-\u003eNXT()",
          "package": "NXT",
          "partial": "Motor Cmd",
          "signature": "[OutputPort]-\u003eOutputPower-\u003eTachoLimit-\u003eSpeedRegulation-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:classicMotorCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface to \u003ccode\u003eCONTROLLED_MOTORCMD\u003c/code\u003e command which takes care of precise motor movements.\n\u003c/p\u003e\u003cp\u003eRequires dynamic/minimal pauses.\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "controlledMotorCmd",
          "package": "NXT",
          "signature": "[OutputPort] -\u003e OutputPower -\u003e TachoLimit -\u003e [MotorControlMode] -\u003e NXT ()",
          "source": "src/Robotics-NXT-MotorControl.html#controlledMotorCmd",
          "type": "function"
        },
        "index": {
          "description": "Interface to CONTROLLED MOTORCMD command which takes care of precise motor movements Requires dynamic minimal pauses",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "controlledMotorCmd",
          "normalized": "[OutputPort]-\u003eOutputPower-\u003eTachoLimit-\u003e[MotorControlMode]-\u003eNXT()",
          "package": "NXT",
          "partial": "Motor Cmd",
          "signature": "[OutputPort]-\u003eOutputPower-\u003eTachoLimit-\u003e[MotorControlMode]-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:controlledMotorCmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface to \u003ccode\u003eISMOTORREADY\u003c/code\u003e command which determine the state of a motor: is it currently executing a command (for example, moving)\nor is it ready to accept new commands?\n\u003c/p\u003e\u003cp\u003eImplements static pauses.\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "isMotorReady",
          "package": "NXT",
          "signature": "[OutputPort] -\u003e NXT [Bool]",
          "source": "src/Robotics-NXT-MotorControl.html#isMotorReady",
          "type": "function"
        },
        "index": {
          "description": "Interface to ISMOTORREADY command which determine the state of motor is it currently executing command for example moving or is it ready to accept new commands Implements static pauses",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "isMotorReady",
          "normalized": "[OutputPort]-\u003eNXT[Bool]",
          "package": "NXT",
          "partial": "Motor Ready",
          "signature": "[OutputPort]-\u003eNXT[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:isMotorReady"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface to \u003ccode\u003eRESET_ERROR_CORRECTION\u003c/code\u003e command which can be used to reset the NXT brick's internal error correction mechanism (and\nmotor position information at the same time).\n\u003c/p\u003e\u003cp\u003eThe same thing can be achieved by using \u003ccode\u003e\u003ca\u003eresetMotorPosition\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eInternalPosition\u003c/a\u003e\u003c/code\u003e argument.\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "resetErrorCorrection",
          "package": "NXT",
          "signature": "[OutputPort] -\u003e NXT ()",
          "source": "src/Robotics-NXT-MotorControl.html#resetErrorCorrection",
          "type": "function"
        },
        "index": {
          "description": "Interface to RESET ERROR CORRECTION command which can be used to reset the NXT brick internal error correction mechanism and motor position information at the same time The same thing can be achieved by using resetMotorPosition with InternalPosition argument",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "resetErrorCorrection",
          "normalized": "[OutputPort]-\u003eNXT()",
          "package": "NXT",
          "partial": "Error Correction",
          "signature": "[OutputPort]-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:resetErrorCorrection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts \u003ccode\u003eMotorControl22.rxe\u003c/code\u003e program on the NXT brick. Program has to be uploaded/available on the NXT brick.\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "startMotorControlProgram",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-MotorControl.html#startMotorControlProgram",
          "type": "function"
        },
        "index": {
          "description": "Starts MotorControl22.rxe program on the NXT brick Program has to be uploaded available on the NXT brick",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "startMotorControlProgram",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Motor Control Program",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:startMotorControlProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops current running program on the NXT brick. Probably this means \u003ccode\u003eMotorControl22.rxe\u003c/code\u003e program on the NXT brick.\n\u003c/p\u003e",
          "module": "Robotics.NXT.MotorControl",
          "name": "stopMotorControlProgram",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-MotorControl.html#stopMotorControlProgram",
          "type": "function"
        },
        "index": {
          "description": "Stops current running program on the NXT brick Probably this means MotorControl22.rxe program on the NXT brick",
          "hierarchy": "Robotics NXT MotorControl",
          "module": "Robotics.NXT.MotorControl",
          "name": "stopMotorControlProgram",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Motor Control Program",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-MotorControl.html#v:stopMotorControlProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple message-based control of the NXT brick via remotely executed program. The main goal of this approach is to reduce latency\notherwise encountered when using NXT Bluetooth communication. Namely, changing the direction of communication takes around 30 ms.\nThis means that one cycle of requesting motor status, receiving data and then sending motor control update takes at least 60 ms (it\ntakes two changes of communication direction). And this is especially a problem if you want to control multiple motors at the same\ntime (and built-in synchronize mechanism is not good enough for you).\n\u003c/p\u003e\u003cp\u003eOne solution to this problem is that Bluetooth is used only for communication in one direction and an additional program on the NXT\nbrick is checking motor status and correcting possible errors. Of course this also means that information about motor position have\nto be obtained in some other way: by predicting from sent commands, or measuring/probing with regular NXT commands when there is time\nfor that (and latency at that time is not a problem), or by using some external sensors attached to the controlling computer and not\nto the NXT brick (camera tracking system for example).\n\u003c/p\u003e\u003cp\u003eUse NBC (\u003ca\u003ehttp://bricxcc.sourceforge.net/nbc/\u003c/a\u003e) to compile basic NXC code (\u003ccode\u003eremote.nxc\u003c/code\u003e) included with this module into \u003ccode\u003eremote.rxe\u003c/code\u003e\nNXT program (or use already compiled version) and then upload it with \u003ccode\u003enxt-upload\u003c/code\u003e program. This module will then run that program\nand sends it messages to control the NXT brick. Because commands will be executed and controlled directly on the NXT brick less\nlatency and more powerful control is possible.\n\u003c/p\u003e\u003cp\u003eCheck \u003ca\u003eRobotics.NXT.MotorControl\u003c/a\u003e for another (more precise but more complex) approach to message-based control. It would be great to\none day combine \u003ccode\u003eMotorControl\u003c/code\u003e's precision with API (especially interruptability) of \u003ccode\u003eremote.nxc\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Robotics.NXT.Remote",
          "name": "Remote",
          "package": "NXT",
          "source": "src/Robotics-NXT-Remote.html",
          "type": "module"
        },
        "index": {
          "description": "simple message-based control of the NXT brick via remotely executed program The main goal of this approach is to reduce latency otherwise encountered when using NXT Bluetooth communication Namely changing the direction of communication takes around ms This means that one cycle of requesting motor status receiving data and then sending motor control update takes at least ms it takes two changes of communication direction And this is especially problem if you want to control multiple motors at the same time and built-in synchronize mechanism is not good enough for you One solution to this problem is that Bluetooth is used only for communication in one direction and an additional program on the NXT brick is checking motor status and correcting possible errors Of course this also means that information about motor position have to be obtained in some other way by predicting from sent commands or measuring probing with regular NXT commands when there is time for that and latency at that time is not problem or by using some external sensors attached to the controlling computer and not to the NXT brick camera tracking system for example Use NBC http bricxcc.sourceforge.net nbc to compile basic NXC code remote.nxc included with this module into remote.rxe NXT program or use already compiled version and then upload it with nxt-upload program This module will then run that program and sends it messages to control the NXT brick Because commands will be executed and controlled directly on the NXT brick less latency and more powerful control is possible Check Robotics.NXT.MotorControl for another more precise but more complex approach to message-based control It would be great to one day combine MotorControl precision with API especially interruptability of remote.nxc",
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "Remote",
          "package": "NXT",
          "partial": "Remote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT.Remote",
          "name": "RemoteCommand",
          "package": "NXT",
          "source": "src/Robotics-NXT-Remote.html#RemoteCommand",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "RemoteCommand",
          "package": "NXT",
          "partial": "Remote Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#t:RemoteCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT.Remote",
          "name": "RemoteCommandType",
          "package": "NXT",
          "source": "src/Robotics-NXT-Remote.html#RemoteCommandType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "RemoteCommandType",
          "package": "NXT",
          "partial": "Remote Command Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#t:RemoteCommandType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove specified motors for a given number of degrees at a given speed.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Remote",
          "name": "MoveFor",
          "package": "NXT",
          "signature": "MoveFor OutputPower TachoLimit",
          "source": "src/Robotics-NXT-Remote.html#RemoteCommandType",
          "type": "function"
        },
        "index": {
          "description": "Move specified motors for given number of degrees at given speed",
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "MoveFor",
          "package": "NXT",
          "partial": "Move For",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:MoveFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type of remote command for specified output port(s).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Remote",
          "name": "RemoteCommand",
          "package": "NXT",
          "signature": "RemoteCommand [OutputPort] RemoteCommandType",
          "source": "src/Robotics-NXT-Remote.html#RemoteCommand",
          "type": "function"
        },
        "index": {
          "description": "Data type of remote command for specified output port",
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "RemoteCommand",
          "normalized": "RemoteCommand[OutputPort]RemoteCommandType",
          "package": "NXT",
          "partial": "Remote Command",
          "signature": "RemoteCommand[OutputPort]RemoteCommandType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:RemoteCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet specified motors' position to a given offset in degrees from a zero position (it is assumed\n that motors are at zero position at \u003ccode\u003eremote.rxe\u003c/code\u003e program start, you can use \u003ccode\u003e\u003ca\u003eresetMotorPosition\u003c/a\u003e\u003c/code\u003e\n to assure that, but probably not needed as the NXT brick resets things at program start) at a given speed.\n Probably not a good idea to mix \u003ccode\u003e\u003ca\u003eSetTo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMoveFor\u003c/a\u003e\u003c/code\u003e on the same motor as \u003ccode\u003e\u003ca\u003eMoveFor\u003c/a\u003e\u003c/code\u003e resets\n position.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Remote",
          "name": "SetTo",
          "package": "NXT",
          "signature": "SetTo OutputPower TachoCount",
          "source": "src/Robotics-NXT-Remote.html#RemoteCommandType",
          "type": "function"
        },
        "index": {
          "description": "Set specified motors position to given offset in degrees from zero position it is assumed that motors are at zero position at remote.rxe program start you can use resetMotorPosition to assure that but probably not needed as the NXT brick resets things at program start at given speed Probably not good idea to mix SetTo and MoveFor on the same motor as MoveFor resets position",
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "SetTo",
          "package": "NXT",
          "partial": "Set To",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:SetTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a command to the \u003ccode\u003eremote.rxe\u003c/code\u003e program. Commands can be interrupted (or supplemented, for other motors) immediately by a next command.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Remote",
          "name": "sendRemoteCommand",
          "package": "NXT",
          "signature": "RemoteCommand -\u003e NXT ()",
          "source": "src/Robotics-NXT-Remote.html#sendRemoteCommand",
          "type": "function"
        },
        "index": {
          "description": "Sends command to the remote.rxe program Commands can be interrupted or supplemented for other motors immediately by next command",
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "sendRemoteCommand",
          "normalized": "RemoteCommand-\u003eNXT()",
          "package": "NXT",
          "partial": "Remote Command",
          "signature": "RemoteCommand-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:sendRemoteCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts \u003ccode\u003eremote.rxe\u003c/code\u003e program on the NXT brick. Program has to be uploaded/available on the NXT brick.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Remote",
          "name": "startRemoteProgram",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Remote.html#startRemoteProgram",
          "type": "function"
        },
        "index": {
          "description": "Starts remote.rxe program on the NXT brick Program has to be uploaded available on the NXT brick",
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "startRemoteProgram",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Remote Program",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:startRemoteProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops current running program on the NXT brick. Probably this means \u003ccode\u003eremote.rxe\u003c/code\u003e program on the NXT brick.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Remote",
          "name": "stopRemoteProgram",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Remote.html#stopRemoteProgram",
          "type": "function"
        },
        "index": {
          "description": "Stops current running program on the NXT brick Probably this means remote.rxe program on the NXT brick",
          "hierarchy": "Robotics NXT Remote",
          "module": "Robotics.NXT.Remote",
          "name": "stopRemoteProgram",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Remote Program",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Remote.html#v:stopRemoteProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an interface to \u003ccode\u003eCMPS-Nx\u003c/code\u003e digital compass sensor from \u003ca\u003ehttp://www.mindsensors.com/\u003c/a\u003e according to\n\u003ccode\u003eCMPS-Nx-V20-User-Guide.pdf\u003c/code\u003e documentation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "Compass",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Compass.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an interface to CMPS-Nx digital compass sensor from http www.mindsensors.com according to CMPS-Nx-V20-User-Guide.pdf documentation",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "Compass",
          "package": "NXT",
          "partial": "Compass",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "Mode",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "Mode",
          "package": "NXT",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutoTrig (continuous measuring) off.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "AutoTrigOff",
          "package": "NXT",
          "signature": "AutoTrigOff",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "AutoTrig continuous measuring off",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "AutoTrigOff",
          "package": "NXT",
          "partial": "Auto Trig Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:AutoTrigOff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutoTrig (continuous measuring) on.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "AutoTrigOn",
          "package": "NXT",
          "signature": "AutoTrigOn",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "AutoTrig continuous measuring on",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "AutoTrigOn",
          "package": "NXT",
          "partial": "Auto Trig On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:AutoTrigOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin calibration mode.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "BeginCalibration",
          "package": "NXT",
          "signature": "BeginCalibration",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Begin calibration mode",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "BeginCalibration",
          "package": "NXT",
          "partial": "Begin Calibration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:BeginCalibration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd calibration mode.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "EndCalibration",
          "package": "NXT",
          "signature": "EndCalibration",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "End calibration mode",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "EndCalibration",
          "package": "NXT",
          "partial": "End Calibration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:EndCalibration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSampling frequency 50 Hz (Europe standard).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "Frequency50",
          "package": "NXT",
          "signature": "Frequency50",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Sampling frequency Hz Europe standard",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "Frequency50",
          "package": "NXT",
          "partial": "Frequency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:Frequency50"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSampling frequency 60 Hz (USA standard).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "Frequency60",
          "package": "NXT",
          "signature": "Frequency60",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Sampling frequency Hz USA standard",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "Frequency60",
          "package": "NXT",
          "partial": "Frequency",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:Frequency60"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult is a byte mapped to [0-255).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "ResultByte",
          "package": "NXT",
          "signature": "ResultByte",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Result is byte mapped to",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "ResultByte",
          "package": "NXT",
          "partial": "Result Byte",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:ResultByte"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult is an integer mapped to [0-3600).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "ResultInteger",
          "package": "NXT",
          "signature": "ResultInteger",
          "source": "src/Robotics-NXT-Sensor-Compass.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Result is an integer mapped to",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "ResultInteger",
          "package": "NXT",
          "partial": "Result Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:ResultInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads device ID string (\u003ccode\u003eCMPS\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csGetDeviceID",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT String",
          "source": "src/Robotics-NXT-Sensor-Compass.html#csGetDeviceID",
          "type": "function"
        },
        "index": {
          "description": "Reads device ID string CMPS",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csGetDeviceID",
          "normalized": "InputPort-\u003eNXT String",
          "package": "NXT",
          "partial": "Get Device ID",
          "signature": "InputPort-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csGetDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets last measurement. Based on current \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e it return value in [0-255) (\u003ccode\u003e\u003ca\u003eResultByte\u003c/a\u003e\u003c/code\u003e mode) or [0-3600) (\u003ccode\u003e\u003ca\u003eResultInteger\u003c/a\u003e\u003c/code\u003e mode) range.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csGetMeasurement",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT Measurement",
          "source": "src/Robotics-NXT-Sensor-Compass.html#csGetMeasurement",
          "type": "function"
        },
        "index": {
          "description": "Gets last measurement Based on current Mode it return value in ResultByte mode or ResultInteger mode range",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csGetMeasurement",
          "normalized": "InputPort-\u003eNXT Measurement",
          "package": "NXT",
          "partial": "Get Measurement",
          "signature": "InputPort-\u003eNXT Measurement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csGetMeasurement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads vendor ID string (\u003ccode\u003emndsnsrs\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csGetVendorID",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT String",
          "source": "src/Robotics-NXT-Sensor-Compass.html#csGetVendorID",
          "type": "function"
        },
        "index": {
          "description": "Reads vendor ID string mndsnsrs",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csGetVendorID",
          "normalized": "InputPort-\u003eNXT String",
          "package": "NXT",
          "partial": "Get Vendor ID",
          "signature": "InputPort-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csGetVendorID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads software version string (\u003ccode\u003eV2.00\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csGetVersion",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT String",
          "source": "src/Robotics-NXT-Sensor-Compass.html#csGetVersion",
          "type": "function"
        },
        "index": {
          "description": "Reads software version string V2.00",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csGetVersion",
          "normalized": "InputPort-\u003eNXT String",
          "package": "NXT",
          "partial": "Get Version",
          "signature": "InputPort-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csGetVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes sensor on the given input port. It sets \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eResultInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csInit",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT ()",
          "source": "src/Robotics-NXT-Sensor-Compass.html#csInit",
          "type": "function"
        },
        "index": {
          "description": "Initializes sensor on the given input port It sets Mode to ResultInteger",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csInit",
          "normalized": "InputPort-\u003eNXT()",
          "package": "NXT",
          "partial": "Init",
          "signature": "InputPort-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets current mode of operation.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csSetMode",
          "package": "NXT",
          "signature": "InputPort -\u003e Mode -\u003e NXT ()",
          "source": "src/Robotics-NXT-Sensor-Compass.html#csSetMode",
          "type": "function"
        },
        "index": {
          "description": "Sets current mode of operation",
          "hierarchy": "Robotics NXT Sensor Compass",
          "module": "Robotics.NXT.Sensor.Compass",
          "name": "csSetMode",
          "normalized": "InputPort-\u003eMode-\u003eNXT()",
          "package": "NXT",
          "partial": "Set Mode",
          "signature": "InputPort-\u003eMode-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Compass.html#v:csSetMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an interface to a digital ultrasonic sensor of the NXT kit.\n\u003c/p\u003e\u003cp\u003eI2C communication with ultrasonics sensor is described in Lego Mindstorms NXT Hardware Developer Kit,\nAppendix 7 - Ultrasonic sensor I2C communication protocol.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "Ultrasonic",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an interface to digital ultrasonic sensor of the NXT kit I2C communication with ultrasonics sensor is described in Lego Mindstorms NXT Hardware Developer Kit Appendix Ultrasonic sensor I2C communication protocol",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "Ultrasonic",
          "package": "NXT",
          "partial": "Ultrasonic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of a continuous measurement interval value. This seems to be in the range 1-15.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "ContinuousInterval",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#ContinuousInterval",
          "type": "type"
        },
        "index": {
          "description": "Type of continuous measurement interval value This seems to be in the range",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "ContinuousInterval",
          "package": "NXT",
          "partial": "Continuous Interval",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:ContinuousInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of a measurement number. Sensor stores measurements (distances) for the first 8 echoes (numbered 0-7) it receives\nin \u003ccode\u003e\u003ca\u003eSingleShot\u003c/a\u003e\u003c/code\u003e mode. For \u003ccode\u003e\u003ca\u003eContinuousMeasurement\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eEventCapture\u003c/a\u003e\u003c/code\u003e modes use first (0) measurement (distance) number.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "MeasurementNumber",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#MeasurementNumber",
          "type": "type"
        },
        "index": {
          "description": "Type of measurement number Sensor stores measurements distances for the first echoes numbered it receives in SingleShot mode For ContinuousMeasurement and EventCapture modes use first measurement distance number",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "MeasurementNumber",
          "package": "NXT",
          "partial": "Measurement Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:MeasurementNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "Mode",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "Mode",
          "package": "NXT",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of a scale divisor value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "ScaleDivisor",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#ScaleDivisor",
          "type": "type"
        },
        "index": {
          "description": "Type of scale divisor value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "ScaleDivisor",
          "package": "NXT",
          "partial": "Scale Divisor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:ScaleDivisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of a scale factor value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "ScaleFactor",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#ScaleFactor",
          "type": "type"
        },
        "index": {
          "description": "Type of scale factor value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "ScaleFactor",
          "package": "NXT",
          "partial": "Scale Factor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:ScaleFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of a zero value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "Zero",
          "package": "NXT",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Zero",
          "type": "type"
        },
        "index": {
          "description": "Type of zero value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "Zero",
          "package": "NXT",
          "partial": "Zero",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#t:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn this mode the sensor continuously makes new measurement with the specific interval. This is the default mode. \n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "ContinuousMeasurement",
          "package": "NXT",
          "signature": "ContinuousMeasurement",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "In this mode the sensor continuously makes new measurement with the specific interval This is the default mode",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "ContinuousMeasurement",
          "package": "NXT",
          "partial": "Continuous Measurement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:ContinuousMeasurement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWithin this mode the sensor will measure whether any other ultrasonic sensors are within the vicinity.\n With this information a program can evaluate when it is best to make a new measurement which will not conflict with other ultrasonic sensors.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "EventCapture",
          "package": "NXT",
          "signature": "EventCapture",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Within this mode the sensor will measure whether any other ultrasonic sensors are within the vicinity With this information program can evaluate when it is best to make new measurement which will not conflict with other ultrasonic sensors",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "EventCapture",
          "package": "NXT",
          "partial": "Event Capture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:EventCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns sensor off.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "Off",
          "package": "NXT",
          "signature": "Off",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Turns sensor off",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "Off",
          "package": "NXT",
          "partial": "Off",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:Off"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn this mode ultrasonic sensor only makes a new measurement every time this mode is set.\n The sensor measures distances for up to 8 objects (8 first echoes) which can be retrieved with \u003ccode\u003e\u003ca\u003eusGetMeasurement\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "SingleShot",
          "package": "NXT",
          "signature": "SingleShot",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "In this mode ultrasonic sensor only makes new measurement every time this mode is set The sensor measures distances for up to objects first echoes which can be retrieved with usGetMeasurement",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "SingleShot",
          "package": "NXT",
          "partial": "Single Shot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:SingleShot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequests warm reset.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "WarmReset",
          "package": "NXT",
          "signature": "WarmReset",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Requests warm reset",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "WarmReset",
          "package": "NXT",
          "partial": "Warm Reset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:WarmReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets current (actual) scale divisor value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetActualScaleDivisor",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT ScaleDivisor",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetActualScaleDivisor",
          "type": "function"
        },
        "index": {
          "description": "Gets current actual scale divisor value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetActualScaleDivisor",
          "normalized": "InputPort-\u003eNXT ScaleDivisor",
          "package": "NXT",
          "partial": "Get Actual Scale Divisor",
          "signature": "InputPort-\u003eNXT ScaleDivisor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetActualScaleDivisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets current (actual) scale factor value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetActualScaleFactor",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT ScaleFactor",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetActualScaleFactor",
          "type": "function"
        },
        "index": {
          "description": "Gets current actual scale factor value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetActualScaleFactor",
          "normalized": "InputPort-\u003eNXT ScaleFactor",
          "package": "NXT",
          "partial": "Get Actual Scale Factor",
          "signature": "InputPort-\u003eNXT ScaleFactor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetActualScaleFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets current (actual) zero value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetActualZero",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT Zero",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetActualZero",
          "type": "function"
        },
        "index": {
          "description": "Gets current actual zero value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetActualZero",
          "normalized": "InputPort-\u003eNXT Zero",
          "package": "NXT",
          "partial": "Get Actual Zero",
          "signature": "InputPort-\u003eNXT Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetActualZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function which gets all measurements available in order (closer first).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetAllMeasurements",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT [Measurement]",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetAllMeasurements",
          "type": "function"
        },
        "index": {
          "description": "Helper function which gets all measurements available in order closer first",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetAllMeasurements",
          "normalized": "InputPort-\u003eNXT[Measurement]",
          "package": "NXT",
          "partial": "Get All Measurements",
          "signature": "InputPort-\u003eNXT[Measurement]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetAllMeasurements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets current continuous measurement interval value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetContinuousInterval",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT ContinuousInterval",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetContinuousInterval",
          "type": "function"
        },
        "index": {
          "description": "Gets current continuous measurement interval value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetContinuousInterval",
          "normalized": "InputPort-\u003eNXT ContinuousInterval",
          "package": "NXT",
          "partial": "Get Continuous Interval",
          "signature": "InputPort-\u003eNXT ContinuousInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetContinuousInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads device ID string (\u003ccode\u003eSonar\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetDeviceID",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT String",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetDeviceID",
          "type": "function"
        },
        "index": {
          "description": "Reads device ID string Sonar",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetDeviceID",
          "normalized": "InputPort-\u003eNXT String",
          "package": "NXT",
          "partial": "Get Device ID",
          "signature": "InputPort-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads factory scale divisor value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetFactoryScaleDivisor",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT ScaleDivisor",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetFactoryScaleDivisor",
          "type": "function"
        },
        "index": {
          "description": "Reads factory scale divisor value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetFactoryScaleDivisor",
          "normalized": "InputPort-\u003eNXT ScaleDivisor",
          "package": "NXT",
          "partial": "Get Factory Scale Divisor",
          "signature": "InputPort-\u003eNXT ScaleDivisor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetFactoryScaleDivisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads factory scale factor value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetFactoryScaleFactor",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT ScaleFactor",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetFactoryScaleFactor",
          "type": "function"
        },
        "index": {
          "description": "Reads factory scale factor value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetFactoryScaleFactor",
          "normalized": "InputPort-\u003eNXT ScaleFactor",
          "package": "NXT",
          "partial": "Get Factory Scale Factor",
          "signature": "InputPort-\u003eNXT ScaleFactor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetFactoryScaleFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads factory zero value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetFactoryZero",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT Zero",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetFactoryZero",
          "type": "function"
        },
        "index": {
          "description": "Reads factory zero value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetFactoryZero",
          "normalized": "InputPort-\u003eNXT Zero",
          "package": "NXT",
          "partial": "Get Factory Zero",
          "signature": "InputPort-\u003eNXT Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetFactoryZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets last measurement for a given measurement number based on the current mode. To retrieve new \u003ccode\u003e\u003ca\u003eSingleShot\u003c/a\u003e\u003c/code\u003e measurements first\nuse \u003ccode\u003e\u003ca\u003eusSetMode\u003c/a\u003e\u003c/code\u003e (with \u003ccode\u003e\u003ca\u003eSingleShot\u003c/a\u003e\u003c/code\u003e as an argument) to send new ultrasonic ping and after approximately 20ms read the results. (Change\nof NXT Bluetooth communication direction takes around 30 ms.) In \u003ccode\u003e\u003ca\u003eContinuousMeasurement\u003c/a\u003e\u003c/code\u003e mode new measurements are made automatically\nbased on the continuous measurement interval value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetMeasurement",
          "package": "NXT",
          "signature": "InputPort -\u003e MeasurementNumber -\u003e NXT (Maybe Measurement)",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetMeasurement",
          "type": "function"
        },
        "index": {
          "description": "Gets last measurement for given measurement number based on the current mode To retrieve new SingleShot measurements first use usSetMode with SingleShot as an argument to send new ultrasonic ping and after approximately ms read the results Change of NXT Bluetooth communication direction takes around ms In ContinuousMeasurement mode new measurements are made automatically based on the continuous measurement interval value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetMeasurement",
          "normalized": "InputPort-\u003eMeasurementNumber-\u003eNXT(Maybe Measurement)",
          "package": "NXT",
          "partial": "Get Measurement",
          "signature": "InputPort-\u003eMeasurementNumber-\u003eNXT(Maybe Measurement)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetMeasurement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads measurement units string (\u003ccode\u003e10E-2m\u003c/code\u003e, a centimeter).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetMeasurementUnits",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT String",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetMeasurementUnits",
          "type": "function"
        },
        "index": {
          "description": "Reads measurement units string E-2m centimeter",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetMeasurementUnits",
          "normalized": "InputPort-\u003eNXT String",
          "package": "NXT",
          "partial": "Get Measurement Units",
          "signature": "InputPort-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetMeasurementUnits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets current mode of operation.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetMode",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT Mode",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetMode",
          "type": "function"
        },
        "index": {
          "description": "Gets current mode of operation",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetMode",
          "normalized": "InputPort-\u003eNXT Mode",
          "package": "NXT",
          "partial": "Get Mode",
          "signature": "InputPort-\u003eNXT Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads vendor ID string (\u003ccode\u003eLEGO\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetVendorID",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT String",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetVendorID",
          "type": "function"
        },
        "index": {
          "description": "Reads vendor ID string LEGO",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetVendorID",
          "normalized": "InputPort-\u003eNXT String",
          "package": "NXT",
          "partial": "Get Vendor ID",
          "signature": "InputPort-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetVendorID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads software version string (\u003ccode\u003eV1.0\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetVersion",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT String",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usGetVersion",
          "type": "function"
        },
        "index": {
          "description": "Reads software version string V1.0",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usGetVersion",
          "normalized": "InputPort-\u003eNXT String",
          "package": "NXT",
          "partial": "Get Version",
          "signature": "InputPort-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usGetVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitializes sensor on the given input port. Default is \u003ccode\u003e\u003ca\u003eContinuousMeasurement\u003c/a\u003e\u003c/code\u003e mode.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usInit",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT ()",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usInit",
          "type": "function"
        },
        "index": {
          "description": "Initializes sensor on the given input port Default is ContinuousMeasurement mode",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usInit",
          "normalized": "InputPort-\u003eNXT()",
          "package": "NXT",
          "partial": "Init",
          "signature": "InputPort-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets current (actual) scale divisor value. This is used to calibrate sensor.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetActualScaleDivisor",
          "package": "NXT",
          "signature": "InputPort -\u003e ScaleDivisor -\u003e NXT ()",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetActualScaleDivisor",
          "type": "function"
        },
        "index": {
          "description": "Sets current actual scale divisor value This is used to calibrate sensor",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetActualScaleDivisor",
          "normalized": "InputPort-\u003eScaleDivisor-\u003eNXT()",
          "package": "NXT",
          "partial": "Set Actual Scale Divisor",
          "signature": "InputPort-\u003eScaleDivisor-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetActualScaleDivisor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets current (actual) scale factor value. This is used to calibrate sensor.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetActualScaleFactor",
          "package": "NXT",
          "signature": "InputPort -\u003e ScaleFactor -\u003e NXT ()",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetActualScaleFactor",
          "type": "function"
        },
        "index": {
          "description": "Sets current actual scale factor value This is used to calibrate sensor",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetActualScaleFactor",
          "normalized": "InputPort-\u003eScaleFactor-\u003eNXT()",
          "package": "NXT",
          "partial": "Set Actual Scale Factor",
          "signature": "InputPort-\u003eScaleFactor-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetActualScaleFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets current (actual) zero value. This is used to calibrate sensor.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetActualZero",
          "package": "NXT",
          "signature": "InputPort -\u003e Zero -\u003e NXT ()",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetActualZero",
          "type": "function"
        },
        "index": {
          "description": "Sets current actual zero value This is used to calibrate sensor",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetActualZero",
          "normalized": "InputPort-\u003eZero-\u003eNXT()",
          "package": "NXT",
          "partial": "Set Actual Zero",
          "signature": "InputPort-\u003eZero-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetActualZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets current continuous measurement interval value.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetContinuousInterval",
          "package": "NXT",
          "signature": "InputPort -\u003e ContinuousInterval -\u003e NXT ()",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetContinuousInterval",
          "type": "function"
        },
        "index": {
          "description": "Sets current continuous measurement interval value",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetContinuousInterval",
          "normalized": "InputPort-\u003eContinuousInterval-\u003eNXT()",
          "package": "NXT",
          "partial": "Set Continuous Interval",
          "signature": "InputPort-\u003eContinuousInterval-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetContinuousInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets current mode of operation.\n\u003c/p\u003e",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetMode",
          "package": "NXT",
          "signature": "InputPort -\u003e Mode -\u003e NXT ()",
          "source": "src/Robotics-NXT-Sensor-Ultrasonic.html#usSetMode",
          "type": "function"
        },
        "index": {
          "description": "Sets current mode of operation",
          "hierarchy": "Robotics NXT Sensor Ultrasonic",
          "module": "Robotics.NXT.Sensor.Ultrasonic",
          "name": "usSetMode",
          "normalized": "InputPort-\u003eMode-\u003eNXT()",
          "package": "NXT",
          "partial": "Set Mode",
          "signature": "InputPort-\u003eMode-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT-Sensor-Ultrasonic.html#v:usSetMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines an interface over Bluetooth to a NXT brick as defined in Lego Mindstorms NXT Bluetooth Developer Kit,\nAppendix 1 - Communication protocol and Appendix 2 - Direct commands. It also defines some additional functions not available\ndirectly otherwise.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Robotics.NXT",
          "name": "NXT",
          "package": "NXT",
          "source": "src/Robotics-NXT.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines an interface over Bluetooth to NXT brick as defined in Lego Mindstorms NXT Bluetooth Developer Kit Appendix Communication protocol and Appendix Direct commands It also defines some additional functions not available directly otherwise",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "NXT",
          "package": "NXT",
          "partial": "NXT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBluetooth address of the NXT brick in the string format.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "BTAddress",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#BTAddress",
          "type": "type"
        },
        "index": {
          "description": "Bluetooth address of the NXT brick in the string format",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "BTAddress",
          "package": "NXT",
          "partial": "BTAddress",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:BTAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrength of the Bluetooth signal. Not implemented in current NXT firmware versions. Use \u003ccode\u003ebluetoothRSSI\u003c/code\u003e or \u003ccode\u003ebluetoothLinkQuality\u003c/code\u003e as an alternative.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "BTStrength",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#BTStrength",
          "type": "type"
        },
        "index": {
          "description": "Strength of the Bluetooth signal Not implemented in current NXT firmware versions Use bluetoothRSSI or bluetoothLinkQuality as an alternative",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "BTStrength",
          "package": "NXT",
          "partial": "BTStrength",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:BTStrength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock-relative position counter. Current position relative to the last programmed movement.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "BlockTachoCount",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#BlockTachoCount",
          "type": "type"
        },
        "index": {
          "description": "Block-relative position counter Current position relative to the last programmed movement",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "BlockTachoCount",
          "package": "NXT",
          "partial": "Block Tacho Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:BlockTachoCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if calibration file found and used for \u003ccode\u003e\u003ca\u003eCalibratedValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Calibrated",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Calibrated",
          "type": "type"
        },
        "index": {
          "description": "True if calibration file found and used for CalibratedValue",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Calibrated",
          "package": "NXT",
          "partial": "Calibrated",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Calibrated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValue scaled according to calibration. Unused in current NXT firmware versions.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "CalibratedValue",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#CalibratedValue",
          "type": "type"
        },
        "index": {
          "description": "Value scaled according to calibration Unused in current NXT firmware versions",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "CalibratedValue",
          "package": "NXT",
          "partial": "Calibrated Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:CalibratedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI2C device command.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Command",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Command",
          "type": "type"
        },
        "index": {
          "description": "I2C device command",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Command",
          "package": "NXT",
          "partial": "Command",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddress of the device (sensor) on the I2C bus.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "DeviceAddress",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#DeviceAddress",
          "type": "type"
        },
        "index": {
          "description": "Address of the device sensor on the I2C bus",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "DeviceAddress",
          "package": "NXT",
          "partial": "Device Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:DeviceAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "DeviceInfo",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#DeviceInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "DeviceInfo",
          "package": "NXT",
          "partial": "Device Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:DeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime duration (in seconds).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Duration",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Duration",
          "type": "type"
        },
        "index": {
          "description": "Time duration in seconds",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Duration",
          "package": "NXT",
          "partial": "Duration",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Duration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "FileData",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#FileData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "FileData",
          "package": "NXT",
          "partial": "File Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle of the opened file on the NXT brick filesystem.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "FileHandle",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#FileHandle",
          "type": "type"
        },
        "index": {
          "description": "Handle of the opened file on the NXT brick filesystem",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "FileHandle",
          "package": "NXT",
          "partial": "File Handle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FileHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilename of the file on the NXT brick filesystem. In 15.3 format.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "FileName",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#FileName",
          "type": "type"
        },
        "index": {
          "description": "Filename of the file on the NXT brick filesystem In format",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "FileName",
          "package": "NXT",
          "partial": "File Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the file on the NXT brick filesystem.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "FileSize",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#FileSize",
          "type": "type"
        },
        "index": {
          "description": "Size of the file on the NXT brick filesystem",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "FileSize",
          "package": "NXT",
          "partial": "File Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "FirmwareVersion",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#FirmwareVersion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "FirmwareVersion",
          "package": "NXT",
          "partial": "Firmware Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FirmwareVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree flash space on the NXT brick (in bytes).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "FlashFree",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#FlashFree",
          "type": "type"
        },
        "index": {
          "description": "Free flash space on the NXT brick in bytes",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "FlashFree",
          "package": "NXT",
          "partial": "Flash Free",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:FlashFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrequency of the played tone (in hertz).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Frequency",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Frequency",
          "type": "type"
        },
        "index": {
          "description": "Frequency of the played tone in hertz",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Frequency",
          "package": "NXT",
          "partial": "Frequency",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Frequency"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "IOMapData",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#IOMapData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "IOMapData",
          "package": "NXT",
          "partial": "IOMap Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:IOMapData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "IOMapLength",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#IOMapLength",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "IOMapLength",
          "package": "NXT",
          "partial": "IOMap Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:IOMapLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "IOMapOffset",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#IOMapOffset",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "IOMapOffset",
          "package": "NXT",
          "partial": "IOMap Offset",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:IOMapOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInbox on the NXT brick into which the host (computer) queues messages for the program running there.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Inbox",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "data"
        },
        "index": {
          "description": "Inbox on the NXT brick into which the host computer queues messages for the program running there",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox",
          "package": "NXT",
          "partial": "Inbox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Inbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "InputPort",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#InputPort",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "InputPort",
          "package": "NXT",
          "partial": "Input Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:InputPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "InputValue",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#InputValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "InputValue",
          "package": "NXT",
          "partial": "Input Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:InputValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoop playback of the sound file?\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "LoopPlayback",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#LoopPlayback",
          "type": "type"
        },
        "index": {
          "description": "Loop playback of the sound file",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "LoopPlayback",
          "package": "NXT",
          "partial": "Loop Playback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:LoopPlayback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Major",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Major",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Major",
          "package": "NXT",
          "partial": "Major",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Major"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eI2C device measurement value.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Measurement",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Measurement",
          "type": "type"
        },
        "index": {
          "description": "I2C device measurement value",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Measurement",
          "package": "NXT",
          "partial": "Measurement",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Measurement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Minor",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Minor",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Minor",
          "package": "NXT",
          "partial": "Minor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Minor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle for traversing of modules. Only one module handle can be opened at a time so be careful to close them when not\n needed anymore.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "ModuleHandle",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#ModuleHandle",
          "type": "type"
        },
        "index": {
          "description": "Handle for traversing of modules Only one module handle can be opened at time so be careful to close them when not needed anymore",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ModuleHandle",
          "package": "NXT",
          "partial": "Module Handle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "ModuleID",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#ModuleID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ModuleID",
          "package": "NXT",
          "partial": "Module ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "ModuleIOMapSize",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#ModuleIOMapSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ModuleIOMapSize",
          "package": "NXT",
          "partial": "Module IOMap Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleIOMapSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the IO map module information.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "ModuleInfo",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#ModuleInfo",
          "type": "data"
        },
        "index": {
          "description": "Type of the IO map module information",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ModuleInfo",
          "package": "NXT",
          "partial": "Module Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModule name extension is \u003ccode\u003e.mod\u003c/code\u003e. For some functions this can be also a wild card.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "ModuleName",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#ModuleName",
          "type": "type"
        },
        "index": {
          "description": "Module name extension is mod For some functions this can be also wild card",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ModuleName",
          "package": "NXT",
          "partial": "Module Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "ModuleSize",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#ModuleSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ModuleSize",
          "package": "NXT",
          "partial": "Module Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ModuleSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "MotorReset",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#MotorReset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "MotorReset",
          "package": "NXT",
          "partial": "Motor Reset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:MotorReset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad which encompasses interface to the NXT brick.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "NXT",
          "package": "NXT",
          "source": "src/Robotics-NXT-Internals.html#NXT",
          "type": "data"
        },
        "index": {
          "description": "Monad which encompasses interface to the NXT brick",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "NXT",
          "package": "NXT",
          "partial": "NXT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:NXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException for NXT interface errors. Currently only one exception is defined which takes textual description as an argument.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "NXTException",
          "package": "NXT",
          "source": "src/Robotics-NXT-Errors.html#NXTException",
          "type": "data"
        },
        "index": {
          "description": "Exception for NXT interface errors Currently only one exception is defined which takes textual description as an argument",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "NXTException",
          "package": "NXT",
          "partial": "NXTException",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:NXTException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA token used for exposed internal functions.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "NXTInternals",
          "package": "NXT",
          "source": "src/Robotics-NXT-Internals.html#NXTInternals",
          "type": "data"
        },
        "index": {
          "description": "token used for exposed internal functions",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "NXTInternals",
          "package": "NXT",
          "partial": "NXTInternals",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:NXTInternals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the NXT brick.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Name",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Name",
          "type": "type"
        },
        "index": {
          "description": "Name of the NXT brick",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Name",
          "package": "NXT",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalized A/D value. Type dependent. In [0, 1023] range.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "NormalizedADValue",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#NormalizedADValue",
          "type": "type"
        },
        "index": {
          "description": "Normalized value Type dependent In range",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "NormalizedADValue",
          "package": "NXT",
          "partial": "Normalized ADValue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:NormalizedADValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "OutputMode",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#OutputMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "OutputMode",
          "package": "NXT",
          "partial": "Output Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:OutputMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "OutputPort",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#OutputPort",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "OutputPort",
          "package": "NXT",
          "partial": "Output Port",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:OutputPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePower and direction. In [-100, 100] range.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "OutputPower",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#OutputPower",
          "type": "type"
        },
        "index": {
          "description": "Power and direction In range",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "OutputPower",
          "package": "NXT",
          "partial": "Output Power",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:OutputPower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "OutputState",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#OutputState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "OutputState",
          "package": "NXT",
          "partial": "Output State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:OutputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "ProtocolVersion",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#ProtocolVersion",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ProtocolVersion",
          "package": "NXT",
          "partial": "Protocol Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ProtocolVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw A/D value. Device dependent.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RawADValue",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#RawADValue",
          "type": "type"
        },
        "index": {
          "description": "Raw value Device dependent",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RawADValue",
          "package": "NXT",
          "partial": "Raw ADValue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RawADValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RegulationMode",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#RegulationMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RegulationMode",
          "package": "NXT",
          "partial": "Regulation Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RegulationMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutbox on the NXT brick where the program running there queues messages for the host (computer).\n There is a convention that only \u003ccode\u003e\u003ca\u003eRemoteInbox10\u003c/a\u003e\u003c/code\u003e - \u003ccode\u003e\u003ca\u003eRemoteInbox19\u003c/a\u003e\u003c/code\u003e outboxes are used for this purpose so that lower ones can\n be used for inter-brick communication. But this convention is not really obeyed in practice.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RemoteInbox",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "data"
        },
        "index": {
          "description": "Outbox on the NXT brick where the program running there queues messages for the host computer There is convention that only RemoteInbox10 RemoteInbox19 outboxes are used for this purpose so that lower ones can be used for inter-brick communication But this convention is not really obeyed in practice",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RemoteInbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould the message be remove from the queue once received?\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RemoveMessage",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#RemoveMessage",
          "type": "type"
        },
        "index": {
          "description": "Should the message be remove from the queue once received",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoveMessage",
          "package": "NXT",
          "partial": "Remove Message",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RemoveMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram-relative position counter. Current position relative to the last reset of the rotation sensor for this motor.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RotationCount",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#RotationCount",
          "type": "type"
        },
        "index": {
          "description": "Program-relative position counter Current position relative to the last reset of the rotation sensor for this motor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RotationCount",
          "package": "NXT",
          "partial": "Rotation Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RotationCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RunState",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#RunState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RunState",
          "package": "NXT",
          "partial": "Run State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RunState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RxData",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#RxData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RxData",
          "package": "NXT",
          "partial": "Rx Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RxData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAt most 16 data bytes can be read at a time.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RxDataLength",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#RxDataLength",
          "type": "type"
        },
        "index": {
          "description": "At most data bytes can be read at time",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RxDataLength",
          "package": "NXT",
          "partial": "Rx Data Length",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:RxDataLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScaled value. Mode dependent. In percent.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "ScaledValue",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#ScaledValue",
          "type": "type"
        },
        "index": {
          "description": "Scaled value Mode dependent In percent",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ScaledValue",
          "package": "NXT",
          "partial": "Scaled Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:ScaledValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "SensorMode",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "SensorMode",
          "package": "NXT",
          "partial": "Sensor Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:SensorMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the sensor currently attached to \u003ccode\u003e\u003ca\u003eInputPort\u003c/a\u003e\u003c/code\u003e. \u003ccode\u003e\u003ca\u003eNoSensor\u003c/a\u003e\u003c/code\u003e turns off the sensor.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "SensorType",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "data"
        },
        "index": {
          "description": "Type of the sensor currently attached to InputPort NoSensor turns off the sensor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "SensorType",
          "package": "NXT",
          "partial": "Sensor Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:SensorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal (absolute) tacho counter. Number since the last reset of the motor tacho counter.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "TachoCount",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#TachoCount",
          "type": "type"
        },
        "index": {
          "description": "Internal absolute tacho counter Number since the last reset of the motor tacho counter",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "TachoCount",
          "package": "NXT",
          "partial": "Tacho Count",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TachoCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTarget tacho limit for a motor movement. 0 means no limit. It is an unsigned value (you select direction of motor movement with\n sign of \u003ccode\u003e\u003ca\u003eOutputPower\u003c/a\u003e\u003c/code\u003e value).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "TachoLimit",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#TachoLimit",
          "type": "type"
        },
        "index": {
          "description": "Target tacho limit for motor movement means no limit It is an unsigned value you select direction of motor movement with sign of OutputPower value",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "TachoLimit",
          "package": "NXT",
          "partial": "Tacho Limit",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TachoLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTimeout exception for NXT IO operations.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "TimeoutException",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#TimeoutException",
          "type": "data"
        },
        "index": {
          "description": "Timeout exception for NXT IO operations",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "TimeoutException",
          "package": "NXT",
          "partial": "Timeout Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TimeoutException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn regulated synced mode the difference between two motors. In [-100, 100] range.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "TurnRatio",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#TurnRatio",
          "type": "type"
        },
        "index": {
          "description": "In regulated synced mode the difference between two motors In range",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "TurnRatio",
          "package": "NXT",
          "partial": "Turn Ratio",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TurnRatio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "TxData",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#TxData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "TxData",
          "package": "NXT",
          "partial": "Tx Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:TxData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if new data value should be seen as valid data.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Valid",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Valid",
          "type": "type"
        },
        "index": {
          "description": "True if new data value should be seen as valid data",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Valid",
          "package": "NXT",
          "partial": "Valid",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Valid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe format of version is \"major.minor\". To format it use \u003ccode\u003e\u003ccode\u003eprintf\u003c/code\u003e \"%d.%02d\" major minor\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Version",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Version",
          "type": "data"
        },
        "index": {
          "description": "The format of version is major.minor To format it use printf major minor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Version",
          "package": "NXT",
          "partial": "Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVoltage value (in volts).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Voltage",
          "package": "NXT",
          "source": "src/Robotics-NXT-Externals.html#Voltage",
          "type": "type"
        },
        "index": {
          "description": "Voltage value in volts",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Voltage",
          "package": "NXT",
          "partial": "Voltage",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#t:Voltage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput port (motor) A.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "A",
          "package": "NXT",
          "signature": "A",
          "source": "src/Robotics-NXT-Externals.html#OutputPort",
          "type": "function"
        },
        "index": {
          "description": "Output port motor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "A",
          "package": "NXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:A"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets program-relative position counter (\u003ccode\u003e\u003ca\u003eRotationCount\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "AbsolutePosition",
          "package": "NXT",
          "signature": "AbsolutePosition",
          "source": "src/Robotics-NXT-Externals.html#MotorReset",
          "type": "function"
        },
        "index": {
          "description": "Resets program-relative position counter RotationCount",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "AbsolutePosition",
          "package": "NXT",
          "partial": "Absolute Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:AbsolutePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Angle",
          "package": "NXT",
          "signature": "Angle",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Angle",
          "package": "NXT",
          "partial": "Angle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Angle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReports scaled value as count of ticks on RCX-style rotation sensor.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "AngleStepsMode",
          "package": "NXT",
          "signature": "AngleStepsMode",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "function"
        },
        "index": {
          "description": "Reports scaled value as count of ticks on RCX-style rotation sensor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "AngleStepsMode",
          "package": "NXT",
          "partial": "Angle Steps Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:AngleStepsMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput port (motor) B.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "B",
          "package": "NXT",
          "signature": "B",
          "source": "src/Robotics-NXT-Externals.html#OutputPort",
          "type": "function"
        },
        "index": {
          "description": "Output port motor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "B",
          "package": "NXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReports scaled value as 1 true or 0 false, false if raw value \u003e 55% of total range, true if \u003c 45%.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "BooleanMode",
          "package": "NXT",
          "signature": "BooleanMode",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "function"
        },
        "index": {
          "description": "Reports scaled value as true or false false if raw value of total range true if",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "BooleanMode",
          "package": "NXT",
          "partial": "Boolean Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:BooleanMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVoltage is not allowed to float between PWM pulses, improves accuracy, uses more power.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Brake",
          "package": "NXT",
          "signature": "Brake",
          "source": "src/Robotics-NXT-Externals.html#OutputMode",
          "type": "function"
        },
        "index": {
          "description": "Voltage is not allowed to float between PWM pulses improves accuracy uses more power",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Brake",
          "package": "NXT",
          "partial": "Brake",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Brake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput port (motor) C.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "C",
          "package": "NXT",
          "signature": "C",
          "source": "src/Robotics-NXT-Externals.html#OutputPort",
          "type": "function"
        },
        "index": {
          "description": "Output port motor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "C",
          "package": "NXT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor reporting temperature in celsius.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "CelsiusMode",
          "package": "NXT",
          "signature": "CelsiusMode",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "function"
        },
        "index": {
          "description": "For reporting temperature in celsius",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "CelsiusMode",
          "package": "NXT",
          "partial": "Celsius Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:CelsiusMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Custom",
          "package": "NXT",
          "signature": "Custom",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Custom",
          "package": "NXT",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "DeviceInfo",
          "package": "NXT",
          "signature": "DeviceInfo Name BTAddress BTStrength FlashFree",
          "source": "src/Robotics-NXT-Externals.html#DeviceInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "DeviceInfo",
          "package": "NXT",
          "partial": "Device Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:DeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor reporting temperature in fahrenheit.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "FahrenheitMode",
          "package": "NXT",
          "signature": "FahrenheitMode",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "function"
        },
        "index": {
          "description": "For reporting temperature in fahrenheit",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "FahrenheitMode",
          "package": "NXT",
          "partial": "Fahrenheit Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:FahrenheitMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "FirmwareVersion",
          "package": "NXT",
          "signature": "FirmwareVersion Major Minor",
          "source": "src/Robotics-NXT-Externals.html#FirmwareVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "FirmwareVersion",
          "package": "NXT",
          "partial": "Firmware Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:FirmwareVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput port (sensor) 4.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Four",
          "package": "NXT",
          "signature": "Four",
          "source": "src/Robotics-NXT-Externals.html#InputPort",
          "type": "function"
        },
        "index": {
          "description": "Input port sensor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Four",
          "package": "NXT",
          "partial": "Four",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Four"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox0",
          "package": "NXT",
          "signature": "Inbox0",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox0",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox1",
          "package": "NXT",
          "signature": "Inbox1",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox1",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox2",
          "package": "NXT",
          "signature": "Inbox2",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox2",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox3",
          "package": "NXT",
          "signature": "Inbox3",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox3",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox4",
          "package": "NXT",
          "signature": "Inbox4",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox4",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox5",
          "package": "NXT",
          "signature": "Inbox5",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox5",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox6",
          "package": "NXT",
          "signature": "Inbox6",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox6",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox7",
          "package": "NXT",
          "signature": "Inbox7",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox7",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox8",
          "package": "NXT",
          "signature": "Inbox8",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox8",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Inbox9",
          "package": "NXT",
          "signature": "Inbox9",
          "source": "src/Robotics-NXT-Externals.html#Inbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Inbox9",
          "package": "NXT",
          "partial": "Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Inbox9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "InputValue",
          "package": "NXT",
          "signature": "InputValue InputPort Valid Calibrated SensorType SensorMode RawADValue NormalizedADValue ScaledValue CalibratedValue",
          "source": "src/Robotics-NXT-Externals.html#InputValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "InputValue",
          "package": "NXT",
          "partial": "Input Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:InputValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets internal movement counters (also \u003ccode\u003e\u003ca\u003eTachoCount\u003c/a\u003e\u003c/code\u003e), cancels current goal and resets internal error-correction system.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "InternalPosition",
          "package": "NXT",
          "signature": "InternalPosition",
          "source": "src/Robotics-NXT-Externals.html#MotorReset",
          "type": "function"
        },
        "index": {
          "description": "Resets internal movement counters also TachoCount cancels current goal and resets internal error-correction system",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "InternalPosition",
          "package": "NXT",
          "partial": "Internal Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:InternalPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "LightActive",
          "package": "NXT",
          "signature": "LightActive",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "LightActive",
          "package": "NXT",
          "partial": "Light Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:LightActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "LightInactive",
          "package": "NXT",
          "signature": "LightInactive",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "LightInactive",
          "package": "NXT",
          "partial": "Light Inactive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:LightInactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Lowspeed",
          "package": "NXT",
          "signature": "Lowspeed",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Lowspeed",
          "package": "NXT",
          "partial": "Lowspeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Lowspeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Lowspeed9V",
          "package": "NXT",
          "signature": "Lowspeed9V",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Lowspeed9V",
          "package": "NXT",
          "partial": "Lowspeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Lowspeed9V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "ModuleInfo",
          "package": "NXT",
          "signature": "ModuleInfo ModuleName ModuleID ModuleSize ModuleIOMapSize",
          "source": "src/Robotics-NXT-Externals.html#ModuleInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ModuleInfo",
          "package": "NXT",
          "partial": "Module Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:ModuleInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnables PWM power according to speed.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "MotorOn",
          "package": "NXT",
          "signature": "MotorOn",
          "source": "src/Robotics-NXT-Externals.html#OutputMode",
          "type": "function"
        },
        "index": {
          "description": "Enables PWM power according to speed",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "MotorOn",
          "package": "NXT",
          "partial": "Motor On",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHold at the current position.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "MotorRunStateHold",
          "package": "NXT",
          "signature": "MotorRunStateHold",
          "source": "src/Robotics-NXT-Externals.html#RunState",
          "type": "function"
        },
        "index": {
          "description": "Hold at the current position",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "MotorRunStateHold",
          "package": "NXT",
          "partial": "Motor Run State Hold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables power to motor.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "MotorRunStateIdle",
          "package": "NXT",
          "signature": "MotorRunStateIdle",
          "source": "src/Robotics-NXT-Externals.html#RunState",
          "type": "function"
        },
        "index": {
          "description": "Disables power to motor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "MotorRunStateIdle",
          "package": "NXT",
          "partial": "Motor Run State Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRamping to a new speed set-point that is less than the current speed set-point.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "MotorRunStateRampDown",
          "package": "NXT",
          "signature": "MotorRunStateRampDown",
          "source": "src/Robotics-NXT-Externals.html#RunState",
          "type": "function"
        },
        "index": {
          "description": "Ramping to new speed set-point that is less than the current speed set-point",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "MotorRunStateRampDown",
          "package": "NXT",
          "partial": "Motor Run State Ramp Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateRampDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRamping to a new speed set-point that is greater than the current speed set-point.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "MotorRunStateRampUp",
          "package": "NXT",
          "signature": "MotorRunStateRampUp",
          "source": "src/Robotics-NXT-Externals.html#RunState",
          "type": "function"
        },
        "index": {
          "description": "Ramping to new speed set-point that is greater than the current speed set-point",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "MotorRunStateRampUp",
          "package": "NXT",
          "partial": "Motor Run State Ramp Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateRampUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnables power to motor.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "MotorRunStateRunning",
          "package": "NXT",
          "signature": "MotorRunStateRunning",
          "source": "src/Robotics-NXT-Externals.html#RunState",
          "type": "function"
        },
        "index": {
          "description": "Enables power to motor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "MotorRunStateRunning",
          "package": "NXT",
          "partial": "Motor Run State Running",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:MotorRunStateRunning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "NXTException",
          "package": "NXT",
          "signature": "NXTException String",
          "source": "src/Robotics-NXT-Errors.html#NXTException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "NXTException",
          "package": "NXT",
          "partial": "NXTException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:NXTException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "NoOfSensorTypes",
          "package": "NXT",
          "signature": "NoOfSensorTypes",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "NoOfSensorTypes",
          "package": "NXT",
          "partial": "No Of Sensor Types",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:NoOfSensorTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "NoSensor",
          "package": "NXT",
          "signature": "NoSensor",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "NoSensor",
          "package": "NXT",
          "partial": "No Sensor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:NoSensor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput port (sensor) 1.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "One",
          "package": "NXT",
          "signature": "One",
          "source": "src/Robotics-NXT-Externals.html#InputPort",
          "type": "function"
        },
        "index": {
          "description": "Input port sensor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "One",
          "package": "NXT",
          "partial": "One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:One"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "OutputState",
          "package": "NXT",
          "signature": "OutputState OutputPort OutputPower [OutputMode] RegulationMode TurnRatio RunState TachoLimit TachoCount BlockTachoCount RotationCount",
          "source": "src/Robotics-NXT-Externals.html#OutputState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "OutputState",
          "normalized": "OutputState OutputPort OutputPower[OutputMode]RegulationMode TurnRatio RunState TachoLimit TachoCount BlockTachoCount RotationCount",
          "package": "NXT",
          "partial": "Output State",
          "signature": "OutputState OutputPort OutputPower[OutputMode]RegulationMode TurnRatio RunState TachoLimit TachoCount BlockTachoCount RotationCount",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:OutputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReports scaled value as % of full scale reading for a configured sensor type.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "PctFullScaleMode",
          "package": "NXT",
          "signature": "PctFullScaleMode",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "function"
        },
        "index": {
          "description": "Reports scaled value as of full scale reading for configured sensor type",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "PctFullScaleMode",
          "package": "NXT",
          "partial": "Pct Full Scale Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:PctFullScaleMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReports scaled value as number of transitions from false to true, then back to false.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "PeriodCounterMode",
          "package": "NXT",
          "signature": "PeriodCounterMode",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "function"
        },
        "index": {
          "description": "Reports scaled value as number of transitions from false to true then back to false",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "PeriodCounterMode",
          "package": "NXT",
          "partial": "Period Counter Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:PeriodCounterMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "ProtocolVersion",
          "package": "NXT",
          "signature": "ProtocolVersion Major Minor",
          "source": "src/Robotics-NXT-Externals.html#ProtocolVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ProtocolVersion",
          "package": "NXT",
          "partial": "Protocol Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:ProtocolVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReports scaled value equal to the raw value.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RawMode",
          "package": "NXT",
          "signature": "RawMode",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "function"
        },
        "index": {
          "description": "Reports scaled value equal to the raw value",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RawMode",
          "package": "NXT",
          "partial": "Raw Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RawMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Reflection",
          "package": "NXT",
          "signature": "Reflection",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Reflection",
          "package": "NXT",
          "partial": "Reflection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Reflection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequired in conjunction with output regulation mode setting.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Regulated",
          "package": "NXT",
          "signature": "Regulated",
          "source": "src/Robotics-NXT-Externals.html#OutputMode",
          "type": "function"
        },
        "index": {
          "description": "Required in conjunction with output regulation mode setting",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Regulated",
          "package": "NXT",
          "partial": "Regulated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Regulated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables regulation.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RegulationModeIdle",
          "package": "NXT",
          "signature": "RegulationModeIdle",
          "source": "src/Robotics-NXT-Externals.html#RegulationMode",
          "type": "function"
        },
        "index": {
          "description": "Disables regulation",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RegulationModeIdle",
          "package": "NXT",
          "partial": "Regulation Mode Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RegulationModeIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuto adjust PWM duty cycle if motor is affected by physical load. Really works only if there is\n room for that (not that motor is already running at the maximum power).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RegulationModeMotorSpeed",
          "package": "NXT",
          "signature": "RegulationModeMotorSpeed",
          "source": "src/Robotics-NXT-Externals.html#RegulationMode",
          "type": "function"
        },
        "index": {
          "description": "Auto adjust PWM duty cycle if motor is affected by physical load Really works only if there is room for that not that motor is already running at the maximum power",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RegulationModeMotorSpeed",
          "package": "NXT",
          "partial": "Regulation Mode Motor Speed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RegulationModeMotorSpeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to keep rotation in sync with another motor that has this set. Also involves turn ratio.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RegulationModeMotorSync",
          "package": "NXT",
          "signature": "RegulationModeMotorSync",
          "source": "src/Robotics-NXT-Externals.html#RegulationMode",
          "type": "function"
        },
        "index": {
          "description": "Attempts to keep rotation in sync with another motor that has this set Also involves turn ratio",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RegulationModeMotorSync",
          "package": "NXT",
          "partial": "Regulation Mode Motor Sync",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RegulationModeMotorSync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets block-relative position counter (\u003ccode\u003e\u003ca\u003eBlockTachoCount\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "RelativePosition",
          "package": "NXT",
          "signature": "RelativePosition",
          "source": "src/Robotics-NXT-Externals.html#MotorReset",
          "type": "function"
        },
        "index": {
          "description": "Resets block-relative position counter BlockTachoCount",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RelativePosition",
          "package": "NXT",
          "partial": "Relative Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RelativePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox0",
          "package": "NXT",
          "signature": "RemoteInbox0",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox0",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox1",
          "package": "NXT",
          "signature": "RemoteInbox1",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox1",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox10",
          "package": "NXT",
          "signature": "RemoteInbox10",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox10",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox11",
          "package": "NXT",
          "signature": "RemoteInbox11",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox11",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox12",
          "package": "NXT",
          "signature": "RemoteInbox12",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox12",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox13",
          "package": "NXT",
          "signature": "RemoteInbox13",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox13",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox14",
          "package": "NXT",
          "signature": "RemoteInbox14",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox14",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox15",
          "package": "NXT",
          "signature": "RemoteInbox15",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox15",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox16",
          "package": "NXT",
          "signature": "RemoteInbox16",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox16",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox17",
          "package": "NXT",
          "signature": "RemoteInbox17",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox17",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox17"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox18",
          "package": "NXT",
          "signature": "RemoteInbox18",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox18",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox18"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox19",
          "package": "NXT",
          "signature": "RemoteInbox19",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox19",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox19"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox2",
          "package": "NXT",
          "signature": "RemoteInbox2",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox2",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox3",
          "package": "NXT",
          "signature": "RemoteInbox3",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox3",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox4",
          "package": "NXT",
          "signature": "RemoteInbox4",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox4",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox5",
          "package": "NXT",
          "signature": "RemoteInbox5",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox5",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox6",
          "package": "NXT",
          "signature": "RemoteInbox6",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox6",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox7",
          "package": "NXT",
          "signature": "RemoteInbox7",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox7",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox8",
          "package": "NXT",
          "signature": "RemoteInbox8",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox8",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "RemoteInbox9",
          "package": "NXT",
          "signature": "RemoteInbox9",
          "source": "src/Robotics-NXT-Externals.html#RemoteInbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "RemoteInbox9",
          "package": "NXT",
          "partial": "Remote Inbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:RemoteInbox9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "SoundDB",
          "package": "NXT",
          "signature": "SoundDB",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "SoundDB",
          "package": "NXT",
          "partial": "Sound DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:SoundDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "SoundDBA",
          "package": "NXT",
          "signature": "SoundDBA",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "SoundDBA",
          "package": "NXT",
          "partial": "Sound DBA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:SoundDBA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Switch",
          "package": "NXT",
          "signature": "Switch",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Switch",
          "package": "NXT",
          "partial": "Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Temperature",
          "package": "NXT",
          "signature": "Temperature",
          "source": "src/Robotics-NXT-Externals.html#SensorType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Temperature",
          "package": "NXT",
          "partial": "Temperature",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Temperature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput port (sensor) 3.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Three",
          "package": "NXT",
          "signature": "Three",
          "source": "src/Robotics-NXT-Externals.html#InputPort",
          "type": "function"
        },
        "index": {
          "description": "Input port sensor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Three",
          "package": "NXT",
          "partial": "Three",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Three"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "TimoutException",
          "package": "NXT",
          "signature": "TimoutException",
          "source": "src/Robotics-NXT-Externals.html#TimeoutException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "TimoutException",
          "package": "NXT",
          "partial": "Timout Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:TimoutException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReports scaled value as number of transitions between true and false.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "TransitionCntMode",
          "package": "NXT",
          "signature": "TransitionCntMode",
          "source": "src/Robotics-NXT-Externals.html#SensorMode",
          "type": "function"
        },
        "index": {
          "description": "Reports scaled value as number of transitions between true and false",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "TransitionCntMode",
          "package": "NXT",
          "partial": "Transition Cnt Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:TransitionCntMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput port (sensor) 2.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "Two",
          "package": "NXT",
          "signature": "Two",
          "source": "src/Robotics-NXT-Externals.html#InputPort",
          "type": "function"
        },
        "index": {
          "description": "Input port sensor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Two",
          "package": "NXT",
          "partial": "Two",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Robotics.NXT",
          "name": "Version",
          "package": "NXT",
          "signature": "Version FirmwareVersion ProtocolVersion",
          "source": "src/Robotics-NXT-Externals.html#Version",
          "type": "function"
        },
        "index": {
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "Version",
          "package": "NXT",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets link quality of the Bluetooth connection to the NXT brick.\n\u003c/p\u003e\u003cp\u003eCurrently supported only on Linux. It throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "bluetoothLinkQuality",
          "package": "NXT",
          "signature": "NXT Int",
          "source": "src/Robotics-NXT-BluetoothUtils.html#bluetoothLinkQuality",
          "type": "function"
        },
        "index": {
          "description": "Gets link quality of the Bluetooth connection to the NXT brick Currently supported only on Linux It throws NXTException otherwise",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "bluetoothLinkQuality",
          "package": "NXT",
          "partial": "Link Quality",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:bluetoothLinkQuality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets received signal strength indicator (RSSI) of the Bluetooth connection to the NXT brick.\n\u003c/p\u003e\u003cp\u003eCurrently supported only on Linux. It throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "bluetoothRSSI",
          "package": "NXT",
          "signature": "NXT Int",
          "source": "src/Robotics-NXT-BluetoothUtils.html#bluetoothRSSI",
          "type": "function"
        },
        "index": {
          "description": "Gets received signal strength indicator RSSI of the Bluetooth connection to the NXT brick Currently supported only on Linux It throws NXTException otherwise",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "bluetoothRSSI",
          "package": "NXT",
          "partial": "RSSI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:bluetoothRSSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses a file.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "close",
          "package": "NXT",
          "signature": "FileHandle -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#close",
          "type": "function"
        },
        "index": {
          "description": "Closes file",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "close",
          "normalized": "FileHandle-\u003eNXT()",
          "package": "NXT",
          "signature": "FileHandle-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eclose\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "closeConfirm",
          "package": "NXT",
          "signature": "FileHandle -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#closeConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as close but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "closeConfirm",
          "normalized": "FileHandle-\u003eNXT()",
          "package": "NXT",
          "partial": "Confirm",
          "signature": "FileHandle-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:closeConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses module handle of previously requested module information.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "closeModuleHandle",
          "package": "NXT",
          "signature": "ModuleHandle -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#closeModuleHandle",
          "type": "function"
        },
        "index": {
          "description": "Closes module handle of previously requested module information",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "closeModuleHandle",
          "normalized": "ModuleHandle-\u003eNXT()",
          "package": "NXT",
          "partial": "Module Handle",
          "signature": "ModuleHandle-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:closeModuleHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ecloseModuleHandle\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an\nerror it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "closeModuleHandleConfirm",
          "package": "NXT",
          "signature": "ModuleHandle -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#closeModuleHandleConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as closeModuleHandle but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "closeModuleHandleConfirm",
          "normalized": "ModuleHandle-\u003eNXT()",
          "package": "NXT",
          "partial": "Module Handle Confirm",
          "signature": "ModuleHandle-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:closeModuleHandleConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Bluetooth serial device filename for current operating system. Currently always \u003ccode\u003e/dev/rfcomm0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "defaultDevice",
          "package": "NXT",
          "signature": "FilePath",
          "source": "src/Robotics-NXT-Protocol.html#defaultDevice",
          "type": "function"
        },
        "index": {
          "description": "Default Bluetooth serial device filename for current operating system Currently always dev rfcomm0",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "defaultDevice",
          "package": "NXT",
          "partial": "Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:defaultDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeletes a given file.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "delete",
          "package": "NXT",
          "signature": "FileName -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Deletes given file",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "delete",
          "normalized": "FileName-\u003eNXT()",
          "package": "NXT",
          "signature": "FileName-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edelete\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it throws\na \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "deleteConfirm",
          "package": "NXT",
          "signature": "FileName -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#deleteConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as delete but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "deleteConfirm",
          "normalized": "FileName-\u003eNXT()",
          "package": "NXT",
          "partial": "Confirm",
          "signature": "FileName-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:deleteConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003edeleteConfirm\u003c/a\u003e\u003c/code\u003e but it also requires that the file exists before deletion. It throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "deleteExisting",
          "package": "NXT",
          "signature": "FileName -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#deleteExisting",
          "type": "function"
        },
        "index": {
          "description": "Same as deleteConfirm but it also requires that the file exists before deletion It throws NXTException otherwise",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "deleteExisting",
          "normalized": "FileName-\u003eNXT()",
          "package": "NXT",
          "partial": "Existing",
          "signature": "FileName-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:deleteExisting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emessageWrite\u003c/a\u003e\u003c/code\u003e but if there is no message in a given remote inbox queue it retries until there is.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "ensureMessageRead",
          "package": "NXT",
          "signature": "RemoteInbox -\u003e RemoveMessage -\u003e NXT String",
          "source": "src/Robotics-NXT-Protocol.html#ensureMessageRead",
          "type": "function"
        },
        "index": {
          "description": "Same as messageWrite but if there is no message in given remote inbox queue it retries until there is",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ensureMessageRead",
          "normalized": "RemoteInbox-\u003eRemoveMessage-\u003eNXT String",
          "package": "NXT",
          "partial": "Message Read",
          "signature": "RemoteInbox-\u003eRemoveMessage-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:ensureMessageRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function which first ensures that no other program is running and then ensures that a given program is really running before\nit returns.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "ensureStartProgram",
          "package": "NXT",
          "signature": "FileName -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#ensureStartProgram",
          "type": "function"
        },
        "index": {
          "description": "Helper function which first ensures that no other program is running and then ensures that given program is really running before it returns",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "ensureStartProgram",
          "normalized": "FileName-\u003eNXT()",
          "package": "NXT",
          "partial": "Start Program",
          "signature": "FileName-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:ensureStartProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a computation in a context of a given \u003ccode\u003e\u003ca\u003eNXTInternals\u003c/a\u003e\u003c/code\u003e token, returning just a new token.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "execNXT",
          "package": "NXT",
          "signature": "NXT a -\u003e NXTInternals -\u003e IO NXTInternals",
          "source": "src/Robotics-NXT-Internals.html#execNXT",
          "type": "function"
        },
        "index": {
          "description": "Runs computation in context of given NXTInternals token returning just new token",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "execNXT",
          "normalized": "NXT a-\u003eNXTInternals-\u003eIO NXTInternals",
          "package": "NXT",
          "partial": "NXT",
          "signature": "NXT a-\u003eNXTInternals-\u003eIO NXTInternals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:execNXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets current battery level (in volts).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getBatteryLevel",
          "package": "NXT",
          "signature": "NXT Voltage",
          "source": "src/Robotics-NXT-Protocol.html#getBatteryLevel",
          "type": "function"
        },
        "index": {
          "description": "Gets current battery level in volts",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getBatteryLevel",
          "package": "NXT",
          "partial": "Battery Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getBatteryLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the name of the currently running program, if any.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getCurrentProgramName",
          "package": "NXT",
          "signature": "NXT (Maybe String)",
          "source": "src/Robotics-NXT-Protocol.html#getCurrentProgramName",
          "type": "function"
        },
        "index": {
          "description": "Gets the name of the currently running program if any",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getCurrentProgramName",
          "package": "NXT",
          "partial": "Current Program Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getCurrentProgramName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets device (the NXT brick) information: name, Bluetooth 48 bit address in the string format, strength of Bluetooth signal (not implemented in\ncurrent NXT firmware versions, use \u003ccode\u003ebluetoothRSSI\u003c/code\u003e or \u003ccode\u003ebluetoothLinkQuality\u003c/code\u003e as an alternative), free space on flash.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getDeviceInfo",
          "package": "NXT",
          "signature": "NXT DeviceInfo",
          "source": "src/Robotics-NXT-Protocol.html#getDeviceInfo",
          "type": "function"
        },
        "index": {
          "description": "Gets device the NXT brick information name Bluetooth bit address in the string format strength of Bluetooth signal not implemented in current NXT firmware versions use bluetoothRSSI or bluetoothLinkQuality as an alternative free space on flash",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getDeviceInfo",
          "package": "NXT",
          "partial": "Device Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getDeviceInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets input port (sensor) values. This is the main function for reading a sensor.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getInputValues",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT InputValue",
          "source": "src/Robotics-NXT-Protocol.html#getInputValues",
          "type": "function"
        },
        "index": {
          "description": "Gets input port sensor values This is the main function for reading sensor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getInputValues",
          "normalized": "InputPort-\u003eNXT InputValue",
          "package": "NXT",
          "partial": "Input Values",
          "signature": "InputPort-\u003eNXT InputValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getInputValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen was a last keep alive packet send?\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getLastKeepAliveTime",
          "package": "NXT",
          "signature": "NXT (Maybe POSIXTime)",
          "source": "src/Robotics-NXT-Protocol.html#getLastKeepAliveTime",
          "type": "function"
        },
        "index": {
          "description": "When was last keep alive packet send",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getLastKeepAliveTime",
          "package": "NXT",
          "partial": "Last Keep Alive Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getLastKeepAliveTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to get an ID of a module matching a given module name. Each module encompass some firmware functionality.\nFunction caches IDs so it hopefully retrieves it from a cache of previous requests.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getModuleID",
          "package": "NXT",
          "signature": "ModuleName -\u003e NXT (Maybe ModuleID)",
          "source": "src/Robotics-NXT-Protocol.html#getModuleID",
          "type": "function"
        },
        "index": {
          "description": "Helper function to get an ID of module matching given module name Each module encompass some firmware functionality Function caches IDs so it hopefully retrieves it from cache of previous requests",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getModuleID",
          "normalized": "ModuleName-\u003eNXT(Maybe ModuleID)",
          "package": "NXT",
          "partial": "Module ID",
          "signature": "ModuleName-\u003eNXT(Maybe ModuleID)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getModuleID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets output port (motor) current state. In additional to values used with \u003ccode\u003e\u003ca\u003esetOutputState\u003c/a\u003e\u003c/code\u003e also \u003ccode\u003e\u003ca\u003eTachoCount\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBlockTachoCount\u003c/a\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ca\u003eRotationCount\u003c/a\u003e\u003c/code\u003e values are available which tell you current position of a motor.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getOutputState",
          "package": "NXT",
          "signature": "OutputPort -\u003e NXT OutputState",
          "source": "src/Robotics-NXT-Protocol.html#getOutputState",
          "type": "function"
        },
        "index": {
          "description": "Gets output port motor current state In additional to values used with setOutputState also TachoCount BlockTachoCount and RotationCount values are available which tell you current position of motor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getOutputState",
          "normalized": "OutputPort-\u003eNXT OutputState",
          "package": "NXT",
          "partial": "Output State",
          "signature": "OutputPort-\u003eNXT OutputState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getOutputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets current sleep timeout setting (in seconds) after which the NXT brick automatically powers off if\nnot prevented with a keep alive packet (use \u003ccode\u003e\u003ca\u003ekeepAlive\u003c/a\u003e\u003c/code\u003e to send one). This setting is cached.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getSleepTimeout",
          "package": "NXT",
          "signature": "NXT Duration",
          "source": "src/Robotics-NXT-Protocol.html#getSleepTimeout",
          "type": "function"
        },
        "index": {
          "description": "Gets current sleep timeout setting in seconds after which the NXT brick automatically powers off if not prevented with keep alive packet use keepAlive to send one This setting is cached",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getSleepTimeout",
          "package": "NXT",
          "partial": "Sleep Timeout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getSleepTimeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets firmware and protocol versions of the NXT brick.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "getVersion",
          "package": "NXT",
          "signature": "NXT Version",
          "source": "src/Robotics-NXT-Protocol.html#getVersion",
          "type": "function"
        },
        "index": {
          "description": "Gets firmware and protocol versions of the NXT brick",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "getVersion",
          "package": "NXT",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:getVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens and intializes a Bluetooth serial device communication.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "initialize",
          "package": "NXT",
          "signature": "FilePath -\u003e IO NXTInternals",
          "source": "src/Robotics-NXT-Protocol.html#initialize",
          "type": "function"
        },
        "index": {
          "description": "Opens and intializes Bluetooth serial device communication",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "initialize",
          "normalized": "FilePath-\u003eIO NXTInternals",
          "package": "NXT",
          "signature": "FilePath-\u003eIO NXTInternals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs battery used in the NXT brick rechargeable?\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "isBatteryRechargeable",
          "package": "NXT",
          "signature": "NXT Bool",
          "source": "src/Robotics-NXT-Protocol.html#isBatteryRechargeable",
          "type": "function"
        },
        "index": {
          "description": "Is battery used in the NXT brick rechargeable",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "isBatteryRechargeable",
          "package": "NXT",
          "partial": "Battery Rechargeable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:isBatteryRechargeable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a keep alive (turned on) packet. It prevents the NXT brick from automatically powering off. Other commands do not prevent that\nfrom hapenning so it is useful to send this packet from time to time if you want to prevent powering off.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "keepAlive",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#keepAlive",
          "type": "function"
        },
        "index": {
          "description": "Sends keep alive turned on packet It prevents the NXT brick from automatically powering off Other commands do not prevent that from hapenning so it is useful to send this packet from time to time if you want to prevent powering off",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "keepAlive",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Alive",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:keepAlive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ekeepAlive\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "keepAliveConfirm",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#keepAliveConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as keepAlive but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "keepAliveConfirm",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Alive Confirm",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:keepAliveConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function to get information about all modules matching a given module name (which can be a wild card).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "listModules",
          "package": "NXT",
          "signature": "ModuleName -\u003e NXT [ModuleInfo]",
          "source": "src/Robotics-NXT-Protocol.html#listModules",
          "type": "function"
        },
        "index": {
          "description": "Helper function to get information about all modules matching given module name which can be wild card",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "listModules",
          "normalized": "ModuleName-\u003eNXT[ModuleInfo]",
          "package": "NXT",
          "partial": "Modules",
          "signature": "ModuleName-\u003eNXT[ModuleInfo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:listModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets number of bytes available to read.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "lowspeedGetStatus",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT Int",
          "source": "src/Robotics-NXT-Protocol.html#lowspeedGetStatus",
          "type": "function"
        },
        "index": {
          "description": "Gets number of bytes available to read",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "lowspeedGetStatus",
          "normalized": "InputPort-\u003eNXT Int",
          "package": "NXT",
          "partial": "Get Status",
          "signature": "InputPort-\u003eNXT Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:lowspeedGetStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads data. The protocol does not support variable-length return packages so the response always contains 16 data bytes with invalid\ndata padded with zeros.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "lowspeedRead",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT RxData",
          "source": "src/Robotics-NXT-Protocol.html#lowspeedRead",
          "type": "function"
        },
        "index": {
          "description": "Reads data The protocol does not support variable-length return packages so the response always contains data bytes with invalid data padded with zeros",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "lowspeedRead",
          "normalized": "InputPort-\u003eNXT RxData",
          "package": "NXT",
          "partial": "Read",
          "signature": "InputPort-\u003eNXT RxData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:lowspeedRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites data. At most 16 bytes can be written at a time.\n\u003c/p\u003e\u003cp\u003eReply data length must be specified in the write command since reading from the device is done on a master-slave basis.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "lowspeedWrite",
          "package": "NXT",
          "signature": "InputPort -\u003e RxDataLength -\u003e TxData -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#lowspeedWrite",
          "type": "function"
        },
        "index": {
          "description": "Writes data At most bytes can be written at time Reply data length must be specified in the write command since reading from the device is done on master-slave basis",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "lowspeedWrite",
          "normalized": "InputPort-\u003eRxDataLength-\u003eTxData-\u003eNXT()",
          "package": "NXT",
          "partial": "Write",
          "signature": "InputPort-\u003eRxDataLength-\u003eTxData-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:lowspeedWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elowspeedWrite\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an\nerror it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "lowspeedWriteConfirm",
          "package": "NXT",
          "signature": "InputPort -\u003e RxDataLength -\u003e TxData -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#lowspeedWriteConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as lowspeedWrite but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "lowspeedWriteConfirm",
          "normalized": "InputPort-\u003eRxDataLength-\u003eTxData-\u003eNXT()",
          "package": "NXT",
          "partial": "Write Confirm",
          "signature": "InputPort-\u003eRxDataLength-\u003eTxData-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:lowspeedWriteConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emessageWrite\u003c/a\u003e\u003c/code\u003e but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there is no message in a given remote inbox queue.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "maybeMessageRead",
          "package": "NXT",
          "signature": "RemoteInbox -\u003e RemoveMessage -\u003e NXT (Maybe String)",
          "source": "src/Robotics-NXT-Protocol.html#maybeMessageRead",
          "type": "function"
        },
        "index": {
          "description": "Same as messageWrite but returns Nothing if there is no message in given remote inbox queue",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "maybeMessageRead",
          "normalized": "RemoteInbox-\u003eRemoveMessage-\u003eNXT(Maybe String)",
          "package": "NXT",
          "partial": "Message Read",
          "signature": "RemoteInbox-\u003eRemoveMessage-\u003eNXT(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:maybeMessageRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a message from the currently running program from a given remote inbox queue. A queue is limited to 5 messages.\nIt throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e if there is no message in a remote inbox queue.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "messageRead",
          "package": "NXT",
          "signature": "RemoteInbox -\u003e RemoveMessage -\u003e NXT String",
          "source": "src/Robotics-NXT-Protocol.html#messageRead",
          "type": "function"
        },
        "index": {
          "description": "Reads message from the currently running program from given remote inbox queue queue is limited to messages It throws NXTException if there is no message in remote inbox queue",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "messageRead",
          "normalized": "RemoteInbox-\u003eRemoveMessage-\u003eNXT String",
          "package": "NXT",
          "partial": "Read",
          "signature": "RemoteInbox-\u003eRemoveMessage-\u003eNXT String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:messageRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a message to the given inbox queue of the running remote program. A message length is limited to 58 characters/bytes. A queue\nis limited to 5 messages.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "messageWrite",
          "package": "NXT",
          "signature": "Inbox -\u003e String -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#messageWrite",
          "type": "function"
        },
        "index": {
          "description": "Writes message to the given inbox queue of the running remote program message length is limited to characters bytes queue is limited to messages",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "messageWrite",
          "normalized": "Inbox-\u003eString-\u003eNXT()",
          "package": "NXT",
          "partial": "Write",
          "signature": "Inbox-\u003eString-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:messageWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003emessageWrite\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "messageWriteConfirm",
          "package": "NXT",
          "signature": "Inbox -\u003e String -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#messageWriteConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as messageWrite but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "messageWriteConfirm",
          "normalized": "Inbox-\u003eString-\u003eNXT()",
          "package": "NXT",
          "partial": "Write Confirm",
          "signature": "Inbox-\u003eString-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:messageWriteConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a given file for writing as a linked list of flash sectors.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "openWrite",
          "package": "NXT",
          "signature": "FileName -\u003e FileSize -\u003e NXT FileHandle",
          "source": "src/Robotics-NXT-Protocol.html#openWrite",
          "type": "function"
        },
        "index": {
          "description": "Opens given file for writing as linked list of flash sectors",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "openWrite",
          "normalized": "FileName-\u003eFileSize-\u003eNXT FileHandle",
          "package": "NXT",
          "partial": "Write",
          "signature": "FileName-\u003eFileSize-\u003eNXT FileHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:openWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a given file for writing as a linear contiguous block of flash memory (required for user programs and certain data files).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "openWriteLinear",
          "package": "NXT",
          "signature": "FileName -\u003e FileSize -\u003e NXT FileHandle",
          "source": "src/Robotics-NXT-Protocol.html#openWriteLinear",
          "type": "function"
        },
        "index": {
          "description": "Opens given file for writing as linear contiguous block of flash memory required for user programs and certain data files",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "openWriteLinear",
          "normalized": "FileName-\u003eFileSize-\u003eNXT FileHandle",
          "package": "NXT",
          "partial": "Write Linear",
          "signature": "FileName-\u003eFileSize-\u003eNXT FileHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:openWriteLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlays a given sound file.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "playSoundFile",
          "package": "NXT",
          "signature": "LoopPlayback -\u003e FileName -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#playSoundFile",
          "type": "function"
        },
        "index": {
          "description": "Plays given sound file",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "playSoundFile",
          "normalized": "LoopPlayback-\u003eFileName-\u003eNXT()",
          "package": "NXT",
          "partial": "Sound File",
          "signature": "LoopPlayback-\u003eFileName-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:playSoundFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003eplaySoundFile\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "playSoundFileConfirm",
          "package": "NXT",
          "signature": "LoopPlayback -\u003e FileName -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#playSoundFileConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as playSoundFile but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "playSoundFileConfirm",
          "normalized": "LoopPlayback-\u003eFileName-\u003eNXT()",
          "package": "NXT",
          "partial": "Sound File Confirm",
          "signature": "LoopPlayback-\u003eFileName-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:playSoundFileConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlays a tone with a given frequency (in hertz) for a given duration (in seconds).\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "playTone",
          "package": "NXT",
          "signature": "Frequency -\u003e Duration -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#playTone",
          "type": "function"
        },
        "index": {
          "description": "Plays tone with given frequency in hertz for given duration in seconds",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "playTone",
          "normalized": "Frequency-\u003eDuration-\u003eNXT()",
          "package": "NXT",
          "partial": "Tone",
          "signature": "Frequency-\u003eDuration-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:playTone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads data from an IO map of a given module. At most 119 bytes can be read at a time.\n\u003c/p\u003e\u003cp\u003eYou probably have to know what different values at different positions mean and control. The best way is to check NXT firmware\nsource code.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "readIOMap",
          "package": "NXT",
          "signature": "ModuleID -\u003e IOMapOffset -\u003e IOMapLength -\u003e NXT IOMapData",
          "source": "src/Robotics-NXT-Protocol.html#readIOMap",
          "type": "function"
        },
        "index": {
          "description": "Reads data from an IO map of given module At most bytes can be read at time You probably have to know what different values at different positions mean and control The best way is to check NXT firmware source code",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "readIOMap",
          "normalized": "ModuleID-\u003eIOMapOffset-\u003eIOMapLength-\u003eNXT IOMapData",
          "package": "NXT",
          "partial": "IOMap",
          "signature": "ModuleID-\u003eIOMapOffset-\u003eIOMapLength-\u003eNXT IOMapData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:readIOMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequests information about the first module matching a given module name (which can be a wild card). Returned module handle\ncan be used for followup requests and has to be closed when not needed anymore.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "requestFirstModule",
          "package": "NXT",
          "signature": "ModuleName -\u003e NXT (ModuleHandle, Maybe ModuleInfo)",
          "source": "src/Robotics-NXT-Protocol.html#requestFirstModule",
          "type": "function"
        },
        "index": {
          "description": "Requests information about the first module matching given module name which can be wild card Returned module handle can be used for followup requests and has to be closed when not needed anymore",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "requestFirstModule",
          "normalized": "ModuleName-\u003eNXT(ModuleHandle,Maybe ModuleInfo)",
          "package": "NXT",
          "partial": "First Module",
          "signature": "ModuleName-\u003eNXT(ModuleHandle,Maybe ModuleInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:requestFirstModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequests information about the next module matching previously requested module name (which can be a wild card). Returned module\nhandle can be used for followup requests and has to be closed when not needed anymore.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "requestNextModule",
          "package": "NXT",
          "signature": "ModuleHandle -\u003e NXT (ModuleHandle, Maybe ModuleInfo)",
          "source": "src/Robotics-NXT-Protocol.html#requestNextModule",
          "type": "function"
        },
        "index": {
          "description": "Requests information about the next module matching previously requested module name which can be wild card Returned module handle can be used for followup requests and has to be closed when not needed anymore",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "requestNextModule",
          "normalized": "ModuleHandle-\u003eNXT(ModuleHandle,Maybe ModuleInfo)",
          "package": "NXT",
          "partial": "Next Module",
          "signature": "ModuleHandle-\u003eNXT(ModuleHandle,Maybe ModuleInfo)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:requestNextModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets input port (sensor) scaled value.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "resetInputScaledValue",
          "package": "NXT",
          "signature": "InputPort -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#resetInputScaledValue",
          "type": "function"
        },
        "index": {
          "description": "Resets input port sensor scaled value",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "resetInputScaledValue",
          "normalized": "InputPort-\u003eNXT()",
          "package": "NXT",
          "partial": "Input Scaled Value",
          "signature": "InputPort-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:resetInputScaledValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets one of three position counters for a given output port.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "resetMotorPosition",
          "package": "NXT",
          "signature": "OutputPort -\u003e MotorReset -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#resetMotorPosition",
          "type": "function"
        },
        "index": {
          "description": "Resets one of three position counters for given output port",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "resetMotorPosition",
          "normalized": "OutputPort-\u003eMotorReset-\u003eNXT()",
          "package": "NXT",
          "partial": "Motor Position",
          "signature": "OutputPort-\u003eMotorReset-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:resetMotorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a computation in a context of a given \u003ccode\u003e\u003ca\u003eNXTInternals\u003c/a\u003e\u003c/code\u003e token, returning a value and a new token.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "runNXT",
          "package": "NXT",
          "signature": "NXT a -\u003e NXTInternals -\u003e IO (a, NXTInternals)",
          "source": "src/Robotics-NXT-Internals.html#runNXT",
          "type": "function"
        },
        "index": {
          "description": "Runs computation in context of given NXTInternals token returning value and new token",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "runNXT",
          "normalized": "NXT a-\u003eNXTInternals-\u003eIO(a,NXTInternals)",
          "package": "NXT",
          "partial": "NXT",
          "signature": "NXT a-\u003eNXTInternals-\u003eIO(a,NXTInternals)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:runNXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets input port (sensor) type and mode.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "setInputMode",
          "package": "NXT",
          "signature": "InputPort -\u003e SensorType -\u003e SensorMode -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#setInputMode",
          "type": "function"
        },
        "index": {
          "description": "Sets input port sensor type and mode",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "setInputMode",
          "normalized": "InputPort-\u003eSensorType-\u003eSensorMode-\u003eNXT()",
          "package": "NXT",
          "partial": "Input Mode",
          "signature": "InputPort-\u003eSensorType-\u003eSensorMode-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:setInputMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esetInputMode\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "setInputModeConfirm",
          "package": "NXT",
          "signature": "InputPort -\u003e SensorType -\u003e SensorMode -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#setInputModeConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as setInputMode but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "setInputModeConfirm",
          "normalized": "InputPort-\u003eSensorType-\u003eSensorMode-\u003eNXT()",
          "package": "NXT",
          "partial": "Input Mode Confirm",
          "signature": "InputPort-\u003eSensorType-\u003eSensorMode-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:setInputModeConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets output port (motor) state. This is the main function for controlling a motor.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "setOutputState",
          "package": "NXT",
          "signature": "OutputPort -\u003e OutputPower -\u003e [OutputMode] -\u003e RegulationMode -\u003e TurnRatio -\u003e RunState -\u003e TachoLimit -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#setOutputState",
          "type": "function"
        },
        "index": {
          "description": "Sets output port motor state This is the main function for controlling motor",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "setOutputState",
          "normalized": "OutputPort-\u003eOutputPower-\u003e[OutputMode]-\u003eRegulationMode-\u003eTurnRatio-\u003eRunState-\u003eTachoLimit-\u003eNXT()",
          "package": "NXT",
          "partial": "Output State",
          "signature": "OutputPort-\u003eOutputPower-\u003e[OutputMode]-\u003eRegulationMode-\u003eTurnRatio-\u003eRunState-\u003eTachoLimit-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:setOutputState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003esetOutputState\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error\nit throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "setOutputStateConfirm",
          "package": "NXT",
          "signature": "OutputPort -\u003e OutputPower -\u003e [OutputMode] -\u003e RegulationMode -\u003e TurnRatio -\u003e RunState -\u003e TachoLimit -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#setOutputStateConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as setOutputState but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "setOutputStateConfirm",
          "normalized": "OutputPort-\u003eOutputPower-\u003e[OutputMode]-\u003eRegulationMode-\u003eTurnRatio-\u003eRunState-\u003eTachoLimit-\u003eNXT()",
          "package": "NXT",
          "partial": "Output State Confirm",
          "signature": "OutputPort-\u003eOutputPower-\u003e[OutputMode]-\u003eRegulationMode-\u003eTurnRatio-\u003eRunState-\u003eTachoLimit-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:setOutputStateConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShutdowns (powers off) the NXT brick. You have to manually turn it on again.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "shutdown",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#shutdown",
          "type": "function"
        },
        "index": {
          "description": "Shutdowns powers off the NXT brick You have to manually turn it on again",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "shutdown",
          "normalized": "NXT()",
          "package": "NXT",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarts a given program on the NXT brick.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "startProgram",
          "package": "NXT",
          "signature": "FileName -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#startProgram",
          "type": "function"
        },
        "index": {
          "description": "Starts given program on the NXT brick",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "startProgram",
          "normalized": "FileName-\u003eNXT()",
          "package": "NXT",
          "partial": "Program",
          "signature": "FileName-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:startProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estartProgram\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted, but this does not assure\nthat the program has really started successfully (especially not that it is already running when the confirmation is received).\nUse \u003ccode\u003e\u003ca\u003eensureStartProgram\u003c/a\u003e\u003c/code\u003e for that. In a case of an error it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "startProgramConfirm",
          "package": "NXT",
          "signature": "FileName -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#startProgramConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as startProgram but also request confirmation Useful to assure the command was really accepted but this does not assure that the program has really started successfully especially not that it is already running when the confirmation is received Use ensureStartProgram for that In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "startProgramConfirm",
          "normalized": "FileName-\u003eNXT()",
          "package": "NXT",
          "partial": "Program Confirm",
          "signature": "FileName-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:startProgramConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function which stops all NXT brick activities: stops motors and disables sensors.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "stopEverything",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#stopEverything",
          "type": "function"
        },
        "index": {
          "description": "Helper function which stops all NXT brick activities stops motors and disables sensors",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "stopEverything",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Everything",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopEverything"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops a currently running program.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "stopProgram",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#stopProgram",
          "type": "function"
        },
        "index": {
          "description": "Stops currently running program",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "stopProgram",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Program",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estopProgram\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "stopProgramConfirm",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#stopProgramConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as stopProgram but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "stopProgramConfirm",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Program Confirm",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopProgramConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estopProgramConfirm\u003c/a\u003e\u003c/code\u003e but it also requires that the program was really running. It throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "stopProgramExisting",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#stopProgramExisting",
          "type": "function"
        },
        "index": {
          "description": "Same as stopProgramConfirm but it also requires that the program was really running It throws NXTException otherwise",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "stopProgramExisting",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Program Existing",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopProgramExisting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops current sound file playback.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "stopSoundPlayback",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#stopSoundPlayback",
          "type": "function"
        },
        "index": {
          "description": "Stops current sound file playback",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "stopSoundPlayback",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Sound Playback",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopSoundPlayback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estopSoundPlayback\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an\nerror it throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "stopSoundPlaybackConfirm",
          "package": "NXT",
          "signature": "NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#stopSoundPlaybackConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as stopSoundPlayback but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "stopSoundPlaybackConfirm",
          "normalized": "NXT()",
          "package": "NXT",
          "partial": "Sound Playback Confirm",
          "signature": "NXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:stopSoundPlaybackConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStops all NXT activities (by calling \u003ccode\u003e\u003ca\u003estopEverything\u003c/a\u003e\u003c/code\u003e) and closes the Bluetooth serial device communication. \u003ccode\u003e\u003ca\u003eNXTInternals\u003c/a\u003e\u003c/code\u003e token must not\nbe used after that anymore.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "terminate",
          "package": "NXT",
          "signature": "NXTInternals -\u003e IO ()",
          "source": "src/Robotics-NXT-Protocol.html#terminate",
          "type": "function"
        },
        "index": {
          "description": "Stops all NXT activities by calling stopEverything and closes the Bluetooth serial device communication NXTInternals token must not be used after that anymore",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "terminate",
          "normalized": "NXTInternals-\u003eIO()",
          "package": "NXT",
          "signature": "NXTInternals-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction which initializes and terminates Bluetooth connection to the NXT brick (using \u003ccode\u003e\u003ca\u003einitialize\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eterminate\u003c/a\u003e\u003c/code\u003e) and in-between\nruns given computation. It terminates Bluetooth connection on an exception, too, rethrowing it afterwards.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "withNXT",
          "package": "NXT",
          "signature": "FilePath -\u003e NXT a -\u003e IO a",
          "source": "src/Robotics-NXT-Protocol.html#withNXT",
          "type": "function"
        },
        "index": {
          "description": "Function which initializes and terminates Bluetooth connection to the NXT brick using initialize and terminate and in-between runs given computation It terminates Bluetooth connection on an exception too rethrowing it afterwards",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "withNXT",
          "normalized": "FilePath-\u003eNXT a-\u003eIO a",
          "package": "NXT",
          "partial": "NXT",
          "signature": "FilePath-\u003eNXT a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:withNXT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites data to a file. At most 61 bytes can be written at a time.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "write",
          "package": "NXT",
          "signature": "FileHandle -\u003e FileData -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#write",
          "type": "function"
        },
        "index": {
          "description": "Writes data to file At most bytes can be written at time",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "write",
          "normalized": "FileHandle-\u003eFileData-\u003eNXT()",
          "package": "NXT",
          "signature": "FileHandle-\u003eFileData-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewrite\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error it\nthrows a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "writeConfirm",
          "package": "NXT",
          "signature": "FileHandle -\u003e FileData -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#writeConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as write but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "writeConfirm",
          "normalized": "FileHandle-\u003eFileData-\u003eNXT()",
          "package": "NXT",
          "partial": "Confirm",
          "signature": "FileHandle-\u003eFileData-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:writeConfirm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites data to an IO map of a given module. At most 54 bytes can be written at a time.\n\u003c/p\u003e\u003cp\u003eYou probably have to know what different values at different positions mean and control. The best way is to check NXT firmware\nsource code.\n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "writeIOMap",
          "package": "NXT",
          "signature": "ModuleID -\u003e IOMapOffset -\u003e IOMapData -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#writeIOMap",
          "type": "function"
        },
        "index": {
          "description": "Writes data to an IO map of given module At most bytes can be written at time You probably have to know what different values at different positions mean and control The best way is to check NXT firmware source code",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "writeIOMap",
          "normalized": "ModuleID-\u003eIOMapOffset-\u003eIOMapData-\u003eNXT()",
          "package": "NXT",
          "partial": "IOMap",
          "signature": "ModuleID-\u003eIOMapOffset-\u003eIOMapData-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:writeIOMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewriteIOMap\u003c/a\u003e\u003c/code\u003e but also request a confirmation. Useful to assure the command was really accepted. In a case of an error\nit throws a \u003ccode\u003e\u003ca\u003eNXTException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eConfirmation requires a change of the direction of NXT Bluetooth communication which takes around 30 ms. \n\u003c/p\u003e",
          "module": "Robotics.NXT",
          "name": "writeIOMapConfirm",
          "package": "NXT",
          "signature": "ModuleID -\u003e IOMapOffset -\u003e IOMapData -\u003e NXT ()",
          "source": "src/Robotics-NXT-Protocol.html#writeIOMapConfirm",
          "type": "function"
        },
        "index": {
          "description": "Same as writeIOMap but also request confirmation Useful to assure the command was really accepted In case of an error it throws NXTException Confirmation requires change of the direction of NXT Bluetooth communication which takes around ms",
          "hierarchy": "Robotics NXT",
          "module": "Robotics.NXT",
          "name": "writeIOMapConfirm",
          "normalized": "ModuleID-\u003eIOMapOffset-\u003eIOMapData-\u003eNXT()",
          "package": "NXT",
          "partial": "IOMap Confirm",
          "signature": "ModuleID-\u003eIOMapOffset-\u003eIOMapData-\u003eNXT()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/NXT/docs/Robotics-NXT.html#v:writeIOMapConfirm"
      }
    }
  ]
]