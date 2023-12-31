# ProyectoZatta

## Final proyect for Angular course at Coderhouse.

Administrative system for a school. It allows to log in as admin or user.

## Admin:
Create, modify, delete and view student's and course's details.
Create or delete an enrollment.
Create, modify, delete, and change roles of users.

## User:
Create and view student's details.
Create and view course's details.
Create or delete an enrollment.

## Credentials:

### Admin Role
<li>mail: admin@mail.com</li>
<li>password: admin</li>

### User Role
<li>mail: user@mail.com</li>
<li>password: user</li>

## Links 

<a href="https://pf-zatta.vercel.app/">Link to the app</a>

<a href="https://zatta-api-jsonserver.onrender.com/">Link to the API</a>


<a href="https://github.com/melisazatta/pf-zatta">Link to Frontend code</a>

<a href="https://github.com/melisazatta/api-jsonserver">Link to Backend code</a>

# Features

## Toolbar
On the left side you will find a button to show or hide the sidebar. On the center of the bar it's the title and an icon that let you access to the Github code. On the right side, there is a button to log out.

## Sidebar
Click on the menu button located on the toolbar. The side menu displays different interfaces.

## Home
This page shows a pie chart with the number of enrollments, courses and students. When the user add or delete any data, it's update, since it is connected to the API.

## Users (admin only)
In this page there's a button for add a user that opens a dialog, in its the admin can choose a role (admin or user). Also shows a table with all the users and actions buttons to modify and delete thems, and other button to view all the user's details.

Update user's details: Opens the same dialog to add a new user but preloaded with the user's details.

Delete users: Deletes the user from the database. For security, it will shows an alert.

## Students
In this page there's a button for add a student that opens a dialog. Also shows a table with all the students and actions buttons to modify and delete thems, and other button to view all the student's personal details and the courses they are enrolled in.

Update student's details (admin only): Opens the same dialog to add a new student but preloaded with the student's details.

Delete student (admin only): Deletes the student from the database. For security, it will shows an alert.

## Courses
This page shows a button for add a course that opens a dialog. Also shows a table with all the courses and actions buttons to modify and delete thems, and other button to view all the courses's details and the students enrolled in.

Update course's details (admin only): Opens the same dialog to add a new course but preloaded with the course's details.

Delete course (admin only): Deletes the course from the database. For security, it will shows an alert.

## Enrollments
This page shows a table with all the enrollments's details. There is also a button to create an enrollment, which opens a dialog to choose a student and a course. In the 'Actions' column of the table, there is a button to delete an enrollment. This will delete the enrollment from the database. For security, it will ask first if you are sure.

## 404 Page
If the address entered in the browser does not match exactly, the user will be redirected to a page with the code 404 and a button to return to home. 


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Installation
<li>1- Clone the API Repository:</li>

git clone https://github.com/melisazatta/api-jsonserver

### Dependencies:

npm install
This will install all the dependencies specified in the package.json file.

## Run the API:

npm start
This command starts the Angular development server. You can access the application at http://localhost:3000/.

<li>2- Clone the Project Repository:</li>

git clone https://github.com/melisazatta/pf-zatta

### Dependencies:

npm install
This will install all the dependencies specified in the package.json file.

## Start the Application:

ng serve
This command starts the Angular development server. You can access the application at http://localhost:4200/.