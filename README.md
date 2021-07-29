# Reproduce the issue


## Vite 2.3.8 works
```bash
cd src/Frontend/Themes/ViteTheme
npm install vite@2.3.8
npm run dev
```

Browse to: [http://localhost:3000/src/Frontend/Themes/ViteTheme/@vite/client.js](http://localhost:3000/src/Frontend/Themes/ViteTheme/@vite/client.js)
It should work on Vite 2.3.8.

## Vite 2.4.* does not load the @vite/client url
Now upgrade to Vite 2.4 and test again:

```bash
npm install vite@latest
npm run dev
```

Try to browse to: [http://localhost:3000/src/Frontend/Themes/ViteTheme/@vite/client.js](http://localhost:3000/src/Frontend/Themes/ViteTheme/@vite/client.js) and it will fail
