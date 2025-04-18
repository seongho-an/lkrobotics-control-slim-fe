import { Grid, Card, CardContent, Typography, Stack, Button, IconButton } from '@mui/material';
import { ArrowUpward, ArrowDownward, ArrowBack, ArrowForward, Stop, RotateLeft, RotateRight } from '@mui/icons-material';

const ControlButton = ({ icon: Icon, color = 'primary', ...props }) => (
  <IconButton
    sx={{
      bgcolor: `${color}.main`,
      color: 'white',
      '&:hover': { bgcolor: `${color}.dark` },
      width: 60,
      height: 60
    }}
    {...props}
  >
    <Icon />
  </IconButton>
);

const Controls = ({ robot }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={8}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            수동 제어 - {robot.id}
          </Typography>
          <Stack spacing={2} alignItems="center">
            <ControlButton icon={ArrowUpward} />
            <Stack direction="row" spacing={2}>
              <ControlButton icon={ArrowBack} />
              <ControlButton icon={Stop} color="error" />
              <ControlButton icon={ArrowForward} />
            </Stack>
            <ControlButton icon={ArrowDownward} />
            <Stack direction="row" spacing={2} mt={2}>
              <ControlButton icon={RotateLeft} color="secondary" />
              <ControlButton icon={RotateRight} color="secondary" />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={4}>
      <Card sx={{ bgcolor: '#ffebee', height: '100%' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom color="error">
            비상 정지 - {robot.id}
          </Typography>
          <Button variant="contained" color="error" fullWidth size="large" sx={{ height: 100, fontSize: '1.5rem' }}>
            비상 정지
          </Button>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default Controls;
