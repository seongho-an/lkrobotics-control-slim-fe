import { Box } from '@mui/material';
import { Map } from '@mui/icons-material';
import MapManagement from '../components/MapManagement';
import SectionTitle from '../components/common/SectionTitle';

// Mock Data - 실제로는 상위 컴포넌트나 전역 상태에서 관리되어야 함
const maps = [
  { id: 1, name: '1층 맵', lastUpdated: '2024-03-20' },
  { id: 2, name: '2층 맵', lastUpdated: '2024-03-19' }
];

const MapManagementPage = ({ selectedRobot }) => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <SectionTitle icon={Map} title="맵 관리" />
      <MapManagement robot={selectedRobot} maps={maps} />
    </Box>
  );
};

export default MapManagementPage;
