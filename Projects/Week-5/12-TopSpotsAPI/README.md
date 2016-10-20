# Top Spots API

In this assignment you will be returning one more time to the Top Spots website.

Your task is to create an API in Visual Studio that returns a JSON array of top spots in the same format as the file given in TopSpotsAngular, and modify your Angular factory to call your API instead of reading the JSON file from the file system.

You must also make sure that your API returns the JSON in camelCase format (the casing standard for JavaScript) as opposed to NormalCase format (the casing standard for C#).

## Mac Owners
1. If you haven't already done so, install VirtualBox and create a Windows 10 Virtual Machine (See Sean for an ISO file containing Windows 10)
2. Install [Google Chrome](https://www.google.com/chrome/browser/desktop/)
3. Install [Git](http://www.git-scm.com) to your Windows 10 machine
4. Install [Visual Studio 2015 Community](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx)
5. Install [NodeJS](http://nodejs.org/)
6. Install node-static using `npm install -g node-static`
7. Create a `dev` folder in the root `C:\` directory of your Virtual Machine
8. Clone your `TopSpotsAngular` repository to your `dev` folder

## Tasks
1. Create a folder named `TopSpotsAPI` in your `dev` folder. (For Mac owners - create a `dev` folder in your virtual machine.)
2. Setup your Git workflow.
	- Initialize an empty git repository in `TopSpotsAPI` by running `git init` in the command prompt.
	- Create a repository on GitHub called `TopSpotsAPI` and follow the instructions to add a remote origin.
3. Open Visual Studio, and create a new Project
4. Select `Web > ASP.NET Application`
5. In the wizard, select an Empty ASP.NET Application, and check the Web API checkbox. (Do **not** select the Web API template)
6. Configure the SerializerSettings as shown in todays video
7. Create a Controller class named `TopSpotsController`
8. Create a `TopSpot` class in your Models folder, add the necessary properties of a Top Spot.
9. Create an Action that returns `IEnumerable<TopSpot>`. This Action should read and deserialize the JSON file of top spots into a C# object array, then return the array to end the method.
10. Test your API using Postman
11. Clone and modify your Angular application to call your new API instead of reading from the file system.

## Extras
- Implement the rest of the HTTP Verbs (POST, PUT and DELETE).
	- `POST` will involve reading the JSON from the file system, adding a TopSpot object to the end of the array and then saving the array back to the file system.
	- `PUT` will involve reading the JSON from the file system, finding the TopSpot to be updated, modifying those properties, then saving the array back to the file system.
	- `DELETE` will involve reading the JSON from the file system, finding the TopSpot to be deleted, removing it from the array, then saving the array back to the file system.

## Turn in instructions
* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://www.github.com/OriginCodeAcademy/2016-SC-WinterCohort/issues/new?title=TopSpotsAPI&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20the%20url%20of%20your%20repository%20below)%0A%0A2.%20On%20a%20scale%20of%201-10%2C%20how%20difficult%20did%20you%20find%20this%20assignment%20to%20be%3F%0A%0A3.%20Did%20you%20complete%20the%20extra%20for%20this%20assignment%3F)
	* Include a link to your repository in the description
	* Answer the questions filled out for you in the description
