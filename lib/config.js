configData = {
  numChatMax        : 20,
  personalColor     : true,
  badgeVisible      : true,
  badgeChannelId    : 0,
  themeURI          : "",
  theme             : "default",
  themeName         : "",
  msgExistDuration  : 30,
  msgAniDuration    : 0,
  debugLevel        : 2,
  useDisplayName    : true,
  loadCheerImgs     : true,
  loadTwitchCons    : true,
  loadTwitchv2      : true,
  loadDcCons        : true,
  dcConsURI         : "",
  clipReplaceMsg    : "[ 클립 ]",
  linkReplaceMsg    : "[ 링크 ]",
  webSocket         : "wss://irc-ws.chat.twitch.tv:443",
  nick              : "justinfan16831",
  pass              : "foobar",
  channel           : "#alt3_q0b7ff",
  retryInterval     : 2,
  allMessageHandle  : true,
  muteUser          : ["Nightbot"],
  deleteBanMsg      : true,
  commands          : [
    {exe:"clear", msg:"!!clear"},
    {exe:"theme", msg:"!!theme"},
    {exe:"load", msg:"!!load"},
    {exe:"scale", msg:"!!scale"}
  ],
  replaceMsgs       : [
    {orig:/^!{1,2}[a-zA-Z]+/, to:"{no_display}"}     // 봇 호출 영문 메세지 미표시
  ]
};
