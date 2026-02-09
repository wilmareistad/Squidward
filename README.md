# Squidward

![squidward](https://nickelodeonuniverse.com/wp-content/uploads/Squidward.png)

## Project Info
**School project** for Yrgo, Node.js.  
Developed by: **Wilma Reistad and Robin Andersson**.  

## Description
Squidward is a terminal tool that analyzes your code files (primarily JavaScript) and provides feedback on variable names, file length, and more. By default, Squidward is **passively aggressive**, giving cheeky feedback, but you can switch to a more serious mode using the `--serious` flag.

## Installation
1. **Clone the repository**
```bash
git clone https://github.com/wilmareistad/Squidward.git
cd Squidward
```

2. **Install dependencies**
```bash
npm install
```

3. **Make Squidward available as a global command**
```bash
npm link
```

## Usage 
1. **Default passive mode**
```bash
squidward test.js
```

2. **Serious mode**
```bash
squidward test.js --serious
```

