# Video Processing

Documentation for video processing to be used for instructions

## Video Parameters
- size: under 10 Mbytes (preferred under 5)
- aspect ratio: 16:9 (original); 640:360 (ffmpeg)
- length: no requirement
- format: any, likely mov if recorded on an iPhone (original); webp (ffmpeg)

### Installation Instructions for Windows

1. Unless anything has changed about the updates, install the full version ffmpeg-git-full.7z from [here](https://ffmpeg.org/download.html)

2. Unarchive the folder and put it in your user directory (or wherever you want to store it). You can rename it to "ffmpeg".

3. Go to "Edit system path variables" and add the "ffmpeg" folder to your user path variables, specifying its location.

4. Check to see that it has installed properly by typing "ffmpeg" into your terminal.

### Relevant Commands

Example command to convert to a single webp file (best format so far), since gifs are too large:

`ffmpeg -i test_nitrogen_valve.mp4 -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 640:360 test2.webp`

To loop through + create a new file for each processed file in a folder:

(replace avi with your file extension):

` for i in *.avi; do ffmpeg -i "$i" "${i%.*}.mp4"; done`

To loop through + process each .mov file according to our specifications:

`
for file in *.mov *.MOV; do
    ffmpeg -i "$file" \
           -vcodec libwebp \
           -compression_level 6 \
           -q:v 60 \
           -loop 0 \
           -preset picture \
           -an \
           -s 640x360 \
           -r 20 \
           "${file%.*}.webp"
done
`

