const videoList = [
  {
    id: "1",
    title: "Big Buck Bunny",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: 9872,
    author: "Vlc Media Player",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "2",
    title: "The first Blender Open Movie from 2006",
    thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: 76521,
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description:
      "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "3",
    title: "For Bigger Blazes",
    thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: 5632,
    author: "T-Series Regional",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description:
      "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "4",
    title: "For Bigger Escape",
    thumbnailUrl:
      "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: 863,
    author: "T-Series Regional",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description:
      " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
  {
    id: "5",
    title: "Big Buck Bunny",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: 2333,
    author: "Vlc Media Player",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "7",
    title: "For Bigger Escape",
    thumbnailUrl:
      "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
    duration: "8:18",
    uploadTime: "May 9, 2011",
    views: 24969123,
    author: "T-Series Regional",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description:
      " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    subscriber: "25254545 Subscribers",
    isLive: true,
  },
  {
    id: "8",
    title: "The first Blender Open Movie from 2006",
    thumbnailUrl: "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: 269123,
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    description:
      "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
  {
    id: "9",
    title: "Subaru Outback On Street And Dirt",
    thumbnailUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: 2623,
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    description:
      "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
  {
    id: "10",
    title: "Tears of Steel",
    thumbnailUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: 11650,
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    description:
      "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - http://www.tearsofsteel.org",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
  {
    id: "11",
    title: "Volkswagen GTI Review",
    thumbnailUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: 45650,
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    description:
      "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
  {
    id: "12",
    title: "We Are Going On Bullrun",
    thumbnailUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: 234,
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description:
      "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
  {
    id: "13",
    title: "What care can you get for a grand?",
    thumbnailUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
    duration: "12:18",
    uploadTime: "May 9, 2011",
    views: 8873,
    author: "Blender Inc.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    description:
      "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
    subscriber: "25254545 Subscribers",
    isLive: false,
  },
];

export default videoList;
