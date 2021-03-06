/* mousetrap v1.2.2 craig.is/killing/mice */
(function(){function q(a,c,b){a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent("on"+c,b)}function x(a){return"keypress"==a.type?String.fromCharCode(a.which):h[a.which]?h[a.which]:y[a.which]?y[a.which]:String.fromCharCode(a.which).toLowerCase()}function r(a,c){var a=a||{},b=!1,d;for(d in l)a[d]&&l[d]>c?b=!0:l[d]=0;b||(n=!1)}function z(a,c,b,d,F){var g,e,f=[],j=b.type;if(!k[a])return[];"keyup"==j&&s(a)&&(c=[a]);for(g=0;g<k[a].length;++g)if(e=k[a][g],!(e.seq&&l[e.seq]!=e.level)&&j==e.action&&
("keypress"==j&&!b.metaKey&&!b.ctrlKey||c.sort().join(",")===e.modifiers.sort().join(",")))d&&e.combo==F&&k[a].splice(g,1),f.push(e);return f}function t(a,c,b){if(!u.stopCallback(c,c.target||c.srcElement,b)&&!1===a(c,b))c.preventDefault&&c.preventDefault(),c.stopPropagation&&c.stopPropagation(),c.returnValue=!1,c.cancelBubble=!0}function v(a){"number"!==typeof a.which&&(a.which=a.keyCode);var c=x(a);if(c)if("keyup"==a.type&&w==c)w=!1;else{var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");
a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");var b=z(c,b,a),d,f={},g=0,e=!1;for(d=0;d<b.length;++d)b[d].seq?(e=!0,g=Math.max(g,b[d].level),f[b[d].seq]=1,t(b[d].callback,a,b[d].combo)):!e&&!n&&t(b[d].callback,a,b[d].combo);a.type==n&&!s(c)&&r(f,g)}}function s(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function A(a,c,b){if(!b){if(!p){p={};for(var d in h)95<d&&112>d||h.hasOwnProperty(d)&&(p[h[d]]=d)}b=p[a]?"keydown":"keypress"}"keypress"==b&&c.length&&(b="keydown");return b}function B(a,
c,b,d,f){var a=a.replace(/\s+/g," "),g=a.split(" "),e,h,j=[];if(1<g.length){var i=a,m=b;l[i]=0;m||(m=A(g[0],[]));a=function(){n=m;++l[i];clearTimeout(C);C=setTimeout(r,1E3)};b=function(a){t(c,a,i);"keyup"!==m&&(w=x(a));setTimeout(r,10)};for(d=0;d<g.length;++d)B(g[d],d<g.length-1?a:b,m,i,d)}else{h="+"===a?["+"]:a.split("+");for(g=0;g<h.length;++g)e=h[g],D[e]&&(e=D[e]),b&&("keypress"!=b&&E[e])&&(e=E[e],j.push("shift")),s(e)&&j.push(e);b=A(e,j,b);k[e]||(k[e]=[]);z(e,j,{type:b},!d,a);k[e][d?"unshift":
"push"]({callback:c,modifiers:j,action:b,seq:d,level:f,combo:a})}}for(var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},y={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},E={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7",
"*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},D={option:"alt",command:"meta","return":"enter",escape:"esc"},p,k={},i={},l={},C,w=!1,n=!1,f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;q(document,"keypress",v);q(document,"keydown",v);q(document,"keyup",v);var u={bind:function(a,c,b){for(var d=a instanceof Array?a:[a],f=0;f<d.length;++f)B(d[f],c,b);i[a+":"+b]=c;return this},unbind:function(a,c){i[a+":"+c]&&(delete i[a+":"+c],this.bind(a,function(){},
c));return this},trigger:function(a,c){i[a+":"+c]();return this},reset:function(){k={};i={};return this},stopCallback:function(a,c){return-1<(" "+c.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==c.tagName||"SELECT"==c.tagName||"TEXTAREA"==c.tagName||c.contentEditable&&"true"==c.contentEditable}};window.Mousetrap=u;"function"===typeof define&&define.amd&&define(u)})();

/* appjs-osx-bootstrap */
// http://craig.is/killing/mice
      Mousetrap.stopCallback = function(e, element, combo) {
        return false;
      };

      Mousetrap.bind('command+w', window.close);
    	Mousetrap.bind('command+q', window.close);
      Mousetrap.bind('command+c', function() {
        document.execCommand('Copy'); 
      });
      Mousetrap.bind('command+v', function() {
        document.execCommand('Paste'); 
      });
      Mousetrap.bind('command+x', function() {
        document.execCommand('Cut'); 
      });


      // begin select all
      // (taken from http://stackoverflow.com/questions/6240139/highlight-text-range-using-javascript)
      function getTextNodesIn(node) {
        var textNodes = [];
        if (node.nodeType == 3) {
          textNodes.push(node);
        } else {
          var children = node.childNodes;
          for (var i = 0, len = children.length; i < len; ++i) {
            textNodes.push.apply(textNodes, getTextNodesIn(children[i]));
          }
        }
        return textNodes;
      };
      function setSelectionRange(el, start, end) {
        if (document.createRange && window.getSelection) {
          var range = document.createRange();
          range.selectNodeContents(el);
          var textNodes = getTextNodesIn(el);
          var foundStart = false;
          var charCount = 0, endCharCount;
          for (var i = 0, textNode; textNode = textNodes[i++]; ) {
            endCharCount = charCount + textNode.length;
            if (!foundStart && start >= charCount && (start < endCharCount || (start == endCharCount && i < textNodes.length))) {
              range.setStart(textNode, start - charCount);
              foundStart = true;
            }
            if (foundStart && end <= endCharCount) {
              range.setEnd(textNode, end - charCount);
              break;
            }
            charCount = endCharCount;
          }
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } else if (document.selection && document.body.createTextRange) {
          var textRange = document.body.createTextRange();
          textRange.moveToElementText(el);
          textRange.collapse(true);
          textRange.moveEnd("character", end);
          textRange.moveStart("character", start);
          textRange.select();
        }
      };
      Mousetrap.bind('command+a', function() {
        var el = document.activeElement;
        if (["textarea", "input"].indexOf(el.tagName.toLowerCase()) != -1) {
          // todo: check to make sure input element is of type text or password
          console.log(el.attributes);
          el.select();
        }
        else {
          setSelectionRange(document.getElementsByTagName("body")[0]);
        }
      });
      // end select all