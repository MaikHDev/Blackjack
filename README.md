# Blackjack

## Installation

### Prerequisites

- Docker
- Node.js
- Make

#### Make installation for Windows using Chocolatey

If you have not installed Chocolatey, you can install it by running the following command in an elevated PowerShell prompt:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Then you can install Make by running the following command in an elevated PowerShell prompt:

```bash
choco install make
```

### Setup

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Copy the `.env.example` file to `.env` and fill in the values
4. Run `make` to start the website and database
5. Open `http://localhost:3000` in your browser
