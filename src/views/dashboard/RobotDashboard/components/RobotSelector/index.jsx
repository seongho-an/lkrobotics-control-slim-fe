import { Card, CardContent, Typography, Stack, ToggleButton, ToggleButtonGroup, Chip } from '@mui/material';
import { SmartToy } from '@mui/icons-material';

const RobotSelector = ({ robots, selectedRobot, onSelectRobot }) => (
  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        로봇 선택
      </Typography>
      <ToggleButtonGroup value={selectedRobot} exclusive onChange={(e, newValue) => onSelectRobot(newValue)} fullWidth>
        {robots.map((robot) => (
          <ToggleButton
            key={robot.id}
            value={robot.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              py: 2
            }}
          >
            <SmartToy fontSize="large" />
            <Stack alignItems="center" spacing={1}>
              <Typography variant="subtitle1">{robot.id}</Typography>
              <Chip
                label={robot.status}
                color={robot.status === '작동중' ? 'success' : robot.status === '충전중' ? 'warning' : 'default'}
                size="small"
              />
            </Stack>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </CardContent>
  </Card>
);

export default RobotSelector;
