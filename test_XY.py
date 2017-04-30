import csv

with open('data1.csv') as csvfile:
    reader = csv.reader(csvfile)
    print(reader)
    for row in reader:
        print(','.join(row[:4]))
        break
