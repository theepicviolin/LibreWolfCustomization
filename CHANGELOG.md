# v2.17
 - updated to conform to firefox version 133 (firefox stable has been updated to version 133. this breaks some of the styles used in shimmer. please update to v2.17 or use `shimmer.nightly` config property to fix the issues.)
 - menubar improvements

# v2.16
 - fixed an issue with some borders showing through around the browser box
 - fixed an issue with browser box's rounded corners disappearing (#24)

# v2.15
 - added a css variable `--shimmer-tab-selected-width` regarding the selected tab
 - findbar positioning improved

# v2.14
 - fixed an issue where tabs would get cut in half and translated when moving (#20)
 - make pop-up windows (e.g. steam login page) have a restricted urlbar max-width

# v2.13
 - added partial support for menubar (release, native tabs only and nightly, full support)
 - made improvements with titlebar spacers' visibility
 - new config property `shimmer.shimmer.hide-sidebar-button`, which hides the "show sidebars" button
 - new config property `shimmer.dont-expand-selected-tab`, which removes the effect of expanding the active tab when there are many tabs open

# v2.12
 - findbar match amount now visible :P
 - when using native tabs, active tab has a minimal width
 - fixed a small bug where the panelui button wouldn't have a padding on the right in some cases

# v2.11
 - added some support for native vertical tabs (pr, #18)

# v2.10
 - new, macos-like compact window control buttons (#17)
 - new config property `shimmer.disable-compact-winctr-buttons`, which reverts the compact window control buttons to default
 - popover urlbar is now centered (#15)
 - pinned tab now takes up the whole height of the tabbar

# v2.9
 - further updated context menu colors
 - added a compact private browsing indicator
 - added a private browsing newtab page

# v2.8
 - fixed transparent sidebery hidden panels popup

# v2.7
 - fixed transparent popups/menus in places window (#13)
 - fixed scrollbar in devtools (#12)

# v2.6
 - new config property `shimmer.shorter-navbar`, which makes the navbar as tall as on unmodified firefox (#11)

# v2.5
 - revamped tab "x" button positioning
 - new config property `shimmer.taller-tabs`, which makes the tabs as tall as default firefox tabs and moves the x button to match the height

# v2.4
 - fixed a bug regarding tab height

# v2.3
 - added a config preference `shimmer.reverse-winctr-buttons-side`, which - when toggled true - moves the window control buttons to the left side (#3)

# v2.2
 - fixed an issue where the findbar input box would sometimes overflow (#9)
 - removed a margin at the bottom of the browser window when sidebery is closed (#6)

# v2.1
 - personal toolbar (bookmark bar) now doesn't obstruct the urlbar when sidebar is open
