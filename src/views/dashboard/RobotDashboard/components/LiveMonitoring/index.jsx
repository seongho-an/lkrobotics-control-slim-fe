import { Grid, Card, CardContent, Typography } from '@mui/material';
import PlaceholderBox from '../common/PlaceholderBox';

const LiveMonitoring = ({ robot }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={8}>
      <Card sx={{ height: '400px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            실시간 위치 - {robot.id}
          </Typography>
          <PlaceholderBox height="320px">
            <Typography variant="body1">{robot.location}</Typography>
            <Typography variant="body2" color="text.secondary">
              방향: 북쪽 | 속도: 0.5m/s
            </Typography>
          </PlaceholderBox>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card sx={{ height: '400px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            카메라 스트림 - {robot.id}
          </Typography>
          <PlaceholderBox height="320px" title="RTSP 스트림" />
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default LiveMonitoring;
