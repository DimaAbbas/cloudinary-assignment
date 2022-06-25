# Cloudinary Assignment

A client-side app built with React, show a grid of photos and allow the user to assign for each photo one or more tags.
The user can be add a new tag and delete a tag.
- Coding language : Javascript/Typescript
- Enviroment : Visual studio code

## Installation and Setup Instructions
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

1.npm install

2.npm start

Setting up the JSON Server:

//Installing React JSON-server

--> npm install -g json-server

//Running the server on port 4000

--> npx json-server --watch -p 4000 db.json

## Explanation 

* The user can add a new tag that does not exist, for each new tag there is a name and color.
* All tags are displayed to the user in list of available tags, so each tag is displayed in its own box with its name and color.
* The user can assign one or more tags to each photo, and this is by clicking on the image itself, and then a popup window will be displayed to the user showing all the available tags.
The user selects the tags he wants to assign to this photo and then clicks an apply button.
* All available tags are each displayed in its own box with all the photos assigned to it.
Each photo can be deleted from the tag box and then this photo will not be assigned to this tag.




