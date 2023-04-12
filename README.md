# Discotech

A Typescript ([NestJs](https://nestjs.com/), [React](https://fr.reactjs.org/)) app to manage your audio files.
Only available for [MacOS](https://www.apple.com/macos/) and [Apple Music](https://www.apple.com/apple-music/) app.

## Dependencies

In order to help music file identification this app queries [Discogs](https://www.discogs.com/) and
[Beatport](https://www.beatport.com/).

## Dev

This repository uses [Fast Node Manager](https://github.com/Schniz/fnm), [PnPM](https://pnpm.io/fr/),
[TURBO](https://turbo.build/), [NestJs](https://nestjs.com/), [React](https://fr.reactjs.org/),
[Husky](https://github.com/typicode/husky).

### Contribute

Use `pnpm run dev` to start [frontend](apps/frontend/) and [api](apps/api/) in development mode.

### Todo

Add following components

- [ ] Semantic release
- [ ] Nest Clean Architecture [1](https://github.com/royib/clean-architecture-nestJS) [2](https://github.com/jonathanPretre/clean-architecture-nestjs/tree/master/server)
- [ ] [Export Music library](https://community.roonlabs.com/t/applescript-to-export-music-app-xml-nightly/102750)

### Bootstrap

This repos was bootstrapped using the following commands:

```bash
echo 'v18.15.0' > .node-version
nm use
pnpm init
pnpm dlx create-turbo@latest
rm -Rf apps/*
cd apps
npm i -g @nestjs/cli
nest new api --package-manager=pnpm
npm create vite@latest frontend
cd frontend 
pnpx sb@next init 
pnpm add -D tailwindcss
```
