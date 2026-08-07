# ToDo List Extension

<img width="702" height="516" alt="todoExtensionScreenshot" src="https://github.com/user-attachments/assets/2e1d4d7a-54d2-486e-b036-b6b7569e2a2f" />


A lightweight browser extension that keeps a simple task list in the popup so you can capture reminders without leaving the page.

## Features

- Add new tasks from the popup input.
- Edit existing tasks inline.
- Mark tasks as completed with checkboxes.
- Clear the entire list with one button.
- Persist tasks locally in the browser using `localStorage`.

## How It Works

This extension uses a Manifest V3 popup UI:

- `manifest.json` defines the extension and points to the popup.
- `popup.html` contains the popup layout.
- `popup.css` styles the interface.
- `popup.js` handles task creation, editing, completion, deletion, and storage.

Tasks are saved in the browser's local storage under the `tasks` key, so they remain available between popup sessions on the same browser profile.

## Installation

### Chrome / Edge / Chromium-based browsers

1. Open the browser's extensions page.
2. Enable Developer mode.
3. Choose Load unpacked.
4. Select the project folder containing `manifest.json`.
5. Pin the extension if you want quick access from the toolbar.

## Usage

1. Click the extension icon to open the popup.
2. Type a task into the input at the bottom and press Enter.
3. Check the box next to a task to mark it complete.
4. Click into a task to edit it.
5. Press Clear All to remove every task.

## File Structure

```text
manifest.json
popup.html
popup.css
popup.js
icon.png
```

## Notes

- Tasks are stored only in the browser that loaded the extension.
- Clearing site data or browser storage will remove the saved list.
- The popup expects an `icon.png` file in the project root for the extension icon.

## License

No license has been specified yet.
