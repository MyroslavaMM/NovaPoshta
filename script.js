let images = document.getElementsByClassName('item');
let img = 0;

for(let i = 0; i < images.length; i++) 
{
	images[i].style.display = "none";
}
images[0].style.display = "block";

setInterval(countImg, 5000);

function countImg()
{
	if (img < images.length - 1) 
    {
		img++;
		images[img].style.display = "block";
		images[img - 1].style.display = "none"; 
	}
	else
	{			
		images[img].style.display = "none";
		img = 0;
		images[img].style.display = "block"; 
	}
}
