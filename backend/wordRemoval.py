import os
import subprocess



allFiles = os.listdir(os.getcwd())
files = []

for file in allFiles:
	if ".txt" in file and "cleaned" not in file:
		files.append(file)


for file in files:
	infile = file
	outfile = "cleaned_" + file
	delete_list = ["the", "for", "I", "have", "has", "in", "an", "to"]
	fin = open(infile)
	fout = open(outfile, "w+")
	for line in fin:
		for word in delete_list:
			line = line.replace(word, "")
		fout.write(line)
	fin.close()
	fout.close()

	
	