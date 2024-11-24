# shimmer - pleasant firefox userchrome with sidebery support (v2.15)
![STAR BUTTON](https://github.com/user-attachments/assets/227bfd9e-ce3a-4d76-b8b7-24ad55dc128a)[![ISSUE](https://github.com/user-attachments/assets/648d41c3-4812-47fd-9696-38d76a2a0a5a)](https://github.com/nuclearcodecat/shimmer/issues)[![MONEY BUTTON](https://github.com/user-attachments/assets/18d7f816-f784-46b2-97b1-89173f68e227)](https://ko-fi.com/nuclearcodecat)

see the [changelog](CHANGELOG.md) for a history of changes

thanks for 100 stars :P

## demonstration

### light theme with sidebery, sidebar on left side
| sidebery, light theme, sidebar on left side                                                       | native tabs, "dark space" theme, shortcuts enabled                                                           |
|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| ![lightsidebery](https://github.com/user-attachments/assets/325064a2-4847-4f20-a75d-38268e8c21e1) | ![darkspacenativeshortcuts](https://github.com/user-attachments/assets/82e59bc2-7bd1-409b-9b31-1d872ff77d92) |


| menus                                                                                       | popover urlbar                                                                             |
|---------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| ![ctxmenu](https://github.com/user-attachments/assets/7da9bdff-d247-4680-ad20-70d12c886272) | ![urlbar](https://github.com/user-attachments/assets/8b328ecf-0297-4e8c-8cb6-8826040c7916) |

### compact findbar
![findbar](https://github.com/user-attachments/assets/da46b9d5-2275-4b47-91be-934ceae368c7)

### quality of life improvements
![tab](https://github.com/user-attachments/assets/21849280-e50a-47e1-a958-677e823962a0)

### compact, macos-like window control buttons
![winctr](https://github.com/user-attachments/assets/934849bd-19ba-4617-8bfe-f5b41508a872)





## features
 - popover url-bar (see demo animated image)
 - works with custom themes
 - rounded browser/sidebar corners
 - minimized context menus
 - subtle, non-obstructive transitions
 - minimized findbar
 - setting available to move sidebar to the right side
 - config properties for customization
 - compatible with firefox nightly

## installation

 - download code from github (green "code" button) and unzip it
 - download sidebery from mozilla addons if wanted
 - open sidebery settings, scroll to the bottom
 - click on "import addon data"
 - select "sidebery.json" from the downloaded archive
 - keep the toggles at default and click "import"
 - go to about:config
 - toggle `toolkit.legacyUserProfileCustomizations.stylesheets` true
 - toggle `svg.context-properties.content.enabled` true
 - if you're using firefox nightly, type `shimmer.nightly` into the config search box, then click `+` below
 - open about:profiles, find your profile and open the root folder
 - create a `chrome` folder if nonexistent
 - move `userChrome.css`, `userContent.css` files and `assets` folder into the `chrome` directory
 - reopen firefox
 - done! :3
 - please please PLEASE visit this github page once in a while to download the latest version, see "updating" section of this readme
 - see "config" section of this readme for customization options

## updating
 i am expecting to make frequent chagnes to this project. check this github page once in a while and check if a new version is available. your installation's version is visible next to the close button of the new tab settings menu (top right on new tab).
 ### how to update:
  follow the installation instructions, allow your file explorer to replace files if asked (remember to update sidebery styles)

## config
 i've implemented some custom `about:config` values for you to modify. the list is small right now but i'm hoping to see some ideas and issues pop up
 - `shimmer.nightly` - toggle true if using firefox nightly
 - `shimmer.show-sidebar-header` - toggle true to show sidebar header
 - `shimmer.show-sidebar-header-close-button` - even if you enable the header, the close button is automatically hidden. toggle this true to make it reappear
 - `shimmer.sidebar-right-side` - toggle true if you use sidebery on the right side. you have to move the sidebar first in firefox using the sidebar header, which has to be reenabled in config
 - `shimmer.reverse-winctr-buttons-side` - toggle true to move window control buttons to the left side
 - `shimmer.taller-tabs` - toggle true to make the tabs as tall as default firefox tabs
 - `shimmer.shorter-navbar` - toggle true to make the navbar as tall as on unmodified firefox (may require firefox restart)
 - `shimmer.disable-compact-winctr-buttons` - toggle true to revert the compact window control buttons to default
 - `shimmer.dont-expand-selected-tab` - toggle true to disable the effect of expanding the active tab when there are many tabs open
 - `shimmer.shimmer.hide-sidebar-button` - toggle true to hide the "show sidebars" button
   
 some of the usual buttons that appear on the right-click context menu are hidden. right now you can change them at the top of `userChrome.css`. i will maybe later introduce `about:config` variables for easier customization

you can also change some css variables there such as `--shimmer-tab-max-width`, `--shimmer-tab-min-width` and `--shimmer-tab-selected-width`, there are other variables though


## maintaining
 please keep in mind that i won't always have time to fix a problem created by a new version of firefox in a day. if you'd like to create a pull request, feel free to do so. if you find any issues, please report them at the "issues" tab on github.

