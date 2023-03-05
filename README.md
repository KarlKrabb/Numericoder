# Numericode Processor

## Getting Started

This is a numericode encoder and decoder coded using Next.js, React Typescript with unit tests done using Jest/React. I also have added eslinting configs as well as the eslint plugin for vscode.

The front end is a single page web app with a react component that contains a single input, with both the encode and decode buttons below, as well as the output paragraph.

It makes a call to the Next API, where the messages are either encoded or decoced accordingly.

---

### Running in Docker

Make sure to have Docker installed on your computer/environment of choice.

Run:
```
- docker-compose up -d --build
```

---

### Dev Environment
Run
```
npm install

next dev
```
>Web App: https://localhost:3000

>API: https://localhost:3000/api

---

### Unit Tests
Run:
```
npm test
```