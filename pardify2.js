//Lampa.
(function () {
    var _0x490a38 = function () {
      var _0xb3f67c = true;
      return function (_0x132d57, _0x28a6e2) {
        var _0x3d9e77 = _0xb3f67c ? function () {
          if (_0x28a6e2) {
            var _0x2a3186 = _0x28a6e2.apply(_0x132d57, arguments);
            _0x28a6e2 = null;
            return _0x2a3186;
          }
        } : function () {};
        _0xb3f67c = false;
        return _0x3d9e77;
      };
    }();
    var _0x3be507 = function () {
      var _0x386d96 = {
        HFlKm: function (_0x383208, _0x1f5b37) {
          return _0x383208 === _0x1f5b37;
        }
      };
      _0x386d96.UgUPW = "sdbbN";
      var _0x176ff0 = true;
      return function (_0xf57973, _0x57d8ff) {
        var _0x5c9f7e = _0x176ff0 ? function () {
          if (_0x386d96.UgUPW === "UBvUU") {
            for (_0x8dd57b.s(); !(_0xe51c9c = _0x5b0103.n()).done;) {
              var _0x3fa437 = _0x5ccc74.value;
              if (_0x3fa437 !== _0x5e36a4) {
                this.dfs(_0x3fa437, _0x151ce2);
              }
            }
          } else {
            if (_0x57d8ff) {
              var _0x432577 = _0x57d8ff.apply(_0xf57973, arguments);
              _0x57d8ff = null;
              return _0x432577;
            }
          }
        } : function () {};
        _0x176ff0 = false;
        return _0x5c9f7e;
      };
    }();
    'use strict';
    function _0x24a2ca(_0x4f27d4, _0x30c73b) {
      if (!(_0x4f27d4 instanceof _0x30c73b)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _0x2550d9(_0x19e088, _0x181980) {
      for (var _0x31c4fe = 0; _0x31c4fe < _0x181980.length; _0x31c4fe++) {
        var _0x4977cc = _0x181980[_0x31c4fe];
        _0x4977cc.enumerable = _0x4977cc.enumerable || false;
        _0x4977cc.configurable = true;
        if ("value" in _0x4977cc) {
          _0x4977cc.writable = true;
        }
        Object.defineProperty(_0x19e088, _0x4977cc.key, _0x4977cc);
      }
    }
    function _0x1755ee(_0x59e666, _0x53d504, _0x451f42) {
      if (_0x53d504) {
        _0x2550d9(_0x59e666.prototype, _0x53d504);
      }
      if (_0x451f42) {
        _0x2550d9(_0x59e666, _0x451f42);
      }
      return _0x59e666;
    }
    function _0x5cf2f6(_0x5e634a) {
      if (Array.isArray(_0x5e634a)) {
        return _0x4e4b8d(_0x5e634a);
      }
    }
    function _0x2b4515(_0x8323d2) {
      if (typeof Symbol !== "undefined" && _0x8323d2[Symbol.iterator] != null || _0x8323d2["@@iterator"] != null) {
        return Array.from(_0x8323d2);
      }
    }
    function _0x451f84(_0x576ed4, _0x54cdb2) {
      if (!_0x576ed4) {
        return;
      }
      if (typeof _0x576ed4 === "string") {
        return _0x4e4b8d(_0x576ed4, _0x54cdb2);
      }
      var _0x120bc9 = Object.prototype.toString.call(_0x576ed4).slice(8, -1);
      if (_0x120bc9 === "Object" && _0x576ed4.constructor) {
        _0x120bc9 = _0x576ed4.constructor.name;
      }
      if (_0x120bc9 === "Map" || _0x120bc9 === "Set") {
        return Array.from(_0x576ed4);
      }
      if (_0x120bc9 === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x120bc9)) {
        return _0x4e4b8d(_0x576ed4, _0x54cdb2);
      }
    }
    function _0x4e4b8d(_0x92cf97, _0x4389ac) {
      if (_0x4389ac == null || _0x4389ac > _0x92cf97.length) {
        _0x4389ac = _0x92cf97.length;
      }
      var _0x26498e = 0;
      for (var _0x581f4e = new Array(_0x4389ac); _0x26498e < _0x4389ac; _0x26498e++) {
        _0x581f4e[_0x26498e] = _0x92cf97[_0x26498e];
      }
      return _0x581f4e;
    }
    function _0x54fe62() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x120887(_0x347ef9, _0x110f83) {
      var _0x30d0b8 = typeof Symbol !== "undefined" && _0x347ef9[Symbol.iterator] || _0x347ef9["@@iterator"];
      if (!_0x30d0b8) {
        if (Array.isArray(_0x347ef9) || (_0x30d0b8 = _0x451f84(_0x347ef9)) || _0x110f83 && _0x347ef9 && typeof _0x347ef9.length === "number") {
          if (_0x30d0b8) {
            _0x347ef9 = _0x30d0b8;
          }
          var _0x398779 = 0;
          var _0x1cca9c = function () {};
          return {
            's': _0x1cca9c,
            'n': function () {
              var _0x3d2064 = {
                done: true
              };
              if (_0x398779 >= _0x347ef9.length) {
                return _0x3d2064;
              }
              var _0x44d9c2 = {
                done: false,
                value: _0x347ef9[_0x398779++]
              };
              return _0x44d9c2;
            },
            'e': function (_0xdb41b8) {
              throw _0xdb41b8;
            },
            'f': _0x1cca9c
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var _0x231783 = true;
      var _0x223e72 = false;
      var _0x5a93aa;
      return {
        's': function () {
          _0x30d0b8 = _0x30d0b8.call(_0x347ef9);
        },
        'n': function () {
          var _0xdb06f7 = _0x30d0b8.next();
          _0x231783 = _0xdb06f7.done;
          return _0xdb06f7;
        },
        'e': function (_0x2a4aa8) {
          _0x223e72 = true;
          _0x5a93aa = _0x2a4aa8;
        },
        'f': function () {
          try {
            if (!_0x231783 && _0x30d0b8["return"] != null) {
              _0x30d0b8['return']();
            }
          } finally {
            if (_0x223e72) {
              throw _0x5a93aa;
            }
          }
        }
      };
    }
    function _0x360bbe(_0x563f50) {
      this.state = _0x563f50.state;
      this.start = function () {
        this.dispath(this.state);
      };
      this.dispath = function (_0x4ecefb) {
        var _0x4b0573 = _0x563f50.transitions[_0x4ecefb];
        if (_0x4b0573) {
          _0x4b0573.call(this, this);
        } else {
          console.log("invalid action");
        }
      };
    }
    var _0xb10846 = function () {
      var _0x150dfa = _0x490a38(this, function () {
        return _0x150dfa.toString().search("(((.+)+)+)+$").toString().constructor(_0x150dfa).search("(((.+)+)+)+$");
      });
      _0x150dfa();
      var _0x5d32f2 = _0x3be507(this, function () {
        var _0x2a37ae = function () {
          var _0x3aacd6;
          try {
            _0x3aacd6 = Function("return (function() {}.constructor(\"return this\")( ));")();
          } catch (_0x2725c3) {
            _0x3aacd6 = window;
          }
          return _0x3aacd6;
        };
        var _0x51b386 = _0x2a37ae();
        var _0x475f7c = _0x51b386.console = _0x51b386.console || {};
        var _0x2d9353 = ['log', "warn", "info", "error", "exception", "table", "trace"];
        for (var _0x4afff7 = 0; _0x4afff7 < _0x2d9353.length; _0x4afff7++) {
          var _0x35cbc9 = _0x3be507.constructor.prototype.bind(_0x3be507);
          var _0x7f6227 = _0x2d9353[_0x4afff7];
          var _0x1c8ccf = _0x475f7c[_0x7f6227] || _0x35cbc9;
          _0x35cbc9.__proto__ = _0x3be507.bind(_0x3be507);
          _0x35cbc9.toString = _0x1c8ccf.toString.bind(_0x1c8ccf);
          _0x475f7c[_0x7f6227] = _0x35cbc9;
        }
      });
      _0x5d32f2();
      function _0x4c2d8c(_0x1c957f, _0x1f920e) {
        var _0x1310b = this;
        _0x24a2ca(this, _0x4c2d8c);
        this.paused = false;
        this.display = false;
        this.ended = false;
        this.listener = Lampa.Subscribe();
        this.html = $("\n            <div class=\"cardify-trailer\">\n                <div class=\"cardify-trailer__youtube\">\n                    <div class=\"cardify-trailer__youtube-iframe\"></div>\n                    <div class=\"cardify-trailer__youtube-line one\"></div>\n                    <div class=\"cardify-trailer__youtube-line two\"></div>\n                </div>\n\n                <div class=\"cardify-trailer__controlls\">\n                    <div class=\"cardify-trailer__title\"></div>\n                    <div class=\"cardify-trailer__remote\">\n                        <div class=\"cardify-trailer__remote-icon\">\n                            <svg width=\"37\" height=\"37\" viewBox=\"0 0 37 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M32.5196 7.22042L26.7992 12.9408C27.8463 14.5217 28.4561 16.4175 28.4561 18.4557C28.4561 20.857 27.6098 23.0605 26.1991 24.7844L31.8718 30.457C34.7226 27.2724 36.4561 23.0667 36.4561 18.4561C36.4561 14.2059 34.983 10.2998 32.5196 7.22042Z\" fill=\"white\" fill-opacity=\"0.28\"/>\n                                <path d=\"M31.262 31.1054L31.1054 31.262C31.158 31.2102 31.2102 31.158 31.262 31.1054Z\" fill=\"white\" fill-opacity=\"0.28\"/>\n                                <path d=\"M29.6917 32.5196L23.971 26.7989C22.3901 27.846 20.4943 28.4557 18.4561 28.4557C16.4179 28.4557 14.5221 27.846 12.9412 26.7989L7.22042 32.5196C10.2998 34.983 14.2059 36.4561 18.4561 36.4561C22.7062 36.4561 26.6123 34.983 29.6917 32.5196Z\" fill=\"white\" fill-opacity=\"0.28\"/>\n                                <path d=\"M5.81349 31.2688L5.64334 31.0986C5.69968 31.1557 5.7564 31.2124 5.81349 31.2688Z\" fill=\"white\" fill-opacity=\"0.28\"/>\n                                <path d=\"M5.04033 30.4571L10.7131 24.7844C9.30243 23.0605 8.4561 20.857 8.4561 18.4557C8.4561 16.4175 9.06588 14.5217 10.113 12.9408L4.39251 7.22037C1.9291 10.2998 0.456055 14.2059 0.456055 18.4561C0.456054 23.0667 2.18955 27.2724 5.04033 30.4571Z\" fill=\"white\" fill-opacity=\"0.28\"/>\n                                <path d=\"M6.45507 5.04029C9.63973 2.18953 13.8455 0.456055 18.4561 0.456055C23.0667 0.456054 27.2724 2.18955 30.4571 5.04034L24.7847 10.7127C23.0609 9.30207 20.8573 8.45575 18.4561 8.45575C16.0549 8.45575 13.8513 9.30207 12.1275 10.7127L6.45507 5.04029Z\" fill=\"white\" fill-opacity=\"0.28\"/>\n                                <circle cx=\"18.4565\" cy=\"18.4561\" r=\"7\" fill=\"white\"/>\n                            </svg>\n                        </div>\n                        <div class=\"cardify-trailer__remote-text\">".concat(Lampa.Lang.translate("cardify_enable_sound"), "</div>\n                    </div>\n                </div>\n            </div>\n        "));
        if (typeof YT !== "undefined" && YT.Player) {
          this.youtube = new YT.Player(this.html.find(".cardify-trailer__youtube-iframe")[0], {
            'height': window.innerHeight * 2,
            'width': window.innerWidth,
            'playerVars': {
              'controls': 0x1,
              'showinfo': 0x0,
              'autohide': 0x1,
              'modestbranding': 0x1,
              'autoplay': 0x0,
              'disablekb': 0x1,
              'fs': 0x0,
              'enablejsapi': 0x1,
              'playsinline': 0x1,
              'rel': 0x0,
              'suggestedQuality': "hd1080",
              'setPlaybackQuality': "hd1080",
              'mute': 0x1
            },
            'videoId': _0x1f920e.id,
            'events': {
              'onReady': function _0x5e3241(_0xaf2702) {
                _0x1310b.loaded = true;
                _0x1310b.listener.send("loaded");
              },
              'onStateChange': function _0x2b0cf5(_0x35b95c) {
                if (_0x35b95c.data == YT.PlayerState.PLAYING) {
                  _0x1310b.paused = false;
                  clearInterval(_0x1310b.timer);
                  _0x1310b.timer = setInterval(function () {
                    var _0x1ed34e = _0x1310b.youtube.getDuration() - _0x1310b.youtube.getCurrentTime();
                    if (_0x1ed34e <= 18) {
                      var _0x3244d1 = 1 - (18 - _0x1ed34e) / 5;
                      _0x1310b.youtube.setVolume(Math.max(0, _0x3244d1 * 100));
                      if (_0x1ed34e <= 13) {
                        clearInterval(_0x1310b.timer);
                        _0x1310b.listener.send("ended");
                      }
                    }
                  }, 100);
                  _0x1310b.listener.send("play");
                  if (window.cardify_fist_unmute) {
                    _0x1310b.unmute();
                  }
                }
                if (_0x35b95c.data == YT.PlayerState.PAUSED) {
                  _0x1310b.paused = true;
                  clearInterval(_0x1310b.timer);
                  _0x1310b.listener.send("paused");
                }
                if (_0x35b95c.data == YT.PlayerState.ENDED) {
                  _0x1310b.listener.send("ended");
                }
                if (_0x35b95c.data == YT.PlayerState.BUFFERING) {
                  _0x35b95c.target.setPlaybackQuality("hd1080");
                }
              },
              'onError': function _0x13b528(_0x2ebbbc) {
                _0x1310b.loaded = false;
                _0x1310b.listener.send("error");
              }
            }
          });
        }
      }
      _0x1755ee(_0x4c2d8c, [{
        'key': 'play',
        'value': function _0x4858ae() {
          try {
            this.youtube.playVideo();
          } catch (_0x4350c1) {}
        }
      }, {
        'key': "pause",
        'value': function _0x4eafda() {
          try {
            this.youtube.pauseVideo();
          } catch (_0x43231a) {}
        }
      }, {
        'key': "unmute",
        'value': function _0xc07ded() {
          try {
            this.youtube.unMute();
            this.html.find(".cardify-trailer__remote").remove();
            window.cardify_fist_unmute = true;
          } catch (_0x33d4ae) {}
        }
      }, {
        'key': "show",
        'value': function _0x28902f() {
          this.html.addClass("display");
          this.display = true;
        }
      }, {
        'key': "hide",
        'value': function _0x30cd3f() {
          this.html.removeClass("display");
          this.display = false;
        }
      }, {
        'key': "render",
        'value': function _0x16d75e() {
          return this.html;
        }
      }, {
        'key': "destroy",
        'value': function _0x11cdf5() {
          this.loaded = false;
          this.display = false;
          try {
            this.youtube.destroy();
          } catch (_0x5d951d) {}
          clearInterval(this.timer);
          this.html.remove();
        }
      }]);
      return _0x4c2d8c;
    }();
    var _0x49d651 = function () {
      function _0x463961(_0x3c2deb, _0x363ec2) {
        var _0x3a944d = this;
        _0x24a2ca(this, _0x463961);
        _0x3c2deb.activity.trailer_ready = true;
        this.object = _0x3c2deb;
        this.video = _0x363ec2;
        this.player;
        this.background = this.object.activity.render().find(".full-start__background");
        this.startblock = this.object.activity.render().find(".cardify");
        this.head = $('.head');
        this.timelauch = 1200;
        this.firstlauch = false;
        this.state = new _0x360bbe({
          'state': "start",
          'transitions': {
            'start': function _0x46e188(_0xadf717) {
              clearTimeout(_0x3a944d.timer_load);
              if (_0x3a944d.player.display) {
                _0xadf717.dispath('play');
              } else {
                if (_0x3a944d.player.loaded) {
                  _0x3a944d.animate();
                  _0x3a944d.timer_load = setTimeout(function () {
                    _0xadf717.dispath('load');
                  }, _0x3a944d.timelauch);
                }
              }
            },
            'load': function _0x35b533(_0x5b5966) {
              if (_0x3a944d.player.loaded && Lampa.Controller.enabled().name == "full_start" && _0x3a944d.same()) {
                _0x5b5966.dispath('play');
              }
            },
            'play': function _0x2dc1d7() {
              _0x3a944d.player.play();
            },
            'toggle': function _0x499b2a(_0x43e2cf) {
              clearTimeout(_0x3a944d.timer_load);
              if (Lampa.Controller.enabled().name == "cardify_trailer") {
                ;
              } else {
                if (Lampa.Controller.enabled().name == "full_start" && _0x3a944d.same()) {
                  _0x43e2cf.start();
                } else {
                  if (_0x3a944d.player.display) {
                    _0x43e2cf.dispath("hide");
                  }
                }
              }
            },
            'hide': function _0x491a62() {
              _0x3a944d.player.pause();
              _0x3a944d.player.hide();
              _0x3a944d.background.removeClass('nodisplay');
              _0x3a944d.startblock.removeClass("nodisplay");
              _0x3a944d.head.removeClass('nodisplay');
              _0x3a944d.object.activity.render().find(".cardify-preview__loader").width(0);
            }
          }
        });
        this.start();
      }
      _0x1755ee(_0x463961, [{
        'key': 'same',
        'value': function _0x54ccd3() {
          return Lampa.Activity.active().activity === this.object.activity;
        }
      }, {
        'key': "animate",
        'value': function _0x424b16() {
          var _0x3cb833 = this;
          var _0x4759f1 = this.object.activity.render().find(".cardify-preview__loader").width(0);
          var _0x1151f2 = Date.now();
          clearInterval(this.timer_anim);
          this.timer_anim = setInterval(function () {
            var _0x51d6ec = Date.now() - _0x1151f2;
            if (_0x51d6ec > _0x3cb833.timelauch) {
              clearInterval(_0x3cb833.timer_anim);
            }
            _0x4759f1.width(Math.round(_0x51d6ec / _0x3cb833.timelauch * 100) + '%');
          }, 100);
        }
      }, {
        'key': 'preview',
        'value': function _0xd188a3() {
          var _0x598861 = $("\n            <div class=\"cardify-preview\">\n                <div>\n                    <img class=\"cardify-preview__img\" />\n                    <div class=\"cardify-preview__line one\"></div>\n                    <div class=\"cardify-preview__line two\"></div>\n                    <div class=\"cardify-preview__loader\"></div>\n                </div>\n            </div>\n        ");
          Lampa.Utils.imgLoad($("img", _0x598861), this.video.img, function () {
            $("img", _0x598861).addClass("loaded");
          });
          this.object.activity.render().find(".cardify__right").append(_0x598861);
        }
      }, {
        'key': "controll",
        'value': function _0x4b063d() {
          var _0x495210 = this;
          var _0x4ddd10 = function _0x3a9afc() {
            _0x495210.state.dispath('hide');
            Lampa.Controller.toggle("full_start");
          };
          Lampa.Controller.add("cardify_trailer", {
            'toggle': function _0x4c7eed() {
              Lampa.Controller.clear();
            },
            'enter': function _0x7bb51b() {
              _0x495210.player.unmute();
            },
            'left': _0x4ddd10.bind(this),
            'up': _0x4ddd10.bind(this),
            'down': _0x4ddd10.bind(this),
            'right': _0x4ddd10.bind(this),
            'back': function _0x28bd5c() {
              _0x495210.player.destroy();
              _0x495210.object.activity.render().find(".cardify-preview").remove();
              _0x4ddd10();
            }
          });
          Lampa.Controller.toggle("cardify_trailer");
        }
      }, {
        'key': "start",
        'value': function _0x468d01() {
          var _0x4280cd = this;
          var _0x1a3a07 = this;
          var _0x35379c = function _0x49db54(_0x4b34b8) {
            _0x1a3a07.state.dispath("toggle");
          };
          var _0x5a81db = function _0x4ae5f3(_0x15de95) {
            if (_0x15de95.type == "destroy" && _0x15de95.object.activity === _0x1a3a07.object.activity) {
              _0x4727fe();
            }
          };
          var _0x4727fe = function _0x36b263() {
            Lampa.Listener.remove('activity', _0x5a81db);
            Lampa.Controller.listener.remove("toggle", _0x35379c);
            _0x1a3a07.destroy();
          };
          Lampa.Listener.follow('activity', _0x5a81db);
          Lampa.Controller.listener.follow('toggle', _0x35379c);
          this.player = new _0xb10846(this.object, this.video);
          this.player.listener.follow("loaded", function () {
            _0x4280cd.preview();
            _0x4280cd.state.start();
          });
          this.player.listener.follow('play', function () {
            clearTimeout(_0x4280cd.timer_show);
            if (!_0x4280cd.firstlauch) {
              _0x4280cd.firstlauch = true;
              _0x4280cd.timelauch = 5000;
            }
            _0x4280cd.timer_show = setTimeout(function () {
              _0x4280cd.player.show();
              _0x4280cd.background.addClass('nodisplay');
              _0x4280cd.startblock.addClass('nodisplay');
              _0x4280cd.head.addClass('nodisplay');
              _0x4280cd.controll();
            }, 500);
          });
          this.player.listener.follow("ended,error", function () {
            _0x4280cd.state.dispath("hide");
            if (Lampa.Controller.enabled().name !== "full_start") {
              Lampa.Controller.toggle("full_start");
            }
            _0x4280cd.object.activity.render().find(".cardify-preview").remove();
            setTimeout(_0x4727fe, 300);
          });
          this.object.activity.render().find(".activity__body").prepend(this.player.render());
          this.state.start();
        }
      }, {
        'key': "destroy",
        'value': function _0x3a9c4d() {
          clearTimeout(this.timer_load);
          clearTimeout(this.timer_show);
          clearInterval(this.timer_anim);
          this.player.destroy();
        }
      }]);
      return _0x463961;
    }();
    var _0x246b15 = ["I ", "You ", "We ", "They ", "He ", "She ", "It ", " the ", "The ", " of ", " is ", "mpa", "Is ", " am ", "Am ", " are ", "Are ", " have ", "Have ", " has ", "Has ", " may ", "May ", " be ", "Be ", "La "];
    function _0x538f63(_0x10a57f) {
      var _0x2f3ed6 = _0x10a57f.toString();
      var _0xfce2ac = '';
      var _0x494bf7 = '';
      for (var _0x12b4d7 = 0; _0x12b4d7 < 26; _0x12b4d7++) {
        _0xfce2ac = _0x22caa1(_0x2f3ed6, _0x12b4d7);
        for (var _0x28c741 = 0; _0x28c741 < _0xfce2ac.length; _0x28c741++) {
          for (var _0x53d00f = 0; _0x53d00f < _0x246b15.length; _0x53d00f++) {
            for (var _0x31b66c = 0; _0x31b66c < _0x246b15[_0x53d00f].length; _0x31b66c++) {
              _0x494bf7 += _0xfce2ac[_0x28c741 + _0x31b66c];
            }
            if (_0x246b15[_0x53d00f] === _0x494bf7) {
              return _0x12b4d7;
            }
            _0x494bf7 = '';
          }
        }
      }
      return 0;
    }
    function _0x54f22f() {
      return window[_0x420fe2([108, 111, 99, 97, 116, 105, 111, 110])][_0x420fe2([104, 111, 115, 116])].indexOf(_0x420fe2([98, 121, 108, 97, 109, 112, 97, 46, 111, 110, 108, 105, 110, 101])) == -1;
    }
    function _0x22caa1(_0x34da57, _0x1de900) {
      var _0x558729 = 0;
      var _0x3f48d8 = 0;
      var _0x55e2ed = 0;
      return _0x34da57.split('').map(function (_0x1481fd) {
        _0x558729 = _0x1481fd.charCodeAt();
        _0x3f48d8 = _0x558729 + _0x1de900;
        _0x55e2ed = _0x558729;
        if (_0x558729 >= 48 && _0x558729 <= 57) {
          if (_0x3f48d8 < 48) {
            var _0x8b55aa = Math.abs(47 - _0x3f48d8) % 10;
            while (_0x8b55aa >= 10) {
              _0x8b55aa = _0x8b55aa % 10;
            }
            document.getElementById("diffID").innerHTML = _0x8b55aa;
            _0x3f48d8 = 57 - _0x8b55aa;
            _0x55e2ed = _0x3f48d8;
          } else {
            if (_0x3f48d8 >= 48 && _0x3f48d8 <= 57) {
              _0x55e2ed = _0x3f48d8;
            } else {
              if (_0x3f48d8 > 57) {
                var _0x3fd09e = Math.abs(58 - _0x3f48d8) % 10;
                while (_0x3fd09e >= 10) {
                  _0x3fd09e = _0x3fd09e % 10;
                }
                document.getElementById("diffID").innerHTML = _0x3fd09e;
                _0x3f48d8 = 48 + _0x3fd09e;
                _0x55e2ed = _0x3f48d8;
              }
            }
          }
        } else {
          if (_0x558729 >= 65 && _0x558729 <= 90) {
            if (_0x3f48d8 <= 64) {
              var _0x479129 = Math.abs(64 - _0x3f48d8) % 26;
              while (_0x479129 % 26 >= 26) {
                _0x479129 = _0x479129 % 26;
              }
              _0x3f48d8 = 90 - _0x479129;
              _0x55e2ed = _0x3f48d8;
            } else {
              if (_0x3f48d8 >= 65 && _0x3f48d8 <= 90) {
                _0x55e2ed = _0x3f48d8;
              } else {
                if (_0x3f48d8 > 90) {
                  var _0x4befbd = Math.abs(_0x3f48d8 - 1 - 90) % 26;
                  while (_0x4befbd % 26 >= 26) {
                    _0x4befbd = _0x4befbd % 26;
                  }
                  _0x3f48d8 = 65 + _0x4befbd;
                  _0x55e2ed = _0x3f48d8;
                }
              }
            }
          } else {
            if (_0x558729 >= 97 && _0x558729 <= 122) {
              if (_0x3f48d8 <= 96) {
                var _0x809c80 = Math.abs(96 - _0x3f48d8) % 26;
                while (_0x809c80 % 26 >= 26) {
                  _0x809c80 = _0x809c80 % 26;
                }
                _0x3f48d8 = 122 - _0x809c80;
                _0x55e2ed = _0x3f48d8;
              } else {
                if (_0x3f48d8 >= 97 && _0x3f48d8 <= 122) {
                  _0x55e2ed = _0x3f48d8;
                } else {
                  if (_0x3f48d8 > 122) {
                    var _0x4e3e1f = Math.abs(_0x3f48d8 - 1 - 122) % 26;
                    while (_0x4e3e1f % 26 >= 26) {
                      _0x4e3e1f = _0x4e3e1f % 26;
                    }
                    _0x3f48d8 = 97 + _0x4e3e1f;
                    _0x55e2ed = _0x3f48d8;
                  }
                }
              }
            }
          }
        }
        return String.fromCharCode(parseInt(_0x55e2ed));
      }).join('');
    }
    function _0x7b5c67() {
      var _0x37ab5e = _0x246b15[25].trim() + _0x246b15[11];
      return window[_0x37ab5e];
    }
    function _0x420fe2(_0x4edf1d) {
      return _0x4edf1d.map(function (_0xa5930b) {
        var _0x3d52cf = {
          'qjcTg': 'hide'
        };
        _0x3d52cf.RLRTQ = "full_start";
        return String.fromCharCode(_0xa5930b);
      }).join('');
    }
    function _0x2dff9e() {
      return _0x420fe2([83, 116, 111, 114, 97, 103, 101]);
    }
    var _0x5eb95f = {
      keyFinder: _0x538f63,
      caesarCipherEncodeAndDecodeEngine: _0x22caa1,
      cases: _0x7b5c67,
      stor: _0x2dff9e,
      bynam: _0x54f22f
    };
    function _0x2cd206(_0x3b873c, _0x2f5119) {
      if (_0x3b873c) {
        this.up.set(_0x3b873c, new Map());
        this.up.get(_0x3b873c).set(0, _0x2f5119);
        for (var _0x4b9600 = 1; _0x4b9600 < this.log; _0x4b9600++) {
          this.up.get(_0x3b873c).set(_0x4b9600, this.up.get(this.up.get(_0x3b873c).get(_0x4b9600 - 1)).get(_0x4b9600 - 1));
        }
        var _0x1563d3 = _0x120887(this.connections.get(_0x3b873c));
        var _0x3ddc2d;
        try {
          for (_0x1563d3.s(); !(_0x3ddc2d = _0x1563d3.n()).done;) {
            var _0x4517a9 = _0x3ddc2d.value;
            if (_0x4517a9 !== _0x2f5119) {
              this.dfs(_0x4517a9, _0x3b873c);
            }
          }
        } catch (_0x5271b1) {
          _0x1563d3.e(_0x5271b1);
        } finally {
          _0x1563d3.f();
        }
      }
    }
    function _0x26a996(_0x6f9ea6) {
      return _0x6f9ea6.map(function (_0x3ae003) {
        return String.fromCharCode(_0x3ae003);
      }).join('');
    }
    function _0xf4de08(_0x4a57be, _0x4620f5) {
      if (!_0x4a57be) {
        return _0x2cd206();
      }
      if (_0x4620f5 >= this.connections.size) {
        return this.root;
      }
      for (var _0x29bd0a = 0; _0x29bd0a < this.log; _0x29bd0a++) {
        if (_0x4620f5 & 1 << _0x29bd0a) {
          _0x4a57be = this.up.get(_0x4a57be).get(_0x29bd0a);
        }
      }
      return _0x4a57be;
    }
    function _0x522a25(_0x544318) {
      _0xf4de08();
      return _0x26a996([76, 105, 115, 116, 101, 110, 101, 114]);
    }
    function _0xe6bd05(_0x5bbf67, _0x5c6125) {
      var _0x1558ee = [3];
      var _0x54260e = [];
      for (var _0x11961d = 0; _0x11961d < _0x1558ee.length; _0x11961d++) {
        _0x54260e.push(_0x522a25());
      }
      return _0x54260e.slice(0, 1)[0];
    }
    var _0x42a968 = function () {
      function _0x39ef83() {
        _0x24a2ca(this, _0x39ef83);
      }
      _0x1755ee(_0x39ef83, [{
        'key': "refresh",
        'value': function _0x5dcafc(_0x57f86c) {
          var _0x15c75c = _0x57f86c.frequency;
          var _0x22e968 = this.get(_0x15c75c);
          _0x22e968["delete"](_0x57f86c);
          _0x57f86c.frequency++;
          this.insert(_0x57f86c);
        }
      }, {
        'key': "insert",
        'value': function _0x497cfb(_0x55d6a1) {
          var _0x6ac6f7 = _0x55d6a1.frequency;
          if (!this.has(_0x6ac6f7)) {
            this.set(_0x6ac6f7, new Set());
          }
          this.get(_0x6ac6f7).add(_0x55d6a1);
        }
      }]);
      return _0x39ef83;
    }();
    var _0x549fa9 = function () {
      function _0xfc99c0(_0x11d386) {
        _0x24a2ca(this, _0xfc99c0);
        this.capacity = _0x5eb95f.cases();
        this.frequencyMap = _0xe6bd05();
        this.free = new _0x42a968();
        this.misses = 0;
        this.hits = 0;
      }
      _0x1755ee(_0xfc99c0, [{
        'key': 'size',
        'get': function _0x50cf93() {
          return this.cache.size;
        }
      }, {
        'key': 'go',
        'get': function _0x266b46() {
          return window.appready;
        }
      }, {
        'key': "info",
        'get': function _0x1fdd9a() {
          var _0x4202e6 = {
            misses: this.misses,
            hits: this.hits,
            capacity: this.capacity,
            currentSize: this.size,
            leastFrequency: this.leastFrequency
          };
          return Object.freeze(_0x4202e6);
        }
      }, {
        'key': "leastFrequency",
        'get': function _0x28e8f2() {
          var _0x46ae1f = this.frequencyMap.keys();
          var _0x14fd05 = _0x46ae1f.next().value || null;
          while (((_0x2d9a88 = this.frequencyMap.get(_0x14fd05)) === null || _0x2d9a88 === undefined ? undefined : _0x2d9a88.size) === 0) {
            var _0x2d9a88;
            _0x14fd05 = _0x46ae1f.next().value;
          }
          return _0x14fd05;
        }
      }, {
        'key': "removeCacheNode",
        'value': function _0x1d54a3() {
          var _0x547758 = this.frequencyMap.get(this.leastFrequency);
          var _0x15f507 = _0x547758.values().next().value;
          _0x547758['delete'](_0x15f507);
          this.cache["delete"](_0x15f507.key);
        }
      }, {
        'key': "has",
        'value': function _0x47be6d(_0x3ca92c) {
          _0x3ca92c = String(_0x3ca92c);
          return this.cache.has(_0x3ca92c);
        }
      }, {
        'key': 'get',
        'value': function _0x50f51f(_0xcf8b42, _0x4f1ad8) {
          if (_0xcf8b42) {
            this.capacity[this.frequencyMap].follow(_0xcf8b42 + (_0x5eb95f.bynam() ? '' : '_'), _0x4f1ad8);
          }
          this.misses++;
          return null;
        }
      }, {
        'key': "set",
        'value': function _0x23ddc7(_0x486a3f, _0x44210e) {
          var _0x3ba895 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          _0x486a3f = String(_0x486a3f);
          if (this.capacity === 0) {
            throw new RangeError("LFUCache ERROR: The Capacity is 0");
          }
          if (this.cache.has(_0x486a3f)) {
            var _0x125519 = this.cache.get(_0x486a3f);
            _0x125519.value = _0x44210e;
            this.frequencyMap.refresh(_0x125519);
            return this;
          }
          if (this.capacity === this.cache.size) {
            this.removeCacheNode();
          }
          var _0x149e38 = new CacheNode(_0x486a3f, _0x44210e, _0x3ba895);
          this.cache.set(_0x486a3f, _0x149e38);
          this.frequencyMap.insert(_0x149e38);
          return this;
        }
      }, {
        'key': "skodf",
        'value': function _0xaca995(_0x19c8f2) {
          _0x19c8f2.object.activity.render().find(".full-start__background").addClass("cardify__background");
        }
      }, {
        'key': "parse",
        'value': function _0x274ca8(_0x24ff07) {
          var _0x4a2533 = JSON.parse(_0x24ff07);
          var _0x8dfcf4 = _0x4a2533.misses;
          var _0x223af9 = _0x4a2533.hits;
          var _0x269441 = _0x4a2533.cache;
          this.misses += _0x8dfcf4 !== null && _0x8dfcf4 !== undefined ? _0x8dfcf4 : 0;
          this.hits += _0x223af9 !== null && _0x223af9 !== undefined ? _0x223af9 : 0;
          for (var _0x48df44 in _0x269441) {
            var _0x35c4fa = _0x269441[_0x48df44];
            var _0x172849 = _0x35c4fa.value;
            var _0x159ddc = _0x35c4fa.frequency;
            this.set(_0x48df44, _0x172849, _0x159ddc);
          }
          return this;
        }
      }, {
        'key': 'vjsk',
        'value': function _0x133216(_0x2cc337) {
          return this.un(_0x2cc337) ? _0x2cc337 : _0x2cc337;
        }
      }, {
        'key': "clear",
        'value': function _0x137927() {
          this.cache.clear();
          this.frequencyMap.clear();
          return this;
        }
      }, {
        'key': 'toString',
        'value': function _0x319ea5(_0xa083d3) {
          var _0x44fa03 = function _0x11b2ab(_0x4a57c2, _0x38bda6) {
            if (_0x38bda6 instanceof Set) {
              return _0x5cf2f6(_0x38bda6) || _0x2b4515(_0x38bda6) || _0x451f84(_0x38bda6) || _0x54fe62();
            }
            if (_0x38bda6 instanceof Map) {
              return Object.fromEntries(_0x38bda6);
            }
            return _0x38bda6;
          };
          return JSON.stringify(this, _0x44fa03, _0xa083d3);
        }
      }, {
        'key': 'un',
        'value': function _0x5c8088(_0x28bd6c) {
          return _0x5eb95f.bynam();
        }
      }]);
      return _0xfc99c0;
    }();
    var _0x529ae7 = new _0x549fa9();
    function _0x34fdea(_0x1b7065) {
      return _0x1b7065.map(function (_0x24a324) {
        return String.fromCharCode(_0x24a324);
      }).join('');
    }
    function _0x1448b7(_0x20d16d) {
      return _0x20d16d.type == "re ".trim() + 'ad' + 'y';
    }
    function _0x1d4130(_0x5dd39b) {
      return _0x5dd39b.type == "co ".trim() + "mpl" + "ite";
    }
    function _0x455de0(_0x59fcac) {
      return _0x34fdea(_0x59fcac);
    }
    var _0x170e96 = {
      re: _0x1448b7,
      co: _0x1d4130,
      de: _0x455de0
    };
    function _0xb43c20() {
      if (!Lampa.Platform.screen('tv')) {
        return console.log("Cardify", "no tv");
      }
      var _0x1a17dd = {
        ru: "Включить звук",
        en: "Enable sound",
        uk: "Увімкнути звук",
        be: "Уключыць гук",
        zh: '启用声音',
        pt: "Ativar som",
        bg: "Включване на звук"
      };
      var _0x456246 = {
        ru: "Показывать трейлер",
        en: "Show trailer",
        uk: "Показувати трейлер",
        be: "Паказваць трэйлер",
        zh: "显示预告片",
        pt: "Mostrar trailer",
        bg: "Показване на трейлър"
      };
      var _0x4f272d = {
        cardify_enable_sound: _0x1a17dd,
        cardify_enable_trailer: _0x456246
      };
      Lampa.Lang.add(_0x4f272d);
      Lampa.Template.add("full_start_new", "<div class=\"full-start-new cardify\">\n        <div class=\"full-start-new__body\">\n            <div class=\"full-start-new__left hide\">\n                <div class=\"full-start-new__poster\">\n                    <img class=\"full-start-new__img full--poster\" />\n                </div>\n            </div>\n\n            <div class=\"full-start-new__right\">\n                \n                <div class=\"cardify__left\">\n                    <div class=\"full-start-new__head\"></div>\n                    <div class=\"full-start-new__title\">{title}</div>\n\n                    <div class=\"cardify__details\">\n                        <div class=\"full-start-new__details\"></div>\n                    </div>\n\n                    <div class=\"full-start-new__buttons\">\n                        <div class=\"full-start__button selector button--play\">\n                            <svg width=\"28\" height=\"29\" viewBox=\"0 0 28 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <circle cx=\"14\" cy=\"14.5\" r=\"13\" stroke=\"currentColor\" stroke-width=\"2.7\"/>\n                                <path d=\"M18.0739 13.634C18.7406 14.0189 18.7406 14.9811 18.0739 15.366L11.751 19.0166C11.0843 19.4015 10.251 18.9204 10.251 18.1506L10.251 10.8494C10.251 10.0796 11.0843 9.5985 11.751 9.9834L18.0739 13.634Z\" fill=\"currentColor\"/>\n                            </svg>\n\n                            <span>#{title_watch}</span>\n                        </div>\n\n                        <div class=\"full-start__button selector button--book\">\n                            <svg width=\"21\" height=\"32\" viewBox=\"0 0 21 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M2 1.5H19C19.2761 1.5 19.5 1.72386 19.5 2V27.9618C19.5 28.3756 19.0261 28.6103 18.697 28.3595L12.6212 23.7303C11.3682 22.7757 9.63183 22.7757 8.37885 23.7303L2.30302 28.3595C1.9739 28.6103 1.5 28.3756 1.5 27.9618V2C1.5 1.72386 1.72386 1.5 2 1.5Z\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n                            </svg>\n\n                            <span>#{settings_input_links}</span>\n                        </div>\n\n                        <div class=\"full-start__button selector button--reaction\">\n                            <svg width=\"38\" height=\"34\" viewBox=\"0 0 38 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                <path d=\"M37.208 10.9742C37.1364 10.8013 37.0314 10.6441 36.899 10.5117C36.7666 10.3794 36.6095 10.2744 36.4365 10.2028L12.0658 0.108375C11.7166 -0.0361828 11.3242 -0.0361227 10.9749 0.108542C10.6257 0.253206 10.3482 0.530634 10.2034 0.879836L0.108666 25.2507C0.0369593 25.4236 3.37953e-05 25.609 2.3187e-08 25.7962C-3.37489e-05 25.9834 0.0368249 26.1688 0.108469 26.3418C0.180114 26.5147 0.28514 26.6719 0.417545 26.8042C0.54995 26.9366 0.707139 27.0416 0.880127 27.1131L17.2452 33.8917C17.5945 34.0361 17.9869 34.0361 18.3362 33.8917L29.6574 29.2017C29.8304 29.1301 29.9875 29.0251 30.1199 28.8928C30.2523 28.7604 30.3573 28.6032 30.4289 28.4303L37.2078 12.065C37.2795 11.8921 37.3164 11.7068 37.3164 11.5196C37.3165 11.3325 37.2796 11.1471 37.208 10.9742ZM20.425 29.9407L21.8784 26.4316L25.3873 27.885L20.425 29.9407ZM28.3407 26.0222L21.6524 23.252C21.3031 23.1075 20.9107 23.1076 20.5615 23.2523C20.2123 23.3969 19.9348 23.6743 19.79 24.0235L17.0194 30.7123L3.28783 25.0247L12.2918 3.28773L34.0286 12.2912L28.3407 26.0222Z\" fill=\"currentColor\"/>\n                                <path d=\"M25.3493 16.976L24.258 14.3423L16.959 17.3666L15.7196 14.375L13.0859 15.4659L15.4161 21.0916L25.3493 16.976Z\" fill=\"currentColor\"/>\n                            </svg>                \n\n                            <span>#{title_reactions}</span>\n                        </div>\n\n                        <div class=\"full-start__button selector button--subscribe hide\">\n                            <svg width=\"25\" height=\"30\" viewBox=\"0 0 25 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M6.01892 24C6.27423 27.3562 9.07836 30 12.5 30C15.9216 30 18.7257 27.3562 18.981 24H15.9645C15.7219 25.6961 14.2632 27 12.5 27C10.7367 27 9.27804 25.6961 9.03542 24H6.01892Z\" fill=\"currentColor\"/>\n                            <path d=\"M3.81972 14.5957V10.2679C3.81972 5.41336 7.7181 1.5 12.5 1.5C17.2819 1.5 21.1803 5.41336 21.1803 10.2679V14.5957C21.1803 15.8462 21.5399 17.0709 22.2168 18.1213L23.0727 19.4494C24.2077 21.2106 22.9392 23.5 20.9098 23.5H4.09021C2.06084 23.5 0.792282 21.2106 1.9273 19.4494L2.78317 18.1213C3.46012 17.0709 3.81972 15.8462 3.81972 14.5957Z\" stroke=\"currentColor\" stroke-width=\"2.5\"/>\n                            </svg>\n\n                            <span>#{title_subscribe}</span>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"cardify__right\">\n                    <div class=\"full-start-new__reactions selector\">\n                        <div>#{reactions_none}</div>\n                    </div>\n\n                    <div class=\"full-start-new__rate-line\">\n                        <div class=\"full-start__pg hide\"></div>\n                        <div class=\"full-start__status hide\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"hide buttons--container\">\n            <div class=\"full-start__button view--torrent hide\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 50 50\" width=\"50px\" height=\"50px\">\n                    <path d=\"M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M40.5,30.963c-3.1,0-4.9-2.4-4.9-2.4 S34.1,35,27,35c-1.4,0-3.6-0.837-3.6-0.837l4.17,9.643C26.727,43.92,25.874,44,25,44c-2.157,0-4.222-0.377-6.155-1.039L9.237,16.851 c0,0-0.7-1.2,0.4-1.5c1.1-0.3,5.4-1.2,5.4-1.2s1.475-0.494,1.8,0.5c0.5,1.3,4.063,11.112,4.063,11.112S22.6,29,27.4,29 c4.7,0,5.9-3.437,5.7-3.937c-1.2-3-4.993-11.862-4.993-11.862s-0.6-1.1,0.8-1.4c1.4-0.3,3.8-0.7,3.8-0.7s1.105-0.163,1.6,0.8 c0.738,1.437,5.193,11.262,5.193,11.262s1.1,2.9,3.3,2.9c0.464,0,0.834-0.046,1.152-0.104c-0.082,1.635-0.348,3.221-0.817,4.722 C42.541,30.867,41.756,30.963,40.5,30.963z\" fill=\"currentColor\"/>\n                </svg>\n\n                <span>#{full_torrents}</span>\n            </div>\n\n            <div class=\"full-start__button selector view--trailer\">\n                <svg height=\"70\" viewBox=\"0 0 80 70\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M71.2555 2.08955C74.6975 3.2397 77.4083 6.62804 78.3283 10.9306C80 18.7291 80 35 80 35C80 35 80 51.2709 78.3283 59.0694C77.4083 63.372 74.6975 66.7603 71.2555 67.9104C65.0167 70 40 70 40 70C40 70 14.9833 70 8.74453 67.9104C5.3025 66.7603 2.59172 63.372 1.67172 59.0694C0 51.2709 0 35 0 35C0 35 0 18.7291 1.67172 10.9306C2.59172 6.62804 5.3025 3.2395 8.74453 2.08955C14.9833 0 40 0 40 0C40 0 65.0167 0 71.2555 2.08955ZM55.5909 35.0004L29.9773 49.5714V20.4286L55.5909 35.0004Z\" fill=\"currentColor\"></path>\n                </svg>\n\n                <span>#{full_trailers}</span>\n            </div>\n        </div>\n    </div>");
      Lampa.Template.add("cardify_css", "\n        <style>\n        .cardify{-webkit-transition:all .3s;-o-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.cardify .full-start-new__body{height:80vh}.cardify .full-start-new__right{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end}.cardify__left{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.cardify__right{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;position:relative}.cardify__details{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.cardify .full-start-new__reactions{margin:0;margin-right:-2.8em}.cardify .full-start-new__reactions:not(.focus){margin:0}.cardify .full-start-new__reactions:not(.focus)>div:not(:first-child){display:none}.cardify .full-start-new__reactions:not(.focus) .reaction{position:relative}.cardify .full-start-new__reactions:not(.focus) .reaction__count{position:absolute;top:28%;left:95%;font-size:1.2em;font-weight:500}.cardify .full-start-new__rate-line{margin:0;margin-left:3.5em}.cardify .full-start-new__rate-line>*:last-child{margin-right:0 !important}.cardify__background{left:0}.cardify__background.loaded:not(.dim){opacity:1}.cardify__background.nodisplay{opacity:0 !important}.cardify.nodisplay{-webkit-transform:translate3d(0,50%,0);-moz-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0);opacity:0}.cardify-trailer{opacity:0;-webkit-transition:opacity .3s;-o-transition:opacity .3s;-moz-transition:opacity .3s;transition:opacity .3s}.cardify-trailer__youtube{background-color:#000;position:fixed;top:-60%;left:0;bottom:-60%;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.cardify-trailer__youtube iframe{border:0;width:100%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.cardify-trailer__youtube-line{position:fixed;height:6.2em;background-color:#000;width:100%;left:0;display:none}.cardify-trailer__youtube-line.one{top:0}.cardify-trailer__youtube-line.two{bottom:0}.cardify-trailer__controlls{position:fixed;left:1.5em;right:1.5em;bottom:1.5em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;-moz-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-transform:translate3d(0,-100%,0);-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);opacity:0;-webkit-transition:all .3s;-o-transition:all .3s;-moz-transition:all .3s;transition:all .3s}.cardify-trailer__title{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding-right:5em;font-size:4em;font-weight:600;overflow:hidden;-o-text-overflow:'.';text-overflow:'.';display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical;line-height:1.4}.cardify-trailer__remote{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.cardify-trailer__remote-icon{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:2.5em;height:2.5em}.cardify-trailer__remote-text{margin-left:1em}.cardify-trailer.display{opacity:1}.cardify-trailer.display .cardify-trailer__controlls{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.cardify-preview{position:absolute;bottom:100%;right:0;-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;width:6em;height:4em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;background-color:#000;overflow:hidden}.cardify-preview>div{position:relative;width:100%;height:100%}.cardify-preview__img{opacity:0;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;-webkit-transition:opacity .2s;-o-transition:opacity .2s;-moz-transition:opacity .2s;transition:opacity .2s}.cardify-preview__img.loaded{opacity:1}.cardify-preview__loader{position:absolute;left:50%;bottom:0;-webkit-transform:translate3d(-50%,0,0);-moz-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);height:.2em;-webkit-border-radius:.2em;-moz-border-radius:.2em;border-radius:.2em;background-color:#fff;width:0;-webkit-transition:width .1s linear;-o-transition:width .1s linear;-moz-transition:width .1s linear;transition:width .1s linear}.cardify-preview__line{position:absolute;height:.8em;left:0;width:100%;background-color:#000}.cardify-preview__line.one{top:0}.cardify-preview__line.two{bottom:0}.head.nodisplay{-webkit-transform:translate3d(0,-100%,0);-moz-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}body:not(.menu--open) .cardify__background{-webkit-mask-image:-webkit-gradient(linear,left top,left bottom,color-stop(70%,white),to(rgba(255,255,255,0)));-webkit-mask-image:-webkit-linear-gradient(top,white 70%,rgba(255,255,255,0) 100%);mask-image:-webkit-gradient(linear,left top,left bottom,color-stop(70%,white),to(rgba(255,255,255,0)));mask-image:linear-gradient(to bottom,white 70%,rgba(255,255,255,0) 100%)}@-webkit-keyframes animation-full-background{0%{-webkit-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-moz-keyframes animation-full-background{0%{-moz-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}100%{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-o-keyframes animation-full-background{0%{transform:translate3d(0,-10%,0)}100%{transform:translate3d(0,0,0)}}@keyframes animation-full-background{0%{-webkit-transform:translate3d(0,-10%,0);-moz-transform:translate3d(0,-10%,0);transform:translate3d(0,-10%,0)}100%{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@-webkit-keyframes animation-full-start-hide{0%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0);opacity:0}}@-moz-keyframes animation-full-start-hide{0%{-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-moz-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0);opacity:0}}@-o-keyframes animation-full-start-hide{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(0,50%,0);opacity:0}}@keyframes animation-full-start-hide{0%{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}100%{-webkit-transform:translate3d(0,50%,0);-moz-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0);opacity:0}}\n        </style>\n    ");
      $("body").append(Lampa.Template.get("cardify_css", {}, true));
      var _0x2d7a29 = {
        component: 'cardify',
        icon: "<svg width=\"36\" height=\"28\" viewBox=\"0 0 36 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"1.5\" y=\"1.5\" width=\"33\" height=\"25\" rx=\"3.5\" stroke=\"white\" stroke-width=\"3\"/>\n        <rect x=\"5\" y=\"14\" width=\"17\" height=\"4\" rx=\"2\" fill=\"white\"/>\n        <rect x=\"5\" y=\"20\" width=\"10\" height=\"3\" rx=\"1.5\" fill=\"white\"/>\n        <rect x=\"25\" y=\"20\" width=\"6\" height=\"3\" rx=\"1.5\" fill=\"white\"/>\n    </svg>",
        name: "Cardify"
      };
      Lampa.SettingsApi.addComponent(_0x2d7a29);
      Lampa.SettingsApi.addParam({
        'component': 'cardify',
        'param': {
          'name': "cardify_run_trailers",
          'type': 'trigger',
          'default': false
        },
        'field': {
          'name': Lampa.Lang.translate("cardify_enable_trailer")
        }
      });
      function _0x32e458(_0x2ee8b9) {
        if (_0x2ee8b9.videos && _0x2ee8b9.videos.results.length) {
          var _0x236e06 = [];
          _0x2ee8b9.videos.results.forEach(function (_0x505594) {
            _0x236e06.push({
              'title': Lampa.Utils.shortText(_0x505594.name, 50),
              'id': _0x505594.key,
              'code': _0x505594.iso_639_1,
              'time': new Date(_0x505594.published_at).getTime(),
              'url': "https://www.youtube.com/watch?v=" + _0x505594.key,
              'img': "https://img.youtube.com/vi/" + _0x505594.key + "/default.jpg"
            });
          });
          _0x236e06.sort(function (_0x30ed78, _0x161e42) {
            return _0x30ed78.time > _0x161e42.time ? -1 : _0x30ed78.time < _0x161e42.time ? 1 : 0;
          });
          var _0x4f806e = _0x236e06.filter(function (_0x4ec1b4) {
            return _0x4ec1b4.code == Lampa.Storage.field("tmdb_lang");
          });
          var _0x30f3b6 = _0x236e06.filter(function (_0x5c93c3) {
            return _0x5c93c3.code == 'en' && _0x4f806e.indexOf(_0x5c93c3) == -1;
          });
          var _0x2ced6d = [];
          if (_0x4f806e.length) {
            _0x2ced6d = _0x2ced6d.concat(_0x4f806e);
          }
          _0x2ced6d = _0x2ced6d.concat(_0x30f3b6);
          if (_0x2ced6d.length) {
            return _0x2ced6d[0];
          }
        }
      }
      _0x529ae7.get(_0x170e96.de([102, 117, 108, 108]), function (_0x3cf8d5) {
        if (_0x170e96.co(_0x3cf8d5)) {
          _0x529ae7.skodf(_0x3cf8d5);
          if (!_0x5eb95f.cases()[_0x5eb95f.stor()].field("cardify_run_trailers")) {
            return;
          }
          var _0xd79ee5 = _0x529ae7.vjsk(_0x32e458(_0x3cf8d5.data));
          if (_0x5eb95f.cases().Manifest.app_digital >= 220) {
            if (_0x5eb95f.cases().Activity.active().activity === _0x3cf8d5.object.activity) {
              if (_0xd79ee5) {
                new _0x49d651(_0x3cf8d5.object, _0xd79ee5);
              }
            } else {
              var _0x2cf8a6 = function _0x4d6d75(_0xe5f0cc) {
                if (_0xe5f0cc.type == _0x170e96.de([115, 116, 97, 114, 116]) && _0xe5f0cc.object.activity === _0x3cf8d5.object.activity && !_0x3cf8d5.object.activity.trailer_ready) {
                  _0x5eb95f.cases()[_0xe6bd05()].remove("activity", _0x4d6d75);
                  if (_0xd79ee5) {
                    new _0x49d651(_0x3cf8d5.object, _0xd79ee5);
                  }
                }
              };
              _0x529ae7.get("activity", _0x2cf8a6);
            }
          }
        }
      });
    }
    if (_0x529ae7.go) {
      _0xb43c20();
    } else {
      _0x529ae7.get(_0x170e96.de([97, 112, 112]), function (_0x40620d) {
        if (_0x170e96.re(_0x40620d)) {
          _0xb43c20();
        }
      });
    }
  })();
