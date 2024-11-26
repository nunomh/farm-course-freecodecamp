# FARM Course

Based on youtube freecodecamp video https://www.youtube.com/watch?v=PWG7NlUDVaA

## Technologies Used

- FastAPI (Python framework)
- React
- MongoDB
- Docker

## Intro Examples

## FastAPI Server (Backend)

### Project Creation

The project was created using the FastAPI framework, starting with the creation of the main.py file.  
 Commands used:
`pip install "fastapi[standard]"` - to install FastAPI
`pip install uvicorn` - to install the server for FastAPI

### Running the Project

To run the project, use the following command in the terminal:
`uvicorn main:app --reload`

### Docs

A SwaggerUI is automatically created on /docs (http://127.0.0.1:8000/docs)

## React (Frontend)

### Project Creation

The project was created using the create-react-app command. Commands used: `npx create-react-app my-app`

### Running the Project

`npm start`

## TODO App

## Backend

### Project Creation

- `python -m venv venv`
- Dockerfile
- pyproject.toml
- `pip install "fastapi[all]" "motor[srv]" beanie aiostream`
- `pip freeze > requirements.txt`

## Frontend

### Project Creation

`npx create-react-app .`
`npm install axios react-icons`
