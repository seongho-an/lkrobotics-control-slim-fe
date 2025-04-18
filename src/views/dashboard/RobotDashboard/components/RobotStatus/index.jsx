import { Grid } from '@mui/material';
import { Map, Battery90, BatteryCharging90 } from '@mui/icons-material';
import StatusCard from '../common/StatusCard';

const RobotStatus = ({ robot }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={3}>
      <StatusCard
        title="로봇 통신 상태"
        value={robot.status}
        color={robot.status === '작동중' ? '#4CAF50' : '#FF9800'}
        subtext={`${robot.id} | 지연시간: ${robot.networkDelay}`}
      />
    </Grid>
    <Grid item xs={12} md={3}>
      <StatusCard
        title="현재 작업"
        value={robot.currentTask}
        color="#2196F3"
        subtext={`시작: ${robot.taskStartTime} | 예상 종료: ${robot.taskEndTime}`}
      />
    </Grid>
    <Grid item xs={12} md={3}>
      <StatusCard
        title="배터리 상태"
        value={`${robot.battery}%`}
        color={robot.battery > 20 ? '#4CAF50' : '#f44336'}
        icon={robot.status === '충전중' ? BatteryCharging90 : Battery90}
        subtext={`위치: ${robot.location}`}
      />
    </Grid>
    <Grid item xs={12} md={3}>
      <StatusCard title="현재 위치" value={robot.location} color="#673ab7" icon={Map} subtext="방향: 북쪽 | 속도: 0.5m/s" />
    </Grid>
  </Grid>
);

export default RobotStatus;
