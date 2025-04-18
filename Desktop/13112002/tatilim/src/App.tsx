import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Box, 
  TextField, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid,
  InputAdornment
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#1391d2' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tatilim
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4 }}>
          {/* Arama Bölümü */}
          <Box sx={{ 
            p: 3, 
            backgroundColor: 'white', 
            borderRadius: 2, 
            boxShadow: 3,
            mb: 4 
          }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Nereye gidiyorsunuz?"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DatePicker
                  label="Giriş Tarihi"
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <DatePicker
                  label="Çıkış Tarihi"
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ 
                    height: '56px',
                    backgroundColor: '#1391d2',
                    '&:hover': {
                      backgroundColor: '#0d7ab0'
                    }
                  }}
                >
                  <SearchIcon /> Ara
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Otel Listesi */}
          <Grid container spacing={3}>
            {[1, 2, 3, 4].map((item) => (
              <Grid item xs={12} md={6} lg={4} key={item}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`https://source.unsplash.com/random/400x200?hotel,${item}`}
                    alt="Otel görseli"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Örnek Otel {item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Antalya, Türkiye
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" color="primary">
                        ₺1,299
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        gece
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </LocalizationProvider>
  );
}

export default App;
