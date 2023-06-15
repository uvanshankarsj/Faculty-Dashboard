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

try:    
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[1]/div[4]/input[1]'))).send_keys(os.getenv('username'))
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[1]/div[4]/input[2]'))).send_keys(os.getenv('password'))
    sleep(1)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="checkbox"]'))).click()
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[1]/input'))).click()
    print('Login Success')
    sleep(3)
    print('Click on Course Button')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[2]/ul/a[3]/li'))).click()
    print('Click on Delete Button')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div/div[1]/div[10]/div/div'))).click()
    sleep(2)
    print('Click on Add New Button')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/div[1]/a'))).click()
    sleep(2)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[1]/label/input'))).send_keys('Course 1')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[2]/label/input'))).send_keys('CSE11')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[3]/label/textarea'))).send_keys('This is Course 1')
    print('Select CCE')
    select = Select(WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[4]/label/select'))))
    select.select_by_visible_text('CCE')
    sleep(1)
    # Course Start Date
    # Course End Date
    print('Select 4 Credits')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[7]/label/input'))).send_keys(Keys.BACK_SPACE)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[7]/label/input'))).send_keys('4')
    sleep(1)
    print('Select Online')
    select1 = Select(WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[8]/label/select'))))
    select1.select_by_visible_text('Online')
    sleep(1)
    print('Select Elective')
    select2 = Select(WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[9]/label/select'))))
    select2.select_by_visible_text('Elective')
    sleep(1)
    print('Select Ongoing')
    select3 = Select(WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[10]/label/select'))))
    select3.select_by_visible_text('Ongoing')
    sleep(1)
    print('Click on Add Course Button')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[11]/button'))).click()
    sleep(2)
finally:
    print('Automated Course Test Completed')