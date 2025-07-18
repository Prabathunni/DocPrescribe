# DocPrescribe - Doctor’s Prescription App (MERN Stack)

## Description
DocPrescribe is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows doctors to digitally write and manage prescriptions for patients. The app provides a simple and intuitive interface for doctors to log in , create prescriptions, and store them securely.

## Tech Stack

- **Frontend**: React.js , Axios
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT , HTTP-Only Cookies

## App Images 
<p align="center">
  <img src="https://github.com/Prabathunni/DocPrescribe/blob/main/frontend/src/assets/img1.PNG?raw=true" width="180" style="margin-right: 20px;" />
  <img src="https://github.com/Prabathunni/DocPrescribe/blob/main/frontend/src/assets/img2.PNG?raw=true" width="180" style="margin-right: 20px;" />
  <img src="https://github.com/Prabathunni/DocPrescribe/blob/main/frontend/src/assets/img3.PNG?raw=true" width="180" style="margin-right: 20px;" />
  <img src="https://github.com/Prabathunni/DocPrescribe/blob/main/frontend/src/assets/img4.PNG?raw=true" width="180" />
</p>

__Live: [DocPrescribe.com](https://docprescribe.onrender.com)__


## Features

- **Doctor Registration and Login**  
  Secure authentication system allowing doctors to create an account and log in.

- **Create and Save Prescriptions**  
  Doctors can write prescriptions including patient info, diagnosis, and medicines. These can be saved for future reference.

- **Medicine Auto-Suggestions**  
  Auto-complete feature for medicine names during input to improve accuracy and speed.

- **Print and Download as PDF**  
  Prescriptions can be printed or downloaded as PDF for record-keeping or sharing.

- **Prescription History**  
  Doctors can access previously saved prescriptions in their dashboard.

- **Responsive User Interface**  
  Clean and responsive UI designed for both desktop and mobile devices.
  

## API Endpoints

#### Authentication
- `POST /auth/register` → Register a new user
- `POST /auth/login` → Log in a user

#### Prescription
- `POST /prescription/add` → Create a new prescription
- `GET /prescription` → Get all prescriptions

#### Medicine Suggestion (External API)
- `GET https://rxnav.nlm.nih.gov/REST/approximateTerm.json?term=...`  → Fetches medicine name suggestions from RxNav API


## Installation
  
**1. Clone This Repo**

```bash
git clone https://github.com/Prabathunni/DocPrescribe.git
```  

**2. Setup Backend**

>change directory and install dependencies
>```bash
>cd backend
>npm install
>```
>
>create .env file in backend with values
> ```bash
> PORT=5000
>MONGO_URI=your_mongodb_uri
>JWT_SECRET=your_secret
> ```
>
>start backend
>```bash
>npm run dev
>```

**3. Setup Frontend**
>```bash
>cd frontend
>npm install
>npm run dev
>```







##

Created by `Prabath P U` 

-_LinkedIn: [linkedin.com/in/prabath77](https://www.linkedin.com/in/prabath77)_  
-_Email: prabathunni826@gmail.com_


