# azure-text-to-speech

## About:

In this application we convert text into humanlike synthesized speech using NodeJS – Express. It best allows to provide the audio without the cost of manually generating the audio.

## Prerequisites:

-	[Node.js_10.1+_and_npm](https://nodejs.org/en/download/) - installed to your local machine.
-	[Visual_Studio_Code](https://code.visualstudio.com) - installed to your local machine.
-	[Git](https://git-scm.com/downloads) - installed to your local machine.
-	Use [Azure_Cloud_Shell](https://docs.microsoft.com/en-us/azure/cloud-shell/quickstart) using the bash to create Speech resource.
(This will require you to authenticate in a browser with your account and with a valid azure subscription)

** Note: For this application, the API keys have already been created and deployed from the DEV.env file (to protect the API key, this file is not exposed on the repository), but if one has to clone and run the app from git, they should set up their own.

** Please refer this [file](https://github.com/anirudhgk/azure-text-to-speech/blob/main/docs/documentation.pdf) for a detailed documentation.
(You'll have the steps to create the keys ie., the speech resource, all the installations and usage with screenshots)

## Installation:

- Using git, clone the project repo to your local computer.

```bash
git clone https://github.com/anirudhgk/azure-text-to-speech.git
```

- Get inside the cloned directory from the terminal/ gitbash

```bash
cd azure-text-to-speech
```

-	Install the project dependencies.

```bash
npm install
```

-	Create a DEV.env file and add the KEY and REGION. [Creating_Speech_Resource](https://github.com/anirudhgk/azure-text-to-speech/blob/main/docs/documentation.pdf)

## Usage

-	Run the application using the following command:

```bash
cd src
node index.js
```

OR

```bash
npm start
```

-	Open the application in the web browser at: http://localhost:3000

OR

-	Use postman and follow the steps shown in the [documentation](https://github.com/anirudhgk/azure-text-to-speech/blob/main/docs/documentation.pdf) using the get URL as: http://localhost:3000/text-to-speech

### This Application has been Deployed on the Server:

To verify:

#### From Postman:

-	Import the COLLECTION: [project_collection_postman.postman_collection.json](https://github.com/anirudhgk/azure-text-to-speech/blob/main/docs/project_collection_postman.postman_collection.json) from the docs folder in the repository and send the GET request.

#### From Browser:

-	Click on the URL: http://143.198.185.98:3000/

-	Type the text in the text field

-	Click on Load Audio button.

-	Now, click on the play button.
