# Tidy Hive Back End Documentation

## Contributors


|    [Heather Ridgill ](https://github.com/Heather-Ridgill)      |     [Micah Jank](https://github.com/MicahJank)       |     [Katrina Roaix](https://github.com/kroaix)     |     [Yankho Trumble](https://github.com/Mayankho)     |
|:---:|:---:|:---:|:---:|
|    [<img src="https://avatars3.githubusercontent.com/u/49896861?s=460&v=4" width = "115" />](https://github.com/Heather-Ridgill)     |     [<img src="https://avatars3.githubusercontent.com/u/40408940?s=460&v=4" width = "115" />](https://github.com/MicahJank)       |     [<img src="https://avatars3.githubusercontent.com/u/5169760?s=460&v=4" width = "115" />](https://github.com/kroaix)     |     [<img src="https://avatars2.githubusercontent.com/u/33339750?s=460&v=4" width = "115" />](https://github.com/Mayankho)     |
|    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Heather-Ridgill)     |     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/MicahJank)      |     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/kroaix)     |     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Mayankho)     |
|    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/heatherridgill/)     |     [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/micah-jank/)      |     [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kroaix/)     |     [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/yankho/)     |

| [Zach Taylor ](https://github.com/zbtaylor) | [Vinni Hoke](https://github.com/vinnihoke) | [Brandon Dresselle - TL](https://github.com/BDesselle) |
|    :---:     |     :---:      |     :---:     |
| [<img src="https://avatars0.githubusercontent.com/u/37271885?s=460&v=4" width = "115" />](https://github.com/zbtaylor)   | [<img src="https://avatars1.githubusercontent.com/u/34225237?s=460&v=4" width = "115" />](https://github.com/vinnihoke)     | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UCBK6FRD5-c149fef438f7-512" width = "115" />](https://github.com/BDesselle)    |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/zbtaylor)     | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/vinnihoke)       | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BDesselle)      |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/zach-taylor-97b90a196/)     | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/vinnihoke/)       | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brandon-desselle-33b689161/)      |

[![Maintainability](https://api.codeclimate.com/v1/badges/a280d9a48c1e094a79cb/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/homerun-be/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a280d9a48c1e094a79cb/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/homerun-be/test_coverage)

## Getting started

To get the server running locally:

- Clone this repo
- **npm install** to install all required dependencies
- **npm server** to start the local server
- **npm test** to start server using testing environment

### Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following env variables

- DEV_LOCAL=thepostgresql link to your database goes here (Download postgres and add url with your password here)
- JWT_SECRET=can be anything you desire
- SG_USER=your send grid api key
- SG_PASS=your send grid password
- BASE_URL=the url where the server will be running
- FE_URL=the url where the front end client will be running
- OAUTH_URL=should be same as the base url
- OAUTH_PROTOCOL=http
- ALGO=the algorithim you specify
- CRYPTO_KEY=can be anything
- SESSION_KEY=can be anything
- G_CLIENT_ID=your google client id
- G_CLIENT_SECRET=your google client secret
- F_CLIENT_ID=your facebook client id
- F_CLIENT_SECRET=your facebook client secret


#### Backend deployed at TidyHive (https://tidyhive-be-stage.herokuapp.com/)

#### See [Frontend Documentation](https://github.com/MicahJank/homerun-fe/blob/master/README.md) for details on the fronend of our project.


## Backend framework
- Express 
- Node.JS
- Knex

### Reasoning:

- Flexibility
- Easy to use (speed, familiarity, etc)
- Great Ecosystems, libraries and modules
- Same language on frontend and backend

### Endpoints

[Endpoints can be found here.](https://documenter.getpostman.com/view/9155829/SzKbMFcG?version=latest)

## Auth Routes

### *Signup*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/auth/signup`        | all users      | 


Takes an object including:
```javascript 
Body Raw

{
  "username": "some_user_name",
  "email": "test@test.com",
  "password": "password"
}
```
#### Returned Example

{
  "message": "A confirmation email has been sent to test@test.com"
}



### *Confirm Email*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/auth/confirm`        | all users      | 


Takes an object including:
```javascript 
Body Raw

  {
	"hash": "a1di21o1n2908q2398h"
}

```
#### Returned Example

{
  "message": "User confirmed successfully."
}


### *Log in

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/auth/login`        | all users      | 


Takes an object including:
```javascript 
Body Raw

{
	"email": "mom@test.com",
	"password": "password"
}

```
#### Returned Example

{ <br>
  "message": "Welcome, mom@test.com", <br>
  "token": "" <br>
}

### *Forgot Password*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/auth/forgot`        | all users      | 


Takes an object including:
```javascript 
Body Raw

{
	"email": "mom@test.com"
}

```
#### Returned Example

{
  "message": "A password reset link has been sent to zbtaylor1@gmail.com"
}


### *Password Reset*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/auth/reset`        | all users      | 


Takes an object including:
```javascript 
Body Raw

{
	"hash": "e7e14facb3b2138f3b24eab6ba162ee89e0ac339",
	"password": "new_password"
}

```
#### Returned Example

{
  "message": "Your password has been reset."
}

## OAuth Google

### *Confirm Email*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| GET    | `/connect/google`        | all users      | 


<br>

## TODO Endpoints

### *Add a todo*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/todos/add`        | logged in users     | 


Takes an object including:
```javascript 
Body Raw

 {
	"title": "New Todo",
	"household": "a12345"
}
```
#### Returned Example
```javascript 
{
  "id": 6,
  "household": "a12345",
  "title": "New Todo",
  "desc": null,
  "point_value": null,
  "created_at": null,
  "due": null,
  "completed": null,
  "completed_by": null,
}
```

### *Update a todo*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| PUT    | `/todos/1`        | Only logged in users account     | 


Takes an object including:
```javascript 

Body Raw
{
	"title": "Updated Todo Title"
}

```
#### Returned Example
```javascript 
{
  "id": 1,
  "household": "a12345",
  "title": "Updated Todo Title",
  "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit sint illum voluptatibus voluptatum quia?",
  "point_value": 20,
  "created_at": null,
  "due": "1318781876406",
  "completed": false,
  "completed_by": ""
}
```
### *Assign a todo*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/todos/assign/5`        | Only logged in users account     | 


Takes an object including:
```javascript 

Body Raw
{
    "assignees": [
        {
            "type": "member",
            "id": 1
        },
        {
            "type": "member",
            "id": 2
        },
        {
            "type": "child",
            "id": 1
        }
    ]
}

```
#### Returned Example
```javascript 
[
  {
    "username": "mom",
    "child": false,
    "points": 25
  },
  {
    "username": "dad",
    "child": false,
    "points": 40
  },
  {
    "username": "Lil Suzie",
    "child": true,
    "points": 25
  }
]
```

### *Unassign a todo*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/unassign/5`        | Only logged in users account     | 


Takes an object including:
```javascript 

Body Raw
{
    "assignees": [
        {
            "type": "member",
            "id": 1
        },
        {
            "type": "child",
            "id": 1
        }
    ]
}

```
#### Returned Example
```javascript 
[
  {
    "username": "mom",
    "child": false,
    "points": 25
  },
  {
    "username": "dad",
    "child": false,
    "points": 40
  }
]
```

### *Delete a todo*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| DEL    | `/todos/5`        | Only logged in users account     | 


Takes an object including:
Authorization: Token


#### Returned Example
```javascript 
{
	message: "$1 todo(s) removed"
}
```
### *Todo by household*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| GET    | `/todos/household`        | Only logged in users account     | 


Takes an object including:
Authorization: Token


#### Returned Example
```javascript 
{
    "id": 2,
    "household": "a12345",
    "title": "This is the second todo.",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit sint illum voluptatibus voluptatum quia?",
    "point_value": 125,
    "created_at": null,
    "due": "1318781876406",
    "completed": false,
    "completed_by": "",
    "assigned": [
      {
        "username": "mom",
        "child": false,
        "points": 25
      },
      {
        "username": "dad",
        "child": false,
        "points": 40
      },
      {
        "username": "Lil Suzie",
        "child": true,
        "points": 25
      }
    ]
  },
  {
    "id": 3,
    "household": "a12345",
    "title": "This is the third todo.",
    "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit sint illum voluptatibus voluptatum quia?",
    "point_value": 40,
    "created_at": null,
    "due": "1318781876406",
    "completed": true,
    "completed_by": "Sample",
    "assigned": []
  },
```
### *All Users Assigned to Todo*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| GET    | `/todos/assigned/5`        | Only logged in users account     | 


Takes an object including:
```javascript 

Body Raw
{
    "assignees": [
        {
            "type": "member",
            "id": 1
        },
        {
            "type": "member",
            "id": 2
        },
        {
            "type": "child",
            "id": 1
        }
    ]
}

```

#### Returned Example
```javascript 
{
    "assignees": [
        {
            "type": "member",
            "id": 1
        },
        {
            "type": "member",
            "id": 2
        },
        {
            "type": "child",
            "id": 1
        }
    ]
}
```

## Members & Children Endpoints

### *Add Child*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| POST    | `/household/children`        | Only logged in users account     | 


Takes an object including:
```javascript 

Body Raw
{
	"username": "Child Name"
}

```

#### Returned Example
```javascript 
[
  {
    "id": 5,
    "username": "Child Name",
    "points": null,
    "child": true,
    "household_id": "a12345"
  }
]
```

### *Update Child

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| PUT    | `/household/children/1`        | Only logged in users account     | 


Takes an object including:
```javascript 

Body Raw
{
	"username": "Changed Child Name",
	"points": 10
}

```

#### Returned Example
```javascript 
[
  {
    1
  }
]
```

### *Delete Child*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| DEL    | `/household/children/5`        | Only logged in users account     | 


Takes an object including:
Authorization: Token


#### Returned Example
```javascript 
{
	1
}
```

### *Update Member / Accept Household Invite*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| PUT    | `/household/children`        | Only logged in users account     | 


Takes an object including:
```javascript 

Body Raw
{
	"username": "Changed Member Name"
}

```

#### Returned Example
```javascript 
{
	"username": "Changed Member Name"
}
```

### *All Members in Household*

| Method | Endpoint                | Access Control |                                 
| ------ | ----------------------- | -------------- | 
| GET    | `/household/assignable`        | Only logged in users account     | 


Takes an object including:
Authorization: Token

#### Returned Example
```javascript 
  {
    "id": 1,
    "username": "mom",
    "email": "mom@test.com",
    "password": "$2a$14$VfyTw42uvMPAGGWlHPOXSe9yphUBAyp0XYpKk0txhgYTsSmD0UFni",
    "provider": "email",
    "access_token": "",
    "refresh_token": "",
    "points": 25,
    "child": false,
    "active": true,
    "current_household": "a12345"
  },
  {
    "id": 1,
    "username": "Lil Suzie",
    "points": 25,
    "child": true,
    "household_id": "a12345"
  },
```

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).



