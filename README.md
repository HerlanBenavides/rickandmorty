The Rick and Morty Project. 

Link: https://denis-mendoza-api-usage-with-randm.netlify.app/

Welcome to The Rick and Morty Project. Developed on React.js (Do not worry if you do not know anything about the show, I don’t either, it was chosen because of how rich of information the API is), The goal behind it was understanding more about how asynchronous requests and  REST APIs work while customizing the rendering to user’s interaction with the app. The app starts rendering information about a random location allowing the user to then customize the rendering by indicating what location they want the information to be based on.

Structure: 

The app shows two main sections, one is a moving gif of Rick and Morty, the other one, is where the information from the API is rendered. 

The information side starts with a search bar, intended for the user to input either a number from 1 to 126 or a letter. Once the user enters a number between 1 and 126 and clicks on the find your location button below the search bar, information is rendered on the below location section and the characters section below that mentioned location one (will explain those further later on). Once the user inputs any letter or number, a list of matching suggestions appears between the find your location button and the location section, allowing the user to select from it and customize the rendering of the information in the location and characters section. The idea behind the list of matches  is providing the users alternative options to customizing the rendering of the information in case they, like me, have no idea about the show and the locations it has. 

The  Location section has a preset, room for the location's name, type, dimension and population number, the content of those would vary depending on the selected location. 

The Population section, right below the location section, shows based on location  a picture, the status, the name, the species, the origin and the amount of episodes that character has appeared on the show. As a side note, the color shown next to the dead, alive or unknown status of each character, changes depending on that status, meaning, if the character shows as alive, the color will be green, if dead read and if unknown gray. 

As a side note, I’ve noticed how the API tends to glitch out from time to time, not allowing for a proper rendering of some of the information, mainly on the characters, so apologize in advance for it. 

Thank you for reading this. 
