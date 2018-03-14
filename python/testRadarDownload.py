# -*- coding: utf-8 -*-
"""
Created on Wed Mar 14 14:30:47 2018

@author: Matts_Home
"""
#Script starts here
#-------------------------------------------------------------------------------
import urllib
import csv
from datetime import datetime
utcTime = datetime.utcnow()
print utcTime

url = 'https://radar.weather.gov/ridge/Conus/RadarImg/Conus_20180314_1608_N0Ronly.gif'
urllib.urlretrieve (url,'img.png')



