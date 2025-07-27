:root {
  --primary: #005e90;
  --secondary: #0abdc6;
  --bg: #f9f9f9;
  --text: #222;
  --font: 'Inter', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 960px;
  margin: auto;
  padding: 2rem 0;
}

header {
  background: var(--primary);
  color: white;
  text-align: center;
  padding: 2rem 0;
}

header h1 {
  font-size: 2.5rem;
}

header p {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

nav {
  margin-top: 1rem;
}

nav a {
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.section {
  padding: 3rem 0;
}

.section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary);
}

ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.btn {
  display: inline-block;
  background: var(--secondary);
  color: white;
  padding: 0.7rem 1.5rem;
  margin-top: 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
}

.btn:hover {
  background: var(--primary);
}

footer {
  text-align: center;
  padding: 2rem 0;
  font-size: 0.9rem;
  background: #eee;
}
