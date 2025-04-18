import { useState } from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

// Components
import DashboardPage from './pages/Dashboard';
import MapManagementPage from './pages/MapManagement';
import ErrorBoundary from './components/ErrorBoundary';

// Mock Data
const robots = [
  {
    id: 'FN-BOT-001',
    model: 'Cleaner-X1',
    status: '작동중',
    location: '1층 복도',
    battery: 85,
    currentTask: '청소 작업',
    taskStartTime: '10:00',
    taskEndTime: '10:30',
    networkDelay: '50ms'
  },
  {
    id: 'FN-BOT-002',
    model: 'Delivery-D1',
    status: '충전중',
    location: '충전스테이션',
    battery: 20,
    currentTask: '충전',
    taskStartTime: '09:45',
    taskEndTime: '11:00',
    networkDelay: '45ms'
  }
];

export default function RobotDashboard() {
  const [selectedRobotId, setSelectedRobotId] = useState(robots[0].id);
  const selectedRobot = robots.find((robot) => robot.id === selectedRobotId);

  return (
    <Box sx={{ p: 3 }}>
      <Routes>
        <Route
          index
          element={
            <DashboardPage
              robots={robots}
              selectedRobot={selectedRobot}
              selectedRobotId={selectedRobotId}
              onSelectRobot={setSelectedRobotId}
            />
          }
          errorElement={<ErrorBoundary />}
        />
        <Route path="maps" element={<MapManagementPage selectedRobot={selectedRobot} />} errorElement={<ErrorBoundary />} />
      </Routes>
    </Box>
  );
}
