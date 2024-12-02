# AgroInsight Web Application

AgroInsight is a smart agricultural management platform that empowers farmers with data-driven insights and tools for optimizing their farming operations. The platform provides real-time monitoring of soil health, weather conditions, crop health, and resource management, along with administrative tools for system management.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

### Farmer Dashboard
- Real-time soil health monitoring and analysis
- Weather forecasting and alerts
- Crop health tracking and disease detection
- Resource management and optimization
- Market information and pricing trends
- Customized notifications and reports

### Admin Dashboard
- User management and registration
- System monitoring and maintenance
- Data analytics and reporting
- Platform configuration

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14.x or later)
- npm (version 6.x or later)
- MongoDB (local or Atlas account)
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Clint07-datascientist/agroinsight-web-application.git
   cd agroinsight-web-application
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Environment Setup**
   - Create `.env` file in the Backend directory
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

## Project Structure

```
agroinsight-web-application/
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── farmer/
│   │   │   └── common/
│   │   ├── styles/
│   │   ├── contexts/
│   │   └── utils/
│   └── public/
└── Backend/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── utils/
```

## Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm start
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd Frontend
   npm start
   ```

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Technologies Used

### Frontend
- React.js
- React Router DOM
- CSS Modules
- Axios
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Mongoose ODM

## API Documentation

The API documentation is available at `/api-docs` when running the backend server. It includes detailed information about:
- Authentication endpoints
- Farmer-specific endpoints
- Admin management endpoints
- Data monitoring endpoints

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email info@agroinsight.com or join our Slack channel.

## Acknowledgments

- Weather data provided by OpenWeatherMap API
- Soil analysis algorithms based on agricultural research
- Icons and design elements from various open-source projects
