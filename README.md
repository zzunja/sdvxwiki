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
2. Run `git clone https://github.com/zzunja/sdvxwiki.git` to download the project to a local folder.
3. Run `npm install` inside the project folder to install the project's dependencies.
4. Run `npm run dev` to start a local server of the website.
5. Go to [http://localhost:3000](http://localhost:3000) in your web browser of choice.

You can now change what you want to the website and see it update live.


For re-running:

1. Pull any changes with `git pull`
2. Run `npm run dev`

Setup with `pnpm` is very similar; simply substitute `npm` for `pnpm` above.

## FAQ
### The search feature doesn't work when I set up locally.
The search function will not work and show an error if you don't build the website. This is because pagefind is only created when built. If you want the search function to work, simply run `npm build` and it will create the `_pagefind` directory in `/public/_pagefind/`. You can then start with `npm run dev`.

### Why have a seperate Table of Contents?
This is because on mobile the ToC on the right that is normally shown on PC doesn't show. For bigger articles to help people using mobile devices, there is a seperate ToC.
