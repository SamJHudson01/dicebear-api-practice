const avatarImage = document.getElementById("avatar-image");
const avatarContainer = document.getElementById("avatar-container");
const generateNewAvatarBtn = document.getElementById("generate-new");



async function getNewAvatar() {
    const apiUrl = "https://avatars.dicebear.com/api/male/testseed.svg";
    try {
        const newAvatar = await fetch(apiUrl);
        img = document.createElement('img');
        img.src = newAvatar.url;
        avatarImage.appendChild(img);
    } catch (error) {
        //catch error here
    }

}

getNewAvatar();