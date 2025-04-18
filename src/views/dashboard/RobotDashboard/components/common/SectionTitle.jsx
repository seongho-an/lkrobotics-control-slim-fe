import { Stack, Typography } from '@mui/material';

const SectionTitle = ({ icon: Icon, title }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    sx={{
      mb: 2,
      pb: 1,
      borderBottom: '2px solid',
      borderColor: 'primary.main'
    }}
  >
    <Icon color="primary" />
    <Typography variant="h5" color="primary">
      {title}
    </Typography>
  </Stack>
);

export default SectionTitle;
