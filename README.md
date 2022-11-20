# Event Management

## Instruction to run this project

### 1. Clone this repo with `Git Clone` and url.
### 2. Run `npm i`
### 3. Run `npm start`

## ~ Server will be started ~
#

## API endpoints:

1. Event List API, where we can get all active events with pagination.
`GET Method`
```
http://localhost:3000/api/v1/events?page=1&limit=10
```
Response:
```JSON
{
    "events": [
        {
            "id": 1,
            "title": "Dhaka-event",
            "start_at": "2023-01-05T00:59:01.000Z",
            "end_at": "2023-01-05T00:59:01.000Z"
        },
        {
            "id": 2,
            "title": "Mymensingh-event",
            "start_at": "2023-02-05T00:59:01.000Z",
            "end_at": "2023-02-05T00:59:01.000Z"
        },
        {
            "id": 3,
            "title": "Khulns-event",
            "start_at": "2023-03-05T00:59:01.000Z",
            "end_at": "2023-03-05T00:59:01.000Z"
        },
        {
            "id": 4,
            "title": "Sylhet-event",
            "start_at": "2023-04-05T00:59:01.000Z",
            "end_at": "2023-04-05T00:59:01.000Z"
        },
        {
            "id": 5,
            "title": "Rajshahi-event",
            "start_at": "2023-05-05T00:59:01.000Z",
            "end_at": "2023-05-05T00:59:01.000Z"
        }
    ],
    "paginate": {
        "total": 5,
        "per_page": 10,
        "total_pages": 1,
        "current_page": 1
    }
}
```

##
2. Event Details API, where we can get single event information.
`GET Method`
`params: 5`
```
http://localhost:3000/api/v1/events/details/:id
```
Response:
```JSON
{
    "event": {
        "id": 5,
        "title": "Rajshahi-event",
        "start_at": "2023-05-05T00:59:01.000Z",
        "end_at": "2023-05-05T00:59:01.000Z",
        "total_workshops": "0"
    }
}
```

##
3. Workshop List API, where we can get all the active workshops of a single event.
`GET Method`
`params: 5`
```
http://localhost:3000/api/v1/workshops/:id
```
Response:
```JSON
{
    "event": {
        "id": 5,
        "title": "Rajshahi-event",
        "start_at": "2023-05-05T00:59:01.000Z",
        "end_at": "2023-05-05T00:59:01.000Z",
        "workshop": [
            {
                "id": 5,
                "event_id": 5,
                "start_at": "2023-05-05T00:59:01.000Z",
                "end_at": "2023-05-05T00:59:01.000Z",
                "title": "workshop-title-Rajshahi",
                "description": "workshop-description-Rajshahi"
            }
        ]
    }
}
```

##
4. Workshop Details API, where we can get single workshop information.
`GET Method`
`params: 5`
```
http://localhost:3000/api/v1/workshops/details/:id
```
Response:
```JSON
{
    "workshop": {
        "id": 5,
        "event_id": 5,
        "start_at": "2023-05-05T00:59:01.000Z",
        "end_at": "2023-05-05T00:59:01.000Z",
        "title": "workshop-title-Rajshahi",
        "description": "workshop-description-Rajshahi",
        "total_reservations": "1"
    }
}
```

##
5. Make a workshop reservation API.
`POST Method`
```
http://localhost:3000/api/v1/workshops/details/:id
```
POST Body:
```JSON
{
        "name": "rabby",
        "email": "rabby@gmail.com",
        "workshop_id": 5
}
```
Response:
```JSON
{
    "reservation": {
        "name": "rabby",
        "email": "rabby@gmail.com",
        "workshop_id": 5
    },
    "events": {
        "id": 5,
        "title": "Rajshahi-event",
        "start_at": "2023-05-05T00:59:01.000Z",
        "end_at": "2023-05-05T00:59:01.000Z",
        "workshops": [
            {
                "id": 5,
                "event_id": 5,
                "start_at": "2023-05-05T00:59:01.000Z",
                "end_at": "2023-05-05T00:59:01.000Z",
                "title": "workshop-title-Rajshahi",
                "description": "workshop-description-Rajshahi"
            }
        ]
    }
}
```
#
#
#
##
# Additional API End Point for `events` and `workshops` create.
## events
`POST Method`
```
http://localhost:3000/api/v1/events/create
```
POST Body:
```JSON
{
    "title": "Rajshahi-event",
    "start_at": "2023-5-5T06:59:01.107Z",
    "end_at": "2023-5-5T06:59:01.107Z"
}
```
###
## workshops
`POST Method`
```
http://localhost:3000/api/v1/workshops/create
```
POST Body:
```JSON
{
    "event_id": 25,
        "start_at": "2023-5-5T06:59:01.107Z",
        "end_at": "2023-5-5T06:59:01.107Z",
        "title": "workshop-title-Rajshahi",
        "description": "workshop-description-Rajshahi"
}
```
