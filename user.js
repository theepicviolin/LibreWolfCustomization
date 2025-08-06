// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// disable new sidebar
user_pref("sidebar.revamp", false);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// CSS's `:has()` selector
user_pref("layout.css.has-selector.enabled", true);

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
user_pref("browser.urlbar.unitConversion.enabled", true);

// Trim  URL
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);

// GTK rounded corners
user_pref("widget.gtk.rounded-bottom-corners.enabled", true);

// Who is bogus? (fixes Sidebery tab dragging on Linux)
user_pref("widget.gtk.ignore-bogus-leave-notify", 1);

/***** CUSTOM EDITS *****/
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
//user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting", true);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
user_pref("browser.startup.page", 1);
user_pref("browser.download.autohideButton", true);
user_pref("browser.download.always_ask_before_handling_new_types", true);
//user_pref("browser.download.folderList", 2); // set this pref for the download dir to actually be changed from the default
user_pref("browser.download.dir", "C:Usersadit9AppDataLocalTemp");
//user_pref("webgl.disabled", false);
user_pref("webgl.disabled", true);  // disable for webgl, such as for figma
//user_pref("security.ssl.require_safe_negotiation", false);
user_pref("security.ssl.require_safe_negotiation", true);  //disable if you see "SSL_ERROR_UNSAFE_NEGOTIATION" error
user_pref("identity.fxaccounts.enabled", true);

user_pref("shimmer.disable-collapsing-sidebar", false);
user_pref("shimmer.remove-winctr-buttons", false);
user_pref("shimmer.remove-firefox-view-button", false);
user_pref("shimmer.disable-popover-transition", false);
user_pref("shimmer.disable-urlbar-background-transition", true);
user_pref("shimmer.disable-popover-urlbar", false);
user_pref("shimmer.native-vertical-tabs", false);
user_pref("shimmer.show-sidebar-header", false);
user_pref("shimmer.show-sidebar-header-close-button", false);
user_pref("shimmer.sidebar-right-side", false);
user_pref("shimmer.reverse-winctr-buttons-side", false);
user_pref("shimmer.taller-tabs", true);
user_pref("shimmer.shorter-navbar", true);
user_pref("shimmer.disable-compact-winctr-buttons", true);
user_pref("shimmer.dont-expand-selected-tab", false);
user_pref("shimmer.hide-sidebar-button", false);
