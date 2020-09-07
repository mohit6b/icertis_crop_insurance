import os
import time
import pdfplumber
import pytesseract
from PIL import Image
import re
from datetime import datetime

class Features():
    def __init__(self,text):
        self.text = text

    def issued_on(self,):
        match = re.search(r'(?<=Issued on )(\d{2}/\d{2}/\d{2})', text)
        value = [datetime.strptime(match.group(), '%d/%m/%y').date()]
        return(value)

    def valid_thru(self,):
        match = re.search(r'(?<=Valid Thru )(\d{1}/\d{1}/\d{2})', text)
        date = [datetime.strptime(match.group(), '%d/%m/%y').date()]
        return date

    def farm_cooridnates(self,):
        patterns = re.compile(r'\d{3}.\d{4,}')
        value = []
        matches = re.finditer(patterns,text)
        if matches:
            for match in matches:
                value.append(match.group(0))
        return value

    def invoice(self,):
        patterns = re.compile(r'\d+\w+-\w+-\w+')
        value = []
        matches = re.finditer(patterns,text)
        if matches:
            for match in matches:
                value.append(match.group(0))
        return value
    def price_insured(self,):
        patterns = re.compile(r'\$\d{1,},\d{1,}.\d{1,}')
        value = []
        match = re.finditer(patterns,text)
        if match:
            value  = [i.group(0) for i in match]
        return value
    def beneficiary_name(self,):
        patterns = re.compile(r'(?<=Beneficiary :)(\s+\w{5,}\s+\w{0,10})')
        value = []
        match = re.finditer(patterns,text)
        if match:
            value  = [i.group(0) for i in match]
        return value

def extract_values(text,fields_to_extract):
    ex = Features(text)
    values = dict()
    for i in fields_to_extract:
        values[i] = getattr(ex,i)()
    return values

if __name__ == '__main__':
    fields_to_extract = ["beneficiary_name","issued_on","valid_thru","farm_cooridnates","invoice","price_insured"]
    values = []
    pdf_files_dir = '/home/mohit/Desktop/mohit/desk/Hyd/StaTwig/31-07_Latest/ServerApiMilking/01-08-ServerApis_final_evening_gorgr-69923/test'
    data  = dict()
    try:
        for file in os.listdir(pdf_files_dir):
            print(file)
            filename = os.path.splitext(file)[0]
            fileformat =  os.path.splitext(file)[1].lower()
            if fileformat in [".pdf"]:
                pdf_path = os.path.join(pdf_files_dir, file)
                pdf = pdfplumber.open(pdf_path)
                #works for a single page file
                for page in pdf.pages:
                    text = page.extract_text()
                    data[filename+fileformat] = text  
            elif fileformat in [".png"]:
                pdf_path = os.path.join(pdf_files_dir, file)
                text = pytesseract.image_to_string(Image.open(pdf_path))
                cleaned_text = text.strip().replace('\n'," ")
                data[filename+fileformat] = cleaned_text 
            value = dict() 
            for i in data.keys():
                text = data[i].replace('\n'," ")
                #extract field level details
                value[i] = extract_values(text,fields_to_extract)
                values.append(value)
#                return values
                print(values)
            else:
                pass     
    except:
        pass
