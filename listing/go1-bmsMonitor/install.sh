#!/bin/bash

DIR="/home/pi/Unitree/autostart/"
STARTUP_FILE=".startlist.sh"
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

if ! command -v python &> /dev/null
then
  echo "python could not be found, exiting..."
  exit 1
fi

if ! [ -d "$DIR" ];
then
  echo "$DIR was not found, exiting..."
  exit 1
fi

if [ -f "$STARTUP_FILE" ];
then
  echo "$STARTUP_FILE was not found, exiting..."
  exit 1
fi

if grep -q "bmsMonitor" "$DIR$STARTUP_FILE" ;
then
  echo "bmsMonitor already in $STARTUP_FILE";
else
  echo "bmsMonitor" >> "$DIR$STARTUP_FILE"
fi


# remove folder, don't care if not there
rm -r "$DIR/bmsMonitor" &> /dev/null
# make symlinks to git repo
cp -rs "$SCRIPT_DIR/bmsMonitor" "$DIR"
# real copy of script as symlink won't work
cp -f "$SCRIPT_DIR/bmsMonitor/bmsMonitor.template.sh" "$DIR/bmsMonitor/bmsMonitor.sh"
# make scripts executable
chmod +x "$DIR/bmsMonitor/bmsMonitor.sh" "$SCRIPT_DIR/bmsMonitor/run.sh"
