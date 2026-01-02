# Perfil: Full Stack

Mini API REST using **NestJS** to manage support tickets.

Includes an automated script (start.sh) that allows you to start the project with a single command.

The project includes:
- Seed data loaded from a JSON file for testing purposes
- A one-command startup script (`start.sh`)
- In-memory data storage (no database)

Any data created during runtime will be lost when the server restarts.


### Ticket Model

```ts
ticket {
  id: string,
  title: string,
  description: string,
  priority: "low" | "medium" | "high",
  status: "open" | "in_progress" | "closed",
  createdAt: Date
}
```
---

## 📦 Requirements (Exact Versions)

These exact versions were used during development:

- **Node.js**: v20.16.0  
- **npm**: 10.8.1  
- **NestJS CLI**: 11.0.10   
- **Bash/zsh** (para ejecutar `start.sh`)


---

## 📁 Project Structure

```
/
├── backend/                # NestJS API
├── start.sh                # One-command startup script
├── README.md
├── CHALLENGE.md            #Instructions
```

## Setup  

 **1. Clone the repository**  
   ```bash
   git clone https://github.com/AnahiVera/LitioByte
   cd LitioByte-Anahi
   ```


** Run with start.sh**
1. **Setup**  
    Open a bash terminal to start the app

2. **Start the app**  
   ```bash
   ./start.sh
   ```
   This will install dependencies and start the backend.

3. **Access the app**  
   - Backend: [http://localhost:3001](http://localhost:3001)

## Tools Used

- **Backend**:  
  - [NestJS](https://nestjs.com/) v11.0.10  

- **Scripts**:  
  - Bash/zsh for automation (`start.sh`)

## Notes

### Create endpoint
Ticket creation is managed by the backend to keep the process simple and consistent. 
To create a ticket, title and a description are required and cannot be empty. The priority is optional and can be set to low, medium, or high; if it is not provided, automatically assigns low. Other values are handled internally: ID is generated automatically, the initial status is always set to open, and the creation date is added by the system at the moment the ticket is created. By controlling these values on the backend, it avoids incorrect data, ensures a clear starting state for every ticket.

### Listing endpoint
For listing and sorting, the endpoint accepts optional parameters to filter tickets by status and to sort them either by priority or by creation date. Only valid statuses (open, in_progress, closed) and valid sorting options (priority, createdAt) are allowed; if an invalid value is provided, the request is rejected to avoid ambiguous or incorrect results. When a status is specified, only tickets with that status are returned. When sorting is requested, tickets are ordered either by priority (from high to low) or by their creation date 
Example:
http://localhost:3001/tickets?status=open&sort=priority


### Change status endpoint
A ticket with status `closed` represents a finalized workflow and cannot be reopened to ensure traceability and data consistency. Ticket status transitions are sequential and unidirectional:
`open → in_progress → closed`
Reverse or skipped transitions are not allowed.


### Out of scope / Decisions
When creating a ticket, if fields such as id, createdAt, or a status different from open are sent, the request is not rejected but corrected by the backend. This decision was made assuming a frontend would normally prevent sending these values. In case of incorrect or forced input, the backend still accepts the request and normalizes the data instead of failing.

---