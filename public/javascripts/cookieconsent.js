(() => {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#eb6c44",
        "text": "#ffffff"
      },
      "button": {
        "background": "#f5d948"
      }
    },
    "theme": "classic",
    "position": "bottom-left",
    "type": "opt-in",
    "content": {
      "message": "当社では、本サイトでの体験を向上させ、コンテンツや広告のパーソナライズ、トラフィック分析のため、Cookieを利用します。",
      "deny": "すべて拒否",
      "allow": "すべて許可",
      "link": "プライバシーポリシー",
      "href": "/public/help/privacy-policy.html"
    },
    "onStatusChange": function (status, chosenBefore) {
      if (this.hasConsented()) {
        console.log("ALLOW"); // Google Analytics などの許可実行
      } else {
        console.log("DENY"); // Google Analytics などの拒否実行
      }
    }
  });
})();