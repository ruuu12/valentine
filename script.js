let noClicks = 0;

// List of videos for each "No" click
const noVideos = [
    "sad images/s0.mp4",
    "sad images/s1.mp4",
    "sad images/s2.mp4",
    "sad images/s3.mp4",
    "sad images/s4.mp4",
    "sad images/s6.mp4",
    "sad images/s7.mp4",
    "sad images/s8.mp4",
    "sad images/s9.mp4",
    "sad images/s10.mp4"
];

// List of sweet messages for each "No" click
const messages = [
    "Are you sure Cheese? 🥺",
    "But I love you! 🥰💕",
    "I think you are clicking the wrong button 😮😮",
    "Please Don't break my heart! 🥺💔",
    "Think about all our memories! 📸",
    "Your life will be tasteless like that coffee we drank yesterday! 😘",
    "You will not find anyone to love me like i do... 🥺😘",
    "Pretty please? 🥺",
    "You're my everything! 💖",
    "Ok, no more no's! Wasala calm down! 😆"
];

const yesVideo = "happy.mp4";  // Video when "Yes" is clicked
const yes2Video = "1stpage.mp4";
const video = document.getElementById("valentine-video");
const messageText = document.getElementById("message");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("click", function () {
    if (noClicks < noVideos.length - 1) {
        video.src = noVideos[noClicks];  // Change video
        video.load(); // Reload video source
        messageText.innerText = messages[noClicks];  // Change message
        yesBtn.style.fontSize = `${20 + noClicks * 15}px`;  // Make "YES" button bigger
        noBtn.style.fontSize = `${20 - noClicks}px`;  // Shrink "NO" button
    } else {
        video.src = noVideos[noVideos.length - 1];  // Last "No" video
        video.load();
        messageText.innerText = "Okay, you have no choice now! 😆💖";
        noBtn.style.display = "none";  // Hide "NO" button
        yesBtn.style.fontSize = "150px";  // Make "YES" button huge
    }
    noClicks++;
});

yesBtn.addEventListener("click", function () {
    document.body.innerHTML = "<h1>Yayyy! BABY WANTS ME! Can't wait for our 3rd Valentine's Date! 🥰💖</h1>" +
                                "<h1> Cheese and Chubeebs Forever and Ever!!! 🥰💖</h1>" + 
                              `<video width="300" autoplay loop muted>
                                  <source src="${yesVideo}" type="video/mp4">
                                  Your browser does not support the video tag.
                               </video>` + 
                              "<p>I think I am the best decision that you ever made! 😋😘😘</p>" +
                              " <p>You and me in a candlelight dinner, soft music, red wine and some crispyyy battered cuttlefish! </p>" + 
                              "<p> (You are gonna pay the bill right? buy food for babyy and make baby fatttt..🥺 i will buy dessert) 💕</p>" +
                              "<p>Get ready to shower baby more and moreee loveee! 🌹✨</p>"+
                              "<p>Api Nai wage ethila imuuu babe! 🥰💖</p>"
                        
                              ;

});
