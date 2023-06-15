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
    print('Click on Faculty Button')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[1]/div[2]/ul/a[2]/li'))).click()
    print('Click on Delete Button')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/div/div[1]/div[8]/div/div'))).click()
    sleep(2)
    print('Click on Add New Button')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/div[2]/div[1]/a'))).click()
    sleep(2)
    WebDriverWait(driver,10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[1]/label/input'))).send_keys('pranav')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[2]/label/input'))).send_keys('223455677')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[3]/label/input'))).send_keys('admin1@agroesp.org')
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[4]/label/input'))).send_keys('1234567890')
    print('Select ECE')
    select = Select(WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[5]/label/select'))))
    select.select_by_visible_text('ECE')
    sleep(1)
    print('Select Assistant Professor')
    select1 = Select(WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[6]/label/select'))))
    select1.select_by_visible_text('Assistant Professor')
    sleep(1)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[7]/label/input'))).send_keys(Keys.BACK_SPACE)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[7]/label/input'))).send_keys('1')
    sleep(1)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[8]/label/input'))).send_keys(Keys.BACK_SPACE)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[8]/label/input'))).send_keys('2')
    sleep(1)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[9]/label/input'))).send_keys(Keys.BACK_SPACE)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[9]/label/input'))).send_keys('3')
    sleep(1)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[10]/label/input'))).send_keys(Keys.BACK_SPACE)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[10]/label/input'))).send_keys('4')
    sleep(1)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//*[@id="root"]/div/div/div[2]/form/div[11]/button'))).click()
    sleep(2)
finally:

    print('Automated Faculty Test Completed')
