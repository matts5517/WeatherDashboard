#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      msilveira
#
# Created:     28/02/2017
# Copyright:   (c) msilveira 2017
# Licence:     <your licence>
#-------------------------------------------------------------------------------

import math, os, sys, time, datetime, xml.etree.ElementTree, json
from email.Utils import formatdate
print  time.asctime()
start = time.time()
#Script starts here
#-------------------------------------------------------------------------------
import urllib
import csv
from datetime import datetime
utcTime = datetime.utcnow()
print utcTime

url = 'http://www.spc.noaa.gov/climo/reports/170831_rpts.csv'
urllib.urlretrieve (url,'fileSevere.csv')

# url2 = 'https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913-m50m/{z}/{x}/{y}.png'
# urllib.urlretrieve (url,'radar.png')

print 'look'
jsonData = []
with open("fileSevere.csv", "rb") as f:
    reader = csv.reader(f, delimiter="\t")
    for i, line in enumerate(reader):
        line = str(line)[2:-2]
        listLine = line.split(',')
        time = listLine[0]
        if 'Raw Tornado LSR' in str(listLine):
            reportType = 'tornado'
        if 'Raw Wind/Gust LSR' in str(listLine):
            reportType = 'wind'
        if 'Raw Hail LSR' in str(listLine):
            reportType = 'hail'
        try:
            if reportType == 'hail':
                eventType = '3'
            if reportType == 'wind':
                eventType = '2'
            if reportType == 'tornado':
                eventType = '1'

            timeReported = listLine[0]
            size = listLine[1]
            location = listLine[2]
            county = listLine[3]
            state = listLine[4]
            lat = listLine[5]
            lon  = listLine[6]
            comments = listLine[7]

            d1 = {'type':'Feature','geometry':{'type':'Point', 'coordinates': [float(lon), float(lat)]},
            'properties': {'timeReported': timeReported,'size': size, 'location':location,'county':county ,'state':state,'eventType':eventType,'comments':comments , 'marker-symbol':'default_marker'}}
            jsonData.append(d1)

        except:
            print 'no index for this var'

jsonData = {'type': 'FeatureCollection', 'features': jsonData}
print jsonData
with open('severeData.json', 'w') as outfile:
    json.dump(jsonData, outfile, indent=4, separators=(',', ':'))

