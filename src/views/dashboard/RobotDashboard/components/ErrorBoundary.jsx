import { Box, Typography, Button } from '@mui/material';
import { useRouteError, useNavigate } from 'react-router-dom';
import { Error as ErrorIcon } from '@mui/icons-material';

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        p: 3
      }}
    >
      <ErrorIcon sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
      <Typography variant="h4" gutterBottom>
        오류가 발생했습니다
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {error?.message || '예기치 않은 오류가 발생했습니다. 다시 시도해 주세요.'}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={() => navigate(-1)} sx={{ minWidth: 120 }}>
          이전 페이지
        </Button>
        <Button variant="outlined" onClick={() => navigate('/dashboard/robot', { replace: true })} sx={{ minWidth: 120 }}>
          대시보드로 이동
        </Button>
      </Box>
    </Box>
  );
}
