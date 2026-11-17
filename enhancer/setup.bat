@echo off
echo ========================================
echo  Brefyr AI Enhancer - Setup
echo ========================================
echo.

REM Check Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Node.js not found. Installing via winget...
    winget install OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
    echo [!] Please restart this script after Node.js installs.
    pause
    exit /b
)
echo [OK] Node.js found:
node --version

REM Check Ollama
where ollama >nul 2>nul
if %errorlevel% neq 0 (
    echo [!] Ollama not found. Installing...
    winget install Ollama.Ollama --accept-package-agreements --accept-source-agreements
    echo [!] Please restart this script after Ollama installs.
    pause
    exit /b
)
echo [OK] Ollama found

REM Start Ollama if not running
curl -s http://localhost:11434/api/tags >nul 2>nul
if %errorlevel% neq 0 (
    echo [..] Starting Ollama...
    start "" ollama serve
    timeout /t 5 >nul
)

REM Pull the model
echo [..] Pulling AI model (mistral:7b) - this may take a few minutes on first run...
ollama pull mistral:7b

echo.
echo ========================================
echo  Setup complete! Starting enhancer...
echo ========================================
echo.
echo  Open http://localhost:3333 in your browser
echo.

node server.mjs
pause
