# -*- coding: utf-8 -*-
import sys

#10 possible particles
particles = ['は','を','が','の','を','て','に','へ','と']

if(len(sys.argv) < 3):
    print("Please enter files for processing")
    sys.exit()

golden = open(sys.argv[1],'r')
MToutput = open(sys.argv[2],'r')

line_golden = (golden.readline()).rstrip('\n')
line_MToutput = (MToutput.readline()).rstrip('\n')

alignments = []

list_golden = line_golden.split(" ")
list_MToutput = line_MToutput.split(" ")

print(list_golden)
print(list_MToutput)
