# User Admin

This assignment is a week long project.

The goal is to build a user administration module that supports the following tasks:

1. Create, edit and delete Users.
2. Create, edit and delete Roles.
3. Create, edit and delete UserRoles.

Design your module so that it can be easily reused in a larger application to control access to the site.

## Toolbox
You will be using everything you have learned in the last 6 weeks to complete this project. 

**Required Tools**
```
--Backend--
SQL Server
Entity Framework
ASP Web API

--Frontend--
HTML5
CSS Frameworks (You do not have to use Bootstrap!)
Angular
Angular-UI-Router
Angular-Toastr
```

## Data Requirements
`Users`
```
UserId
FirstName
LastName
EmailAddress
UserName
Password
DateCreated
```

`Roles`
```
RoleId
Name
Description
DateCreated
```

`UserRoles`
```
UserId  --|
RoleId  --|
DateCreated
					   |_ These in combination form the composite key in the many-to-many relationship of the UserRole table. Refer to the third SQL demo video to see how this is modeled in Entity Framework.
```

## The Many-to-Many Relationship
`A User can have many Roles`, and `a Role can have many Users`
Therefore, in the UserRole 'crosswalk' table, you may find the same UserId appearing in more than one row of the table, with each row corresponding to the particular role assigned to him. Likewise, you may find the same RoleId appearing in more than one row of the table, with each row corresponding to a different user who has been assigned to that particular role. The important thing to consider and allow for in your code, is that you must prevent duplicate rows from being created that contain the same UserId and RoleId combination.

## Screenshots
**Top Nav**<br />
<img src="http://i.imgur.com/hnSuG30.png" alt="">

**Role Manager Screen**<br />
<img src="http://i.imgur.com/x4usNVn.png" alt="">

**User Role Manager Screen**<br />
<img src="http://i.imgur.com/v2hFsUc.png" alt="">

**User Registration Screen**<br />
<img src="http://i.imgur.com/AJbDuFm.png" alt="">


## Extra Credit

* Add a login screen to your project to prevent unregistered users from accessing the site. If a user fails login, prompt them to register using the link to the registration form. Upon successful registration, redirect the user to the login form so they can authenticate.

**Login Screen**<br />
<img src="http://i.imgur.com/0VEsRoR.png" alt="">

* Add a 3-month time limit on password use, and enforce it by doing a check on the creation date of the password.

## Turn in instructions
* Push your changes to GitHub 
* [Click here to create an issue in the class repository](https://www.github.com/OriginCodeAcademy/2016-SC-WinterCohort/issues/new?title=17-UserAdmin&body=1.%20Where%20can%20I%20find%20your%20repository%3F%20(Paste%20the%20url%20of%20your%20repository%20below)%0A%0A2.%20How%20many%20screens%20were%20you%20able%20to%20complete%3F%0A%0A3.%20Did%20you%20complete%20any%20of%20the%20extras%3F)
	* Include a link to your repository in the description
	* Answer the questions filled out for you in the description