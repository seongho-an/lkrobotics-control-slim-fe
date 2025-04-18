import { Card, CardContent, Typography, Stack } from '@mui/material';

const StatusCard = ({ title, value, color, icon: Icon, subtext }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        {Icon && <Icon sx={{ color: color }} fontSize="large" />}
      </Stack>
      <Typography variant="h4" color={color} gutterBottom>
        {value}
      </Typography>
      {subtext && (
        <Typography variant="body2" color="text.secondary">
          {subtext}
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default StatusCard;
