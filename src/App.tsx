import { Routes, Route, A } from '@solidjs/router';
import { css, StyleRegistry } from 'solid-styled';

function Home() {
  css`div { color: red; }`;
  return <div>Home</div>;
}

function Hello() {
  return <div>Hello</div>;
}

export default function App() {
  return (
    <StyleRegistry>
      <A href="/">index</A>
      <A href="/hello">hello</A>
      <Routes>
        <Route path="/hello" component={Hello} />
        <Route path="/" component={Home} />
      </Routes>
    </StyleRegistry>
  );
}
