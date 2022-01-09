const avatarImage = document.getElementById("avatar-image");
const avatarContainer = document.getElementById("avatar-container");
const generateNewAvatarBtn = document.getElementById("generate-new");
const maleRadio = document.getElementById("male-radio");
const femaleRadio = document.getElementById("female-radio");

let initialLoad = true;



async function getNewAvatar() {
    let avatarName = "initialAvatar";
    if (!initialLoad) {
        avatarName = prompt("Please enter your avatar's name");
    }
    const apiUrl = "https://avatars.dicebear.com/api/male/testseed.svg";
    try {
        const newAvatar = await fetch(apiUrl);
        img = document.createElement('img');
        img.src = newAvatar.url;
        avatarImage.appendChild(img);
    } catch (error) {
        //catch error here
    }
    initialLoad = false;

}

getNewAvatar();