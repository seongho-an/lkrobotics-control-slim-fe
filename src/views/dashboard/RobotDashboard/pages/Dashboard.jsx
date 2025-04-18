import { Box } from '@mui/material';
import { SmartToy, Settings, Notifications } from '@mui/icons-material';

// Components
import RobotStatus from '../components/RobotStatus';
import LiveMonitoring from '../components/LiveMonitoring';
import Controls from '../components/Controls';
import EventLog from '../components/EventLog';
import RobotList from '../components/RobotList';
import SectionTitle from '../components/common/SectionTitle';

// Mock Data
const alerts = [
  { id: 1, type: 'collision', severity: 'high', message: '충돌 위험 감지', time: '10:00' },
  { id: 2, type: 'battery', severity: 'medium', message: '배터리 부족 (20%)', time: '09:55' },
  { id: 3, type: 'intrusion', severity: 'low', message: '작업 구역 진입 감지', time: '09:45' }
];

const DashboardPage = ({ robots, selectedRobot, selectedRobotId, onSelectRobot }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* 📋 전체 로봇 목록 */}
      <SectionTitle icon={Settings} title="전체 로봇 목록" />
      <Box sx={{ mb: 4 }}>
        <RobotList robots={robots} selectedRobotId={selectedRobotId} onSelectRobot={onSelectRobot} />
      </Box>

      {/* 🧠 로봇 상태 */}
      <SectionTitle icon={SmartToy} title="로봇 상태" />
      <Box sx={{ mb: 4 }}>
        <RobotStatus robot={selectedRobot} />
      </Box>

      {/* 🎥 실시간 관제 */}
      <SectionTitle icon={Settings} title="실시간 관제" />
      <Box sx={{ mb: 4 }}>
        <LiveMonitoring robot={selectedRobot} />
      </Box>

      {/* 🔧 제어 기능 */}
      <SectionTitle icon={Settings} title="제어 기능" />
      <Box sx={{ mb: 4 }}>
        <Controls robot={selectedRobot} />
      </Box>

      {/* 🔔 이벤트 로그 */}
      <SectionTitle icon={Notifications} title="이벤트 로그" />
      <Box sx={{ mb: 4 }}>
        <EventLog robot={selectedRobot} alerts={alerts} />
      </Box>
    </Box>
  );
};

export default DashboardPage;
