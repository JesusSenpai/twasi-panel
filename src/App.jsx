import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import AuthLoader from './auth/AuthLoader';
import RequireAuth from './auth/RequireAuth';
import configureStore from './state/store';

import Header from './views/common/Header';
import Content from './views/common/Content';
import Public from './views/Public/Public';
import Footer from './views/Footer/Footer';

import PanelContent from './views/Panel/PanelContent';

import LanguageProvider from './translations/LanguageProvider';

import './styles/main.css';

const darktheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00aeae',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e53935',
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiPaper: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: '#b7b7b7', // Some CSS
        backgroundColor: '#1b292d',
      },
    },
    MuiCardContent: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: '#b7b7b7', // Some CSS
        backgroundColor: '#162226', // Some CSS
      },
    },
    MuiMenuItem: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        color: '#b7b7b7', // Some CSS
        padding: '10px',
        '&:hover': {
          backgroundColor: '#162226',
        },
      },
      selected: { // Name of the rule
        color: '#ffffff',
        background: '#00aeae !important',
      },
    },
    MuiButton: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        textTransform: 'none', // Some CSS
        color: '#b7b7b7', // Some CSS
      },
      contained: {
        backgroundColor: '#162226',
        color: '#b7b7b7',
        '&$disabled': {
          backgroundColor: '#162226',
          color: '#b7b7b7',
        },
        '&:hover': {
          backgroundColor: '#151e21',
        },
      },
    },
    MuiTableCell: { // Name of the component ⚛️ / style sheet
      body: { // Name of the rule
        color: '#b7b7b7', // Some CSS
        borderColor: 'rgba(255, 255, 255, 0.12)'
      },
    },
    MuiInputAdornment: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: '#1b292d', // Some CSS
      },
    },
    MuiTabs: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: '#162226', // Some CSS
      },
    },
    MuiTab: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        border: '0px',
      },
    },
    MuiChip: { // Name of the component ⚛️ / style sheet
      root: { // Name of the rule
        backgroundColor: '#162226', // Some CSS
      },
    },
    MuiAvatar: { // Name of the component ⚛️ / style sheet
      colorDefault: { // Name of the rule
        backgroundColor: '#162226', // Some CSS
      },
    },
  },
});

const App = () => {
  const store = configureStore();

  return (
    <LanguageProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={darktheme}>
            <AuthLoader>
              <RequireAuth optional />
              <Content>
                <Header />
                <Switch>
                  <Route path="/profile/:name" component={Public} />
                  <Route path="/" component={PanelContent} />
                </Switch>
                <Footer />
              </Content>
            </AuthLoader>
          </MuiThemeProvider>
        </BrowserRouter>
      </ReduxProvider>
    </LanguageProvider>
  );
};

export default App;
