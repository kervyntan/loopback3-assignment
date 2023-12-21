# Loopback 3 Assignment
Backend RESTFul API built using Loopback 3 as an assignment

# Table Schema for Task model
```
CREATE TABLE Task (
	id SERIAL PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	status VARCHAR(50) NOT NULL,
	dueDate TIMESTAMP NOT NULL
)
```

## Local Setup

### 1. Install dependencies

```
npm install
```

### 2. Connecting to Database on Heroku

- Getting credentials from .env file
- Edit datasources.json with necessary credentials under pgsql connector

### 3. Running project locally

```
node .
```
