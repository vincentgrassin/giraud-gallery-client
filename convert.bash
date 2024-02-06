#!/bin/bash
echo "Start converting"

# Define the base directory
main_dir=$(pwd)
base_dir="static/images/giraud-images"

# Loop through letters from A to Z
for folder_letter in {A..V}; do

    echo "$base_dir/$folder_letter"
    cd "$base_dir/$folder_letter" || continue

    current_dir=$(pwd)
    echo "Current directory: $current_dir"
    destination_dir="main"
    mkdir -p "$destination_dir"


    current_dir=$(pwd)
    echo "Current directory: $current_dir"

    # Create WebP thumbnails with the desired naming pattern
    for file in *.jpg; do
        base_name="${file%.*}"   # Extract the base name without extension
        wepb_name="${base_name}.webp"
        thumbnail_name="${base_name}-thumbnail.webp"
        
        # Convert to fullsize webp
        mogrify -format webp "$file"

        mv "$wepb_name" "$destination_dir"



    done

    for file in *.jpg; do
        base_name="${file%.*}"   # Extract the base name without extension
        wepb_name="${base_name}.webp"
        thumbnail_name="${base_name}-thumbnail.webp"
        
        # Create thumbnail
        mogrify -format webp -resize 300x300 "$file"

        mv "$wepb_name" "$thumbnail_name"
        mv "$thumbnail_name" "$destination_dir"

        

    done


    echo "Done converting folder $folder_letter"
    cd "$main_dir"
done

echo "All folders converted"
