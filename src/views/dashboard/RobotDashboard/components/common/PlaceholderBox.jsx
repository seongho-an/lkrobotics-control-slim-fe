import { Box, Typography } from '@mui/material';

const PlaceholderBox = ({ height, title, children }) => (
  <Box
    sx={{
      bgcolor: 'grey.100',
      height,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 1,
      flexDirection: 'column',
      gap: 2
    }}
  >
    {children || (
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
    )}
  </Box>
);

export default PlaceholderBox;
