"""Unitree System Manager
needs python3

Functions:
1. run bash files
2. delete uploaded packages
3. run update packages
4. process topics when modules shut down

author: Zhongkai Chen
site: www.unitree.com
"""

import time
import paho.mqtt.client as mqtt
import subprocess
import asyncio
import string
import os

updatePackage = ''
updateFirmware = ''
updatePackageCmd =""" 
printf "\033[0;34m\033[1m# Package Update\033[0m\n"
sh temp/run.sh
rm -rf temp
printf "\033[0;34m--------------\033[0m\n"
printf "\033[0;34m Package Update Finished\033[0m\n"
"""
updateFirmwareCmd =""" 
printf "\033[0;34m\033[1m# Firmware Update\033[0m\n"
cd temp
./update
cd ..
rm -rf temp
printf "\033[0;34m---------------\033[0m\n"
printf "\033[0;34m Firmware Update Finished\033[0m\n"
"""

printable = set(string.printable)

async def runCmd(cmd):
    proc = await asyncio.create_subprocess_shell(
        cmd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE
    )
    xx = ''
    while True:
        out = await proc.stdout.readline()
        if(out == b''):
            break
        filter(lambda x: x in printable, out)
        client.publish("usys/info",out,1)
        client.loop()


def on_connect(client,userdata,flags,rc):
    print("Unitree MQTT System Manager")
    print("Connected with result code " + str(rc))
    client.subscribe("usys/sh")
    client.subscribe("usys/delete")
    client.subscribe("usys/update_package")
    client.subscribe("usys/update_firmware")
    client.publish("usys/run",'ok',1,True)
    client.publish("usys/updating", '', 1, True)


def on_message(client, userdata, msg):
    global updatePackage
    global updateFirmware
    # not doing anything during update
    if(updatePackage !='' or updateFirmware !=''):
        return
        # run bash file
    if(msg.topic == "usys/sh"):
        bashFile = str(msg.payload,'utf-8')
        print("Running sh " + bashFile)
        process = subprocess.Popen(["sh", bashFile],stdout=subprocess.PIPE)
    # delete update packages
    elif(msg.topic == "usys/delete"):
        fileLink = str(msg.payload,'utf-8')
        os.system("rm " + fileLink)
        client.publish("usys/deleted",fileLink,1,False)
    # run update package
    elif(msg.topic == "usys/update_package"):
        updatePackage = str(msg.payload,'utf-8')
    # run update firmware
    elif(msg.topic == "usys/update_firmware"):
        updateFirmware = str(msg.payload,'utf-8')


client = mqtt.Client()
client.will_set("usys/run","",1,True)
client.on_connect = on_connect
client.on_message = on_message
client.connect("localhost",1883,60)

loop = asyncio.get_event_loop()
while True:
    client.loop()
    if(updatePackage != ''):
        client.publish("usys/updating", 'true', 1,True)
        unzipCmd = ("sh pre_update.sh '" + updatePackage + "';")
        loop.run_until_complete(runCmd(unzipCmd+updatePackageCmd))
        updatePackage = ''
        client.publish("usys/updating", '', 1,True)
    if(updateFirmware != ''):
        client.publish("usys/updating", 'true', 1,True)
        unzipCmd = ("sh pre_update.sh '" + updateFirmware + "';")
        loop.run_until_complete(runCmd(unzipCmd+updateFirmwareCmd))
        updateFirmware = ''
        client.publish("usys/updating", '', 1,True)
