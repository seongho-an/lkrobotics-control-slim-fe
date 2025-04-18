import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Button, IconButton, Stack } from '@mui/material';
import { Delete, Add } from '@mui/icons-material';
import PlaceholderBox from '../common/PlaceholderBox';

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

export default MapManagement;
