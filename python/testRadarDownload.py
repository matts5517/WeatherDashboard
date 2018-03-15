# -*- coding: utf-8 -*-
"""
Created on Wed Mar 14 14:30:47 2018

@author: Matts_Home
"""
#Script starts here
#-------------------------------------------------------------------------------
## this script downloads a USA wide radar .gif image and stores it in 
## the amazon elastic files system in the data folder
import urllib
import os

import csv
from datetime import datetime
utcTime = datetime.utcnow()
print utcTime

url = 'https://radar.weather.gov/ridge/Conus/RadarImg/latest_radaronly.gif'
urllib.urlretrieve (url,'/var/www/html/efs/data/latestRadarImage.gif')
