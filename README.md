# Squidward

![squidward](https://nickelodeonuniverse.com/wp-content/uploads/Squidward.png)

## Project Info
**School project** for Yrgo, Node.js.  
Developed by: **Wilma Reistad** and **Robin Andersson**.  

## Description
Squidward is a terminal tool that analyzes your code files (primarily JavaScript) and provides feedback on variable names, file length, duplicated code, using of snake_case and CamelCase and selectors in css files. By default, Squidward is **passively aggressive**, giving cheeky feedback, but you can switch to a more serious mode using the `--serious` flag.

Squidward also supports animations for feedback messages, making it more engaging when running in the terminal. You can choose whether to enable animations when starting the program.

## Installation
1. **Clone the repository**
```bash
git clone https://github.com/wilmareistad/Squidward.git
```
```bash
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
squidward file.js
```

2. **Serious mode**
```bash
squidward file.js --serious
```

3. **Animations**
When running Squidward, you will be prompted:
```bash
Do you want to enable animations? (Y/n)
```
- Y (or just Enter) – feedback messages are displayed with animations.
- n – feedback messages are displayed without animations.