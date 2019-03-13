/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Google Chrome",slug:"chrome",version:"0.1.4"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",BACKGROUND_ACTION_GET_KEY="get_key",BACKGROUND_ACTION_SET_KEY="set_key",COLOR_GAB_GREEN="#21cf7b",STORAGE_BASE="gab_dissenter_extension_data",TWITTER_BUTTONS_ENABLED="twitter_buttons_enabled",REDDIT_BUTTONS_ENABLED="reddit_buttons_enabled",YOUTUBE_BUTTONS_ENABLED="youtube_buttons_enabled",WINDOW_SIDEBAR_UNAVAILABLE_ENABLED="window_sidebar_unavailable_enabled",STORAGE_DEFAULT_PARAMS={};STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED]=!0;var STORAGE_KEY_ALL="all",isObject=function(e){return!isArray(e)&&!isDate(e)&&(null!==e&&"object"==typeof e)},isString=function(e){return"string"==typeof e||e instanceof String},isDate=function(e){return!isString(e)&&!isArray(e)&&null!=e&&null!=e&&(e&&"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e))},isArray=function(e){return Array.isArray(e)};function ready(e){var n=document;"loading"==n.readyState?n.addEventListener("DOMContentLoaded",e):e()}function getQueryStringValue(e){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var Options=function(){var n=document.getElementById("twitter-enabled"),t=document.getElementById("reddit-enabled"),E=document.getElementById("youtube-enabled"),_=document.getElementById("window-sidebar-enabled");n.onchange=function(){var e=this.checked;chrome.runtime.sendMessage({action:BACKGROUND_ACTION_SET_KEY,key:TWITTER_BUTTONS_ENABLED,value:e})},t.onchange=function(){var e=this.checked;chrome.runtime.sendMessage({action:BACKGROUND_ACTION_SET_KEY,key:REDDIT_BUTTONS_ENABLED,value:e})},E.onchange=function(){var e=this.checked;chrome.runtime.sendMessage({action:BACKGROUND_ACTION_SET_KEY,key:YOUTUBE_BUTTONS_ENABLED,value:e})},_.onchange=function(){var e=this.checked;chrome.runtime.sendMessage({action:BACKGROUND_ACTION_SET_KEY,key:WINDOW_SIDEBAR_UNAVAILABLE_ENABLED,value:e})},this.init=function(){chrome.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:STORAGE_KEY_ALL},function(e){if(!e)return!1;n.checked=e[TWITTER_BUTTONS_ENABLED],t.checked=e[REDDIT_BUTTONS_ENABLED],E.checked=e[YOUTUBE_BUTTONS_ENABLED],_.checked=e[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED]})}};document.addEventListener("DOMContentLoaded",function(){(new Options).init()});