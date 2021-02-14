import json
from os import listdir
from os.path import isfile, join

DIR_PATH = "./txt_files"

concated_files = ""
prefixes = []

for f in listdir(DIR_PATH):
    file_path = join(DIR_PATH, f)
    if not isfile(file_path): continue

    if len(prefixes) < 25:
        with open(file_path) as file:
            words = file.read().split(" ")[:20]
            prefixes.append(" ".join(map(lambda w: w.replace("\n", " "), words)))
        continue

    with open(file_path) as file:
        concated_files += "\n==============\n" + file.read()

def write_file(file_name, data):
    file_name = join(DIR_PATH, file_name)
    with open(file_name, "w") as file:
        if not isinstance(data, str):
            json.dump(data, file)
        else:
            file.write(data)

write_file("concated", concated_files)
write_file("prefixes", prefixes)

