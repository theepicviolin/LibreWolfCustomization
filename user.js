user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

/***** CUSTOM EDITS *****/
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
//user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.letterboxing", false);
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

user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

/****** SHIMMER SETTINGS (false is default) ******/
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
user_pref("shimmer.taller-tabs", false);
user_pref("shimmer.shorter-navbar", true);
user_pref("shimmer.disable-compact-winctr-buttons", true);
user_pref("shimmer.dont-expand-selected-tab", false);
user_pref("shimmer.hide-sidebar-button", false);
