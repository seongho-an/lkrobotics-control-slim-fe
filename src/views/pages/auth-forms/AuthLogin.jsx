import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { Visibility, VisibilityOff } from '@mui/icons-material';

// ===============================|| JWT - LOGIN ||=============================== //

const AuthLogin = ({ onLogin }) => {
  const theme = useTheme();

  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 실제 로그인 검증 로직 구현
    onLogin();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>이메일</InputLabel>
        <OutlinedInput type="email" name="email" label="이메일" value={formData.email} onChange={handleChange} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>비밀번호</InputLabel>
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          name="password"
          label="비밀번호"
          value={formData.password}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)} edge="end" size="large">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              name="checked"
              color="primary"
              size="small"
            />
          }
          label={<Typography variant="body2">로그인 상태 유지</Typography>}
        />
        <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
          비밀번호 찾기
        </Typography>
      </Stack>

      <Box sx={{ mt: 2 }}>
        <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="secondary">
          로그인
        </Button>
      </Box>
    </form>
  );
};

export default AuthLogin;
