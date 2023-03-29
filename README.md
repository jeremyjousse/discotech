# Discotech

A Typescript ([NestJs](https://nestjs.com/), [React](https://fr.reactjs.org/)) app to manage your audio files.
Only available for [MacOS](https://www.apple.com/macos/) and [Apple Music](https://www.apple.com/apple-music/) app.

## Dependencies

In order to help music file identification this app queries [Discogs](https://www.discogs.com/) and [Beatport](https://www.beatport.com/).

## Dev

This repository uses [Fast Node Manager](https://github.com/Schniz/fnm), [PnPM](https://pnpm.io/fr/), [TURBO](https://turbo.build/), [NestJs](https://nestjs.com/), [React](https://fr.reactjs.org/).

### Contribute

Use `pnpm run dev` to start [frontend](apps/frontend/) and [api](apps/api/) in development mode.

### Todo

Add following components

- [ ] Tailwind
- [ ] Storybook
- [ ] SonarCloud
- [ ] Husky
- [ ] Eslint
- [ ] Prettier
- [ ] VS Code settings

### Bootstrap

This repos was bootstrapped using the following commands:

```bash
echo 'v18.15.0' > .node-version
nm use
pnpm init
pnpm dlx create-turbo@latest
rm -Rf apps/*
cd apps
pnpm create react-app frontend --template typescript
npm i -g @nestjs/cli
nest new api --package-manager=pnpm
```
