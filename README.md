# Admin Jewel Portal

A full-stack admin portal application for managing jewelry store operations, including customer management, sales tracking, and analytics.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **PostgreSQL** access to remote database

### Installation & Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/Kanimozhi-28/admin_jewel.git
cd admin_jewel
```

#### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

#### 3. Frontend Setup

```bash
cd admin-portal
npm install
```

### Running the Application

#### Start Backend Server

```bash
cd backend
python main.py
```

The backend will run on **http://localhost:8000**

#### Start Frontend Server

```bash
cd admin-portal
npm run dev
```

The frontend will run on **http://localhost:5173** (or the port shown in terminal)

### Login Credentials

The application connects to a remote PostgreSQL database. Available test credentials:

| Username | Password |
|----------|----------|
| vishwa | password |
| marimuthu | password1 |
| karthi | password |
| david | password |
| user_4 | newpassword123 |
| user_12 | password |

## 📁 Project Structure

```
admin_jewel/
├── backend/                 # FastAPI backend
│   ├── main.py             # Main API server
│   ├── models.py           # SQLAlchemy models
│   ├── schemas.py          # Pydantic schemas
│   ├── crud.py             # Database operations
│   ├── database.py         # Database connection
│   └── requirements.txt    # Python dependencies
│
├── admin-portal/           # React frontend
│   ├── src/
│   │   ├── pages/          # Page components
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React context (Auth, Data)
│   │   ├── services/       # API services
│   │   └── App.jsx         # Main app component
│   ├── package.json        # Node dependencies
│   └── vite.config.js      # Vite configuration
│
└── README.md               # This file
```

## 🔧 Configuration

### Database Configuration

The application is configured to connect to a remote PostgreSQL database. Database settings are in `backend/database.py`:

- **Host**: `10.100.21.222`
- **Database**: `jewel_mob`
- **User**: `jewel_user`
- **Password**: `jewel123`

**Note**: These settings are pre-configured. Do not change them unless you have access to a different database.

### API Configuration

- **Backend URL**: `http://localhost:8000`
- **Frontend URL**: `http://localhost:5173` (or as shown in terminal)

CORS is configured to allow requests from the frontend.

## 📚 Features

- **User Authentication**: Login with username/password from remote database
- **Dashboard**: Overview of key metrics and analytics
- **Customer Management**: View and manage customer data
- **Salesmen Management**: Manage salesperson profiles and assignments
- **Reports**: View activity reports and analytics
- **Settings**: Application configuration
- **Integrations**: Third-party integrations

## 🛠️ Available Scripts

### Backend

```bash
# Run the server
python main.py

# Get all users from database
python get_users_from_remote_db.py
```

### Frontend

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🔌 API Endpoints

### Authentication
- `POST /login/` - User login

### Users
- `GET /users/` - Get all users
- `POST /users/` - Create user
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user
- `GET /users/credentials/` - Get all users with credentials

### Customers
- `GET /customers/` - Get all customers

### Sessions
- `GET /sessions/` - Get all sessions
- `POST /sessions/` - Create session

### Analytics
- `GET /metrics/` - Dashboard metrics
- `GET /activity-heatmap/` - Activity heatmap data
- `GET /audit-logs/` - Audit logs

## 🐛 Troubleshooting

### Backend Issues

1. **Database Connection Error**
   - Verify database credentials in `backend/database.py`
   - Ensure network access to `10.100.21.222`
   - Check if PostgreSQL is accessible

2. **Port Already in Use**
   - Backend uses port 8000 by default
   - Change port in `main.py` if needed

### Frontend Issues

1. **Cannot Connect to Backend**
   - Ensure backend is running on `http://localhost:8000`
   - Check CORS settings in `backend/main.py`
   - Verify API URL in `admin-portal/src/context/AuthContext.jsx`

2. **Dependencies Installation Fails**
   - Clear node_modules: `rm -rf node_modules package-lock.json`
   - Reinstall: `npm install`

### Login Issues

1. **Invalid Credentials**
   - Verify username and password are correct
   - Check user exists in database: `python backend/get_users_from_remote_db.py`
   - Ensure user account is active

2. **Network Error**
   - Check if backend server is running
   - Verify backend URL in frontend code
   - Check browser console for errors

## 📝 Development Notes

- The application uses **FastAPI** for the backend
- Frontend is built with **React** and **Vite**
- Styling uses **Tailwind CSS**
- Database ORM is **SQLAlchemy**
- Authentication is session-based with localStorage

## 🔒 Security Notes

- Passwords are currently stored as plaintext in the database
- For production, implement password hashing (bcrypt recommended)
- Add JWT tokens for secure authentication
- Implement rate limiting for API endpoints

## 📄 License

This project is private and proprietary.

## 👥 Support

For issues or questions, please contact the development team.

---

**Happy Coding! 🎉**
