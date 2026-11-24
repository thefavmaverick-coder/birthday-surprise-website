# 🎂 Birthday Surprise Website

**Create a beautiful, personalised birthday surprise for someone special!**

A creative and animated birthday website template designed to help anyone express their wishes in a unique and memorable way.

This project allows you to customise the birthday person's name, photos, background music, flowers and birthday messages. You can create your own version and share it with someone special through a website link or QR code.

## ✨ Features

- 🎉 Personalised birthday welcome screen
- 💌 Custom birthday wishes and messages
- 🌸 Animated flower and petal effects
- 📸 Personal photo gallery
- 🎵 Background birthday music
- 💜 Beautiful dark-purple themed design
- ✨ Smooth animations and transitions
- 📱 Responsive design for mobile and desktop
- 🌐 Easy deployment using Vercel or other static website hosting platforms

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Vercel (deployment)

## 📂 Project Structure

```text
birthday-surprise-website/
│
├── index.html
├── style.css
├── flowers.css
├── script.js
│
├── images/
│   ├── all-flowers.png
│   ├── photo1.jpeg
│   ├── photo2.jpeg
│   ├── photo3.jpeg
│   ├── photo4.jpeg
│   ├── photo5.jpeg
│   └── photo6.jpeg
│
├── music/
│   └── birthday-song.mp3
│
└── README.md
```

*Your actual folder and filenames may differ. Keep the file paths in your code consistent with your project.*

## 🚀 How to Use This Project

You don't need to build the entire website from scratch. Follow these steps to create your own birthday website.

### Step 1: Download or Clone the Repository

Clone this project:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Or download the repository as a ZIP file and extract it.

### Step 2: Open the Project

Open the extracted project folder in Visual Studio Code.

### Step 3: Customise the Birthday Person's Name

Open `script.js` and find the configuration section.

Change the birthday person's name:

```javascript
const CONFIG = {
  birthdayName: "YOUR_PERSON_NAME",

  photos: [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg",
    "images/photo5.jpeg",
    "images/photo6.jpeg"
  ],

  songFile: "music/birthday-song.mp3",

  flowerImage: "images/all-flowers.png"
};
```

Replace `YOUR_PERSON_NAME` with the name of the person celebrating their birthday.

### Step 4: Add Your Own Photos

1. Open the `images` folder.
2. Remove the example photos.
3. Add your own photographs.
4. Update the photo filenames in the configuration section if necessary.

Example:

```javascript
photos: [
  "images/memory1.jpg",
  "images/memory2.jpg",
  "images/memory3.jpg"
]
```
```index.html
photos: [
  "images/memory1.jpg",
  "images/memory2.jpg",
  "images/memory3.jpg"
]
```

Make sure the filenames and image paths match.

### Step 5: Add Your Own Background Music

1. Open the `music` folder.
2. Add your preferred birthday song or music file.
3. Update the `songFile` value.

Example:

```javascript
songFile: "music/my-birthday-song.mp3"
```

**Note:** Browsers may block autoplay with sound until the visitor interacts with the page. The visitor may need to tap the page or unlock button to start the music.

Only use music that you have permission to share.

### Step 6: Customise the Flowers

Replace the flower image in the `images` folder with your preferred flower artwork.

Update the configuration:

```javascript
flowerImage: "images/my-flowers.png"
```

Keep the image format and path consistent with your code.

### Step 7: Add Your Birthday Wishes

Open `index.html` and `script.js`.

Find the existing birthday message content and replace it with your own wishes.

You can write:
- A personal birthday greeting
- Special memories
- Heartfelt messages
- Birthday wishes
- A final surprise message

Make sure you update every place where the original example name or message appears.

### Step 8: Preview Your Website

You can open `index.html` in your browser or use the Live Server extension in Visual Studio Code.

Check that:
- The birthday name is correct.
- Your photos are displayed.
- The music works after user interaction.
- The flowers and animations work.
- All birthday messages are updated.
- The website works on mobile and desktop.

## 🌐 Deploy Your Birthday Website

You can publish your personalised website online using Vercel.

1. Create a GitHub repository for your customised version.
2. Push your project files to GitHub.
3. Visit [Vercel](https://vercel.com/).
4. Sign in using your GitHub account.
5. Import your birthday website repository.
6. Deploy the project.
7. Copy your live website URL.

Now you can share your birthday website with someone special!

## 📱 Share Your Surprise Using a QR Code

Once your website is deployed:

1. Copy your live website URL.
2. Generate a QR code using that URL.
3. Add the QR code to a birthday card.
4. Let the birthday person scan it using their phone camera.

They can also open the website URL directly on a laptop for a bigger experience.

## 🎨 Customisation Ideas

You can make every birthday website unique by changing:

- Birthday person's name
- Birthday messages
- Photos and memories
- Background music
- Flower artwork
- Colours and themes
- Fonts and animations
- Website title

## 💡 Important Notes

- This is a reusable website template. Create a separate copy for each birthday celebration.
- Replace all sample names, messages, images and music before sharing your version.
- Do not upload private photographs or personal information without permission.
- Large image and audio files can increase loading time.
- Check the website on both mobile and desktop before sharing.
- Make sure you have permission to use any music, images or other assets you include.

## ❤️ Purpose of This Project

A birthday wish doesn't always have to be a simple message or greeting card.

This project makes it possible to create a small digital experience filled with photographs, music, flowers, memories and heartfelt wishes.

**Create something personal. Share a little happiness. Make someone's birthday memorable!** 🎂🌸

## ⭐ Support

If you find this project useful, consider giving the repository a star ⭐ and sharing it with someone who would love to create a personalised birthday surprise.

Happy Creating! 💜
