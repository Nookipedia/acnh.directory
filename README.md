# acnh.directory
A comprehensive, filterable directory of web and mobile resources for *Animal Crossing: New Horizons*.

https://acnh.directory/

Built by [KevinPayravi](https://github.com/KevinPayravi) and brought to you by [Nookipedia](https://nookipedia.com/wiki/Main_Page), a community-driven Animal Crossing wiki encyclopedia.

## Contributing
ACNH.Directory is a community-driven resource—and you can contribute! You can request a change or addition by [**opening an issue**](https://github.com/Nookipedia/acnh.directory/issues/new?assignees=&labels=new+listing&template=new-listing.md&title=New+resource%3A+%3CRESOURCE+NAME+HERE%3E), or make changes yourself by opening a **pull request**.

### Qualifications
1. Must be a website or mobile app (Android / iOS) that provides information and/or tools for *Animal Crossing: New Horizons*.
    * Social media sites do not qualify (no subreddits, Facebook and Twitter profiles, Discord servers, etc.). However, listings can have their social media linked (Discord, Facebook, Twitter, and Instagram).
    * Blogs do not qualify unless a central part of their function is to provide organized comprehensive guides or other resources.
2. Must be kept up-to-date. For example, an item catalog that is missing items from past game updates would not qualify.
3. Must be well-maintained (images load, no major formatting issues, etc.).
4. Must be safe and family-friendly.
5. Primary function must not related to hacking and/or piracy.
    * This includes guides for hacking Switches; duping items; or amiibo spoofing.

### Pull requests
To make an addition or other change: fork the repository under your username. Project data can be found and modified at [`src/app/data/project-data.ts`](src/app/data/project-data.ts); logos are stored in [`src/assets/images/logos/`](src/assets/images/logos/) (filenames formatted all lowercase with hypens separating words).

There are two primary ways to make changes in your fork:
* Clone the repository to your local, make your changes, and commit + push them back to GitHub. Refer to [this guide](https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop) for help.
* You can also make your changes right on GitHub. GitHub provides a UI editor as well as the ability to upload files into a folder.

Once your changes are ready, open a pull request.

If you need help, don't hesitate to reach out. Feel free to open an issue for help, or you can reach Kevin directly (see contact details on [profile](https://github.com/KevinPayravi)).

### Format
Site listings are stored in `/src/app/data/project-data.ts` in alphabetical order in the following format:
```ts
  {
    name: "The Best ACNH Guide",
    description: "Information on villagers, critters, and items.",
    languages: ["en", "jp"],
    logo: "best-acnh-guide.png",
    logoStyle: "banner",
    site: "https://example.com/",
    android: "https://play.google.com/store",
    ios: "https://www.apple.com/app-store/",
    discord: "abcd123",
    facebook: "bestacnhguide",
    instagram: "bestacnhguide",
    twitter: "bestacnhguide",
    git: "https://github.com/some/repo_url/",
    information: [
      "critters",
      "items",
      "villagers"
    ],
    tools: [
      "checklist"
    ]
  }
```

Explanation for each field:
* `name`: The name of the resource.
* `description`: A short description of what the site offers site. Can be the site's official motto, but should be informational and not overly promotional.
* `languages`: An array of languages (ISO 639-1 codes two-letter codes) the resource is available in.
* `logo`: Filename for the resource's logo, stored in `/src/assets/images/logos`.
* `logoStyle`: Set as `banner` if logo includes resource's name; set as `icon` if logo does not have name (e.g. app icons), which will result in plaintext name being placed next to the icon.
* `logoBorder`: Set as `true` for white logos; will render on site with black border. Leave this field out otherwise.
* `site`: Link to the website, if applicable.
* `android`: Link to Android app listing (usually Google Play store), if applicable.
* `ios`: Link to Apple App Store listing, if applicable.
* `discord`: Discord invite, if applicable. Only provide the unique invite code, not the full URL.
* `facebook`: Facebook page/group, if applicable. Only provide the handle, not the full URL.
* `instagram`: Instagram profile, if applicable. Only provide the handle, not the full URL.
* `twitter`: Twitter profile, if applicable. Only provide the handle, not the full URL.
* `git`: Link to the git repository, if applicable.
* `information`: An alphabetical array of information the resource provides. Can be `art`, `critters`, `flowers`, `fossils`, `gameplay`, `gifts`, `items`, `villagers`.
  * `gameplay` is a sort of catch-all for guides that provide comprehensive gameplay coverage, or substantial material not covered by the other categories.
* `tools`: An alphabetical array of tools the resource provides. Can be `api`, `checklist`, `design sharing`, `dreams`, `island rating`, `marketplace`, `queueing`, `simulator`, `town tunes`, `turnips`, `weather`, `wiki`.

### Removal
Resources may be removed and archived if they no longer meet the qualifications above. For the "keep up-to-date" criteria, considerable leeway is given for resources to update after an update (we're all busy people!).

Removed resources should be moved from `/src/app/assets/data/projects.json` to `archive.json`.

## Deployment
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

* **Install dependencies:** Run `npm install` to install all required dependencies, which will be placed in the `node_modules` folder.
* **Build:** Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* **Run:** Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* **Unit tests:** Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* **Lint:** Run `ng lint` to execute the linter.

## Licensing
ACNH.Directory is licensed under the MIT license. See [license file](LICENSE) for full text.

Dependencies are copyright their respective authors and used under their respective licenses.

You are welcome to re-use our directory data. We simply ask that you provide attribution and a link back to ACNH.Directory.
