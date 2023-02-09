#!/bin/bash

ubus call system board > /www/netdata/ubus/sysboard.json
ubus call network.interface.lan status > /www/netdata/ubus/brlan.json
ubus call network.interface.wan status > /www/netdata/ubus/eth1.json