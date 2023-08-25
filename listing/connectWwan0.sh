#!/bin/bash
# /home/pi/Unitree/autostart/configNetwork/connectWwan0.sh

sleep 1
echo "[connectWwan0] Preparing environment for wwan0 interface" $toStartlog
sudo systemctl stop ModemManager
echo "[connectWwan0] Start initializing wwan0 interface" $toStartlog
sudo ifconfig wwan2 up
sudo qmicli -p -d /dev/cdc-wdm0 --device-open-net='net-raw-ip|net-no-qos-header' --wds-start-network="apn='internet',ip-type=4" --client-no-release-cid
echo "[connectWwan0] Getting IP for wwan0 interface" $toStartlog
sudo udhcpc -q -f -i wwan0
echo "[connectWwan0] Connected wwan0 to internet" $toStartlog
sleep 3

