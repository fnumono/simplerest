//Userlist data array for filling in info box
var userListData = [];

// DOM Ready
$(document).ready(function(){
	//Populate the user table on initial page load

	populateTable();
});


//Functions

//Fill Table With data
function populateTable()
{
	//Empty Content String
	var tableContent = '';

	//jQuery AJAX call for JSON
	$.getJson('/users/userlist', function(data){

		userListData = data;

		//For each item in JSON, add a table row and cells to the content string

		$.each(data,function(){
			tableContent += '<tr>';
			tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.username + '</a></td>';
			tableContent += '<td>' + this.email + '</td>';
			tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
			tableContent += '</tr>';
		});

		//Inject the whole content string into our existing HTML Table
		$('#userList table tbody').html(tableContent);
	});


}


function showUserInfo(event)
{
	//Prevent link from Firing
	event.preventDefault;

	//Retrieve username from link rel attribute
	var thisUserName = $(this).attr('rel');

	//Get Index of object based on id value
	var arrayPosition = userListData.map(function(arrayItem){
		return arrayItem.username;
	}).indexOf(thisUserName);

}