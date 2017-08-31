#VOD Application - Introduction
===================================

This is a sample node application build on MEAN framework (MongoDB, Express, AngularJS and NodeJS) which allows listing of videos from an external api in a horizontal carousel and provides facility to play selected videos and track the history of played videos.

##Set Up - Locally
================================

1) Download and install nodejs (https://nodejs.org/en/download/) 
2) Download and install mongodb (https://www.mongodb.com/download-center?jmp=nav#community)
3) Clone or download the project in to pc
4) Run mongod.exe from mongodb installation path
5) Open command prompt and navigate to project folder directory 
6) Run``` npm install ```  to install all the node module dependancies 
7) Run ``` node index ```  to run the application
8) Application web app will be available in http://localhost:8081/

###Implemented Features
=================================

- Load a list of videos from an external api (https://demo2697834.mockable.io/movies) in a scrollable horizontal carousel on home page
- Allows to select a video from the view and play in full screen
- User can use either mouse or keyboard (tab) to select a video
- User can play video by clicking the play button of a video tile.
- User will be able to view all the previously watched videos in home page 
	a) by clicking History icon in header
	b) after playing a video 
  in a sorted order according to the most recently watched video
- User can play videos in history view by clicking on Replay button
- User can navigate to home page from video player screen by clicking back button
- Once a video is finished playing, full screen video view will be automatically closed and history view will be updated.
- List of watched videos will be stored persistently in databse (mongodb).

--------
Note:
--------

- Refresh functionality is not completely implemented i.e, Upon clicking refresh button, api call will be triggered to get new list of videos in back end but its front end functinality is not fully implemented so no changes/refreshed datas will be viewed in home page.

####Application Architecture
==============================================

- Appication can be basically divided in to two parts as client and server.
- All the files related with the client side ui rendering of the app is available in **/public/app** folder. 
- The business logic and UI flow of the client app is independent from rest of the codes. 
- Nodejs server of the app is built on top of expressjs. 
- Server exposes some restfull web services to save and retrieve history data.
- Both client and the server codes follow MVC architectture which seperates layers of the system clearly. 

#####Tracking Users Without User Authentication
================================================

This application does not requre user authentication to view video history of users. User detection is done by a unique key generated based on browser settings and other key finger prints. For this purpose [fingerprint2] library is used with default options to generate key. 

######Deployment
=================================================

Application is deployed in heroku, nodejs hosting environment using continuous deployment feature for github projects.( Each git push to the master branch is automatically deployed).

-------
Note:
-------

- MongoDb addon is not included/connected to the deployed codebase in heroku so viewing of history details is not possible from the demo link (https://vodapp1.herokuapp.com/)  
- Other features like  listing, selecting and playing of videos) is available in the demo link.
