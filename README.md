# backend-2

Endpoints description

GET : /api/users
used to view all users in database

POST : /api/users/register
Overview

Used to register a user and ensure that user information will be saved in the server

Inputs

Javascript object:

username - string, required

phone_number - string, required, unique

password - string, required

{
"username": "Tony",
"phone_number": "+420004356783",
"password": "tony12345"
}
Success Outputs

Javascript object with success message.

{ message: "success message" }
Failure Outputs

Javascript object with error.

{ error: "failure error" }

POST: /api/users/login
Overview

Used to log in and get authentication for accessing the main functionalities of the React app.

Inputs

Javascript object:

username - string,required
password - string, required

{
"username": "tony"
"password": "tony12345"
}
Success Outputs

Javascript object with token used for accessing restricted endpoints.

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJjYW1lcm9uMSIsImlhdCI6MTYxOTc1MjM5OX0.KNqACAOha-pTp6pJLSUm6UVYd3P63hBzz56W5s2ESyk"
}
Failure Outputs

Javascript object with error.

{ error: "failure error" }
Plants Routes - only logged in users with token in header
plant_id = unique id for each plant generated on backend and used to access each plant

POST : /api/plants
Overview

Used to create new plant by user.

Inputs

Javascript object:

nickname - string

species - string

h2o_frequency - string, required

{
"nickname": "cam",
"species": "Tulip",
"h2o_frequency": "7",
}
Success Outputs:

Javascript object with plant_id of created plant.

{
"plant_id": "eyJhbGiJIUz-IsInR5cCI6IkpXV76-827u-u6"
}
Failure Outputs

Javascript object with error.

{ error: "failure error" }
GET : /api/plants
Overview

Used to get all plants that were created by the user

Success Outputs:

Javascript object with array of plants objects.

[
{
"table_id": 5,
"plant_id": "496b9834-038e-4c4d-91ac-5d1f5fcaa211",
"species": "Suflower",
"user_id": "01e2d860-37ef-45f7-a383-bfdc0dd2ae35",
"nickname": "Greta",
"h2o_frequency": 5
},

Failure Outputs

Javascript object with error.

{ error: "failure error" }
GET : /api/plants/:plant_id
Overview

Used to get plant with specific id that was created by the user

Success Outputs

Javascript object with array of plant object.

{
"table_id": 5,
"plant_id": "496b9834-038e-4c4d-91ac-5d1f5fcaa211",
"species": "Suflower",
"user_id": "01e2d860-37ef-45f7-a383-bfdc0dd2ae35",
"nickname": "Greta",
"h2o_frequency": 5
}
Failure Outputs

Javascript object with error.

{ error: "failure error" }

PUT : /api/plants/:plant_id
Overview

Used to update plant with specific id that was created by the user

Inputs

Javascript object with optional items for update:

nickname - string
species - string
h2o_frequency - string

Success Outputs

Javascript object with success message.

{ message: "success message" }
Failure Outputs

Javascript object with error.

{ error: "failure error" }
DELETE : /api/plants/:plant_id
Overview

Used to delete plant with specific id that was created by the user

Success Outputs

Javascript object with success message.

{ message: "success message" }
Failure Outputs

Javascript object with error.

{ error: "failure error" }
