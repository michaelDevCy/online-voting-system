# Online Voting System

A web-based voting system for digital media readers, allowing users to express their opinions on various topics through secure and authenticated voting. Supports multiple voting campaigns, real-time vote counting, and campaign management.

## Features

- User registration and authentication with a valid HKID number
- Multiple voting campaigns with start and end times
- Real-time vote counting
- Campaign and candidate management (CRUD operations)
- Compliance with HK privacy regulations

## Prerequisites

- Node.js
- MongoDB

## Installation
1. Clone the repository:

    git clone https://github.com/Mikeyvon/online-voting-system.git

2. Change to the project directory:

    cd online-voting-system

3. Install the required packages:

    npm install

4. Ensure MongoDB is running on your local machine.

5. Run the server:

    node index.js

The Server will now be running on `http://localhost:5000`.

## API Endpoints

- `/api/users`: User registration and authentication
- `/api/campaigns`: Campaign management (create, read, update, delete campaigns)
- `/api/candidates`: Candidate management (create, read, update, delete candidates)
- `/api/votes`: Voting and vote counting

## License

This project is released under the MIT License.



