from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select


from time import sleep
import os
from dotenv import load_dotenv
load_dotenv()

driver = webdriver.Chrome(executable_path=os.getenv('driver_path'))
driver.maximize_window()
driver.get('http://localhost:3000')

