/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Google Chrome",slug:"chrome",version:"0.1.4"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",BACKGROUND_ACTION_GET_KEY="get_key",BACKGROUND_ACTION_SET_KEY="set_key",COLOR_GAB_GREEN="#21cf7b",STORAGE_BASE="gab_dissenter_extension_data",TWITTER_BUTTONS_ENABLED="twitter_buttons_enabled",REDDIT_BUTTONS_ENABLED="reddit_buttons_enabled",YOUTUBE_BUTTONS_ENABLED="youtube_buttons_enabled",WINDOW_SIDEBAR_UNAVAILABLE_ENABLED="window_sidebar_unavailable_enabled",STORAGE_DEFAULT_PARAMS={};STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED]=!0;var STORAGE_KEY_ALL="all",isObject=function(t){return!isArray(t)&&!isDate(t)&&(null!==t&&"object"==typeof t)},isString=function(t){return"string"==typeof t||t instanceof String},isDate=function(t){return!isString(t)&&!isArray(t)&&null!=t&&null!=t&&(t&&"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t))},isArray=function(t){return Array.isArray(t)};function ready(t){var e=document;"loading"==e.readyState?e.addEventListener("DOMContentLoaded",t):t()}function getQueryStringValue(t){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var GDYoutube=function(){function r(){var t=document.querySelector("#top-row.style-scope.ytd-video-secondary-info-renderer");if(!t)return setTimeout(function(){r()},500),!1;var e=function(){var t=document.createElement("div");t.style.setProperty("display","inline-block","important"),t.style.setProperty("width","120px","important"),t.style.setProperty("height","50px","important"),t.style.setProperty("padding","7px","important"),t.style.setProperty("overflow","hidden","important"),t.style.setProperty("box-sizing","border-box","important");var e=document.createElement("a");return e.textContent="Dissent This",e.style.setProperty("display","inline-block","important"),e.style.setProperty("width","100%","important"),e.style.setProperty("height","100%","important"),e.style.setProperty("padding","10px","important"),e.style.setProperty("background-color",COLOR_GAB_GREEN,"important"),e.style.setProperty("color","#fff","important"),e.style.setProperty("border-radius","2px","important"),e.style.setProperty("text-align","center","important"),e.style.setProperty("font-size","14px","important"),e.style.setProperty("box-sizing","border-box","important"),e.style.setProperty("cursor","pointer","important"),t.appendChild(e),t}();return t.appendChild(e),e.onclick=n,!0}function n(){var t=window.location.href,e=window.innerHeight;chrome.runtime.sendMessage({action:BACKGROUND_ACTION_OPEN_POPUP,url:t,height:e})}this.init=function(){r()}};ready(function(){chrome.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:YOUTUBE_BUTTONS_ENABLED},function(t){if(!t)return!1;setTimeout(function(){(new GDYoutube).init()},250)})});