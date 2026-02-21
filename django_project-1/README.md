# Advanced Library Management System

A full-featured **Django** web application for managing a library — built as an assignment project.  
Supports **CRUD** operations on books, status tracking (Available/Borrowed), search, responsive UI with card/table views, and modal delete confirmation.

## Features

- Add, view, edit, and delete books
- Book details page
- Search books by title or author
- Status coloring (green = Available, red = Borrowed)
- Responsive design (desktop table → mobile cards)
- Beautiful delete confirmation modal (no separate page)
- Django Admin panel integration
- Template inheritance with navigation bar

## Technologies Used

- **Backend**: Django 6.x
- **Frontend**: HTML, CSS (custom responsive styles), minimal JavaScript (for modal)
- **Database**: SQLite (default) — easy to switch to PostgreSQL/MySQL
- No external CSS frameworks (pure CSS for learning purposes)

## Prerequisites

Make sure you have these installed:

- Python 3.9+
- Git
- (optional) Virtual environment tool: `venv` or `virtualenv`

## Installation & Setup

Follow these steps to get the project running locally:

### 1. Download the project.
  -  download `django_project-1` folder or project files and keep under a folder named like `django_project-1`.

### 2. Create and activate a virtual environment
  *  Windows
    -```python -m venv venv```
    -```venv\Scripts\activate```
  *  macOS / Linux
    -```python3 -m venv venv```
    -```source venv/bin/activate```
### 3. Install dependencies
    -``` pip install -r requirements.txt```
### 4. Apply migrations
  - python manage.py makemigrations
  - python manage.py migrate
### 5. Create a superuser (for admin panel)
  - python manage.py createsuperuser
### 6. Run the development server
  - python manage.py runserver

**Open your browser and go to:

Main app: http://127.0.0.1:8000/
Admin panel: http://127.0.0.1:8000/admin/

Login with the superuser credentials you just created.

