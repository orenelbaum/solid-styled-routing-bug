import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './App';

const app = document.getElementById('app');

if (app) {
  render(
    () => (
      <Router>
        <App />
      </Router>
    ),
    app,
  );
}
