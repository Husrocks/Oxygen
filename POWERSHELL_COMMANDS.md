# PowerShell Commands for Oxygen Gym Project

## 1. Navigate to Project Directory
```powershell
cd D:\Oxygen
```

## 2. Check Node.js Version
```powershell
node --version
```

## 3. Check npm Version
```powershell
npm --version
```

## 4. Install Dependencies
```powershell
npm install
```

## 5. Run Development Server
```powershell
npm run dev
```

## 6. Build for Production
```powershell
npm run build
```

## 7. Start Production Server
```powershell
npm start
```

## 8. Run Linter
```powershell
npm run lint
```

## 9. Clear Cache and Reinstall
```powershell
Remove-Item -Recurse -Force node_modules; Remove-Item -Force package-lock.json; npm install
```

## Quick Setup (All-in-One)
```powershell
cd D:\Oxygen; npm install; npm run dev
```

## Additional Useful Commands

### Check if Port 3000 is in Use
```powershell
netstat -ano | findstr :3000
```

### Kill Process on Port 3000
```powershell
$process = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($process) {
    Stop-Process -Id $process.OwningProcess -Force
}
```

### List All Files in Project
```powershell
Get-ChildItem -Recurse -File | Select-Object FullName
```

### Check TypeScript Compilation
```powershell
npx tsc --noEmit
```

### Open Project in VS Code
```powershell
code .
```

### Check Git Status (if using Git)
```powershell
git status
```

### Create .env File
```powershell
New-Item -Path .env.local -ItemType File
```

