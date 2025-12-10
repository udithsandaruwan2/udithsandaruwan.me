# How to Add Your Personal Photo

## Quick Guide

Your photo placeholder is ready in the Hero section. Follow these steps to add your actual photo:

### Option 1: Use the Photo from Attachments

1. Save your photo (the one you provided in the attachments) to the `public` folder:
   ```bash
   # Copy your photo to the public folder
   cp /path/to/your/photo.jpg /home/sandaruwan/us/udithsandaruwan.com/portfolio/public/profile.jpg
   ```

2. Open `src/components/Hero.jsx` in your editor

3. Find this section (around line 110):
   ```jsx
   {/* Placeholder - Replace with actual image */}
   <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
     <div className="text-center">
       <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
         <span className="text-6xl">👨‍💻</span>
       </div>
       <p className="text-gray-500 text-sm">Your Photo Here</p>
     </div>
   </div>
   {/* Uncomment and use when you add your photo */}
   {/* <img 
    ````markdown
    # How to Add Your Personal Photo (with transparent background)

    ## Quick Guide

    Your photo placeholder is ready in the Hero section. The Hero now attempts to load a cleaned transparent PNG at `/profile.png`. Follow these steps to add your actual photo and remove the background.

    ### Steps — download & remove background

    1. Download the image you shared (e.g. from the Gemini share link you provided).
      - Example link: `https://gemini.google.com/share/8160fff32860` (download the image from that page)

    2. Remove the background and export a transparent PNG:
      - Quick online option: https://www.remove.bg/ — upload the photo, download the result as a PNG with transparent background.
      - Free browser editor: https://www.photopea.com/ — open image, use the Magic Wand/Select Subject, delete background, `File > Export as > PNG`.

    3. Save the final transparent PNG to the `public/` folder and name it `profile.png`:
      ```bash
      # Example (run from repo root)
      cp /path/to/downloaded/profile-clean.png /home/sandaruwan/us/udithsandaruwan.com/portfolio/public/profile.png
      ```

    4. The app automatically displays `/profile.png` in the hero right-side frame. If the file is missing or fails to load, the hero falls back to the placeholder avatar.

    ### Notes about styling and placement

    - The recommended output is a transparent PNG (so the photo blends nicely with the black theme). A 3:4 aspect ratio (e.g. 600x800) fits the frame best.
    - The app applies a subtle grayscale + contrast filter to match the black theme. If you prefer full color, open `src/components/Hero.jsx` and remove the `filter grayscale contrast-90` classes on the `<img>`.

    ### Testing

    After adding `public/profile.png`:
    1. Save the file
    2. Dev server will auto-reload
    3. Open `http://localhost:5173/` and check the hero section (right side)

    ### Troubleshooting

    - If your image does not appear, verify the file exists in `public/profile.png` and is a PNG with transparency.
    - If you want to keep the original JPG without removing the background, you can still use it — save it as `public/profile.jpg` and update the `src` in `Hero.jsx` to point to that file, but the background will remain visible inside the frame.

    ---

    **Current Status**: The Hero attempts to load `/profile.png`. Place your cleaned transparent PNG there and it will be used automatically; otherwise the placeholder remains visible.

    ````
**Current Status**: The placeholder is visible. Once you add your photo and update Hero.jsx, it will display beautifully in the hero section against the black theme background.
