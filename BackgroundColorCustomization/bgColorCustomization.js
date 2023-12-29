function changeBackgroundColor()
{
  const newColor = document.getElementById("fav-color").value;
  
  if(newColor == "black" || newColor == "Black")
  {
    document.body.style.backgroundColor = newColor;
    document.body.style.color = "white";
  }
  else
  {
    document.body.style.backgroundColor = newColor;
    document.body.style.color = "black";
  }
  
  let paragraph =   document.createElement('p');
  paragraph.textContent = "We've successfully changed the background color to " + newColor + "!";
  document.body.appendChild(paragraph);
}
