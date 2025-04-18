import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Stack } from '@mui/material';
import { Warning } from '@mui/icons-material';

const severityColors = {
  high: '#ff1744',
  medium: '#ff9100',
  low: '#ffea00'
};

const EventLog = ({ robot, alerts }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            실시간 알림 - {robot.id}
          </Typography>
          <List>
            {alerts.map((alert) => (
              <ListItem key={alert.id} divider>
                <ListItemText
                  primary={
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Warning sx={{ color: severityColors[alert.severity] }} />
                      <Typography>{alert.message}</Typography>
                    </Stack>
                  }
                  secondary={alert.time}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default EventLog;
