import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { Battery90 } from '@mui/icons-material';

const RobotList = ({ robots, selectedRobotId, onSelectRobot }) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        전체 로봇 목록
      </Typography>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>로봇 ID</TableCell>
              <TableCell>모델</TableCell>
              <TableCell>상태</TableCell>
              <TableCell>위치</TableCell>
              <TableCell>배터리</TableCell>
              <TableCell>현재 작업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {robots.map((robot) => (
              <TableRow
                key={robot.id}
                sx={{
                  cursor: 'pointer',
                  bgcolor: robot.id === selectedRobotId ? 'action.selected' : 'inherit'
                }}
                onClick={() => onSelectRobot(robot.id)}
              >
                <TableCell>{robot.id}</TableCell>
                <TableCell>{robot.model}</TableCell>
                <TableCell>
                  <Chip
                    label={robot.status}
                    color={robot.status === '작동중' ? 'success' : robot.status === '충전중' ? 'warning' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>{robot.location}</TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Battery90 color={robot.battery > 20 ? 'success' : 'error'} />
                    {robot.battery}%
                  </Stack>
                </TableCell>
                <TableCell>{robot.currentTask}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>
);

export default RobotList;
