#!/bin/bash
cd /home/pi/UnitreeUpgrade
python3 ./startup_manager.py  &
python3 ./startup_uploader.py &

cd /home/pi/Unitree/autostart
./update.sh &