# SDVX WIKI
This is a wiki page for the game Sound Voltex made mainly with [Nextra](https://nextra.site/). 
![2025-04-09 12_04_08-](https://github.com/user-attachments/assets/9fd5a93c-603c-4775-8138-af93bd65e2f1)

Every page on the wiki is a [markdown](https://en.wikipedia.org/wiki/Markdown) file. Tagged with .mdx, each page is essentially just a notepad with markdown features. For information on how to use markdown see [here](https://www.markdownguide.org/)

This project is running on Next.js with Tailwind CSS.

## Contributing

If you see an error or want to add something, feel free to send a pull request or submit an issue. You can also contact me on Discord at masonm.07.

## Development 
To set up locally:
1. Install [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download). Select `v22.14.0 (LTS)` for your operating system using `fnm` with `npm`
2. Create a folder where you want to store the project and run `git clone https://github.com/zzunja/sdvxwiki.git` in it.
3. Run `npm i` in the folder.
4. Run `npm run dev` to start a local server of the website.
5. Go to localhost:3000 on your web browser of choice.

You can now change what you want to the website and see it update live.

For re-running
1. Pull any changes with `git pull`
2. Run `npm run dev`

For setup with pnpm:
1) Clone the project with `git`.
2) Download Node.js using the instructions [here](https://nodejs.org/en/download), with settings `v22.14.0 (LTS)`, your operating system, `nvm`, `pnpm`.
3) Run `pnpm install` in the project folder to install dependencies.
4) Run `pnpm run build` to build the project.
5) Run `pnpm run start` to host the project locally; the address to view the site will be listed next to `- Local:`.
6) Redo steps 4 and 5 after each change.
