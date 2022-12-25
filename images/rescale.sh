#!/bin/bash
#used to generate thumbnails in directory in new directory

[ -z $scale ] && scale=240

files=$(ls | grep -a .jpg)
files="$files $(ls | grep -a .png)"
mkdir thumbnails

for f in $files
do
	mem="$mem$f "
	if [ ${f##*.} != $f ]
	then
		ffmpeg -loglevel error -y -i "${mem::-1}" -q:v 1 -vf scale=$scale:$scale/iw*ih thumbnails/${mem%.*}.${mem##*.} &
		mem=
	fi 
done
