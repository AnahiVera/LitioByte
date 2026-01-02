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
   git clone 
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
A ticket with status `closed` represents a finalized workflow and cannot be reopened to ensure traceability and data consistency.

Ticket status transitions are sequential and unidirectional:
`open → in_progress → closed`
Reverse transitions are not allowed.

---