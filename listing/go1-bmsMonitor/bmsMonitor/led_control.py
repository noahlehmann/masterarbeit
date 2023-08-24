import struct
import time

from constants import FACE_LIGHT_TOPIC, QOS


def alert_led(client, r, g, b):
    client.publish(FACE_LIGHT_TOPIC, struct.pack('BBB', r, g, b), qos=QOS)
    time.sleep(1)
    client.publish(FACE_LIGHT_TOPIC, struct.pack('BBB', 0, 0, 0), qos=QOS)
    time.sleep(1)


def const_led(client, r, g, b):
    client.publish(FACE_LIGHT_TOPIC, struct.pack('BBB', r, g, b), qos=QOS)
    time.sleep(1)
