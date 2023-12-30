const love = document.getElementById("love");
const lovedItems = love.getElementsByTagName("li");

//add heart emoji to items in love list
for (let i = 0; i < lovedItems.length; i++) {
  const loved = lovedItems[i];
  loved.textContent = loved.textContent + " 💖";
}

const dislike = document.getElementById("dislike");
const dislikeItems = dislike.getElementsByTagName("li");

//add dislike emoji to items in dislike list
for (let i = 0; i < dislikeItems.length; i++) {
  const disliked = dislikeItems[i];
  disliked.textContent = disliked.textContent + " 👎";
}
