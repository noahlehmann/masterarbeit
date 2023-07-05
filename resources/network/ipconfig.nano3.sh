#!/bin/bash
# unitree@nx:~/Unitree/autostart/ipconfig$ cat ipconfig.sh

scriptPath=/home/unitree/Unitree/autostart/
export SUDO_ASKPASS=${scriptPath}passwd.sh
eval echo "[ipconfig] starting ... " $toStartlog
val=`ls -a | grep ".ip_log" | wc -w`
if [[ $val -eq 0 ]]; then
     sudo ./system_ipconfig
     sudo /etc/init.d/networking restart
     sudo /etc/init.d/network-manager restart
     retv=32
     while [ "$retv" != "64" ]
     do
          ping 192.168.123.161 -c 4 > tmp
          retv=$(cat tmp | grep "bytes from" | head -n 1 | awk '{print $1}')
          sleep 0.5
     done
     eval echo "[ipconfig] finished ... " $toStartlog
     rm tmp
     sync
     touch .ip_log
else
     eval echo "[ipconfig] skipped ... " $toStartlog
fi
val=`ls /home/unitree/catkin_ws/src/slamrplidarV2.0/slam_planner/scripts/ | wc -w`
if [[ $val -gt 0 ]]; then
     sudo ifconfig eth0:0 192.168.11.110 netmask 255.255.255.0 up
fi
localIPAddr=`ifconfig -a|grep inet|grep -v 127.0.0.1|grep -v inet6|head -n 1|awk '{print $2}'|tr -d "addr:"`
if [ $localIPAddr == "192.168.123.17" ];then
     rm .ip_log
fi
