import struct

import paho.mqtt.client as mqtt

from constants import HOSTNAME, PORT, TIMEOUT, BMS_STATE_TOPIC, CONTROLLER_ACTION_TOPIC
from led_control import alert_led, const_led


def on_connect(c, userdata, flags, rc):
    c.subscribe(BMS_STATE_TOPIC)


def on_message(c, userdata, msg):
    print("message")
    [ver0, ver1, status, soc, current, cycle, temp0, temp1,
     temp2, temp3, cell_v0, cell_v1, cell_v2, cell_v3,
     cell_v4, cell_v5, cell_v6, cell_v7, cell_v8, cell_v9] \
        = struct.unpack('BBBBiHBBBBHHHHHHHHHH', msg.payload)
    if not bms_responding(msg.payload):
        const_led(c, 10, 10, 0)
    elif 5 >= soc:
        alert_led(c, 255, 0, 0)
        lay_down()


def bms_responding(payload):
    # if payload only zeros, return false;
    return 0 != int.from_bytes(payload, byteorder='big')


def lay_down():
    client.publish(CONTROLLER_ACTION_TOPIC, payload="standDown")
    client.publish(CONTROLLER_ACTION_TOPIC, payload="damping")


client = mqtt.Client("Stick Data")
client.on_connect = on_connect
client.on_message = on_message

client.connect(HOSTNAME, PORT, TIMEOUT)

try:
    client.loop_forever()
except:
    client.disconnect()
