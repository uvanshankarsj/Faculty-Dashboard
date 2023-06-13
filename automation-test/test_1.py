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

driver = webdriver.Safari()
driver.maximize_window()
driver.get('http://localhost:3000')

# Login
try:
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[1]/div[4]/input[1]'))).send_keys(os.getenv('username'))
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[1]/div[4]/input[2]'))).send_keys(os.getenv('password'))
    sleep(1)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="checkbox"]'))).click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[1]/input'))).click()
    print('Login Success')
    sleep(10)
finally:
    print('Automated Test Completed')
