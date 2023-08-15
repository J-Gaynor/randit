# RANDIT


## What is RANDIT?
RANDIT is a Reddit client that presents you with a 10 posts of random content from a plethora of subreddits. Both posts and subreddits are filtered
so that exposure to explicit content is heavily limited! 


## How does RANDIT work?
Randit makes use of React and Redux. The content of the webapp is divided into three components:

- ### Header
Header is a component that renders the logo and site name, it is affixed to the top of the page and, when clicked, generates a new page of content.

- ### Feed
The feed is where all 10 posts are displayed for users to view. The feed contains various states which are updated depending on the status of posts, what posts have been
retrieved and more. These states are used to control side effects controlled by useEffect. 

- ### Error
The error component is a UI solution to handle the 2023 restrictions on Reddit's API usage. Should the page fail to load either:  
	- subreddits.json  
	- posts.json  
then rather than returning a blank screen or an alert, an error message will appear with a customised app logo.


## Where can I view RANDIT?
(Randit is available here, no log in required!)[randit-client.netlify.app]
