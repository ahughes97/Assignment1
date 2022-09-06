//Curtain Menu 
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";
}

//--------------------------------------------------------------------

//alert("Hello");

let electronicItems = [{id: 0, name: "Everis Tablet", description: "Everis 10.1 inch Android 9.0 Tablet has 3GB RAM, 32GB of expandable storage, and has WIFI and Bluetooth.", image_url: "https://www.noelleeming.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-nlg-master-catalog/default/dw842eca84/images/hi-res/2D/BE/N187117_0.jpg?sw=765&sh=765"},
					   {id: 1, name: "Lenovo Tablet", description: "Lenovo M8 Tablet has 2GB RAM, 32GB storage, and 5-point multi touch.", image_url: "https://www.noelleeming.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-nlg-master-catalog/default/dwbb9fcad6/images/hi-res/27/D4/N191981_0.jpg?sw=765&sh=765"},
					   {id: 2, name: "Samsung Galaxy Tab", description: "Samsung Galaxy Tab A7 with 8.7 inch display, has a 5100mAh battery, external memory, and 8.0MP rear camera and 2.0MP front camera.", image_url: "https://www.noelleeming.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-nlg-master-catalog/default/dwe1fcf1fd/images/hi-res/8E/48/N206284_0.jpg?sw=765&sh=765"},
					   {id: 3, name: "Lenovo Tablet", description: "Lenovo M10 10.1 inch Tablet has 2GB RAM, 32GB memory, and 10-point multi touch.", image_url: "https://www.noelleeming.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-nlg-master-catalog/default/dw47ad3445/images/hi-res/97/A8/N191982_0.jpg?sw=765&sh=765"},
					   {id: 4, name: "Samsung Tablet", description: "Samsung Tab S6 Lite is compact and light, offers a Galaxy connected experience, and includes a note-taking S Pen.", image_url: "https://www.noelleeming.co.nz/dw/image/v2/BDMG_PRD/on/demandware.static/-/Sites-nlg-master-catalog/default/dw6154ddc6/images/hi-res/9C/11/N212489_0.jpg?sw=765&sh=765"},
];

//--------------------------------------------------------------------

//Slideshows

//Manual Slideshow
let manualIndex = 0; //Initial slide = 0

function nextItem() {
	//Increase the index by if the index < or = the length if electronisItems array
	//If the index = 4, move back to the first item: index = 0
	if (manualIndex < electronicItems.length - 1) {
		manualIndex++;
	} else {
		manualIndex = 0;
	}
	
	//Extract the name, image url, description and display on HTML Elements
	//Change title
	document.getElementById("manual-slide-name").innerHTML = electronicItems[manualIndex].name;
	document.getElementById("manual-slide-image").src = electronicItems[manualIndex].image_url;
	document.getElementById("manual-item-description").innerHTML = electronicItems[manualIndex].description;
}

function previousItem() {
	//Increase the index if the index is not 0
	if (manualIndex > 0) {
		manualIndex--;
	} else {
		manualIndex = electronicItems.length -1;
	}
	
	//Extract the title, image url, description and display on HTML Elements
	document.getElementById("manual-slide-name").innerHTML = electronicItems[manualIndex].name;
	document.getElementById("manual-slide-image").src = electronicItems[manualIndex].image_url;
	document.getElementById("manual-item-description").innerHTML = electronicItems[manualIndex].description;
}

//Automatic Slideshow
let autoIndex = 0; //Initial slide = 0

function autoSlideshow() {
	//Change the autoIndex
	if (autoIndex < electronicItems.length - 1) {
		autoIndex++;
	} else {
		autoIndex = 0;
	}
	
	//Extract title, image url and display on HTML Elements
	document.getElementById("auto-slide-name").innerHTML = electronicItems[autoIndex].name;
	document.getElementById("auto-slide-image").src = electronicItems[autoIndex].image_url;
	document.getElementById("item-description").innerHTML = electronicItems[autoIndex].description;
	
	//Wait 2 second and display next movie
	setTimeout(autoSlideshow, 2000); //Automatically change slide every 2 seconds
}

//Execute the autoSlideshow function when loading the website
autoSlideshow();

//--------------------------------------------------------------------

//Dropdown Menu

//Populate the "select" element with all items in the list
function loadItem() {
	//Find the "select" element
	let itemSelect = document.getElementById("itemList");
	
	//Loop through all items in the list (array)
	for(var i=0; i < electronicItems.length ; i++) {
		//Extract title and add to "select" element
		//Create a new option
		let optionNode = document.createElement("option");
		//Assign the option "value"
		optionNode.value = electronicItems[i].id.toString();
		//Assign the option "content"
		optionNode.textContent = electronicItems[i].name.toString();
		//Append this option to the "select" element
		itemSelect.appendChild(optionNode);
	}
	//Set the first item as selected option in dropdown list
	itemSelect.selectedIndex = "0";
}

//Outside function - execute loadMovie when loading the website
loadItem();

//Event: Listen to the event "select an item"
//When you select a particular item, display title/url/description of that item
function displayItem() {
	//Get the selected item "option value"
	let selectedItemIndex = document.getElementById("itemList").value;
	document.getElementById("selectedItemName").innerHTML = electronicItems[selectedItenIndex].name;
	document.getElementById("selectedItemDescription").innerHTML = electronicItems[selectedItemIndex].description;
	document.getElementById("selectedItemURL").src = electronicItems[selectedItemIndex].image_url;
}

//--------------------------------------------------------------------

//Add new item

function AddItemToList() {
	//Get entered item data
	let newItemName = document.getElementById("add-item-name").value;
	let newItemDescription = document.getElementById("add-item-description").value;
	let newItemUrl = document.getElementById("add-item-image-url").value;
	let newId = electronicItems.length;
	
	//Validate input before adding new item
	if ((newItemName == "") || (newItemDescription == "") || (newItemUrl == "")) {
		alert("ERROR. DATA IS INCOMPLETE.");
	} else {
		//Add a new item
		electronicItems.push({id: newId, name: newItemName, description: newItemDescription, image_url: newItemUrl});
		//document.write(allAccounts[1].user + "," + allAccounts[1].pass);
		alert("NEW ITEM ADDED SUCCESSFULLY.");
		
		//Reload the dropdown list
		//Remove all current options
		document.getElementById("itemList").options.length = 0;
		//Load updated options
		loadItem();
		
		//Empty the inputs
		document.getElementById("add-item-name").value = "";
		document.getElementById("add-item-description").value = "";
		document.getElementById("add-item-image-url").value = "";
	}
}

//--------------------------------------------------------------------

//Add new comment

//Data: Assume we have a list of existing comments stored in an array "allComments"
let allComments = [{Name: "Austin", Comment: "Recommended"},
					{Name: "Dylan", Comment: "Great product"},
					{Name: "Timothy", Comment: "Impressive and easy to use"},
					];

//Load all existing comments and display them on HTML
function loadComments() {
	//Loop through all comments in the array "allComments"
	for (var i=0; i < allComments.length; i++) {
		let Name = allComments[i].Name;
		let Comment = allComments[i].Comment;
		
		//Create a new HTML node/element <P> to display this comment
		let node = document.createElement("P");
		let textnode = document.createTextNode(Name + ": " + Comment);
		node.appendChild(textnode); //Append the content (created TextNode) to the HTML Node (child)
		let parrent_node = document.getElementById("comment-list"); //Get the id of parent node "comment-list"
		parrent_node.appendChild(node); //Append the above child HTML node to the parent node
	}
}

//Call to run this loadComments function when the webpage is loaded
loadComments();

//Add a new comment
function addComment() {
	//Get entered value/data by user
	let enteredCommentName = document.getElementById("comment_name").value;
	let enteredCommentText = document.getElementById("comment_text").value;
	
	//Add this new comment to the array
	allComments.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Thank you for your comment.");
	
	//Display this new comment on HTML page
	//Create a new child HTML node/element as "<p>" (paragraph) as a child node
	let node = document.createElement("P");
	//Create a new TextNode
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	//Append the content (created TextNode) to the HTML Node (child)
	node.appendChild(textnode);
	//Get the id for parent node "comment-list"
	let parrent_node = document.getElementById("comment-list");
	//Append the above child HTML node to the parent node
	parrent_node.appendChild(node);
	
	//Clear comment box
	document.getElementById("comment_name").value = "";
	document.getElementById("comment_text").value = "";
}

//--------------------------------------------------------------------

//Exercise 5: Vote

//Assume the current votes are: 20 likes and 5 dislikes
let currentVotes  = {like: 20, dislike: 5};

//Load the current votes to HTML page
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

//Variables to track the clicking status
//RULE: Allow to vote only once: UP or DOWN
let voteStatus = {like: false, dislike: false};

//Click "like" button
function like() {
	//Check current status of "like" button (has been clicked or not)
	if (voteStatus.like == false) {
		//Clicked "like" button: Increase the number by 1
		document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
		//Change the background colour of "like" button to green
		document.getElementById("likeButton").style.backgroundColor = "green";
		//Change the current status of "like" button: has been clicked
		voteStatus.like = true;
		
		//Check "dislike" status - if dislike has been voted, down it by one & change status to false & change background colour to white
		if (voteStatus.dislike == true) {
			document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
			voteStatus.dislike = false;
			document.getElementById("dislikeButton").style.backgroundColor = "white";
		}
	} else {
		//Keep the current number of likes
		document.getElementById("likeNumber").innerHTML = currentVotes.like;
		//Change the background colour of "like" button to white
		document.getElementById("likeButton").style.backgroundColor = "white";
		//Change the current status of the "like" button
		voteStatus.like = false; 
	}
}

//Click "dislike" button
function dislike() {
	//Checl current status of "dislike" button (has been clicked or not)
	if (voteStatus.dislike == false) {
		//Increase a "dislike" by 1
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
		//Change the background colour of "dislike" button to red
		document.getElementById("dislikeButton").style.backgroundColor = "red";
		//Change the current status of "dislike" button
		voteStatus.dislike = true;
		
		//Check "like" status - if like has been voted, down it by one & change status to false & change background colour to white
		if (voteStatus.like == true) {
			document.getElementById("likeNumber").innerHTML = currentVotes.like;
			voteStatus.like = false;
			document.getElementById("likeButton").style.backgroundColor = "white";
		}
	} else {
		//Keep the current number of "dislike"
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
		//Change the background colour of dislike button to white
		document.getElementById("dislikeButton").style.backgroundColor = "white";
		//Change the current status of "dislike" button
		voteStatus.dislike = false;
	}
}

function loadXMLfile() {
	//Step 1: Where is the XML file stored on Internet
	let url = "https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss";
	let proxy = "https://cors-anywhere.herokuapp.com/";
	//Use CORS API website as proxy to pass through CORS issue
									
	//Step 2: Create an XMLHttpRequest object
	let xhttp = new XMLHttpRequest();
									
	//Step 3: Send this request from browser to web server
	xhttp.open("GET", proxy + url, true);
	//true: asynchronous transaction
	//false: synchronous transaction
	xhttp.send();
									
	//Step 4: Wait for the response until the "state" changed to ready
	xhttp.onreadystatechange = function() {
	//Check if the response is valid or not
	if (this.readyState == 4 && this.status == 200) {
		//Response is good and received XML file successfully
		//Load this XML file into "contact" element
		document.getElementById("contact").innerHTML = this.responseText;
		}
	};
}