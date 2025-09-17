// ARRAY SECTION
// Task 1: Create an empty array called playlist
let playList = []

// Task 2: Push 3 songs to the playlist array
playList.push("Came In It");
playList.push("Where Do I Go?");
playList.push("Feather");
// Task 3: Update the value of the last element to be "Test"
playList[playList.length - 2] = "Test";

// Task 4: Delete the "Test" element 
playList.pop()

// Console log the array
console.log(playList)

// Commit your changes with an appropriate message.
// ----------------------------------
// OBJECTS SECTION
// Task 5: Create an object called 'song' with 'title', 'artist', and 'duration' properties
let song = {
    title: "" ;
    artist: "" ;
    duration: "" ; 

};

// Task 6: Add a property 'listenedTo' to the 'song' object and set it to false
song.listenedTo = false;

// Task 7: Delete the 'artist' property
delete song.artist;

// Commit your changes with an appropriate message.
// ----------------------------------
// NESTED ARRAYS & OBJECTS SECTION
// Task 8: Create an object called 'album' with properties song's album's 'name', 'year', and 'songs' (leave 'songs' as empty array for now)


// Task 9: Add your song object (task 5) to the empty songs array in the album object


// Console log the length of the album's songs array to confirm it worked

// Task 10: Update the title of the song to be all lowercase. 
// Console log the album object to check your change


// Commit your changes with an appropriate message.
// ----------------------------------
// EXTRA CREDIT
// Use prompt-sync to prompt the user to enter the title, artist, and duration

// Use the user info to create a new song object

// Add it to the songs array in your album object

// Print out the album information with the following formatting
// "Album: [name] ([year])"

// Loop through the songs array in the album object and print out the song information with the following formatting
// "Song [index]: [title] ([duration])"
