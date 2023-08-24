#!/bin/bash
myNow=$(date +"%T")
eval echo "$myNow [diagnosis] starting... " $toStartlog
sleep 30
myNow=$(date +"%T")
eval echo "$myNow [diagnosis] starting the monitor" $toStartlog

python3 -m pip install -r /home/pi/Unitree/autostart/bmsMonitor/requirements.txt
python3 /home/pi/Unitree/autostart/bmsMonitor/snif_bms.py

