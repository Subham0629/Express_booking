# Express_Booking

## Introduction
A brief introduction of your project goes here. You may want to cover the purpose of your project, its core functionality, and what problems it solves.
The purpose of this project is to provide users with a platform to browse and book tickets for various events, movies entertainment activities happening in their city.

## Deplolyed App
https://express-booking-rust.vercel.app/

## Video Walkthrough of the project

## Features

# Admin
- Login, Logout
- Add, Delete Movies
- Add movies to Show
- Add, Delete Events
- User list
- Delete user
- Filter user by membership
- Display events with number of participants
# User
- Register, Login, Logout
- Update user profile
- Movie listing
- Book event


## Installation & Getting started

```bash
git clone https://github.com/Subham0629/Express_booking.git
cd booking_frontend
ng serve
```

## Usage

- User Registration
  ![Screenshot (854)](https://github.com/Subham0629/Express_booking/assets/112814727/f1cd8d51-3767-4cb7-bef2-5c50ba556d03)
  
- User Profile Update
  ![Screenshot (855)](https://github.com/Subham0629/Express_booking/assets/112814727/1499f400-86ce-4846-b72f-63ccea66b7ba)
  
- Movie Page
  ![Screenshot (856)](https://github.com/Subham0629/Express_booking/assets/112814727/058b6c82-fc37-4124-8769-7732c9392fcc)
  
- Event Booking Page
  ![Screenshot (857)](https://github.com/Subham0629/Express_booking/assets/112814727/582cac5f-4217-4077-9c41-64474d146288)
  
- User Listing
  ![Screenshot (858)](https://github.com/Subham0629/Express_booking/assets/112814727/be580785-1bec-47ed-a707-7973cbbde2a5)
  
- Event Participants
  ![Screenshot (860)](https://github.com/Subham0629/Express_booking/assets/112814727/fe4c0fc8-4ea3-4e26-b173-4491de1cbed8)
  
- Add Movie Form
  ![Screenshot (859)](https://github.com/Subham0629/Express_booking/assets/112814727/2199b004-469b-48fa-861c-a6506764e3fd)
  
- Add Event Form
  ![Screenshot (861)](https://github.com/Subham0629/Express_booking/assets/112814727/ad88104a-204f-4c3e-8f2b-07b0f40bff92)


## API Endpoints
## User Endpoints

- `GET /users` - Retrieve a list of all users.
- `GET /users/{id}` - Retrieve a specific user by ID.
- `POST /users` - Create a new user.
- `POST /loin_user` - Login User.
- `PUT /users/{id}` - Update an existing user by ID.
- `DELETE /users/{id}` - Delete a user by ID.
- `GET /filter` - Filter a user by ID.

## Movie Endpoints

- `GET /movies` - Retrieve a list of all movies.
- `GET /movies/{id}` - Retrieve a specific movie by ID.
- `POST /movies` - Create a new movie.
- `PUT /movies/{id}` - Update an existing movie by ID.
- `DELETE /movies/{id}` - Delete a movie by ID.

## Show Endpoints

- `GET /shows` - Retrieve a list of all shows.
- `GET /shows/{id}` - Retrieve a specific show by ID.
- `POST /shows` - Create a new show.

## Event Endpoints

- `GET /events` - Retrieve a list of all events.
- `GET /events/{id}` - Retrieve a specific event by ID.
- `POST /events` - Create a new event.
- `PUT /events/{id}` - Update an existing event by ID.
- `DELETE /events/{id}` - Delete an event by ID.

## Participant Endpoints

- `GET /participants` - Retrieve a list of all participants.
- `POST /participants` - Add  a new participant.


## Technology Stack

- Flask
- MongoDB
- Angular
