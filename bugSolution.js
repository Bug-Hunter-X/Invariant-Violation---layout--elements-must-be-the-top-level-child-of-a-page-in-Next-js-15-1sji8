```javascript
// pages/index.js

import MyLayout from '../components/MyLayout';

export default function Home() {
  return (
    <MyLayout>
      <div>
        <h1>Welcome to my Next.js app!</h1>
      </div>
    </MyLayout>
  );
}

// components/MyLayout.js

export default function MyLayout({ children }) {
  return (
    <div>
      <header>My Header</header>
      <main>{children}</main>
      <footer>My Footer</footer>
    </div>
  );
}
```