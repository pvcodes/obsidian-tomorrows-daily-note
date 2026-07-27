# Advanced Daily Note Planner

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pvcodes/obsidian-tomorrows-daily-note?sort=semver&style=for-the-badge)

An [Obsidian](https://obsidian.md/) plugin that creates future daily notes with customizable offsets and weekend skipping.

See the [changelog](/CHANGELOG.md) for the latest changes and updates.

## Requirements

- Obsidian **v1.1.0+**.
- [Daily notes plugin](https://help.obsidian.md/Plugins/Daily+notes) enabled

## Installation

Follow the steps below to install Advanced Daily Note Planner:

1. Search for "Advanced Daily Note Planner" in Obsidian's community plugins browser
2. Enable the plugin in your Obsidian settings (find "Advanced Daily Note Planner" under "Community plugins").
3. Start creating future daily notes.

## Usage

You can open tomorrow's daily note using ribbon icon or the following command: `Advanced Daily Note Planner: Open tomorrow's daily note`

### Multiple Future Daily Notes

You can create multiple future daily notes by using the following command: `Advanced Daily Note Planner: Open multiple future daily notes`

Doing so will launch a modal where you can specify the number of future daily notes you want to create.

## Settings

You can configure the following settings from the plugin settings menu:

- **Skip Weekends**: If enabled, the plugin will skip weekends when creating tomorrow's daily note.
- **Default Offset**: Number of days ahead to create by default (e.g., 2 = day after tomorrow).

## For developers
Pull requests are both welcome and appreciated.

If you would like to contribute to the development of this plugin, please follow the guidelines provided in [CONTRIBUTING.md](CONTRIBUTING.md).

### Deployment

1. Bump the version in `manifest.json` and the `package.json` files.
2. Create a new release on GitHub with the version number as the tag: `git tag -a <version number> -m "<version number>"`
3. Push the tag: `git push origin <version number>`
4. The release will be automatically built and deployed by GitHub Actions, and you can check the progress in the repository's [Actions tab](https://github.com/pvcodes/obsidian-tomorrows-daily-note/actions).
5. Then go add release notes to the newly created draft release in the repository's [Releases tab](https://github.com/pvcodes/obsidian-tomorrows-daily-note/releases).
6. Once you're happy with the release notes, click the "Publish release" button.

## Donating

If you find this plugin useful and want to support its development, please consider buying me a coffee!

https://github.com/sponsors/pvcodes

Thank you!
