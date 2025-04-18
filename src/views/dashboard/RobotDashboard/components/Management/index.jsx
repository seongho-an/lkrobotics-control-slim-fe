import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
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
import { Battery90, Delete, Add } from '@mui/icons-material';
import PlaceholderBox from '../common/PlaceholderBox';

const RobotList = ({ robots, selectedRobotId, onSelectRobot }) => (
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
);

const MapManagement = ({ robot, maps }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">맵 등록 - {robot.id}</Typography>
            <Button startIcon={<Add />} variant="contained" color="primary">
              새 맵 등록
            </Button>
          </Stack>
          <PlaceholderBox height="200px" title="맵 등록 영역" />
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            맵 관리 - {robot.id}
          </Typography>
          <List>
            {maps.map((map) => (
              <ListItem
                key={map.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" color="error">
                    <Delete />
                  </IconButton>
                }
              >
                <ListItemText primary={map.name} secondary={`최종 수정: ${map.lastUpdated}`} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

const Management = ({ robot, robots, maps, selectedRobotId, onSelectRobot }) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            전체 로봇 목록
          </Typography>
          <RobotList robots={robots} selectedRobotId={selectedRobotId} onSelectRobot={onSelectRobot} />
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={12}>
      <MapManagement robot={robot} maps={maps} />
    </Grid>
  </Grid>
);

export default Management;
