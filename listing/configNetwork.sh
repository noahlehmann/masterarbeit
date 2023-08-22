#!/bin/bash
eval echo "[configNetwork] starting... " $toStartlog
# configure 4G
sudo ifconfig wlan0 down
sudo ifconfig wlan1 down
sudo ifconfig wlan2 down
sudo ifconfig wwan0 down

_EC25=$(lsusb | sed -n '/EC/P' | wc -c)
if [[ _EC25 -gt 10 ]]; then
  eval echo "[configNetwork] 4G module detected" $toStartlog
  sudo ifconfig eth0 down
  sudo ifconfig eth1 down
  sudo ./ppp/quectel-pppd.sh&
  _ppp0Count=0
  sleep 1
  while [[ $_ppp0Count -lt 6 ]]
  do
    sleep 1
    ((_ppp0Count++))
    eval echo "[configNetwork] waiting for ppp0" $toStartlog
    _ppp0=`ifconfig | grep 'ppp0' | wc -c`
    sleep 1
    if [[ $_ppp0 -gt 10 ]]; then
      eval echo "[configNetwork] ppp0 obtained" $toStartlog
      break
    fi
    sleep 1
  done
  sleep 1
  sudo ifconfig eth0 up
  sudo ifconfig eth1 up
fi

# configure WIFI
sudo ifconfig wlan1 192.168.12.1/24
sudo ifconfig wlan1 up
sudo hostapd /etc/hostapd/hostapd.conf&
eval echo "[configNetwork] config WIFI" $toStartlog
sleep 5

sudo ./connectWifi2.sh&
