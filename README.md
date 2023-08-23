Step 1: Set Up Google Developer Console
Create a New Project:

Go to the Google Developer Console.
Click on "Select a project" and then click the "+ New Project" button.
Follow the prompts to create a new project.
Enable Google+ API (Deprecated but still required for profile data):

In the project dashboard, click on "Enable APIs and Services."
Search for "Google+ API" and enable it.
Create OAuth Client ID:

In the project dashboard, go to "Credentials."
Click on "Create Credentials" and select "OAuth client ID."
Choose "Web application" as the application type.
Set the authorized JavaScript origins and redirect URIs according to your frontend and backend URLs. For local development, use http://localhost:5173(Vite) as the origin and http://localhost:${PORT}/auth/google/callback as the callback URI.
Note down the generated client ID and client secret.
Step 2: Set Up GitHub OAuth Application
Create GitHub OAuth Application:
Go to your GitHub account settings and navigate to "Developer settings" > "OAuth apps."
Click on "New OAuth App."
Set the "Homepage URL" to your frontend URL (e.g., http://localhost:3000) and the "Authorization callback URL" to your backend URL followed by /auth/github/callback (e.g., http://localhost:5000/auth/github/callback).
Note down the generated client ID and client secret.
Step 3: Backend Implementation (Express, Node.js)
Install Dependencies:

Express, passport, passport-google-oauth20, passport-github2, mongoose, express-session, cors, and any other needed packages.
Configure Passport and Sessions:

Create passport strategies for Google and GitHub login in the passport.js file.
Set up Express routes for handling login, callback, and user data retrieval.
Models:

Create a Mongoose model for the User in the userModel.js file.
Step 4: Frontend Implementation (React)
Install Dependencies:

axios, react-router-dom, and any other needed packages.
Create Components:

Create a Home component that includes buttons for Google and GitHub login.
Set up routing using react-router-dom to navigate to the Home component.
Handle Login Button Clicks:

Implement functions to initiate Google and GitHub login using window.open with the respective authentication routes from the backend.
