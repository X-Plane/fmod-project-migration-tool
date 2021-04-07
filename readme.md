# FMOD 2.0 project migration tool

This tool is intended to fix your parameter names after migrating your existing X-Plane FMOD Studio 1.08 project to FMOD Studio 2.01. The steps are:

1. Open your old 1.08 project in Studio 2.01
2. It will ask you if you want to migrate it, answer YES.
3. Save it.
4. Run this tool on the project to fix the parameter names.

## Requirements

- Node 10.x
- NPM

## Instalation

1. Clone this repo and run `npm install`.
2. Create a `fmod_project` folder on this tool directory. 
3. Copy your recently migrated FMOD 2.01 project into the `fmod_project` directory.
4. Run `./index.js`
5. That's it, you can now compile and run your project with X-Plane 12.

![Photo](capture.png?raw=true "Screenshot")