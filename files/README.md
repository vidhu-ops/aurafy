# Image Analysis App

This is a web application where users can upload images for aura analysis and interact with healers.

## Features
1. Client login and image upload for analysis.
2. Healer login and CRM backend to manage clients.
3. React frontend and Flask backend with a Node.js CRM.

## Setup Instructions

### Backend
1. Navigate to the `/backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   python app.py
   ```

### Frontend
1. Navigate to the `/frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

### CRM
1. Navigate to the `/crm` folder:
   ```bash
   cd crm
   ```
2. Install dependencies:
   ```bash
   npm install express
   ```
3. Start the CRM server:
   ```bash
   node crm.js
   ```