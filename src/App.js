import logo from './logo.svg';
import './App.css';
import './fonts.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import StarParallax from './components/StarParallax';

const darkTheme = createTheme({
  components:{
    MuiAppBar:{
      styleOverrides: {
        root: {
          backgroundColor: '#121212'
        }
      }
    },
    MuiToolbar:{
      styleOverrides:{
        root:{
          paddingLeft: '0 !important',
          paddingRight: '0 !important'
        }
      }
    }
  },
  typography: {
    fontFamily: [
      'colfax-web'
    ]
  },
  palette: {
    mode: 'dark',
  },
});


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div style={{paddingTop: '36px', marginBottom: '400px', marginTop: '48px'}}>
        <NavBar/>
        <div>
          <StarParallax/>
        </div>
        <div className="body">

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
