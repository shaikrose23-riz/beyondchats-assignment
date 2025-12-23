# BeyondChats Assignment:


## 📁 Project Structure

beyondchats-assignment/
│
├── backend/ # Laravel Backend API
├── node-llm/ # Node.js LLM Rewrite Service
└── README.md # Project Documentation
-----------

## ⚙️ Tech Stack

- Laravel (PHP) – Backend API
- SQLite – Database
- Node.js + Express – Rewrite Service
- Axios – Service communication
- Thunder Client / Postman – API testing

-----------

## 🧩 Architecture Overview

Client / Thunder Client
|
v
Laravel Backend API ---> SQLite Database
^
|
Node.js Rewrite Service
|
(LLM Logic / Mock AI)

------------

## ⚙️ Phase 1 – Laravel Backend 

### Features
- Stores blog articles scraped from BeyondChats
- Provides CRUD APIs for articles
- Uses SQLite for simplicity

### Article Fields
- title
- slug
- content
- source_url
- version (original / rewritten)
- timestamps

-------------

###  Laravel API Endpoints

#### Create Article
POST /api/articles

Example JSON body:
```json
{
  "title": "Chatbots Magic: Beginner’s Guidebook",
  "content": "Embrace the evolution by understanding your website’s unique needs.",
  "source_url": "https://beyondchats.com/blogs/introduction-to-chatbots/",
  "version": "original"
}

## Fetch All Articles
GET /api/articles

Returns all stored articles (original + rewritten).


Phase 2 – Node.js Rewrite Service

Node Rewrite API
POST http://localhost:5000/rewrite/{article_id}

Example:

POST http://localhost:5000/rewrite/1

How to Run the Project
1️⃣ Start Laravel Backend
cd backend
php artisan migrate
php artisan serve


Server runs on:

http://127.0.0.1:8000

Start Node.js Rewrite Service
cd node-llm
npm install
node index.js


Service runs on:

http://localhost:5000

Create Articles
POST http://127.0.0.1:8000/api/articles

Rewrite an Article
POST http://localhost:5000/rewrite/1

Fetch All Articles
GET http://127.0.0.1:8000/api/articles

## Architecture / Data Flow

Below is the data flow of the project:

![Architecture Diagram](assets/architecture-diagram.png)
