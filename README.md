# Cloudinary Assignment

A client-side app built with React, show a grid of photos and allow the user to assign for each photo one or more tags.
The user can be add a new tag and delete a tag.
- Coding language : Javascript/Typescript
- Enviroment : Visual studio code

## Installation and Setup Instructions
- Clone the repo in your terminal by clicking the _green_ clone or download button at the top right and copyin the url

- In your terminal, type ```git clone URL```

  - replace URL with the url you copied
  - hit enter
 
- This will copy all the files from this repo down to your computer

- In your terminal, cd into the directory you just created

- Setting up the JSON Server:

   - Type ```npm install -g json-server``` to installing React JSON-server 

   - Type ```npx json-server --watch -p 4000 db.json``` to running the server on port 4000 

- Type ```npm install``` to install all dependencies

- Last, but not least, type ```npm start``` to run the app locally.

- To visit the app  ```http://localhost:3000```


## Explanation 

* The user can add a new tag that does not exist, for each new tag there is a name and color.
* All tags are displayed to the user in list of available tags, so each tag is displayed in its own box with its name and color.
* The user can assign one or more tags to each photo, and this is by clicking on the image itself, and then a popup window will be displayed to the user showing all the available tags.
The user selects the tags he wants to assign to this photo and then clicks an apply button.
* All available tags are each displayed in its own box with all the photos assigned to it.
Each photo can be deleted from the tag box and then this photo will not be assigned to this tag.




