
# Monaco Detailing — Sitio listo para Vercel (Vite + React + Tailwind)

## Deploy en 3 pasos

### 1) Subir a GitHub
```bash
git init
git add .
git commit -m "Monaco Detailing - initial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/monaco-detailing-site.git
git push -u origin main
```

### 2) Importar en Vercel
- Ir a https://vercel.com → **Add New → Project → Import from GitHub**.
- Elegir `monaco-detailing-site`.
- Configuración:
  - **Framework Preset:** Vite
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
- Click en **Deploy**.

> `vercel.json` ya incluye la regla de *rewrites* para SPA. No toques nada más.

### 3) Conectar dominio (opcional)
- En **Project → Settings → Domains → Add**, agregar `monacodetailing.com.ar` y `www.monacodetailing.com.ar`.
- En tu DNS:
  - `A` del dominio raíz → `76.76.21.21`
  - `CNAME` de `www` → `cname.vercel-dns.com` o a tu `.vercel.app`

---

## Desarrollo local
```bash
npm i
npm run dev
```
Abrir `http://localhost:5173`.

