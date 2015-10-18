import os
import subprocess

allFiles = os.listdir(os.getcwd())
files = []

for file in allFiles:
	if ".pdf" in file:
		files.append(file)
		
for file in files: 
	subprocess.call(["pdftotext", file])

	
