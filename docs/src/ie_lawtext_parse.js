"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    "use strict";

    var EL = require("./util").EL;

    var sha512 = require("hash.js/lib/hash/sha/512");

    var LAWNUM_TABLE = require("./lawnum_table").LAWNUM_TABLE;

    function get_law_name_length(law_num) {
      var digest = sha512().update(law_num).digest("hex");
      var key = parseInt(digest.slice(0, 7), 16);
      return LAWNUM_TABLE[key];
    }

    var toplevel_container_tags = ["EnactStatement", "MainProvision", "AppdxTable", "AppdxStyle"];

    var article_container_tags = ["Part", "Chapter", "Section", "Subsection", "Division"];

    var span_container_tags = ["Article", "Paragraph", "Item", "Subitem1", "Subitem2", "Subitem3", "Subitem4", "Subitem5", "Subitem6", "Subitem7", "Subitem8", "Subitem9", "Subitem10", "Table", "TableRow", "TableColumn"];

    var container_tags = [].concat(toplevel_container_tags).concat(article_container_tags).concat(span_container_tags);

    var ignore_span_tag = ["LawNum", "LawTitle", "TOC", "ArticleTitle", "ParagraphNum", "ItemTitle", "Subitem1Title", "Subitem2Title", "Subitem3Title", "Subitem4Title", "Subitem5Title", "Subitem6Title", "Subitem7Title", "Subitem8Title", "Subitem9Title", "Subitem10Title", "SupplProvision"];

    var Env = function () {
      function Env(law_type, container_stack, parents) {
        _classCallCheck(this, Env);

        this.law_type = law_type;
        this.container_stack = container_stack || [];
        this.parents = parents || [];
      }

      _createClass(Env, [{
        key: "copy",
        value: function copy() {
          return new Env(this.law_type, this.container_stack.slice(), this.parents.slice());
        }
      }]);

      return Env;
    }();

    var Span = function Span(index, el, env) {
      _classCallCheck(this, Span);

      this.index = index;
      this.el = el;
      this.env = env;

      this.text = el.text;

      this.new_declarations = [];
      this.active_declarations = [];
    };

    function extract_spans(law) {

      var spans = [];
      var containers = [];

      var extract = function extract(el, _env) {

        if (!el.tag) return;

        if (ignore_span_tag.indexOf(el.tag) >= 0) return;

        var env = _env.copy();
        env.parents.push(el);

        var is_mixed = false;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = el.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _subel = _step.value;

            if (typeof _subel === "string") {
              is_mixed = true;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (is_mixed && el.children.length !== 1) {
          console.error("unexpected mixed content! " + el);
        }

        if (is_mixed) {
          el.attr.span_index = spans.length;
          spans.push(new Span(spans.length, el, env));
        } else {
          var is_container = container_tags.indexOf(el.tag) >= 0;
          if (is_container) {
            env.container_stack.push(el);
          }

          var start_span_index = spans.length;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = el.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var subel = _step2.value;

              extract(subel, env, spans);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          var end_span_index = spans.length; // half open

          if (is_container) {
            containers.push([el, [start_span_index, end_span_index]]);
          }
        }
      };

      extract(law, new Env(law.attr.LawType));

      return [spans, containers];
    }

    var Pos = function Pos(span, span_index, text_index, length, env) {
      _classCallCheck(this, Pos);

      this.span = span;
      this.span_index = span_index;
      this.text_index = text_index;
      this.length = length;
      this.env = env;
    };

    var ____Declaration = function (_EL) {
      _inherits(____Declaration, _EL);

      function ____Declaration(type, name, value, scope, name_pos) {
        _classCallCheck(this, ____Declaration);

        var _this = _possibleConstructorReturn(this, (____Declaration.__proto__ || Object.getPrototypeOf(____Declaration)).call(this, "____Declaration"));

        _this.type = type;
        _this.name = name;
        _this.value = value;
        _this.scope = scope;
        _this.name_pos = name_pos;

        _this.attr.type = type;
        _this.attr.name = name;
        _this.attr.value = value;
        _this.attr.scope = JSON.stringify(scope);
        _this.attr.name_pos = JSON.stringify({
          span_index: name_pos.span_index,
          text_index: name_pos.text_index,
          length: name_pos.length
        });

        _this.append(name);
        return _this;
      }

      return ____Declaration;
    }(EL);

    var ____VarRef = function (_EL2) {
      _inherits(____VarRef, _EL2);

      function ____VarRef(ref_name, declaration, ref_pos) {
        _classCallCheck(this, ____VarRef);

        var _this2 = _possibleConstructorReturn(this, (____VarRef.__proto__ || Object.getPrototypeOf(____VarRef)).call(this, "____VarRef"));

        _this2.ref_name = ref_name;
        _this2.declaration = declaration;
        _this2.ref_pos = ref_pos;

        _this2.attr.ref_declaration_index = declaration.attr.declaration_index;

        _this2.append(ref_name);
        return _this2;
      }

      return ____VarRef;
    }(EL);

    function detect_declarations(law, spans) {

      var detect_lawname = function detect_lawname(spans, span_index) {
        if (spans.length <= span_index + 3) return;

        var _spans$slice = spans.slice(span_index, span_index + 3),
            _spans$slice2 = _slicedToArray(_spans$slice, 3),
            lawname_span = _spans$slice2[0],
            start_span = _spans$slice2[1],
            lawnum_span = _spans$slice2[2];

        if (!(start_span.el.tag === "__PStart" && start_span.el.attr.type === "round")) return;

        var match = lawnum_span.text.match(/^(?:明治|大正|昭和|平成)[一二三四五六七八九十]+年\S+?第[一二三四五六七八九十百千]+号/);
        if (!match) return;

        var law_num = match[0];
        var lawname_length = get_law_name_length(law_num);
        var lawname_text_index = lawname_span.text.length - lawname_length;
        var law_name = lawname_span.text.slice(lawname_text_index);

        var lawnum_el = new EL("____LawNum", {}, [law_num]);

        if (lawnum_span.text.length <= law_num.length && lawnum_span.index + 1 < spans.length) {

          var after_span = spans[lawnum_span.index + 1];

          if (after_span.el.tag === "__PEnd" && after_span.el.attr.type === "round") {
            var scope = [[{
              span_index: after_span.index + 1,
              text_index: 0
            }, {
              span_index: spans.length,
              text_index: 0
            }]];

            var name_pos = new Pos(lawname_span, // span
            lawname_span.index, // span_index
            lawname_text_index, // text_index
            lawname_length, // length
            lawname_span.env);

            var declaration = new ____Declaration("LawName", // type
            law_name, // name
            law_num, // value
            scope, // scope
            name_pos);

            lawname_span.new_declarations.push(declaration);
            lawname_span.el.replace_span(lawname_text_index, lawname_text_index + lawname_length, declaration);
            lawnum_span.el.replace_span(0, law_num.length, lawnum_el);

            return declaration;
          }
        } else if (law_num.length < lawnum_span.text.length && lawnum_span.text[law_num.length] == "。" && lawnum_span.index + 5 <= spans.length) {
          var _spans$slice3 = spans.slice(lawnum_span.index + 1, lawnum_span.index + 5),
              _spans$slice4 = _slicedToArray(_spans$slice3, 4),
              name_start_span = _spans$slice4[0],
              name_span = _spans$slice4[1],
              name_end_span = _spans$slice4[2],
              name_after_span = _spans$slice4[3];

          var scope_match = lawnum_span.text.slice(law_num.length + 1).match(/^(以下)?(?:([^。]+?)において)?$/);
          var name_after_match = name_after_span.text.match(/^という。/);
          if (scope_match && name_start_span.el.tag === "__PStart" && name_start_span.el.attr.type === "square" && name_end_span.el.tag === "__PEnd" && name_end_span.el.attr.type === "square" && name_after_match) {
            var following = scope_match[1] !== undefined;
            var scope_text = scope_match[2] || null;

            var _scope = [[{
              span_index: name_after_span.index,
              text_index: name_after_match[0].length
            }, {
              span_index: spans.length,
              text_index: 0
            }]];

            var _name_pos = new Pos(name_span, // span
            name_span.index, // span_index
            0, // text_index
            name_span.text.length, // length
            name_span.env);

            var _declaration = new ____Declaration("LawName", // type
            name_span.text, // name
            law_num, // value
            _scope, // scope
            _name_pos);

            name_span.new_declarations.push(_declaration);
            name_span.el.replace_span(0, name_span.text.length, _declaration);
            lawnum_span.el.replace_span(0, law_num.length, lawnum_el);
            return _declaration;
          }
        }
      };

      var declarations = [];

      for (var span_index = 0; span_index < spans.length; span_index++) {
        var declaration = detect_lawname(spans, span_index);
        if (declaration) {
          declaration.attr.declaration_index = declarations.length;
          declarations.push(declaration);
        }
      }

      return declarations;
    }

    function set_active_declarations(spans, declarations) {

      for (var span_index = 0; span_index < spans.length; span_index++) {
        var span = spans[span_index];
        var decls = span.active_declarations;

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = declarations[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var declaration = _step3.value;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = declaration.scope[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var _step4$value = _slicedToArray(_step4.value, 2),
                    start = _step4$value[0],
                    end = _step4$value[1];

                if (start.span_index <= span_index && span_index < end.span_index // half open
                ) {
                    var text_scope = {
                      start: 0,
                      end: span.text.length // half open
                    };
                    if (span_index === start.span_index) {
                      text_scope.start = start.text_index;
                    }
                    if (span_index === end.span_index - 1) {
                      text_scope.end = end.text_index;
                    }
                    decls.push([text_scope, declaration]);
                  }
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        decls.sort(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              decl = _ref2[1];

          return -decl.name.length;
        });

        span.active_declarations = decls;
      }
    }

    function detect_variable_references(law, spans) {

      var variable_references = [];

      var detect = function detect(span) {
        var ret = [];
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = span.active_declarations[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var _step5$value = _slicedToArray(_step5.value, 2),
                text_scope = _step5$value[0],
                declaration = _step5$value[1];

            var next_index_offset = 0;
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = span.el.children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var child = _step6.value;

                var index_offset = next_index_offset;
                next_index_offset += (child instanceof EL ? child.text : child).length;
                if (child instanceof EL) continue;

                var index = null;
                var search_index = 0;
                while ((index = child.indexOf(declaration.name, search_index)) >= 0) {
                  search_index = index + declaration.name.length;

                  if (text_scope.start <= index && index < text_scope.end) {
                    var ref_pos = new Pos(span, // span
                    span.index, // span_index
                    index + index_offset, // text_index
                    declaration.name.length, // length
                    span.env);

                    var varref = new ____VarRef(declaration.name, declaration, ref_pos);
                    span.el.replace_span(index + index_offset, search_index + index_offset, varref);
                    ret.push(varref);
                  }
                }
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }

        return ret;
      };

      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = spans[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var span = _step7.value;

          var varrefs = detect(span);
          if (varrefs) {
            variable_references = variable_references.concat(varrefs);
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }

      return variable_references;
    }

    function analyze(law) {
      var _extract_spans = extract_spans(law),
          _extract_spans2 = _slicedToArray(_extract_spans, 2),
          spans = _extract_spans2[0],
          containers = _extract_spans2[1];

      var declarations = detect_declarations(law, spans);
      set_active_declarations(spans, declarations);
      var variable_references = detect_variable_references(law, spans);

      console.error(spans.length + " spans detected.");
      console.error(containers.length + " containers detected.");
      // console.error(declarations);
      for (var span_index = 0; span_index < spans.length; span_index++) {
        var span = spans[span_index];
        console.error(span_index + " <" + span.el.tag + "> \"" + span.text.slice(0, 30) + "\"" + (span.text.length > 30 ? " …" : ""));

        if (span.new_declarations.length) {
          console.error("    " + span.new_declarations.map(function (declaration) {
            return declaration.type + " " + declaration.name + " = " + declaration.value;
          }).join(", "));
        }

        // console.error(`    ${span.active_declarations.map([text_scope,declaration] => {
        //     let s = [];
        //     for(let [start, end] of declaration.scope) {
        //         s.push(`[${start.span_index},${end.span_index})`);
        //     }
        //     return s.join("+");
        // }).join(", ")}`);

        console.error();
      }
      return {
        declarations: declarations
      };
    }

    if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
      exports.analyze = analyze;
      exports.get_law_name_length = get_law_name_length;
    }
  }, { "./lawnum_table": 2, "./util": 5, "hash.js/lib/hash/sha/512": 8 }], 2: [function (require, module, exports) {
    "use strict";

    var LAWNUM_TABLE = {};

    if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
      exports.LAWNUM_TABLE = LAWNUM_TABLE;
    }

    var LAWNUM_TABLE_RAW = "4fd97f4173467a32162cf56bc1622b402b15e01fcdd2891cbead1e806fa7d151a1dd2c15b9ed592153ec4ccd18df36910064fb709e1e57629eb28931b6ab11ced02761eb41deec054926cf80a2b451680837eb8311b56b878217871647f057a8034f2b66643fe2d3b2800208d63d2fb36e75c8bd1de35c0270a24b3d2418548c0030990351c102843cef5037b13f38078203b63153f409dc05f9b03c618d37a1060308ba3e1199bb3c820387e912c02e75358805d615ea62236daafa0de6ad74b05f4f29412240c0a3e2535b445e340e72d6526e813aef077915dbc26b776d2e09f52c2c0106ea5ad609f917061058cd61af070cbac500bc107ea02a482ecc218b948d372636f3f1b2979288d40b3fc344630cc56a74514eb89bd2c4357d0308bd662842b031c413362e294ba18ef86d39247114a1508267b2bc05dba41af050cd8d6505fff83f10ec87717a2e64fef502529e5e9a252fea6370943b79cf189149da4177bb54bb096170549293ca2bd6086537b1502cef7c0f05620e39f073ecb5f60460795d60b842f3af12cf269ef2fd77f0161bdbc78ff22d5e981c30d6f8ee10594203ce09e799dea1c5a2e9012e54219b2174aa1d541a855350307734699e1fe1cd0fb20c26eaef281aebf0c081a4c4c8053ed766c1c82aa98e0fc92abc82144bed850a8b3a6bd33798d620142883e3103d7a54460710ccb1e26db0b6720da07910122f8f42d4193ad9fa117fbb70b31c8c144fb0f3b2ac0f1f896f4ed2e4087ea31f6b7ff4624ec346f91f7fc9da91db20899709c80caaf07014d1be03f5676a62155073761deb6bfbf0763169ab0c2cea2ba0ca66194d0aa5ce1cf0e3f6976014888fd4b0996721700475a8b630cf831ad80af31c7c00a4a36f1b0560abc5c1fe7d09602bd02a8573738ba57432ec7f75a1cf6d01891f80c7b6703a7365a403fdd892930b044ff9317eaf9f306e202910122be5362149f6b32c07e2542d83095ab2b40620ae91e066f3ba9d064de314d06038fb051e040de480d083396e0c667b7e6073942c25060d427391e38f90ec1a6d67b300d1254e5f392e81b610875544ee09b9b6d7b03cf600b507bb227d80eaa2961c1ee5b4eb70708f2d540fed2a5a1171312c8f2191b646d21143424d0a0cfb3e30dce41c431a9485c69083f7683527515ee1a1c98f9b6305de4c78b0406deacc08bcdaf5c093ae363a31d66028633490fb6133248d3ad1931c0a47037a6d67005e80b1e209c0eb64f0741c14bb17057a0990d2ac755604f9844d70d098cc301124d64450a25f69220b9862741058911df41e5099eb233269ac8f0d91e36d72b0c2c517084b4879006a3115bb0651acc86068bc9ae33970c968f48fb04c802357b40512404adccf0c951cbac0551d103705587b2700a4d3566e1be7c9bb7091e298990cab5c14d0df6b8c7a0599f9a17277e3f4ba3c080728f096f1a4830dc6a0c4b3bb9dd0b7281482b8511e7c90ce0f839714d13c19dbd8068738a631319886582a05a4ca03b6cf24bf34ead310810a78af101ba0eaa2e07710d7770b61305a53273988bb1a0749a6d20e3c7fbf2293013fa19441c2b01e194d5a905258f7c30ba3d436509e289aa20e474fa0a0cf1be1120fa7177600d93ab7b311e2c61cd257df30ba07a1dd3f0077a7516b1c78c7ea739cbc72500a4ee392209e48e3fa07dafb23b3d47fca340c399476f0a8e66db90d2ca04a50b7500cec05866e2d10ec0d2b370de636798040e47b200571335360338b98e305e332bdb035144497030d5a2d1050f462fe03a379c9c0370fcb232516e95d105565be580a3758c950eca1ac3f2afbaf90125d9c91de048d11a3f07bb0e9d20484db28d147066b4d05a697f2504dd4b0c92f873da70062e1ff4003ba55f6a15c741abe170bf07ec1ae59b8bf060ce54a6052aea7060992524be1e1bd841630ba1b47933cf09987042808913074077b222e84a15c508165a69109777212707170c575071778bbd23bc37d7009260a4b10b0caa64210b6552071368c60570aeaf10343209583ec35a8cfb99091a36c210a84622513b4e3a2c20ef924ccc29ff7a21738cef1faf0d5ce0b1946220818b10975368023ac987a80921a5bdd09bfb5380034ef55b5073a0be12054d1c6d0354a3b65343a0717c32b29bfeb20bdc404bb07756d39808a5b815b46b4e3ca007474a22c08ccaf8a91b52fbad305fd43ff30608614a42f7c63c5005a9e4885060b6f52c09ac24a5808b1f9ea809439038709db1d03015d8910e8434bb735a07e53dde005b76d2b90da5f3c8106a0ea60c0549672071142c9ce10842697460914bdb663fb7f1b3e270a4f5a605028bbbe036bc8dbb7198d90e92a441aa250785d8b0034ee6ef4d07e66b00008af194931f61a66f11babdaa5434cb08078036e0c1e4050343ba923035b81c47805173616581ddb6053a84f7c0424046e60aa2662d00b979064304bc8550f07c66ebdb09499a37952afa128c08d0f42401d4db3f9a51e000e7851b1dd9130821e3acf0daf2f1993bb8ad24f0b28d5bd41de6a2a9e08e22e541411016ecc0879206d409c4172683780d3c47089d2bc8c097d95cf7071b51fd80f7b0249306244c7c7090f18bd0046ea187e06a66b0cb297118d411061a36c611c83aad122d39d55f0ca44396505bb875e305095c69b0d20e415f0d97d8c791124aaef605ebe0715080cf97c806a8097c00685aa5820570e6487073a3950807c1978361714dbe7605e7bdf5703181d9ed0d788125407dcf95f30565b22530fe5548920d792203d088e469d3040e73459047d8a36305a1142110a02386f013704a23d083d2016910743656706a696f0c0343f601d0599aa67d09afe9bd0109fddb3e07150f7b203de36e24030f0ecb71a82fab6e0be2254a3090b1a4bd03dfe80d6092b8404408457953908041c1e714815e4070e1b7c66c10addb7c005748675d07f646c67095e99c0b039c70c920542d44300a93e5692069b09175039b21c33053db1f11088f816e811ffae05206d980318075e78a2e08386117509577e748135e415a60648d02d008d9b0f60173df01b308e1b628e094d7cacc14073944d09525c5a0189e53ead0da6de88617b22a9da0702441aa0686242bf078c413be0924f139d075de7aac348f6e1100b918b2ae15f2974fa09d9858850e3fcbe87266e2c051087c46f98081450c4808b65098711af86fc71f73cc5870beff877d132e92799107a801370f63bb4ef0fc8cb20f10a217b4d110f39d3e08674e74110bd58e8a0bcae6e3a19ceb76e815b668c9811d76a4910885b06b9173212fba0d52fa42c11e38ec671277e7f0b14dd7423a15ac6cb321cdc86f1205698718a13807f2970f138e5a71b916648c053a1cc7e04ef7c7940d46a10ee29c609903052f64bd8084f997a9037ff4a58079ed92680560c91bc078789ae10a0d71f4215848d39406b8930ed090bcb152064e129201d0ba3f1f113ac3bc705538ab6c18bf0d6060ac5f4b550d2ea9f3f1106a4d7306b62bb2004c45fc1005f4abd2e0844f018807af727360f865557a085f969a314db658aa102e4e10003fbf0a3906a5f285703d69be400515115550852f698a11091df5a0768eb2b905295cb4204b97de750d55775a604bff7b22068738ab30675566ea0aa3ae67509c4342b20814b5509121cb09131869337630873369ba06560ea3b121a95c6f122386ac415db0aeb6081450c7f22e89784b2b7b9934f0a4a6f91d1021cf3a00841c085d09ea1d8b107aac69310b17ce87824ae0cb4b0b35af8bd292a1702a13a571c9317bfb7bd70737647a6078dfbbf2061f48e020925b0df207f82bddf1c4413a7607b8f48e10858f3c560a12ee4dc100e04aef170aa019c0b4340fdc0fd15e4321b27ebc3316a8347720bf4c3f5e07996b9842441289f208ad609f83065dc604100912d650fe985a980f9015df50f54ddbec12facf7c20fc0b683703b139d4e06884777905b554dfe0ec468a0114d18dca90a2428738086393e3908c77944a1c0074fea1a11cf24d076ba776108fbc1a19056ee300f1923ca96f132ee4e120ec1e49ae2247bb89d2b9e21c870aa0d08092633782e70647b9bbd08a41294a096e7591b07f509b04128fee1240732a5ce908ce13f5f0c8ddd7860f6fbcb8a0a809ac9a09eda575a16174724b3077f1df705ee5a1d9041f05a7d3060f1cae07ee0740d08053b626310c4a1271523f8d0b1c95917e6194e4b39f0e3d226740d54d7af70f6cc86ab0b0f305fa0cbf1924c195d1ec96056a37c9a05117fee60c5bdae5208b44fc2609fc7a884060f4336009afecd6f0ad89975008dfc6baa0ffd7c35d04e37ff51063f9dc5f05558813603bc5f1b01368911390d176897f0326fdf260317d15f6070e08e910577faf66033bb00db06ddfa07f052c3a9c72705cfb380581d3b3b15843c51e1d31be53b103dddf750fbb25407094d3243203204f21516c71470a0d5d5e78a03784893508f09c3aa20a9da15d096e98fa20593d5c8b16367475705be232c8042d566e004e44a9bb06ead486207b283aa711d23beb407b950f85089b812fb08f1205c5065f8843e06695e21403809a4ed1122c3e16136d23f1a0d7e82b6614503d2c0072a21d930822cfa65094b29efa0791f2b3317217d12307d0451cd09e7a9da2096fe39c507846e9b40ce65db490a5c96a4a0fe5364b30fb1e39450923f0e580aa1e1d2604d05421408b3c0255063753fda0797860be071f3c6a30fc1497fd080a7120307039ea5321841e61a076c9b0c50b73f32760a9bcc9580b2d6f5ad1112953820ea7ad56011a8b1b8506ddd6d790cb93aede0abf7abf8083881cc7174374a1218428d6880a42d46610d8c074d8172cdbd1f1764fe9262acbfbc6509cf2152309d0cced40d56c48410da83234f090473e070ab3d207e08f184acf08f533f7c09223102d06915639307b6589d60915e70050721edd2006932f9a809bf42b9509bb464e10e43211ed366da2a6a0866404651bc49028d06f165940093c380370c2be5d46276dee0a303affef3406c5fa3bc0338aba51163f93c760a833ba9112ea8a2a70918b1cab0e414b4f606d9635440f2efec4b0dcd8b1b824e5fc12c07e0a352005e7a38c109473ac1809efe406607ebb83771ed41ad7c31f17e835055da013c09b339d8d0d5df4e991396203f50d71f4a3f1e9434655185fc27411e95763b5270fd4430069f25ecc2714fd3b227b5f97a2061fc16be1d2b2835705c278e280baa87133085c3ae5d0c485126e129048ad7172108de007b6bc1771525829a60ff2df0c30eba9ee2a0cd2157f90fead9d33086eca6a1050298da61a8c6e7990dd38e4470cc4f739106c94ea6107a7948e30a95134c9186fb92820e008a02415e35d7b009d6a8c07106db1c4507b8625710b38d80600cf32252a2059b89f10a08ee8ad162eaa3ed07684f79d082dc4e420a7ca94ea0cef0fee12082900a4055c40f8b058fc64d208ed28fb507c904ff80a0f35cd4064f1eb6809659ffff0f4a7e0980ae4eed181a9d48a5a0561093d11092b03ff3305bbbd203e5f946c29ba5c1eb078a698bb22e64238e05d85dd8408cb7c90105d7b77f708c38f4ba112f6716f07095ccbc0927f00290af23e2da04da6fbd805386213a08833045d07e2d9b05085aef2b30ad703c470b6df740e09523c1f10fe3a8d231395908d103a48c25806ef92b4c0a31dd7b407c28e5940809a0a5d08ab872e9073d779520aa0de8b70dd4abb3406420b83e18164d3820efe609eb0ef60c5492829dc6340bdf60a980c9f7bf0b0bf4462710964dc85725419188734638bc6e0bb24218d06e1c17c70fd805200073f02d460ce7064681297a419607a49a0c70cd8008320e0c325910e6f829871094957040b6dcf21e0c78e061009595ec9d101cbdcbe083c82cd4187508bd80a62c29ef0903d0e5112e3aca3f1510c5eda053729afa09c089a3b22e3416bd09576c10925da6d65e0f21316710ca4a576b1229a22cd081cad16d09755d9ab1c1de59421c320e01f0e689b5ad0f0593fd207ac5270010277a17908549ba2103490cd1d12a7570100d4b8682f04c6a7626211ff7e010a55d4a4c10c9eeb7806db356bc2e381673b30b23d8d907de49ebe09f7e8608139d7d54412eefc14908cb4005007ad235031de715e181ed21cd0008f62e1fb27b22e66f249cb57ed2aab6e54309dd17ee61b57fe8180eef08d6b08d4853560ab01cdec080a9a203074489ba02a7102db51f317b94706ad618fe2a94422bd1450289530866795e5273c680431c535cdf108b6fe2130bdffddf9112672507247fcea200bd5021e10ebd0e50f16918ed493ad8c777713914fc450c828911813488260d0e63f81cc2a4aa65f719337779b08e138b861f667a71a26267010b2505acac61e574e22f171ac9bb00fe8c469f0bdd7160813ab5f06d585d472c152835b761545ac719456e0a315d555697d7959e27c1f758aeedf2b1041f108a551bfa81f4b92e97a852aaa70f76ec4596926bef94acf59461700358ef61e5157773f4650b5bc6dd9224a9128e267d0118c0c715b1df16f1e080b15bcf91d90d3fc2c1908e9c580a2a4610cb64bf402deb257ba5f060a83152c11052a38760a02bc4950c745cf5f5675ce1215946f36bc11c2643a0121da4084102c3b16206b360e4905bcf9c8159e3e18dc0c5b2c99806d761e794a60f7d83089b8128e03aed256906d48eb5017696ffc012f32d4a7075f984491faa48149056731d740a6b28da65a219043e0b209537812399f40210f568e260d62b623609b7052390c4885a3b1368c31d0081a5db560f2a7e77009df901ec2d82b75b10a4ea0b8006722cd220716515b20ce3d73320cbc28e7f03be9462906685c84603f910bc76bdaeea26087ad5fcf04b27a1d3077ed26c60863970850abe483270b9f0cdea4644194824a8d5e00d2335bbde6192967c1f15b50e8e41639d6e9c083ba5125108b3af2b125f735d10eb0cd0fd0b6bdc6b7081c7df8a089bb57550ddc64dde07659e5dc07f5289eb09fa115860730551e809d65947f06875416416be64f220ab6042a90c52b09340b690ac4308cbb2058074abff8a093f58a3a0d91fd3e0092e6fdb50ace288750c8570f4b29a4d0c280bea128291343f17e80ef8a9e0706f739bfe2efdc46980a2dc66f80b916badd0ab42373f063a7b7fb0b49c95070d72909e81b71b283e1cbd222581fdc760f00fd7af62f06f1d4cda064de87d907c8fb5891503b138121f47a1040b20c104b1a9e59b260720fabd20615be0830f69643f608a5c7d62086cf940909babd05a09f7aa3c709ae3977406663474b21debbfd509af7285607872a5030b7aabd4e119f99b8f11ec17add381df63ed0c327be3e10f695c1f030abc39c1365d908a187f4348816fcefebf172c2a8a90bb606f3e0e66e87160ed54e13619c60d8901cd0cf25904a0249ba0f50d19a90bfd386fc16e652a110f0b1c43b0c909c15f0aff5c6830f486bae20aac5f9661fe94d36e0880a4fed06565713c1b61b2e51041b6fde30cfd879fa0d15dff3b0bf4ab183065754066084fd145605b3741b00b0734bab0b4b9a4730990107c10c589a40d073214dff13bcb8e4a0a92cf31109b8e451508be7e9e10bfae9d3e04ce43edd068af7ab8097dcff741d6d7df6d26db5181c34bc6044d31005541b0c71cf60406a52a10407ba69f512f3721ef007647461d0796f0cc81eb89ee342883f33a60ab1dcb3706499b81f07b6825a21119cceb20731e9c1f09347b5b320f1db3430ca8b3e8116dca568811fd453f914245dd520d0bd0e3609a23b8e71cca5cf2105bc5019d1f3aaf06513f37386522a028fe10a85a88f50f6406920258b84ddd0d2d42d21072253a9929588ce951042796e81c8c72a8a08333ac9525bc32c0308c8885eb0727a43e307d1305730b67e90900bb2717e609199ea93086096c7a08b68526d08dec93c5098b89d4107321f1d40bbd49dc10de4ff4062a8f0abdf060b5904212f5ce618202478bbb12550fadb09fdc0e152b8ecb7d10a4a5a3833a0a4b2d934e28c14e0a3feafc2100757fce0a78f7337123d7ffef57c8f897215cc998ff06327a74507938e60908c377953067669a2a15afe43a92ba3d05d509dbea5720a61885d911cde42830ff54d0a3202d354700997bdab80bb06fb14086220f930946134482c3de94b021b9fb6e41b966ee2e0c07a42752848697bc13556dfa50a16d961106d57101a08a85fd3a0bc38ccc30dcc7c79b0b1a0a3b620921c6ba2085b14e4204232bfd20506587b207dcf1931f2f98ed71ad47a4142078dfddb1f67016f020154018e234c8d2cd205ed0f28209b7afc22093678591f04f9f323cb6d2fd93ef807eea0bd16d27b0d2f64bba0e339c27b3410570d80b9c1b7c30f4345fd205de84bec123a76f0108b53e72708a52b3de0f62c8232030cdfcbc189d6de4710f3d04ab049517f2b0c24ef59319010090f06e2224f61be245b82085bd9ded072b5c34705c59df810c61a5a95159b1b1591b63dcdc62c8d9005d0ba936ad62fecc74e2071800b1e072bb59b80a5c8c96c0a215431121dbc32dd0f88d901608967f804124e7817833f04372b2db5df7b3191acc88722a2688d7128e78b0230abcb8972eb29c0070e385537d1f69c4e9105ce45d700cef2cb9b03b759c0e0625f5ee50419534de13fcf860813df8eb1a2e76b10df193f7c30512fc3623d1604de968068f8bb1d0641caa9409f966d712c058fd160df17fea008102cded15d860ffb4a16c3cc31924f912908b4e1ef408ea32fc80dae0c5162e2b6ab6e1548c3d5f19f76c2ea1255fa66522133b09923148ab371c2e842a0060d9522c0714d9df20648927e11f5afdec3084250bdd07571e6580813c7f5116ef7d5370b8b07cfd0b3aabd3a1cece984b06d300490301f86c1d106db74d91712478810a775db5a123504e724bfdfbf7d16927f9fc0b9eee85b199a92308085c49cd5040d42a96152ff833a0d53f22f106f693ca32f67caed5105241d5113034dc2c16c5f59b50c67abd5d09135fbc40b3acdd340cf887d6c0769027f90c604b4140939794432f45556031d1cb695e0e86631502158ef65f0e2ab16470bc8b26cc0e4184d820a8e9244c0b6d3f97e119184ffa12f5e9ebf075451b47061df088a0b760d0970a01ea0d3160688c4a17d79364c197c74c1d0c39badc00c6e6c3b11412d9169077d6d2a50846e5fd70abd773630b48fe99411bf17a6420e1eb27c120c58006137551eef09b428dd408e15376e16d222b15199b457f22303dc9ee0768276e007da1dae9089d6e5352f09cfa6c0a8622b4f1c8578b3245456e060576897db20ad44851707e2d59a10a7f27aea09ebaa2040ed912b0d1b4f159441fdb574df0675dd5bd16df7344f050f31e3109dd82e570e66e75b8095d7d2db1b84dea850985a33a50aebb0290199fea1030c418721e26e83ee8008604bc5a080e454a60dfe684e914f769cc609032e0140a4c7aa52217fb2e6606005975818a77e6c60edfcfa9c20cd0f56d0902249ec061c9f0470c6fdbfc423d0e523729f2d6a8a0cacbef8d13358e66c0e4ef9c180d4c6870e0e3b467af099fd604c06592600621871f79309d2c41de22e7c1f982411c82551cca373e105e11585c037d8aea60ed0aee7f114cfaee812f1a8d30064e88cbe1aee5ed20107031b54034e9590409387e7ee0c7f47bc90d2249b0e17b6a886105aab842c0e238410f0530ea2b732f78fea52ac329a820c45f70650409032cd05a2fa16920f9be73a1105a8a0c26c6c6c613413547d312826be9c0508bb2a025acc95c41932bc6bd07a233a5d167bee381093daf2c01a75bf5d10ccba44960d0ec4b561366f3d1716108bf161540ff13206cd8a8820719094c010cb09536148f2d838148eed69e20a89dcb91ac63cba60da2978f015e104ab31fee584b007d14406209b5512ed0d0483d6a083cacaa609e8ec75406ab8f0920c440183e0865539e706a87dcac1895c091011223266408c42c08b07d6c11291a33e01fa185dd7c19256667dc9068a8c5260723369620c860f87e0e493af3a17998c39e07fa5f4071a4b14ebb39c256b6909b40f74c0a1b382202507d317d0844deaca0ae66d1ae0e03c1b111b57bb43a1c55ce43e0a0d4d5a012ff35a4317b3b9d2c0777eddb90821063d10425c601c06e23c3f20aad5e7270702b8c4309c102b6a0be9d25941afb2ba1c0ba69184d0a654151a1d8873e3005e91dd1708c80b6710b94afca90df3371740ed96d7f20808799a40cbfbf821082b4e9bf2549c4ccf2575965021181ae02e11e6e60800f5f199a017081c48117ea4071b041827fc00a2e82a7414699bf481646f90631d86909490ca10379c13fd209150d9b15d0617cfe3bb822eb43afc3b7eb28c40548a00a407af75aa53cc6d785217eda64fc3fd33bd281e622c05d12497d340047fc2720195236eb413671b0e80fa8762ee1995500a3197c040e008a456846202bcb41616f04fee1138796a500ec59705609bf1faea03b7abc770f50d9e0710ea9d80d073dd398c18514c7a0095222dc60a9da6576344c89d320b11ee3fd1f1a874f4067d6134b08980be480c1423f960fe918f290b2fe632607b663d001779671151008ec6ef0da99b0ac11b4f10b907623a4a11cb5eeca80ce2068941d56601da2592a21a4162fb58fd12473b26419f5569a60a1b3755608b5640010b553b65f09aff9e5d0a48372eb1ad4b113a1cc3f4fc71dc64627c0f4eb64031b452907209ee8d8d51b168761d0f4631b5b1873e87de06b945fbb07e2a63ad07dfcfbfd1a83c45a3103f5076a131c6cf7a580400f5f1b1d34a890a55b75520bfb3befe09b5c4c440eeecfce20fd664cdb0648ddfb80d5ff06cc1283d63ad0859ede7e191d0d1aa1f2ff47c509c4c6578062c4cd0f07a7de1ed2120b792a08e2cbd710da63de8b254b252d0184ed5aec0da87ff48041d8763d18fe7bc8608a41604b0ff4c13091b8217a2a0572d88ca13cf824291e0c970862f374f7eb0affdf85f1696e66af0a4b698fd081befc450c09330130f497ee8d0b8a60b0d08b3b0a6204feb400909375030b0ea9f123411c0cf70d20e7f282b13e853b1607b707d0126503af800cf410ddc10939d77b0a3b54fd50b3730db212a70f0dc082a78f3f09a3003c71b7880681085ea7db321d4c03a40de1771880d67c3b59132fc660d11776ec732360f073010caa31691148b506c16d0ed5e41702253ca12d866844222b4e3a30ef3cde4d0aec0ee011cd4531f70a498c2a610b11c2ea19e262d9916bf961da0821a22ad12528127d0ed2d82670bc6579a90c8638b0d13bebb71f07f847365096a96dd41a50c9adf0494f817908fa66ea52161dc60c47ba26c2e0be73f4db07f7565f90ad527a220abe3a7b90b2629bfa0460a48ae12c9719f710ea59ec00d2bf7ae209def71291cb1d9f2e0cad4ae400da974c0d054d36fc823d0e4572163affd6d0d5ad5f9710fb9961411d616b3a1581db87f1504a1aff1015617ad031440b6706e6f998b05d39748e08efd861103179af6506a4e126f03481f51c069ea8cd20f90753db0922d78f505ecbc554059848ac10542053f907ff26c520bd733f9c07230fa4808926d74427f43bed30a58db32f184953ce818ccfb11c198fbaa8d084c53a3f12173df2706c77b39013961f8640e6604b7a0ac2fe0671e128f6060ec9ef5030f4fd39820d923e75409c4695881bc5d7f861307755990c49d8e9e4056d8b7b33d3e56481cceb8a030eee4f585186c155430c4378ad00c224aaae0b1e9082e1bd355b3d0dbb2e1f50b5a566d00872461aa6eeb152fc1bd21ac7d1f098012d14d5780eb2009becfa154a8ecae22c4d2e03064bd466a082d2c8b906417e5e806b7df8b90a6c9a2a007d18d087098aa5f4007e4d30b40731ded6c05eaf90e507fa0867105efe6c0d05a892e8a40ef03cc2092fd06c10b610ee9109f613c91090b5e7d424ec1410304eed46e3071012f4f080a4c5680a2c64b5c08b8d4f1205773b2ad0b51c868c0bef016f409ea29bd00a86e994309fb111960c0a32c1a1aea5b87507c8430f20ab5cfefe04f7584de1f8303d2f11b4db339086ea910b0e96699a70534f6e7c0b4b83d7e088fb81b41b11517ea1066288630696873fb1f94863c804b528ca60ffcd97b01cb1628900994cafcb1d19ef8af0af77ffdc08dd7572d08e17e0040effce61c25de191d613a78da840b7bf824709e25364b13186e59e22088ef3914d57d9d6158c7daef19dc1128a0eeda74b4078bf4b912278a884c0756684d8234cfbe8009bdea6c20fb1794bb085a2392606928cf200b313263a0be8026810b1f7c08c125f8251407bd51ea10cc88f1940e124e0150f856723307af1a1120ed00ab9f1d83f97a30ccf8918514886d4c01adc9df8e0e820fefb211343ee40a31241c908418cd341f61f0d4d33ee706320e65604c611b71c9861081934831058eacb80cafdbcea053db99c0249f7235d0a73e332f05790a64b13b8a060113ca58d5d1431c928d144b6d6b10a40f293012100f99f106e94f9c19dcdfc3c184d5d4350e8a1a9db084e7c4a61cfc9ba140897fe393085b8772815e8e61ec0a083ac2409d710e880dac6ea910c0a6cf612237f0b180ce872b5108ad90b240930b794516e828bfc0756b8a47075a5f029116c49ee5078eecc33128b466a50a39342150bd2791da1ce8b2cb125cbff27326d73d9bb1665cf8f10af14aa6508009f4940af83bfb60b02b71c3104256f5a0c9336fb30fe831d0311b87749514e3a69b012fa464c4271b44d8f18cbea8740d57429a31a5c6ea131666db70406183b91207697e5221093971aa08ddf54ba2df0666f5053a3d276083e0ef1f091bcddf4092411310095394bb40eb1222110bfe449f4228d5d643137cc539709b804dae3a0ef1c1c0a75ef41810e5c2e450ea15e97d2366c55a0075b1a6ba089f710ba1a5c946800b1f7a9d11f27192aa23f8c517626c7921831292f1abd0900e87c30a19cfe87240e476ad20b85a7e20ac624935157171b6225cee11f60b8539f0e26d9bd23d3352fe6c722f8fbbe11682c565b0ba4f855d0a043545b0b12094ed157c3f5400bfd0f3e4085a738f0166d6125b1798185720a6bc74131ac20a07410f07431f0bb7ce76a18c6370760e630269d0f1392ee20ff0782b6099dda23b0b52f2c5c067fa06720be689b000c9137c732f99a0b5e2894521450d6d6fc111a7344ed51d1944a8a1d3089dbd1e470a1490a8f645bb1f3c734c41c5227aa711b2e48f81bec37f663444e99d3160b52ad213e1488a0215ced84e19832484a198e39346184a1708a09cb5ce4112941048b0d52fa2d910cee71690c7554c1834b3dcda4151f2b90f16462527e0eb3c031a302a3c61307260f45b081c8276c0c71d283f0deb027f125a2fff731d9299a4b054090e1c19c96797106e97c01727963fd2f05ea2de5e09d5da7520838f4a16093c2a13f2c49dc7a11c9475d3607dfa95af0e5f8596407dd24dc44eeb934b028a6a350809c306ff0117ff3f7320e6f4cec3643590860ac63c77a09538fe0716f1644f81cd28d4701592f79c120a3d6d41132e1d5241436647520f899a86f176b4b7312033241340cd423bc40d86b7b3d06126d5f10cc12880a12151151317a60ec47151e8e4281864f8e650d97c449311b5680b61b3f90d3f1f69d4fb01eb5eafec1c075ad74105d2aa6b0bcea355a06fc3bc700ab7401b506dc0fad51225d768c0905f3bec28b7436ec09fd361c4153f7a7250edc9804d0a543505d0ac67b7cf13fa5b61b1bcb09ead0cdcad9e51a0cc37310fa0e806310d0692874a66843da0fb52b16526a1637ce29098f2ad25fa8d61d21ff493480d464be3b202685a58094b4c15d10ba4038b0e6d2a3170ac0e1b9511674a1b2122d762dd1204405cc1f12b5b840a5547aa341fc5e1a42312909ee0780287e52d8f2cf9808d23f4222c15ab7b8033cd451a06dd3872d05517165022b9628211d0cc9e0c0a5a2e5ff0d16d7318095d64b9d13e9f048a1679ad2ff132e693c824727dca90ae68ec940a9dc9c2f0b479b3d02522448ec240792fc110118bd71157d613152fb58202c135d5ee2d1165eff49065371ea710e6593b62b91d72eb13eca5b700bddb22dc1a4bc1e6109a1169851ab26bdb115588fc2d0ebf5c4c60654cde4507bb7cee013aeddc990ea79a9a604afa541704b5a485b45df09f4207cd6390307cc343cf0856ee3da08cfc8ac51245447ed2a4f2547c14e36711e091e423500696c6e4322cd27ee90f411fbe80bf8e26260f40b5392229b947a30521c017e22b4fa8ab09621deac0a90b0ca10873edb370834d6c701f1a1088d1b94364c713811682939fe4c00d086ea20bc167cdbff90b3cf79e031ee37bf31774bf67c0cc22fff2124e4844911d0b651f130b9b90409e5ffe210c63abafb187a5c11415c623b923e38cdefa2eb11f2bc08b8200011b6f4d9cb0897af9b80ad14a539088d49bfc16324300d0bade587615b95998c0e1d8f0e606672582e0d6c8376b1b50dbc27041a660e50de5e1521117051aa72dd850bb5158266df62cb5e170e09c86483b0518aa14f154d9f1253b703e3f5162216767065a4bdb223a9c8618242249a4b3c94613eb0a89fb220102147f00184fa87fe089e3b26b14c21799a1145922dc150fa06d309362ebd14730450e78eb9f2fc22ffbc5e4f082b38be509416e97106bc684a4088f0ab861764b0a8717acdc0cc0979b206e0aefa10c81b97d28d71056f13350c040eebc0ef5f44780ef9337b013a5d8d8e0fbaff3da11bcc46640c55cf71d13674ce330b0c6bf6e0cbab613a1479ee67e108464a3310323e42c1446d7516171b290321864cf5760f8511f631355d7faa0a5facf270674cdb600610f99c10a37784c00a72658261f48856820ad9231290d903c4840e09e7daa0db29ea301939ee17907d51de900aa17b5bd19913f03809c949d5c1f5a4f81a1364711df10ba46045045d7ee7908131d4900c1dea02d1656a1294316c497981639c85e12332edfaa14139f34c178efe83e0d72b3ea42bf899f72075503cd306f3ba87a272cd979b2b6f1ffcc1b89af6e319b0793371336d158a128f7e4821cf7f7adf11a6321230553abc4e08a3d1ab3098138da30a8ebbae923ed950f51dab90c1a1cbfc30910da80989116a9794ed1a2d6632d1db469f2e1a50b37f11015a8fff10cbe74a72ef17318807f26d65d59fff48d92ee1bfe270b8fdc3d02f053cda2100f85d4f1ab330c7f095c406810a6f4b3040b05d75e30ea5dcd7a080ee9f61132d016971b99f667f14542fc820d3ab72a80ca3fad710be3a70d127f9d711b0a450b9b20a79f9d3504733452d07685d45f08377ad8109471b4820643cf407095e7d2bf0a16bede41397176050effeb2ff167f81faf1766bdde111f8b59e331034fcc5151b2941f12812d3930bfd6ba400e2200744078f4883621f0581211877f285c2101048ba11a1db5e1287a101c02740bc7f43c1efbf2920e429cdf1690933120a5b25a3c04754834419919347507e0c35ae1a45bc9380859f380c0f33a840721fce70b10d67b70d72eb3c8c32090061d0918cd623950d2390c0d0caa954750e35727e223ae6ed910a8db7a850ddea5f090aacfba5f2adf6db302b3fbc57f111bd51e912005247a1ccbc0493108a38628154b819de1ea37a6d108befddf12446c2c7e087a8249713d35909325844e25a1a974c6d2149fc2715200b9f0d11d67ea0c820e93e276080d4a67217fbbdaee0ffc568fa24b618fe212190853a155aca18616105ceb712435d09105ad7d5dd065d1e6a11c1fe6a581167f37890837259f314cc9589717898d20509b798378087a98f9707ade0c2205c6c03c91f4f39e0605f24b58008d3be2f721695f7631b948880d20a32798221736f5e520bb9f42721b91aead206dbd7361effd195c20bb1bbc321752708925791297a0c0e5ad1c0c6a0e2705238b6ea40887de29e10eccc6c608773d88c0e37c9da80e40737950744731172e06a86b719df283491a8eeae681f3070d861893330d117db6f0d008ed019200b8e025f90c6c4e5de0a23ea36b0c6edb41721db43bb53ee2058552d2f51a343e5afcda938214d68d2772621620e8f25bcc097555226231f4c9870c26bd0df094e48f3d173b4171510913d4bb09d43dc4906c35f7f90cb54daa50d1082e801016a028308da797c3192503f62244309188534203fa22d7a13009081544866090ce83da0502df3ce0a835f13d08b268417154dbe5af0fc4e31be0b59d09e314161e10509e15c7881807bf6180dc2751851974524ef091c2677a09929d798066fcdb6b12af35e851387137f70cb9653710df5f90c40a10cb9880baebab620e825664f30c5793101245286d843d571b6f092f0ac74113fae6950d59c431628360abc22f53e3b67333f0603223205e85607c95a2bd1c4de0bbb3446fd92609de8648911d1d284b2846403231eba843d221eb0e3b913ebf366b131c5c0ae0a975a3e30b563797b1db99fd190e8ccc19406477584515c9cf75627cdd16c62385dd2d11b27eac210f89d6fea14386792223ebe8a5a105c7105c0455faec1054d8f45e10f3712ed0a7a7d8d60ec918e5f0bd3d9c65121460c400766c50e1151140dac166f2223106b8aaf6d05ab5bc770d3d5c21412f8d3c9a1065abd3318b7db53e2e33232ba07658e6cb09cd1d3782becc514c24e61aa412352927d40ca3a7adc0a5c2eb3008bc1e38509fe75fb00ab07cbbe104de9d3f1240fdf620edc6697e0bb6d10e30aaeb97d20edf47ca80e6b779711dc7d62c50d2771dd9101da5d4109b7ba4390e687e3360beb2cb5709132731518cbaf9b01eda67b9805761f966156b9d19216205c9c1074608e6f1e7460ed112f1c9cb608723f0a10d877eadf14891b9c110de0f332070e12424125268dd1141714b1c1198da5db172f41bee09cfe885f3f9574c6b0f5bb25ed19baf27060d2408e6c0f8bc27380c0a4d08c122d4ea05274bce902081ef814b09fe7e5d4174b8e97005c129ffd086ffab67088671b9412aca8bd115a555f7d05d7b70b30dc7b16ff0d59ea3361f3ae04fd1a605be04095258e161057f1de20b9e3a1c406040d8cd11c3c17ae2eb308a634bcf2b41d12e8a4e1d1ecae465605159d2351d481966a071ed587b09809a8c505469dbfb0a065a3650b03ba52208078db2a1789163d20de32b7330b51e783f0acc4e8f00bdaec254150e142f42f65893eb0a5dfd9bf1783e3cdc0b05e5a6c093f68d3a19526c6672eb5ab4c815d745a2118db07f47155f299e30e08fa117267f573990ffc137b92e1a4d63b08d8289cd09b4f01061bd5ae87a15316fe121bcdb1c460d5540695090328bca0a831de611af08654a4eede7a9b4fd1fc4721a81923840e83f7ca21b0f8e0e411348b8171bcd5edc50ab2596f9063af49e3180fa24c008b910a350934c1c900b317437d160f501360ceafd3a013cc565f514b35f2342196772b40d95d92db0eeb5c195076c8d81808e9f92862001e7d960ed403eac13be048f7188313b6219c22250c0e6cd89930fdff289012d75ff0812f08af04391b2e95f14152b92b07dfb94401584908bc4339955320ae6317382624b7f5e2aa2a15561c797fe93163399a2743ee2f64f09557999118650f4ed119f055831e98935f22cf4d956d1e6d0307e20939fa5517531af251efba2f451fd0d30271f37041291dd381b1e1dcbff56c1e135e4191e03ae173208c923cb1e9f12e001efe51510214563ad11b7d9b2272568bcfe71d3ce5c381e39c188f1ea0f601f1e75f4dbc20d5fa1702606cbe6c1be6dd716258d4916d0c36a6ad50b169240d1baa4807d210ceefb40b388044a1e73a28d7200337a8d0ec5d9c8c1dcc60cb21db879c8b255afb58a1e5e67bf00fd4f38d11f39a5e0a1de5409961f93bbc7b1bf9f4e0b1ddc6432b24ff1073b223deba7d1c1400ebb1c8037d6c16a8e83772031f36bd1c1881c701ef1aa8d31917342c023b5bc65423300ef6b095d5b4cc08cb24e19099f7af2224d977f8c0be60c6ec0b85cecbc070c2b4190f62730cb07fb4ff1e08a28eb2f06d68fae70b6aa56510bc7dd83239a5823e90e951ec700b75c4d3d1f4759f750722a15d104bee05ab12a1ec7de0ca7bea7c0f1f67353327e7c0ea0e56d8c0e153854e04107d9ba3613822234e0a1b7816b2f847cb75454173d1c0d4385238322a6d4e10df59f51e0881ef6400e5a636d0093c3d3e80878084970acbdd67d075d191200c5063f8a0cc4bc3910bfe2c42d0bfdf01f30a821054209dacc45c20983b78807a92999c128939cd52ad74251d10c62ede725be69a6022ae16b1e11cb75c7f0d7af3aca13e38126e2221d6a320985ff3ab0bd8ced4a0a00e614d096b4e3841278ff8e0257abe1fa0e1cd69df26e657eed16e9cc136199786f460f1187e052053bab281d9894e0e0ab49f26810ba78aa918b348c09463b40ea3160ee57431f630023b174fc9dd01a13387660bc44fe6919552f4780a91bd5e00e1b1572a1466f2ccf30f2649cc0ac97c0750d5215e451747481a81fe2615fc1251ffe361fba81efd15b26757615bd8fbed227b887930decc4790107ed9bbb11c6286611b29fc9770b8f7f6e12241ce8290f2f3c59a174cc27900af9d660b31afad0aa05090965c21c7eb2b90f8a1914529c7456c32c150d267093311af723475fa292604be1070cb48eea90da3a51a9271f506f91ae0074c70f9f782992b8362cbb3f983cfc10d47f7e7e103456e871660233900ab301ebb11cd46771155dac78f0bfdced9d34feb28c2359a8cc5e10e56cfc91118a02bd128e91b8129e8b345b1823d18b20ab4393050b1b3eadb16eabc1ce110f9ae5b0ecc75ee11864af12809832c36c0eb90167b153c1baf124f18988a0b520fd84083fac9e51225d4ede0d8e3d402086a50fac0c6b4d68b0ebe446ab0b19a1d3c1aa5c4d3609f931c100e314ecb008b7b01552aa99e95a0d3d95ca61934a35d70ea5fda2e0b6542e59115597152249b1801d09365136e09bdaab40103f5804714e905a170888ff1ce14efff85519fc062af0fe497f1a1af5dd8ca09db915370d274d13111fe7af6c14108ff803ec70d1ac05e4798050c92413f808a568e5218a66dc8e20119e0fd206c5bf1117c717d8e078ab81f128da09d8807ae0c31f157008c2f18da25a6c19e98a66d169b179bc16413bbeb39499afe608b7cad090df471498179961add0f6e427f309971ad9d13813b78b08e95439f08b5eb0d52bd0ca2fa1474c6ab814dc7ad01255df2bc51a8d03b9d0b4bae407144b1c3710e766edf70d3f4e3d90a23df9830b8da6f6a0ff79321905ed9113612f31d24009d45849e0afd3b5b00844c0d9509d07237e1ea82ee2d15c06a3070c4accdc70cd2bc10120aa067ad1234072be23462d66b23eb998e208a0ef4c307a195e3720260daa623c513bac15b6b87520cf6e1073098de25df1fe8e1c230a2ced6bb15a1df4b30b065762e195f7392110eaf364709dfd4d390a94a8f230b59a51141203338e31f69a36da1d762fa622172dee7a19759194224a686bbc4af7717472293cfd861ae5251b8063da294f1495528c8127e1b77d0e39c167623c51ace615f5ad5ba2e82cfc4513f1a54a2136de21120b63e3e640f8f9dd2908183d3860ed5710170f00c17f5089b3eb8b389a475cc30551799b0ca49e161180c8f0e3135572a621df8676de1225de80f0fad8c953154de6a0811d9bc1870ebcc07021656845b811bb880ed19d435d431a070c4200b31d267d17b4ac3f005291789808301511a21d415d0a281ad2ecc197e5802d257a7a8402ba90de8c12d4e3463301ed79f619607dcf315af4058e13b3776db22c3ac26216266c9f619b9d0b000aa6d14901564d98991ad0cf9c31d4d817451c77b036716381cff10fbb86b42163aed57015e88d79e144941abf0ec17aa12161a086cc2f17ac2fe082c2563518090bed70c66921710900a40a816efbd5ec0ea7f762f0f6d8458611cf9305407c9c3b7a0b99390ea0b9170ec30ba6b2c7d0ee5a0cd3420c6fb5122d3fe45027019a2de0d8875f6c1771f94ba0e2c1fe912514bba0a147db3554155d27f072dd7b6e0e16587cdc12fd81e1981d96a3d2d2a4cd86dd07ffb30962d75e4ffe117c083b0207a3ece4255d6b9b421ff2fe4a22b38e69c0bb87f7162e4851b2b1c3b4260b19496e4e8301a14218319beab97289274b4129961cf730de5603900e766a4ae194bfe7040e0ba64ab14c54ac130bbd310bc2dc1a3da11b29d93df123991aae150ac9a6f19927ef4311c6d83d11ce1fe06d2b38062ff2a6d6dfd11d5ff130b0c489e6fb2026ac2fb0e6769a080f797107c0ac576b820f2d996cf0c95363550cf794ac30f2770bf206399b95309c149e7612ede341615071c8f1054db9e3014e5f70a6175834a031887fba5b2bd6adc1c132faf7dc09cf03cc10cc251d2a0dd80ba1115ed5c18743d65345246ed17c5947e0436580edd372bf08bd2b5d50bd6f049318a7287c319a610cef333ae870a19938f26c169c2e12815c753678164a4fd690e361481314a2ad8541524dcb3408cf5819a0a1936de60f5c26f92095ab54880e4d32ad1637a2458b15dae343016c650fd71cf8dfeec1c8c0be54157b27e401f672fcc63fcb3aae3289a648aa0cb9731c704cc93c63173a144e4189510b3d22c7d4f4505a9096ab1450560fc09fba999a0b665ad1e0e4ba610d0fe0ee1c316eabc75416766851a06b1548f603327aa6a1388ba66e22a6731fb205a0f2ea236c70477108c11c141939ee07f1a8dad2a516773b8a617a5e938e18c9cdc0a1a106569116736a2f80ba19474039d23b31e30d07e3430c061d5311711575cf3c20621873cfb10514205cda7002bec343ca5a987b7a2375be534605858bce408bd24f981d07ee31110ae2b6991f65e574d169f9597b0f3f5e21b0860725d6239718ee70b8e861402bdc8448a0d0bab52718ae950fb31aa39fbe2685bb86d2ec37b4b41ec4617e52178474c62f3d17cf3125606e69073bfcf7a145362f730e69c45dd2bf092f630f2becee731566293b08f5b338824c50e24114b60c49a19e24221b05ebf1ba20d43d1f6315b76b03e1395530ae14d162d1e270f10103220927acd1969cba340abf8fd95193de2e4419f23a49d0d40a1b230552a065e22eb2b2bb179b9662216d24e277238f7a4801b48c590d486f10cfa20762a1ab21f88d9d9115ae46d01d76d3ad417684a4c21bcdaf688177c5037d21d6eb6ff487054cfc083e9a31b0a887e7090ae62988e03d20790f1a4ebb1862f366c979093106d6b212c0d6eb154922e860d2f8989d1ee1cceb21289ab842124156f7a417596c5c414ba54203f1b596883f6f4d1e63acc4d81f2ece6f013105d919aa0af3fee0124ad8940631237fcba088fcc0431348b749a22a414c7e362ecacfd30f69fc76309b2a3921645fa7d538cfaaf33100c7aad6340b4e64e11b593d044691e90b42266982f90a1334893470fd7ef80cc99bf3a06613365f0aef0dad7145630e7c083249e5a0a942388550c82904507dace3e70bef9d00f099f1e3ba17020e09809679762d16deaeb000c8aaaf670a7fd82f2324ed87c50ae4e946e105b97f5a0e3b50d1e0f2b9a8d11b4d953d51b433ff6b2d91ab76c0b3c17b6f185001a9a0dc1f55900760d701108aded6e80c0d2448921f8599c21353c3c201136e2eec24ace96071b9cad4720ba3503fc0afbbd29a04441263704cff46f612968ac9b04978cf27251b4008b312140a741502e7e3421651c71028d7913580702a1fb208498dfba30685f318326db63a22b0d82dd4271b6e3471cf80a2450764ed6b20cf772765187faa9712a2c530e20732b637314b42903e20dab0388236ad43be0607e086a1871f78bb353b6a3dc083fd0b530d132695412b6f35a90afbd9a2c3e085928d15b6756220ca1123540c78a7196051a2e4b61940638ab139a3f2a115418b50417d6cf48926cd278a1106dab0500b384dd06076c092da067faeec30c85d514a05d73f07f06d7b712209d7f9ce308c95c817070bca18a1af30f41f11451bff707ff1131332753fe570cdb33be61939878652ef292e1e1b68d8d7508ca840c40fad5791508c9e4e18092b5a3bc147dbd27e3f1732cf1092ddb1500f226ad651b319fb520a23d89981491fbc4451e57289b0ee9979e20fc362bca568d1f8f30a4c8d25b10e41dacc1528c9f4c0bd604a790a705a97b0bf6e0506074012ee60bb408b7f07711ca7a183b7933e22eb7c72922d80b970120593b6a125f9f83d33d3293d71569baefd05fccc0cb0a0bd43e11d42b6aa20c8abcb4f24cb4502e0d84f20240fb04baa5218cdab2d18933ecaa0f3f888c91eceb543b2070b377821ea5ba4811fccb3b10ed8c94ab0fa221ba410c078ef9116087200117351eac23ddc56ea08a7768252913786e42073460e9269722e2026c07b0ca244121d5925850ff10214c082250ac0447480f8c1a25a13d239a251643510362590d98f813d21e4a317427ae9419ec19d0b0b01956fc33a89ca14361e16062375b8a8820efae228d0c1a7e7481e3366ab2082c82ba93ab536f342fc882c911e75236c00a955188612086bbc7136fb06fb1d9c8b6371a1dc3b7b271ab22391618b7806142cfadb7121dee89116065f3d01706912443b89125b10b4b0e6960c72e0fbb20e80f05b0939bb21e1a91e3a3405593f3f00d95f670344498d8fe0d27f8a9f38dae34dc0bc4388b90c7cb835d1307e4ab61c4767f54293da98650e75ea6ba1a18666e911c7ce324330e285161f963991c0966a80d1082ae226a097c3232a0931df03a35024571509945bab509a9d09c20694424671437d46511494bb8151f27ca0171d11f8cca3164965491d0e626731e68cbfea1e77b3e7b17c371f6519f24a1b023915bc931a3532d2e16ab0c0e61ee0303ec0bf507f3c09374f25a1451bbaa1110807e2e160aa461b22fb06dc90d22087af19579eb7e13f45a83e259f719740735a062f06cba93cd12b78596d0761debe809070274b3029f10ff3a3b0f3fe2f312c94619a49dc190940c93a20f0a7c75c0cc07e777306e66cd926c2348a5170a585871925c1a7521fe6f38b155a297052b79351732ea6a2c9d3150963af0d010836310e67649a19c197c62357d134f71caed66992727f8cff139370eed164d538ab3e4228d9925532c96126e337dd20e130be481a8980b7c0d181ec85058bf31cb10f24b4f911ab32ac6123d5be2c257368a4f28efd971d0d201bbeb17e5adc3c0a37eef8309d40200b0ae8e47ea0bd6983fe0ba42fb933e26eeeea16598e7c11703f8fa50bf7d161c0ab6e2ebb0f7b06b960e173dbf00bfc0b3761263f53b805f0bfaef1b844954115c75a443255b6f78918c57892516a49d1ce0cfa8d7443a00546ed2ff45800a0f4e9ae7319f7f08de163a984b1108d320821da953f870a1b602e71e8c6f1b91f15a0bd81bd7c6de7259a3877321002c3470d6afec520cbfb5ca008e8959db0920b50870eebddf9e118ec92380ed922d921c3c39b5212967138d051f39466041ddc0e507932420a08e0be50308dc56d201b7ffe586258c9fc5610042dfc32ef5e8d943cdbbaec70915133361e72d5e0120173f7bc06c2344fc122b5fe502393586f518152ec9422b3361921cb7ebc5d1ffbefe7220328d318109d2943a132841a21141d1bbc8387d239832dd50b71c1f262b3101bbb80acd1c916fabc12e48295f2603a21940a4f0cafa13dc7b09007fdb21e109fbe600a0af7fbec1120a8180305d6609ee0541d891426ebfc399202989a9a44e52ae94385623f9511cab2fba1073f70be2420791162508edd281ea957d9a1f65ecd810a7e345bc33988eaa21ea2a7d4b24794042507b8527f227f2d9cb21686b0f5b17527ef410cb2befec1e4a20fb01cf18c3301c2a5102b15a6b0af41f0e08c1d11aa67125095b7123316594b282110b5d09416489b26b1c62c72161f9bad91e1a0025a923821afae52db1431bd1ad7bb49a0d2a5410a0eab8713a0fc5d9e371f1453f351d3996b3014bb233c64e2f95fc3154ebe2e24aeae00a00a654a8c911d466df22330489a218472ec6814015d898190ed88220c748a18d0d84915f708abd0c130795277e5234a3914c12457103516fabf3a21ea215a000c5e835000da4ab4fd19aad69d908d0c151312bc9d6b219e7c74a5165e606a11e082e6d441f2cdcbd0d73edec50d6129e790d9a6942d0da5bf3ba190250fd91a3bdaac6122a8560d1761c992b272c4cdbb134791f370674dad6016b0e91e1110c156ba2fec5990b0b81c3bbc12883724404cafb3172667e2ef021b5f99d3165cbe99f1bca3f529077748ae008314a3670836d8e7320120ecc438ffec2df2d21409b71954027861adc07020094933621247c8e3e732566ef230e285cba70fc83c54d3de75859233991aba2098aedaf90a92334e31e39eea380eec76d0f1866f7cb12d1af690b1d7030c4a05e4e8d913bddb0deb275f4b33a25aa88f8a1450a95d819b4e79292a0d45f49307cc0c752dd6485843094dedb32b077179236ac166881ab1761b32a462604b0c27f522512ca53228088a48d5a2b21d729c1ba24e69a11a43473d11cab30390ece293fa10c9c9ae915c5e409d2fb4b618e135e69db30ed2f1f0e0bbf39f651ea1c770a15bf65af129a95f7bc1263c8b6006780fd08092ea88b8334ac9bd10a8b45ce811dcaeb85155108a0a1eaa439da12c6c5e0804716a68703712d1c1263e446d516c3f5ec31ba6072fd1403ee91f262b343222eee4a8e41968f1bfb2053493f317956f62c2029feb6e19764a57b12c81a3ad12726b4a2286b7e266389c7634c2d1f6380717ae9a31d18058de911489e79b532fd07c9323dc10086235a8e3151bb71affb1adb29e7a07ed57c8a075eae4571bb5c7dbb08b500ce63a9a2048518690607a17f89f60a1c3fc36210fa7fddfb1e3172a51099c4a79b1e4fd27cd36e9b5ac71f4a3b2eb3be24c95720f38b7412317872d615112a195165d6ce6c3246f1d202daa2bbe23dc16b6fb0527ee0be146b6db4d2d78185b7313e42b0506ec133d017c0308af32c8dacbf1e074faf816c84290e1d90d66961faf051030c6b500e70c8ef92f52ded677851cf57a61c19ce2f70d169fbbfab298b2d6d91508f2e771966229c215336f3571c079b8ca137a711ec0e69b77f120d495ca21dbcddb6c134b87347336b81bd11f472c81739f6242161a46a7cf021fa6397c2292f12dd16ce0610b14f3f945013efce98207a38f3921c175495c14c573332291108db10eda0d10324f4b991138e8fd0832da3327a715e0420721fe6262600759afeee094db09e8191ca937d30d95b2a72f24f033c3ba7f170412e91e2a41262e6d8a17438fb492483f50b0182c6502e2024182ec302bd04791924f50763ae3dd3eb19f0eb3ee274265d461a22255a01f352265e2870dad510bcd2e9e506d71284f14a39a10e236335ed81af584ad81e3ec30440940d1c190a017f5fc2ed9140db07c009c490bd30db3107cdcc32f309f18cd61f1fb85b8112d3cee31a6b2b5fe48b588f1a0506043ba05575e3eb198d685b3087adf051072c4032b195b6bbf838c68128516e3e55101ea4d309e2913665681008fd674433d7030831f2db39b10b8f9fb405b6bb23a3bd75ef06161369b70196739ed92006064240e4c00aed1061f414333270b21f1e748c9a316a91d57a24c4563f913ebf00a61ece18d3a1a5c4351e138949c11186fe531617e880aea4a410c22e23bdefdaa2011e35320e67f572533818152f6d8b3801d199d40b3b1a231d49827e6cfd32283881beb2379b8e2c1550f63c8156c78c982d1bd8802523714fa50eb8f1fe40a75ae82d16db38a5224b8e50ef1c407fc9d0677947f03463916f30a0a8185538e04314a2dee414b21e8ee293f1a22137531a76e311a1f2bf76be08669d9391374bdcb21c4eaa02628a1376480747b99151b66f039e12697095821f696ae31c055cb3c37e7825f30903e59670b25c40e612425da110979c29d60b7a8bf51192f9d8871957b6cbd20ce201db20108e0a8204ad415730d8975af2233b11161f4fb8a061999a1c0d080365f3209797cd5023267d54b46bf12e853a6de7c0c14973689913778908023054b17e0d1bb900a0ad1bc10f0cf03ca700b046ed1d0b14be3a422bf0008d162f9379f2b70798ed415248cd03e1da696a16694a13b21e5fc0e8243a7c52c0cf600f8d0fd9fcab810d9e624d21d59f5ea28262bae83ed9c7d4c33d58ea9e34a05551a4ca59d68131b677a283245d20b7249693fcd244d2b64f256cf2e3f1e0b8b36236bfc6dc30e9a624ea07bc34e451b35b65d429cc5f70c12b4b1d7e1586540af247ad8c0214c7d76101781e7236252b59d6b1800c43002236133f3181eb1f9d300a5c43e2c7f4f6fc4668ce5042f8e7926e20745287d2d76215be18275ad8127ec83252178f8383214b048d211a03916911b68b3f9c115b85ae3075925e5f1509c75d8217edd647174a460a938f30f35e1792d44b42d6823f4e24b62334a199b19f27046147487134d53eab17d6dca4c1b2d546660b62c3150276b765673ba81e13515d12072c16b20dc6422badde962540a13700e4d2f90d0b29c287d14ad4f7e9236a57d4f21d13deff0f47be9c92821bf92208994b46c3adbd1ccf09c390ed53ce712ff72ea5a237d093980d20095370bb30ca8312d526ca9778a1b947cfe011c5328e81e746fd83097d489150770743902402459b835d040c950edd09c2320012566d27823d3131ede00d711225cdf9234aa785151fc14bfac09fc8d0c4167d904830736b69481420f19fc15275ac231e040d68d3677fe9f91287daf310d37146f524b8e456908a941f8412dc32ca32528af7460c70701b00b8371b6b0ae34f8fa17c7388ef0b5150d9b0b7d832110e9496bae2e853bc7d16c11dbd019361a1741abff59e504427f5a7103c1e4a3205b7c879083816f57117512342138f7ce0f145d7e97422e6bd634204f8c72c157cbafee38b2e2cf22d17f8b7220612f0b712d43d9e22170e1e57138c468e92377808f21f93fe0a31435ffc38208f7d7da182f408fd222465d5d239db29c5051062def2ee93017a50e27bb9237c295e5a31401423a24d38ae2416d6e5fcf071d8ee0617326e8223676eb97b36d59b2d1255f329b74672a279408054b49d42aaf640f2319eb5ca1a222de4a09f77c2831a46fbb6817cdf6c4922f67b856162c405c1179ab711a2394398ef24f5bbf9034ee68f6d4064e9d6827ac5aba22dc26ff6a2192dd7be34f0feb4c08781bf712ab20cf902b882891e135ab34fe0a32524df0d9c02c691ec704c7c27138eb9233d323991148207f3e18312d90a3395a7a571cc8d80931493be35615dd98b4515ab2ea0c12531e69b15dee0e912279d26d938443f4640cd3759611a9fe3f5f31c6a698b23613988a20d11a27b1d43ef4f41dbb459b2154ea775b76ab5f22876c54f53a20c71ec9b0fa5db6921922dae02254895e7c10cac5842270f8f7a11fc6d2a5c20b3bd39434097bea838ddb20432a6c0c77f17039265b074529d0c0f4bd518405d654d772283d921827cbe3a1e261adfc0d18338b3ae2fe2a9dfd364694cc72906badf4488487d9b137faa96941fc25615378f91a4e0b9986f573ce07de4b27d3f1da13ea27fa1538d80a670098cbe8ed0a031a47a184865d4e0ef02ce360d7e96fee0ba36c0e214f10cf611d82321b70f6eadba81f76d9a2f1701014c11c8d7070e1debfa06b08d2f09242b1809e320aa70bb67128d2042626a34cb5f15e0176592836737de1258df98d2b1e7117c054e54cbf084562444292d8557e13bd1969d1bc7a923608eb1665e06228752d2b5d50f251154af210085f1306f2ad25850707af424b40b97eab420858abc630b05a85c71c74427150823e21b50bceb14cc1c1ed8303162534daa19b9ead041af8d26c20c1a0558b2232b7d24200304d9d097e08a0908ab6f02918edf0a14102d516a2129803eb4333607c54113b70b0823acf8a0f0d01402e40a3c80b6c24f8a5a70247e81a4925d47e628205a4c72b131edfc6b0c2d681290f905d60b168f3257929b92ec7d0f8b5566306bd52196171554263122ba829909d544a9e2109819cb243d0c67a238b9cf6b1757558aa126ecdb1b0a6a6e9070f6798d7e0d0cf7a1c17d21db8103a5d1d14276a8c4891293054420a10014710f3d7ba5538c4abc6d0cd17f0702af1a4dd616bac17b10ac8207f11e38d55c20b204e2c4829ff78ea598d3561a8efb7c86d5a493fc0061387a4e97ff85b16e8b20231784d7bf4cf55260c6a6a5835c1d4853ff32284569d97eb95893eb5035673ae8da57363c59458c6059c965e13e80d75927b661816fc48e877d96735871a2f87a8753586cbc715b524b873fd2d5a07f55f12d85261b4719516fb56e075829f23673e127aaf5a5ff258c46a54dbf4843dd7f7152167436c5d0801f180c0ac40b71928ed33f24bd774f215c4cbf241ad44870b150583e961b52d5c5f1586aebea2f6de0f3e16fe576d91254a3c9427e87150130ac632600a8b150d3186d4eaae0a7b43ec609f742b450bff0b0b20a773c8821e7085d760eb405ada1a145085f18305aa4110c429a13080052f6e10ee8e746064a78434152090ef30d7ca00c4182b69bea263e440591ca45d5441bfe9262f1ca90b84118e3a7ef618f75f0131bfc8d32f30054a57b286f2892230c9a73ca3dec97bf03f28bb6d92135cc97028c85d3470c48ae74a0c75a86b532be376ba15e349a1019e3609820df54adae0d14556be0e2424d681555d9bd11dd112e322ec16b39e16084cb8824e349f0406542dbfe1cfe424e80f12a0072081bde91e1d5bf17231a3656c9235c3bd7c750e5e5f7750e013998072cc685d06bee26db060767e0b0738519731945e6eae1c87635ee26a244b30294c848fa08af6042014050ba561d6ba6e7c1e19c7e3a2cf23584e13898b352088844bae1eb4a38d52e40a01af13acbbf1e2936d79531413d12d01c52fdc240c3e4f0270e91e17aa183188f891919db8b50dff5661e23f67147f1a944ad8c0f78830a218243d4260a35ebdf51b3ccaeb919918fde92476abe42301d504bb36851c5f30dee8bc1e097ea4f8b1c268cc1819d20be901a22b7f3d1dc36e5d73052fe2d918389d8862b53153d724d4c0b6616c6a489032667a00513d579cdd148d8e0b919782ad4121244f4e123d0930ce143da71d91c76ad70f12425f0c21d568bbf41571736a00a5a38e650e18273ab264e267be24d8a553f0f42ac0152ef8c88ab397299db82bf382c8b0e2d60ee3116bac9b70b5fe749f11da0687407b69119d179fe79c90dfc7e8f93120f6aae22004dd250e3ff61c9068cd49f906bce30dd06c8cee39062eda9b7067282a7c081f429ab082dfb9c808916f1eb08ddaa0e60828dba8506e926af90968fc8e70bfa0f33e0ef67b6f044a5f235e18101a6b71a5d8c5f72004cda471d9195c7323e61f9bd0ca01e9ff12c6172f41d0565b3408509e48d07d3fe02f194386d2812c7928e33a73804cf1a7c634312595ff6ea1bed4e70f209a7881e0f3b1207b0a8f2d38d2fa227e7a0b132547c42bf386be1b71bfbbb1c160da0714848a69a219992ded15dafb35f1de15fae41ef1fd0ef0a27a036347f0cd11c4b583396e1befcf060230d83e461d226e6c330e3fe4d02ebdf628a18e5078221eacd17e70cc356f230b52673f5104ed8be31748c722816e2f793f1b691b2ff0cf09b8cd19202ee4931a6d181e273e86f8011b8bc1be0e4c609861420058210f41399811258e777d0f7f862cb0ef8e48201281b12e212fc3425c15073d4920c65770ad0e8f0b95d1521b3ffe0f56b642f18486fad9161429cc012b4e83541252ef2180e862514712c9682dc1219391b11151d12980e47d06890e7161cf7169eb1e100dcde2cef0c92c471a10f98dd01146d4357d1082dfbb20d659b6f914eeb7668054c3a1d816f3e405c0b4a9d0961023b90611c9d83f0e3432405652db0b33081183a2bde127fcf989234b53be72992ac8791377ecdc313843d7ac08f61d2e206dc0bdd51275fb0340b1a2d5b50b351e03a252df17a02922d3d5f43a3e6e731721c015935db8404c3887f6538397c9a26610223987710274401020909788e2ad90c2a92e179dd581edbdd27d282aeeb8a14fa2f2f2179f7a86023629e8543013f4a2a306b0e28018011dca82ee0a86f81efb9e80b09446d6a819e5bf1ae11b9d3e0e25335783b0fdf113ae26416eb54238daec190d1010c79482b8d347243e7d63028b058f780875a44000a617727e10114e63c19b2fa7a836f14b82536f038b282e50d4bdc30841e48c16cdfabf52c0cfbf7b26c764b7b151c2bf183d1434b9e20607359e1b0b2959f27095047e2780408be08495a7430f94a378d2cf1814a9084070d650bd5be2a10c9c8094e211680c871daa8251f04b5aed951be007d3e1bcb22ec011ff9e6241eda0779906a8fb22b1a3ca1cdc256388630120692ad60eea84c9414129184e0e1d704791781e4e120e2c5c3fb10225f0db15d85cd3915b40bb19179fa33233ce9487de12fee581e143ff02ce0c1b34ae13dd5f9ff91516daac11357dcc9d0876eae9a06f8916e7064431ea606f05d901069d0a32c080f59e9e08147c24808033da5808ad34cf90883bdfcf06ca4352409d2cb59f11067e7c809d387a8b09711c69008595ecde0898799200623935500f0f8f1f90c459613608101d14e0810ca88608e0ab0953fcef5978099f1d7600c2ae1b0509e6e8c32066d39c210bdadcd2808b2d173b0656c563a0814f66a9082426311088551cb4060dd0c910befaff6e0ba3fdc8c08ef7965d0e681795a0a44dd4330845b3a370d956bfbb09ede16380a600721c1ae3d81821df25f733065dd013b0ab204da8080fa683d067bf56c20b7ed868d48ef088e31ff7b55c923f9730df3762615bd20ddab89c21090db2c12ab97ebd2e8fb7cc111d7ff5e21e318416b1a64b1a750a48fe7303818c19ee22a9096a419ec993bb2cf48dffe2ee13323838a0d8b872efd214df1b98b2cca1ff2608ce210f586924590501ff0713ba2ce16d22ce831625535971d475beeb06050d949211b01b5b270016fbe20b5ff1763f4095b0b0955849bd1155849bd1255849bd16a7cad8d20a8777e20b10cc83417c627399119dbbe531866119b0151ce6e0323632c9a20c46df253550f26c5d0b17f27d11652027aa30767142030de4667f33c425c48278f1680c1cbf218bd0bb232b7e137fa68f4157f3647f19bbbae3c2da3f0a5d14136345710c8a6a4137d61870845a94a4792eb752e1211988b3bf39073e89c342c1d41710827100c0fd91b23713ebc4fff1109ba07f10870e758149572690318e9257b260dc484111881b20b0f4050ea82246cc0881a42624da3cda5cf9c38af521f3073229a6816c6e77e82729dac021054ce8b5114fdec260f280954c2fa5e9ac61e64d5623088b6acc119d7e20a4180e7b1a91a7f5303913a18362709c35a8c81d44588d51816a1d7b1eaca37c713510e12d1b075e453160a69d01135abf5b2172ff29411849e9a6e15dfc024d28437800e20db329250b21003730ef4cd5f2152619c78168da4afb274503fe12dcdee4415d69a4f02220b65af4332f2701523605d9210fc356be81f7ccf7e8226c57e922bf7afe761e9918ef209e995cd520066c3c5156a57f7426ff344d11a4b86ea30dbcb27f0312d1ef791a81d294919cf0dc6a180c5552d08e2feace2b9c9a8d13a7934c340f3d6f25d0996ddb430b99126ea07002684a0746bd5a707dace6dd0907cca72124c0c5300e14623180961dd5a00a77d6fec0b62b05c609419a3860e50a570516c80cc840b475c7790cc3b67ec0783243fc07349fa1007f79e71a075d63131094466b7d1fe257ca50d591b4cb09cdc4c5209254845609ca02d1a09835af410980de97d09d1e07e00b5a8d3c3095224be009e76e0850707fcbbb092a2e85a09fbb19710d30a2bea0bb50091e0b0d05ac209bc970d2096900df70a051855c09713cde009ee0b4190b8f00b8a09b3b6c5207bb572ca1d9619fd057a704b512f3f45a48162eec226336675ac91e08b26f51306755fd1a2756ca11b3370d7028d86114127c3be9e22e10fd4d52a4cf265e2a4ab206924b65baef2d222965c30b52a6c531629d6e5139e038742afe750b019b4b584b21295410c1da747bd52e165747f4e0ee5984227016c401fc054b2217e9f88f0205c5e7c036736528d52c9dd34928d81a054172bcded6282e2f65614c28700f1be5f2dbb13f9a3bd21b979d26312a550352113f0e26121b6bc3d32dff34b3e318b743fb332df82b037c82783a4301b01e937eeba3a234c70fb98375a1a4592285ca7c749f2726d02f58d3c2b399f58db13cfc5c69734d142df933478829b34a6def6733ecdeeb433aee6ca733be47577331239acb3155eff3f2e5b51f053148c56b2310a62fbb34ce6f7ef318e239333d7a6cd383aec591d938701f06437009dd9a2fd7c4a3532ef7221731332495f3114d7d88316cedff33158c80fc2fed767b12c6aaa9822fe260a242f39a144a330ad19f2324d54d931da08836130b3c04a219b3641c538226a5063488c0669461fe8e3353773d48b1f5eefff837b776181256a78752296e2f75c25033a64d226c1fb5825cac4f0a24995c53d23f0c9bb926ed6d7392a66f784d099601df62a50e49d924ba91d110e517be241890453362358f16c41b13af37539a4d660119cc0955e145fe95ae17e8e1025143c5bb05130b7e78c178fab72717490593e210c7526b117ad263f13ce6fbdd1399e2ba728b576be031490c90249ddc7315331002ff233999854220fcd58ff1f0c23b5a31abd35621ad3fa4cc372713150244208eea1e6f6040725303727b25e1d9cf023543922652787565b2281cf7b20f824647d31b3bebaa26f4b9d6015f2f4b9e27897066724aab625a1174c27241ac103c4d0ed857d5815c28669f239dc6f070ce11d62418fa8e9162031d91b424e74a1312c348dfb442ba7cdd32a20fdb4f47dd4b0b81e3bb94221126aadc01c15e304b2d4a602dc1ecdb3e64201daabdc1595af1b2092d1c1d30dbdd3d4115a9aaac81e357eb5d1d034e38b1901cd4b32100915262158dc5a122fcf25a715cee1f8e0fdf40d08121ecb1a007ffb571e0587a95c60728ef57a1e386a7410810e24e90e39ecf2a18ee6dd412395172b3141a607982f5d1089f3ac4bcb4e19c8c625206d6af1020a3f211231427a24901edebfef90bc27b82312fb9986d2ced879c01e44ea8621558d752d2107e7d3f0e545f9070a03a3b8d24421bb180b2bd424b1d9a37f1625b24ba1b079231d71188b631711de8c7fa2213e54aa408ac9f062152e785d40d400bf2b1fb44c46e3280eabcf4302072ce1e8a1c7c712a90c48f1c3326b7934021adf3345ce947b15099c6f31025a56fd0901929f41d6d2384b262588bf934fbcdfea1e99eb9fb0c9b104fd381c49d9a276c093af14c7020610b134ab1212b8c10a90f3ba8bb8250a786ba078c85e101ea9f86df38e60449c3393838831799aaded26c3e7c0232bcb948d09c42ff61210d5d30511741f92c1c0943137376e6fed90c032aed517786ef29276044b2f113e7eb3335c7448bc123483ea244996205608512ebc438183a49e240f835ce29ed04076203be0eb33598e5d1215b53ad99126aa168b36c91bd1e08f13e8be1eafe68e8183754b03246e2168e2dc47de3e30e084d8b318ed2e311691c0c86318c7ebe20d3bdcc26144963a8d198c3e8b23442ad4b6558c286fd54b51a35d2e5e8719e0b1a2690908621ead31391a879e0fed3730b3f755816506ff8440c0760cb9ed07213ba9154cdde41a4143f2e1209088ba47213cd733a23d6b33e10ce79dc2117d389b3808400dc3e31288ff2718164fb9d49c6bda0e22ea5a155208dce80d15215ab98097838dbc2a4ddcf5222c6b275e159b02e3c33c807ccb22adc0c7c1f3d132bc2f6e97662351b388be0a3d828300c8e0b9860ef5f4b7a20ae9388410e3c27552b3ca47c31cd0f008c37e8d79b914b86a0a719b53a39417ce20660079415a3509672d6bd0cffe8e1e0d4af8b3e1a5bdc996161ccde0225e569a2b08359c87c20756e4300d793da940aea56cc614dddff431c95b82e619168f6b51bb9574bc17fb489950936f535218e29ec7e0dd1fca1a112e741cb1546a9db716daa32351252f585f187e386bd1ea9010af16e7d081f1cd9d561f1cad2f2ab1301901e32eabcd2183897df2aa0587f141a29a76faf020a5b68b82443ef1d522fd3b0e7259ca820e0f9c97d6a4518b57e80a417edc30cb7d8e4c0c1bf018c086dc86080dffe19343fb6148e5200ce9d7c112276c430a867ad454667c88084448c0c6e1f3ee16161f7f909ea0b12081841b7eaec731e3d4028712e7898ff0727861a20ff2d7bb00fc3160d50e1e8063e0f3deff17080a9242811bd0ce680d069a7e80dfc0b34519c6fdef812341d23b135496c990f0bfb68718642b85f12412246e1a8f2dc98108e636a80a7e9f9130efbf771b0f1ad03890ce497fdc0b046b0200daef7d821a41bae1f1161915fa1b3dfd094072c807531777e544e1bcd9b9e4190f2ff5721fdfb95205f849d3907d0d2464112d240000ef60629a0f3b5305513a40b0c9132fddf3410584dce816857217d0dba41e6c19918a07f12c8bd0dc103a6c0b40fe7a308518358b16616ee8749a0f985e77a0c229b40c1070244fe0a673e6ac09362f758170b87d5622416b0d80d2f09e9c23a63bd320f31a655b259838d840d1db35401298037831533c37d71bfc4c6d316fde52602f648fb6c1f9ea41811a2478b3c1c739f9ce0b017f84f1e1630a251ed123b952cf7a0f39241b4b2841f9a795351287f581c07e2ee3cf0676813931340f27cc1eaf9085417698caf511986ef041cf1aa7b10db3a77c22ca4925fa203838bd82d136493f30530ffd63157bb55209fe75a2a22c4e519527410dce01b7ab61bc0e470f1f324628c322166805a5b2e3fa057e4a28a7b7a1a52bb35c2afe39c0c12497aba8094170b440d518ab392eccb23690cb3ff4382c49820762c38efe851fb5c4d571b145ec0327e8aeac30cbfb08241bf1cc5c2136bdd42e2a765e77b14c0a2d360fb41086413fa7b2b92318da4851de57237a17552f709084176d7f1885f08d1448ea55f7185b286f81860425892a87eb1e123e8d6c271ced2e80521e953bc82ca4e3ec2145d4015c3ad47749e463717c2a0daaac00b18514bfa2233b9a9d40b6f7096b3fe2cc8434187876b73fadb2e7642143554f7fb442d8c0eeb4e31b235adb8381af66f98e1a28e32311078153c926502854526d0582952210af9cc0fb914763114dbd5a40e79f11ad0a3fc32af143cce373355292ec40f1e705af1253056f1335cf16a02e9b521160b9fe5c3a296f561690b79308140e76fd13f354fbe38a2645835c817d6f1bb50907b19a01d8177e84116eeb25e0f553562225487bfea22aa49d8f0f73367d110dad55860768157ba1241dfe7f0d01a0bff16a13860219b0420b6116ff0d820a954f84c13408e34529dde087b1c1823b6e0d171934f12c6fd572309e61bc825b6c4c2733630d8bb0f087e1b211f95e347222a0ee411b11cfa64307a1716d1e77c95ab0b2cb83f00b2b3a90b0d83b5e7a082c1482f2122f9a140e339dbb519476676e275cff5cc2964d305e270ad03214b57dcc061f887bd822060d839019f940a861c771b69822fd7c27c14fb4b06522d1f32a61fbbab2040c1c0b2d405b26a41b23a3029c607c1d715d11e1dcb9f1486fa4bf0986223870c07e8bda171924e6b1076c0b530ba86d96b15adb785c1fffbfd250d7bb9b982a527bc200fff28d6220af7cd7c186cc35910a6d9beec1155f3c2d124d89acd0395909fd162198d4d175fcb9a5149a1c8931d439222e0a755c0a3161c5d49c165defb8f137b912160f0de40ab35bca806332c6b9fdc0d5c9eebc0aff192d31b6a8b76032d71215635882d66825968f7552388586bb10de864a3347f86629246dad27425708453d10ac3d34925afaa1c90c7e71891394b7a497472b30f6b22e070cb32eec7dbfc30a67be6522774479b122464b57145c6964112f39054d0ca38ef2e200e3dd71268c4af711a01081d2397d16e6f25643a7930e46423031968ac74d2ee3a0cf473ca632f326a26d3192fa826aa22758970a532cc69a7929ad22d051254c020120581eb1c2ef7f8595258828d013105a99732ae10f1fe29805575d13025cc43276d6fc7239e504a2e34cb155bb29cd393ae29a61526a141a531a5162c60b7c13e59b39d14fba9f812ed0be4d71877ed1d715bf7d1920b24ff7271b721e86c14f6c0695193a3421e1f176a92115af84a0714b9bff9216f96e9201e7d926aa294e4471e4942d541242e85b0ab0da81e6ce26cd29d2b106b7f6f20af0b34f814318c8bf2234d4e6b23d43f7b92db92c68e0c94bb2bc12f59aadf40e9a9b961032651db27ca4eee81e2d38c7f264d483e308f07b0f3105ca43fa2206d3484278b1be622f6048af30b8828b8f168624c3919e8ba86a28b7b3917190a3a3971cdbb4c5a146162d1436a7dba95197648e40139ce113317fb7f1fa12b4d1f0a14255a3412e7b7323b3059e845014ea1382031d76d3a42eeefb57f30af4dbed18507581240e0318b722a1c64791eaa3687e413967e602dd641ee83055580f73103991eb3cf643e1d109e34479383eca1222a51d855926ded25d51465ae7d6178a636222c6fc316127102029e27b5671be12e76ca92418751c8d44769f28f0e65923582ca40e750323486cdb229a2eebc0e4835b0b2eced7ebb0fe161aaa23c30df200ecb70fa11366e36d91169177e83d3a1164f0decf53fb16570435f1a2f3cf57091d31b1a15a70330c318b24a6f2dcc27ecc1fdb700fb162dc02a52a44139ee28af87f013e4f7f3bf487c10d9f281ca5a4721d6b2c5f25e13a21348b8d28b33fe47145d43eeb24dc2cab0ecd535b0fb46623d09b5fd387f4774b3175fe22633521e99c15415ec621806e83fc08bad0cc0149b478c62555b2cd1423095081435275f4947998b8921c77e81be38c89794d1456126f1141077cdd0bf758698156f9b3c0253db510610ef319821b848a6661efbe17cb25acf6efc103f605491fd7f14cc05c79ae07115422eae33e95ad090f4f66f6d60a44babf1497f8fe612fbe37f921370124e0762e4f6a03b7116de296a8fce51be1ec3fd18281b4f009d6d6b8f1648331d910112b41031740010710948512a0340b58cf1c1c4f76934012688c1b63f2f73169b415f12600d4a451f2b7f3a70cf49253f15e81c4c3082c1114006d4ac735153e738c8131a50217127cbec1016bdbdb5f3777e77ad49886ba166950b714f395518ee02df371bbe513c736bb1888e0a270a30f6e2c1733fbff720aabed332392cea3f1e8a7ad972041b84bd26f42dd513d872afae1f84cab0a37061a48b1ee7657be38ea7343c3ff846b9e57de907992e07ecbe3247fc4025339e4f0b70973ac284160fdaeb1291cb0b7558139d3817157ecac516f73f49d3a93bddc937a32656e10189fca936272d28239b899f2f26cd1b5e4405f232d42b505eb54083674efa2967e08d445c5ff46b445aaaaef3c4dda84410c9f17c2195521c9e1cbfffbe8137ac230a0aa6ec71d239008bc323018b38b15031907823a2cc0d144066cd0731731463b064c8ce262632bffd404ecc48ec148df47992d3a6b49909d774e1f19d58873808b47a8172924157262213349ed09d8014cf1121e59eb0616d312e126fa712307cfafbf00a563d0101af7b4f4d12ca09e282242be6fd2f8298d681cfc7c3c31f2923ba10ec92b52d296c469c61e0e0b9fc0b8afd51f0740dbf0408735f3db0c1f78cdf0f65c88c40c74286cc265a2295e09a808a9a22ae01c0e055e549a00b19c25820e823599d20701bd681f33cd4a22c2f0073c2b8f75e19263b065fa2e88494702f1cfdd750a3f3476c0713e666a197acb28245868ea2a414e104c60b1c57b6028a16d772087317b7a16bdffa5f232d38ca8091e4ba350a40ad37f0791078c926301e561261cd29d2200f4643208ba881fa0ae3fed48130e7a89f08eb07ae308c1d7a3f0aeb0ca0d06c19d4d206cbf273d2492e621c0bee50b720818132281d1887e500a2dabac425db2fd68212e03fe129ba54a0a3621742ee094a16beb38388fc5630983659d33e6bcbc01229bf6921c04d1bb40b8e3f9fb1580cb6f81d20242cc1d28dc46d0dafe87dc2beec0e4d32b49041a387deeb2639a7d6f423923223433da174b092b799a3a1396d5991250ee655d615325a2c43df5f48ef2ce17334334ffe4f2936e2555ae31f3f485f299925d941362f772d39cf0fc2734e825cc31c42221cc25c01433817021680b1d22b3fb231727fb6e4c188a5680f04e8f353826521544ef395fe0205013681186076cf21f949139820d113dd910508b4fe3b8b4d8d7360404f91361fd3f803bec410532f092dc7a34d959c095226618d11ff2861632594c239d15a12d1690c8de4fca317a2bac314c9d83d9302c8109f367c4b83e3984b9cbb342487e1d3cfef7cb845e198c7d4a63a3da72195bf7f71216dd6cd2361cd4c326072904c2f148beb82d15bf0e12617868e705de84a2616d7c66934597129962e66ca5bc0bfcb324508a553bc321984f90f174c6d49a0980e410235f5513ea21af55aa70c9b3859b36522f7521ff6c9044195683cbf21276bfbd24d6433a91f4d2dab52f956682d09d4192500e7ccb32b1ec78eb9840de8438b1214217281a4d2a51f10946ce1c0afce39e61c70f2a420d1b1107f16365863115bba381a1f17316bb3c12c2df21b9a115c20c8e4bf7919a61543c227efd4db0d2cd5dcb0d70105001b44271eb0be5d2b6927b1822b21ffbadf0905540847311046078f2cad7626f0df2c961e17a76b3541d40b134b23508c4480fd72f17c0779d59502b16b414234ee898446fc54f12c273129dbc16e1b05e81f9b176290394e819d171e3152a269ceb27b27d64e38d0ac4a086413e2197571470f4a170ee1b40e6349c821cf2c640cd911451a3d10287c5d50c15522fd6f20deb530809e954f320a7781870290b4bfb22079bc1a62a1e4e32b4c920e48019481017965e41064621d84b4b094960bb3f0a445c8360b79ca96d26761d70e38c5dabeb35806d40c36b0b070d29778cafe3e9eba8a32fde2b87029cd05c75136c1690715604cf9e114907ec621863713f27833b3f121fea7ce71ac6a6fb78fc779fe810e9ce2a715dcf41b71873a9c9a061c0e5d80933a7d6009f2aa2c016de0a8d70826492ae0a60c2db34177c8c8e2d5a342302639c1b761cd314ea61d9a97acb0be91d8b70960c437e0e1618d7539b153f2f33e1a0e2624f30d3cf35e1e979c06d6d31bc27c2d52af0b3f3331b06e8f831033f291d6e3b8b2c298081bd2f222b67250970de6357c61310f6e3d1fb1339da1aa113c3c0f1a6ddda1cdc9bdaa0fca6adae071c853ca06d51977b06f9c223f20b6dfe181226c259f302297f492b10a5b512eacb9ff02f729aa0613da441141970939030a514a86b20f5128f82ccf389ab1a2103c4f243b3d89a14f3b80172b363b9b615785bc680db4a084620737d9321b938cba132134ca5332cf55d311e496b7e940b95d559489a25bcc3924d61b81d03e9b042b27842de12bf5259f1848fa7ef194484b1c3f8f1376247ac1e4ec2809426fb20b8da37019f04b4a81647dbf2f3ae8b38051a201aae121f180eb9145cdac7109d05d7c5455b2fc172d4ea37243e01d321d0fdda80e5116d7b2ab3eee089563e72352c53e9d4d1e3097be7cf263c87b2721c370242b2c80b27be34389d49d21aeba9d41c6690e0b2f8de2dd118de9881c1f883fa8f1b479683d111593a6f0943d1a992ba20f4fd0e6f579de12b63608e341c3e7230fca0fa3d0fb22aba92946af47e0dfa20fac0f802377a141d157ce1190a6acc13cbe846e18cdd577c18cb6a9793bb5cf9292fee40c62183d8cf58193f9da5209090b2b719b402f0713160757d1e103f90414a65ec7318f39741f17dd0a564479f112a50657f6d8d10f81cc091b147719309584456b1c3bcaf4e0a893033213a7297b816170d61704a076ba521060c327120f8de8813bd7828d0bcf3bc081a50b24e31ed928ded19f257acb07ac4d8610940dd70721d44e84c1f055de741c7a496e107a902c391aa05ce732279fdd831a37194620d9d95e6d13117c16e22b55149d0a51a87c141705c2f632464f1383a7c866b633f3d4bb819eee82ed12a62c8b623560bcac4c060b4374c484ede614889724513fdaccd01ac7005ef1da6275c31a28d29522edcf87bd1d3a74c7e270810c7e450b94973159e239ae3a84e36aa19d89efe60f91b6ea93ef2e70243aa4acaf3375e879f7374c6ac45327625c293457455791276163971b5a8d3971e501815c2381cba961e9f14af909bbc115445774d4d8430b8d4a81a231ec5f30b40217a428b17efe29c4c4e540aa896de01cbbdaa13269d0f4ff03d0b2f270d35568491dd75b56e2963f65a02766b0f4a2d1b26aa33834d391844037d5b912e4aff7b3017477bb1e1768f9b2243efef8286ee5ebf1ebbc99e41e40c132d18b11423209f69a77f058888993458b2286529f408d8b3c2b76f8727aeb068d279af7adf250804ab720975f77409d70d54340f50cff24ab01e9df1b9c31c0a0c7ae98d51c087f7853767babc0237dc75a9214511d2c317a33e03079fb54c92bc5d48252e1bcde670a08712fe2f7a43b7414e1e102a124a7919210c9102833ad33bc614b8db4a3442fc3027913f9e56091754abd7a154b465502c893a00b414d4a4900cd3ec92009ff79eaa12604a2a40f599f50b0d61ec32f2885dcd761456638a612bf85c0c08c251d6b0ab3ebeb0144de19611b6acc83f156d2f437098c254ef2f365240f5948c92bd09702907b2989cc4ba6767592a30aa9f7307125c1bd2d0aaca36b321b5e00d62d12d79d71947924d30d844c49c45bc846582232769010fa21de3a30dacd2a3285235b17235e1a23e28917d15b419ef7a7011fb3f4d324ede653b1b23464e1185727f451b151a50d13407c4d905f21f86d17f7ee1221451366dd23355c48b1fc614f2620b2207e013cdddc531f6fc796c16a835a92103214cba0320be57b2343ffa810dab3a557143882c9623f023e9b1b883bf530d3089d2e0bb7f6d6417020655b168ad14b70d07e728b0ebe465662e576ffe80dcbbff77223e792e61d8ce01bf20d7ea81c261c033ef24648073c275e459ee0d95e2a7930844888e058d479271301ce6f7077f146b71e73761b81f0bbc5f60a233df9822660e27c2248247250654a6fc007fb7015806ce64db3077f2dffa23239dab71c7155c6209ecd3e8f26b33b55027a5d85f8095585d280c3b0e29923dc6aa262d650fe391bca594e43bf40e05914c2814f015f2818b023c42fd173c43e6e82430ccb2ce19d2285521992ec23f1a4f6a15b10d73608b0f37e3c651296c3bb110e01e00313ab63f8713b302b90299c084641db354af14d414e69043afc0e9b3258b583d260266b601a8ebea5f1be52bf3f0a7a3ff9135fe1485c19d219b9509928ed4a22507c46e16443333b35f33747b1adc44a022a2744b183435336a91bec3b16f24d80a7272330a2bf51b6be0cf64521c676f1c64a290446b1149584dc348abf1799f5d5222f4d9bf719406e2802a60e95a43c6464caa17eca99ee2654b001d1afb1e40f0608ef77d27e77b86f18ac917fd588d4dc83348005a8c3d17e6e5720cdd8bda1f4086d8a221d521e51717da7a621c5541fb121fc8ed4138e989bb2073d428221505a76a21ff107c508bf317951c7101e8b32e39d1872b434730d1a5c8b2c81e402133c2440b7579190c41bfa0517dc46024a71a89b0a6a949a317bd042b9084bae62f0dd028bf1179c41c46100c85f950c115641e25c1552e82a58a54521d8aa5776208af48cd216f10e5b2266b8a9921fe84d290ed39a14633bf330601aa1b59f6160ed4933178a983f12c7970ff73dcb8f03941c4cb9f12cfb75a3a260bd7f5d1a4aed5250eb0d4ad115f6b42c61681c43c81dfaec1d61718360a217f27c8f33d39a1a7d2d854d86f0ef3e7bb81ca96580a206eb410e259b180882a29ccffe0c672eb5f20564d7e321d0c77b61f8b0a8e326d51ef74213b8196c243449d4f244a719c92eedd889c2715284ac12f83c57b2c724d4840fcc96ec21974d9bc7101d8714410f3293d11b45ef0343689eea3228fb4c091136bc4faa1526645082289b400e25691f4851ed00f54f15ea6c7a8093a6d1171e1628033874f7c35e687b3522f153b95a040e772f3c7153ece0ce10fc8514d0834a630b227027afe185800ec411b46648f14c2b3f482838bbe2a14901ce1a15ff3e48a175df610519b38d23710ac1b41f273e2490412deb16601f585debf1d3c7da0018ab2bbb00a8d2e04d22418f9970594da455174d29d9f0b569d129037d113b308dbc45d925521c19c3d068881226484a6ad4f565a6f114cf7fcd72f80cdd83187991a4e0cc262b831c153663c50d5c871850881e1cc2f36bce17159d93e3024fbe9a4c2042ed84024d749a1713219cec21025755c44073353eb3a650eabd25185902e0e501188836b238092221095bea22ce4e8df15bc5d53311dfeae6f2a80343124aa14585c237b6150614a19e6b6213bcf763420d89af117f5be8e019919c061267b6a74855391efa11a9cdba0b0b1eb672b5b116cdd2136337f7709c89327107821f6e10e1d59dca2cb3c02984a5a87ebb10f22d069303c899cf4fd044a163385c76e22b0ca3ba128b4a298315d541f031161a9e3627011d1bb22adfcfdd28090ba7c2572589111e6ee53a4154b5d8d915d3812fc26f119cf431b945fb80bfc9f3d924bbe5be6159d08a92327800e0d3d2ecfa133892e16253a6d3f85e3a286acf93a49911003a05c7ff93a1cee18938d38e09b38b7cac3414dfd11770aabff28014ce66cc30b5b0aedf0613cd8991bbc1721823bf519c6232e1dd281c104500f2f1fb5e984d72cf28b287ac291a0c9cb4af027ab712cd1ae4a13eb18954c41d12cfce03914e8d05cd2726bd6e9075398d051e98a5ae531f2650585c189ec010d82984df14fad4ef20b2b586a110989539510365de5a171c3aaf71027ce97c0e62b59fe2cb4771251e65a30d82704b714d15115c0e72eba6ead7244004aa51553c2ebc25e5a1ea241c1d123616b2cc889202ff96cf2a83ef9320c628ac8f11b488b012a2c82f15140fb31fc35d94213c2bd4bf84c112c22d0312d225573166f2b5ed10e0aa4161140087e3335a7f8673239da7b106ce4b8443fd1e1e8f2b6968d851fa13855e213c372371e8cd20f73256c79e31749971b9287af820f20dbf9a331b01066be1042319bf0e2e423f328cea573b1624dd1ae137779eab1e15eea7029b0648841372fcdc30f4b1a96e29c053b5a28108bffd2ebc7e07635515e79437b1e8cfb196061d2c3f1332cae09c0291761a304c8560fbe412f2063c1dd8a0c5842a564508d7df80aac286af313e2f38a0b76021fa1776413150a39b6b9810dcda6c62eb10e1911623ac3032b1fefefa17b1b950e0d2aeb046320e1b9d61ecd76b160db2f4f5433656e4f20efcd35a2232dbd3b21c58ee4f6386f3181c1f3a9452134d087acd1bc47866011e332f1026a29285c27c28743107d3012de0798270d811feed869381b7681609e9f8eed1e11ae14d361204ddf3c7f666a513984c7be0d8f99eba208b929f70a735826622db621bb26c7e261f387ccb1b01fff6ece322a0c1a371b6dd11e319e1c5c1b14ac67c1b1776b2bd02f0bb358b1c5031c280876bcab13a592c63d30fb4a0c5350966096380d7d8fb429fbc2a2432668911329fb9c460cf770276329b657200eb64e7f40dac3ac530d06448142154bf3c03d784123118f92657c425000e9a157440a3511b4658c333334535d4568491300a70b13ea468771bc720747542207b766fef23833ae6324d4d677526ea97c080f290feaf0f694dfb80a48e9aa123d01f9e22de6d201615498f2681e51aa7fa3b1089d672e179f4eb330ed9c190750c41b123588a8540a254240920807f0a8221cef3c41114a1a2b13aea6712247472ef216876399523d3d8c361dafe9e9911e059b511405e2a022cff12d110d8fde7040f337e0130e05e74960eefc2953136114c0217face5b70e13b14a60cf81cf6c115cc93012df116e30215c722cc225032b4516c5fd101132568e0c1ab4214bf1aa6cfd3c19194cb9f1daa6f4102f7801a6a1a596e7f831b3e83b91e866fbb9313e9c0e916669a1d41780834e936b5e647732d44c5ae3227d4e9a34109a75a426923e032caa957272d9aef54013355cc5b14276c322324bb14a120bb1fc9f12309551818ee601d55352a8b2e200b9caac30572a13f0ee5be78930edb4b590ac0cfe980d9e2282a0e8a364ab15d642f9a33143292133b8002fe345dbadfe4f38f9ca234822a1351f33814f1550c82ab3097f8018a4489d67e9379aa95482376ed15a32bda3b64516872b58294f2fdfa348697f303e2d4cee76987d014a29b91a1a53e9ae3b77173eed6871be70cab23f8196ea81cac1116b224c24f9c48da9733f4e7288dde4773a8b685110a38d04a1cf5bfc528af17194bce0a8c02eca0f688238e771672a464575b1bf9be64e10c5548a76711b4002118a0cd69122f2dde30e764efd01db3963d231a38fc74321f569074926c36a326bec2d232843c0068218eee9b80ea383e152d6264d9321a62fa51225e774ba394e366a811214bdb70d0debe8630bd4c2741af46657c10a2f45b10cee225040fff88ead15f9e9b7844020cb0b3c928479a15e7cea4b2db58fa4c0f5b4a0923d0b8924e0b8c4ee881f319725422c3f12942365c4afa1f14936473075e0bf226d6d40b03322f7e247641b02c30f3ae2df60b2f4e3c11f21ea1622b18a1f8126c9be8e01cc06b8322ae700c883408a33c4305b49a3033b3dfe0942ee14c5f3323c152e3366b445e32d5f6aa133f5f1a9b3952072702096c3da92e14ac38a215a7633e33b6a230b20839f91932a4a3ad11f6281abf297c5316e2ad3c65872a9159a9c0f5bfcc431ce26fda6076d3c65707d25950a2487d216b188881b622b514f3d31b24f8145192faf7783317b1ef950c5cf5992c3588829096cd849b1dcd706062017479f5210ac350729361a25219f54d3d0233d701fe22b95f1032e62edacc20ee050340cfb5e3da2635063d32d570b9890b80dea970dddefe1107886c27b1d4362f670e8a777be4ba71ad41240bdd02307e1942764466420534ef4285df31cb1dbaf1a95b593a0fd1e5cb210e5b6ae21f955606b1f02346311548578bb110019a3417d2f5a5f41c6d92c4352e8e8af323c506bd48438e73f1be9689bb489d99c96321d6b4ea0e1e75fe320849ad4846ce9c74b0a12fb7391f3a8eb6a0a9fb562648863d7370b644ef424e4cd6d464d6436a504d604858249a18e917121c0fc011df77ef461852554ed105813c640feff87ea13dd8ab4e1119eb2c521fc96c483a56cbc5e1c267c6fe1a12e78fc24ef7963f403ee3f1d22364821e1dd78e411449f445143e8d1f714402d1ab41198987f891d9744e981f6d118f71043c6b0d1d5ee0d5b19db664fc48bcee07e57e63680d793bebab54c92b0b553186cdf0f150ed8ee6388cc81f31d0e256ee4c62194511e3e35523207472eee4f84844fc401bd24a1381aefd4c3c001a81b26c42dc204426adbfc1f502e4741471c9a8920ce9dd049973ec3cc3259e286c218f0fe5445776c8ca4ca7e5f964710c682b48d5317a60db41955d0e8c1033b4556ce2742391b9b83288e0a05012205e8fe0be1b7227161053350143b6bbe30b650efd822ef7cbfa21280b2c50fbea629e2f52294583765a4dc331a0b1457329f0e9a42afb4c6a73bac8676c27d576402397eaaf1346b5e4b740d0e958fe0fda2b0094ba0f832a32a1191c04c93ae96c167d6d84b06b3f6ab81d527428824eb60214205ca1cb221cea6d733a14c26a233567e9da101402f4b1104d6dc136c148b7c18ac9efa9354fc144e40eddf9cc18ccba9e436eea8eca181c2111d46fa17df532c81245d1e768b35e34974d506165e9ae7e1c2f58c063234d4662221aeed2211b27a60c296f6aae359c1bfe551236f873306728ac4f5c7a17ad52a7567ff813f6653ea1ce7794151ce7bf9be41f40193b0dcc573170dff1725b0d72ce77a0d8c3ef9b073ea16a40624e546d073dfe57a08f4d47db1c157bb47649dde05523c6b9ba2238f42d3b1c9b8724a2ec69c2d42ecd50a2b210990f1917bcef8a63ed8ac6bb25983120e181dfbcd9177a4d7f226bc69f5038f6b27b4382781d46222983ffb2df15d1df270133a812875799ad364e0e3d50f795954e138b7453a368ea038664c65764332208b9e52adbb20882ec4152c4746a379370b7e2c5539a34fa6590e92e34fc283a4459e0f43e71e31c8b73e3912a05a7f74612cccec3fc2b079a18f9bfe2b118d8c2b335e99792b4761a777716b786d802b71b59d9314ced8fb33b74c4602bdd75cf81e784415627d6632be1e4376cca24bf088c1397b31ea52342faf5f1b59e256e1ff16aaf30baf716564110a3b5511b77195020ca6aa4122cc07cb723468c7912da6c6f321cd2a946e1df995a0b08b41b61e164793c5342430e11d45441e7f242687237541bbade283b9fc472c2fa37ef151de904ea74478c494e1822ef6e20acf4d7fd2f6ce9d500ebb98d250bb6593392ac72a1292e68342322e13e691b399a097cb398a0a5ae587a08f66125ad0fd310de78c4015e0693260ae0721ac1a7ca66483bb094b5c215d809f633f34283f1a0a776df0d8385d8d1d6b243421d5630fa748b125b971ce0fb1af0b4a057c80b3e8b4fd0b1cbce78083f26e0220da2d80911d5741881d7e55e2d1355ad07c1713258302712dcf922670301982f930f4e33003574ce35ecf01b0414bafc0b0c604590f0f5b366ba3976d7cb32090a0cf00707568da21d54e9d40bfb31262394fd68471fdb75fd620dcd2ad321db58e0b12529d26a103a5cac0161559c221e9648d512155d55de15174b9a616d9d4a4013904dab114223904e47ed8f8d80a1b2aa6a259a43911296a506f32bc8e1634232ff0afa466d4e43006eac3c8a2e0147ace18abc9e0919c6f69bf333c723fc1bde057ca2e48d07361c635ab5c1ea40be673a4080cff3e8f4319628ae821d606787ddd42d562743d22bbdeaf826fb179e60a0bb9bbe13ddd101d39cbbf9eb1660a2f6118454d58e50cc4d3484459021a347b0ae32e1e84dbb763399e98fa14c976e486838cf3392762dbe9b21e2d9fc61d4753d9914d17335930c217ddd2c2f7c3ba13017c6e8295a6ed822e9ecb30c125e1a40622c9f39992bcbec7e53be8adaab22b3e8ece088f043252945a3ed233182742a4624fafe217f48fbf521e88ed300f666d8ff1891bc5c840f4ccd454c9348b152ee1bdc081e636e9a31f021ee980f549c2a41071acde61bfdd0ce31609c02b41a8f5b9f611efd71de2d083ca6627ac49a6605b09c6b90acfbc5d50e18e3e0b23a7998f01b2d9d2f21b9faa5b63c5ee8e952718ab2e81faf4fdd91f39eda854061ecc4d11c66da551de510f011e04d164b21d485cd63f34ac2c513bac9417146219e051bae70db937327b2851bdced8534654305462158db243363cc7bb61f1cb909f34fde854025f6a61fb42391216b201ca68442fb2c13b446a77e88619eceb967603efef6f46e50815c2b042bf7b317b216171e701836d13d36e0d41804f3c6b260a53fa33033eb4c33fd38b6fb47305987131c791b01653b9842128922c1f0377302cc444bd1c90929dacb5061a8bb488a130be5ef228e78ba3818a2fac841229d3ac5134cab55d1c785dd4d0d9f4109a1d050e6141ef67f4f13acbfa7ae56829da3c11fe0ee3e07640bbe81791850bc3485a861a14a12a48716eed4b432124953e445a9c4dd01e004b6171cc184d753e02c76e719fa9000b18e44f270365b4d79a153e653831d72e920c1a7bcf8db3cf1a760624e56df9b18b62aee824cf4d607083ec88ec26f32097a54de7da121138980ea0acce8f160921697bf0db7424911f725d4f20e71c9160198b212700e8b59a3c0d9ac06ca1079d2c1027814bea63f9a4a76b118e260571840f916a276fc0ea51ea8cf8aa1beb8d547105635fef43a2bd7230bbf47f6840ce2742c0be5e0fec13cb8b1592889a64310c9b5eb3734bb9728842ed3a5ff22221121e2be9f833015b455e2e23e7b7884324cec5f214013a826666903b742e462e12a14b6806821bde476d215ed1aebc28c067e562d25edf9338a2f2ee6478cd09ac135a4d2f62f7ddf3ef1b91d9bc32ae2b3d56417f1c6a40c09f192842f5df3bd0dfa6fa41148ad089f35144982c14e5931f03511716d1145446b8c060f128e139342a4ab2a0feb60a0910ffb4a24060d9a83087ade57230f4fe7e2d7e0b62f0ab4c563418092c60118a7f92ae120f9bfa311fcf33bc256538c42275b916960602e26580e85f626d46b0fec1c14c9e5d05106aa8f8b1f62b5d2b2b08885101d04fc861307f163071de1d5a8e15d0a88cf18142b3c52197906e32cb2d6a81484ae86313cf5fcfa63f5ccfc500e6ee100711257dd870e7cf40bd245829a4517c2f0eb5084891b31257ca46c055c10da7615d839b1f1fa9dd5be19cbdb9470aa66727313a23f6b11297715aa20c6f86ac0cebcb31c09dbb7c8824982cee80c0cc04f40ebce582b04f5ed4c2064b716c646d6e08430dfcac92a3ac918cb407a1e52670d6bb06cc172b513ed0db747e9314319347a25f839c5c0a829eaba28d189a3c0cd8b034627fb0c7d80bfc4cb180779a22870be6d51720e3e080cb2329d77c420ff036cf25de99120258ce6d50184ee391412496c5bb166efed390fc68ea7f2848112a32033dd611189f9e673205daf0a732e3e542f1b74aec512c626181f4a8ed305916bdba3b10e5c40e183d7a62ffc2d6b1388945f77ab8c360ffbfbe219f7362f17550b714117363d6d286ad3bb91087ac86d0e4a5df1a1acd3e545275bca465364e1b0ea0d98b23fb15b7c6dbe16714b51232c2b72b0230d9ee341bce06f2e1b21cb9ab235e6f9e333b4ab1443a413fe5b5963f683d39ec1c44520f02ae2b1a54f701a11434a8130e56f2db12339527670fdc16b5e2b969de400c8019c7f1b7f4b9621de06df9d18a4cec1d1bef2dd8e1d380c57f15cb6388c367439e223a770b30b48528531228f414cbb6248994f7101236b380f1c3b7665bfb63fac6f3e33eb8185c149ad1fcecc11e28f2b564b2fbb4264135db2b94d31d0d99111888c9410127f43d4e3f1dede172a5c6ae2a22d3a44c60df33be680e4d7497c2cac3290915bdeaa3521be2cc924d7ed85c964f746762082ff7ea61bf10763f2eab51cc729302cee338fdc7e93165d794e7554c66bb42d026b5391ff24e68a212c88faf062275acd594e26e242a44af07f6b84cf74543ced21f40d04647ac07b52f2bf09a25328622dae41d31b4c6adfa0e32b742d2bc39376042e8cc46942fbda98030c6489e02c3e251b41e6bf786c1fce5a35e2bc7d65024659a16ae0ee9c115717f14ed0f0b81525a11d7277ca42312bca0d2ae05cdc40cb95bb404f73748d524ba7b34a090f52bfc21d0024511dca5606909d9f39052ef4f31da2d508e100246f9dd3f2ed7b10f60f945791411c50d2fb11d22a77f114f6fb391117cea031171b3f210fcb63eaf1402415ee46c4646f40d186a5791fde90b522fd5480ff09ea5d2b115880d0ab244bb11f71741284e008e6b7ea80a0184b9111989b8ef1907947ee2aed7595c1b5ad2fa718e1afae1252eb82c11888fb95815af79258130d21bd4287ef70f01b653c73757088e65b31d1ab7e92c689024730d54f0e816ba3ea9420e3ec8e948ed4d5f34e5b84b7a12c306ad414cb09418106d3558c16566ce8b1b2b9ec32444f691f40ee45b27d24efe42db1932eb4272b57ac324192e8590312b09c2d32602ea1a91818fc2f4141275554120f2962f34963fba5117cdd924164db6b7719d34a2361aa3d9fa341160e32d1fb10630042a05fff2119a92bbf121f4b731276e775d0573d81c4c0848bce0b10b44a1a92b8cc047245cea4d3c4b45dd66f2ead71ac044fdd59d37f59f3ba588d715f20709ced6797ffcaee8514572099a07fafe4850e15cc8b7102db97e4124c6ddf33cac48fdb2d0b7c9643d24916554ece0f45143036a212199fe2cfd2ac0ddeed2b8a4138d24af9276c2eda44054278004216166319c9028b85eca1338c62f9b0adba506c4a01316441c5423ccb0fe8640c413aaf130f0fefe07c30f72b47db4128ebbc5108069800337fc622f2b11676903da8f25ae2756787c119a76b14935826048c1758d7ae8360dca9c9386b487d81343a1c6241d2f94e4265a8386118d2e0355194e820041a786d5650b881dc9b2784566291a47fbcc115dc2454f3dd4a78a71273ddbec2c05bf34d0f5e6f0f52927c855422af45b921ac0e2792386fd9c350b44e025d30458b925426a75063312a74c312dc433959321127f3830ee6830046c1f5c381e898c9e4146b267071882fe96d34f55597a0e746484022dfb47034073a04f12941c55802f4f22d2f10f2b4cb013b5f49671159ef2083e2df5b9f42111d99e1986e6c4a0d16a6bf43002edb3c30503d2f42c499577f68755e65d364c02a9c0a22a49531a83a0ced438b6a2520e44ab1b65143f06c34a41d1f001a6e638ce1aae0ac76123f70c2d1714fc02f484c4a8ad1099d03d32f2b441c02a4876aaa4680ebf3a261f513e231604ef6d264eb7f3e0d01c766b0e5bf4a3514e5d0ba0219bdcff91e442879217393c68a4963a09972ef9a8f2225eeedf7a1fd26250a24d3c3f531304205160b59115cf1572090914b7129d7147bc931fa0f83187e90b6f26a2833749310634fc8458f6029b77351977f02dc378c5c1a42f1e87c5c54f98a9813d5b4488d10bbe94eb09e2de28b4302a06642c76f27e7107f85f252174472b2325bbf40e4bd3162c13e319d6353e9ccecb93e97033793e56b87fd176c653173c7f067ee3561462791d087b7df1d7f9dd4223fde5c002dc65dfa822e252efe0c717320111ca5451c3a8fc123b0813e36dc1e6cc51b70eaecf3d61a46362b05356a664c21e66543d1703d2bfd34a5ea8454528bfe703a80ee9b232763b5d218f48c66f1db97622824041cc181e6377e2622b405a6816a93035613191084726c47eba521b398dc30c461467f0f6bf7dc523c8ba1620e85a60dc10f3053a0233d838091aaa4cc8d0d1f162c10836339591664485af2a8fa943635dda8b803ab85b30e245b825123b284f176222b3d7b4296ee472c300ae9cc02de9653900ecac199611979554610268d61d1068ee0af0e8b53628135ebd581424ef14e729842a035448e4809c1ae405c301d89d0cef185febee51b8223bb336bfe35942772158262119d8d42481fda0d50b61c3f280a2537e9b14faf548322dbe1fa933ba82f1a0758463c52eadcea0d4a69f87d32929ecdeb215f6ba8544534e50228e3ea27664fa7b7770b1ef66df09b86fc9e47cc5b06244c22d70a204d1992c1c95c0ef94152f91b824";

    for (var i = 0; i < LAWNUM_TABLE_RAW.length; i += 9) {
      var key = parseInt(LAWNUM_TABLE_RAW.slice(i, i + 7), 16);
      var length = parseInt(LAWNUM_TABLE_RAW.slice(i + 7, i + 9), 16);
      LAWNUM_TABLE[key] = length;
    }
  }, {}], 3: [function (require, module, exports) {
    (function (process) {
      "use strict";

      var parser = require("./parser");
      var analyzer = require("./analyzer");
      var util = require("./util");
      var fs = require('fs');

      function lex(text) {

        var lines = text.split(/\r?\n/);
        var lines_count = lines.length;
        var replaced_lines = [];
        var indent_depth = 0;
        var indent_memo = {};
        var re_indent = /^(?:  |　|\t)(?!- |-$|[ 　\t]*(?:第[一二三四五六七八九十百千]+[編章節款目章]|[附付]\s+則|別表))/;
        var re_force_dedent_parentheses = /^(?:  |　|\t)[(（][^)）]*[)）][ 　\t]*$/;
        var re_indent_in_toc = /^(?:  |　|\t)/;
        var in_toc = false;

        for (var i = 0; i < lines.length; i++) {
          var line = lines[i];

          if (line.match(/^\s*$/)) {
            in_toc = false;
            replaced_lines.push(line);
            continue;
          }

          if (line.match(/^\S*目次$/)) {
            in_toc = true;
          }

          var force_dedent = false;
          if (line.match(re_force_dedent_parentheses)) {
            force_dedent = true;
          }

          var indents = [];
          var pos = 0;

          if (!force_dedent) {
            while (true) {
              var match = line.slice(pos).match(in_toc ? re_indent_in_toc : re_indent);
              if (!match) break;
              var indent = match[0];
              pos += indent.length;
              indents.push(indent);
            }
          }

          var replaced_line = "";
          if (indent_depth <= indents.length) {
            for (var j = indent_depth; j < indents.length; j++) {
              var _indent = indents[j];
              replaced_line += "<INDENT str=\"" + _indent + "\">";
            }
          } else {
            for (var _j = 0; _j < indent_depth - indents.length; _j++) {
              replaced_line += "<DEDENT>";
            }
          }
          replaced_line += line.slice(pos);

          replaced_lines.push(replaced_line);

          indent_depth = indents.length;
          indent_memo[i + 1] = indent_depth;
        }
        if (0 < indent_depth) {
          var _replaced_line = "";
          for (var _j2 = 0; _j2 < indent_depth; _j2++) {
            _replaced_line += "<DEDENT>";
          }
          replaced_lines.push(_replaced_line);
        }

        var replaced_text = replaced_lines.join("\n");

        return [replaced_text, indent_memo, lines_count];
      }

      function parse(text, options) {

        console.error("\\\\\\\\\\ parse start \\\\\\\\\\");
        var t0 = new Date().getTime();

        var _lex = lex(text),
            _lex2 = _slicedToArray(_lex, 3),
            lexed = _lex2[0],
            indent_memo = _lex2[1],
            lines_count = _lex2[2];
        // console.error(lexed);


        try {
          options = Object.assign({ indent_memo: indent_memo, startRule: "start" }, options);
          var parsed = parser.parse(lexed, options);

          var t1 = new Date().getTime();
          console.error("/////  parse end  /////");
          console.error("( " + Math.round((t1 - t0) / lines_count * 1000) + " \u03BCs/line  =  " + (t1 - t0) + " ms / " + lines_count + " lines )");
        } catch (e) {
          console.error("##### parse error #####");
          if (e.location) {
            console.error(e.name + " at line " + e.location.start.line + " column " + e.location.start.column + ": " + e.message);
            // console.error(`${JSON.stringify(e, null, 4)}`);
          }
          throw e;
        }
        return parsed;
      }

      function analyze(law) {

        console.error("\\\\\\\\\\ analyze start \\\\\\\\\\");
        var t0 = new Date().getTime();
        var analysis = analyzer.analyze(law);
        var t1 = new Date().getTime();
        console.error("/////  analyze end  /////");
        console.error("(" + (t1 - t0) + " ms total)");
        return analysis;
      }

      function main(argv) {

        if (argv.length >= 3) {
          fs.readFile(argv[2], 'utf-8', function (err, input) {
            if (err) {
              throw err;
            }
            var parsed = parse(input);
            analyze(parsed);
            console.log(JSON.stringify(parsed.json()));
          });
        } else {
          var input = '';
          process.stdin.resume();
          process.stdin.setEncoding('utf-8');
          process.stdin.on('data', function (chunk) {
            input += chunk;
          });
          process.stdin.on('end', function () {
            var parsed = parse(input);
            analyze(parsed);
            console.log(JSON.stringify(parsed.json()));
          });
        }
      }

      if (typeof require !== 'undefined' && require.main === module) {
        main(process.argv);
      }

      if (typeof window !== 'undefined') {
        window.Lawtext = window.Lawtext || {};
        window.Lawtext.parse = parse;
        window.Lawtext.get_law_name_length = analyze.get_law_name_length;
        window.Lawtext.analyze = analyze;
        window.Lawtext.EL = util.EL;
      }

      if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
        exports.parse = parse;
        exports.get_law_name_length = analyze.get_law_name_length;
        exports.analyze = analyze;
        exports.EL = util.EL;
      }
    }).call(this, require('_process'));
  }, { "./analyzer": 1, "./parser": 4, "./util": 5, "_process": 12, "fs": 6 }], 4: [function (require, module, exports) {
    /*
     * Generated by PEG.js 0.10.0.
     *
     * http://pegjs.org/
     */

    "use strict";

    function peg$subclass(child, parent) {
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
    }

    function peg$SyntaxError(message, expected, found, location) {
      this.message = message;
      this.expected = expected;
      this.found = found;
      this.location = location;
      this.name = "SyntaxError";

      if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(this, peg$SyntaxError);
      }
    }

    peg$subclass(peg$SyntaxError, Error);

    peg$SyntaxError.buildMessage = function (expected, found) {
      var DESCRIBE_EXPECTATION_FNS = {
        literal: function literal(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function _class(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function any(expectation) {
          return "any character";
        },

        end: function end(expectation) {
          return "end of input";
        },

        other: function other(expectation) {
          return expectation.description;
        }
      };

      function hex(ch) {
        return ch.charCodeAt(0).toString(16).toUpperCase();
      }

      function literalEscape(s) {
        return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
          return '\\x0' + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
          return '\\x' + hex(ch);
        });
      }

      function classEscape(s) {
        return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
          return '\\x0' + hex(ch);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
          return '\\x' + hex(ch);
        });
      }

      function describeExpectation(expectation) {
        return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
      }

      function describeExpected(expected) {
        var descriptions = new Array(expected.length),
            i,
            j;

        for (i = 0; i < expected.length; i++) {
          descriptions[i] = describeExpectation(expected[i]);
        }

        descriptions.sort();

        if (descriptions.length > 0) {
          for (i = 1, j = 1; i < descriptions.length; i++) {
            if (descriptions[i - 1] !== descriptions[i]) {
              descriptions[j] = descriptions[i];
              j++;
            }
          }
          descriptions.length = j;
        }

        switch (descriptions.length) {
          case 1:
            return descriptions[0];

          case 2:
            return descriptions[0] + " or " + descriptions[1];

          default:
            return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
        }
      }

      function describeFound(found) {
        return found ? "\"" + literalEscape(found) + "\"" : "end of input";
      }

      return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
    };

    function peg$parse(input, options) {
      options = options !== void 0 ? options : {};

      var peg$FAILED = {},
          peg$startRuleFunctions = { start: peg$parsestart, INLINE: peg$parseINLINE },
          peg$startRuleFunction = peg$parsestart,
          peg$c0 = peg$anyExpectation(),
          peg$c1 = function peg$c1(law) {
        return law;
      },
          peg$c2 = function peg$c2(law_title, target) {
        return target;
      },
          peg$c3 = function peg$c3(law_title, enact_statements, toc, main_provision, appdx_items) {
        var law = new EL("Law", { Lang: "ja" });
        var law_body = new EL("LawBody");

        if (law_title !== null) {
          if (law_title.law_num) {
            law.append(new EL("LawNum", {}, [law_title.law_num]));

            var m = law_title.law_num.match(/(明治|大正|昭和|平成)([一二三四五六七八九十]+)年(\S+?)第([一二三四五六七八九十百千]+)号/);
            if (m) {
              var _m$slice = m.slice(1),
                  _m$slice2 = _slicedToArray(_m$slice, 4),
                  era = _m$slice2[0],
                  year = _m$slice2[1],
                  law_type = _m$slice2[2],
                  num = _m$slice2[3];

              var era_val = eras[era];
              if (era_val) law.attr.Era = era_val;

              var year_val = parse_kanji_num(year);
              if (year_val !== null) law.attr.Year = year_val;

              var law_type_val = get_lawtype(law_type);
              if (law_type_val !== null) law.attr.LawType = law_type_val;

              var num_val = parse_kanji_num(num);
              if (num_val !== null) law.attr.Num = num_val;
            }
          }

          if (law_title.law_title) {
            law_body.append(new EL("LawTitle", {}, [law_title.law_title]));
          }
        }

        law.append(law_body);

        law_body.extend(enact_statements || []);
        law_body.append(toc);
        law_body.append(main_provision);
        law_body.extend(appdx_items);

        return law;
      },
          peg$c4 = peg$otherExpectation("law_title"),
          peg$c5 = function peg$c5(law_title, law_num) {
        return {
          law_title: law_title,
          law_num: law_num.content
        };
      },
          peg$c6 = function peg$c6(law_title) {
        return {
          law_title: law_title
        };
      },
          peg$c7 = peg$otherExpectation("enact_statement"),
          peg$c8 = function peg$c8(target) {
        return new EL("EnactStatement", {}, target);
      },
          peg$c9 = peg$otherExpectation("toc_label"),
          peg$c10 = /^[^\r\n\u76EE]/,
          peg$c11 = peg$classExpectation(["\r", "\n", "\u76EE"], true, false),
          peg$c12 = "\u76EE\u6B21",
          peg$c13 = peg$literalExpectation("\u76EE\u6B21", false),
          peg$c14 = peg$otherExpectation("toc"),
          peg$c15 = function peg$c15(toc_label, first, target) {
        return target;
      },
          peg$c16 = function peg$c16(toc_label, first, rest) {
        var children = [first].concat(rest);

        var toc = new EL("TOC", {}, []);
        toc.append(new EL("TOCLabel", {}, [toc_label]));
        toc.extend(children);

        return toc;
      },
          peg$c17 = peg$otherExpectation("toc_item"),
          peg$c18 = function peg$c18(title, article_range, first, target) {
        return target;
      },
          peg$c19 = function peg$c19(title, article_range, first, rest) {
        return [first].concat(rest);
      },
          peg$c20 = function peg$c20(title, article_range, children) {
        var type_char = title.match(/[編章節款目章則]/)[0];
        var toc_item = new EL("TOC" + article_group_type[type_char]);

        if (title.match(/[編章節款目章]/)) {
          toc_item.attr.Delete = 'false';
          var num = parse_named_num(title);
          if (num) {
            toc_item.attr.Num = num;
          }
        }

        toc_item.append(new EL(article_group_title_tag[type_char], {}, [title]));

        if (article_range !== null) {
          toc_item.append(new EL("ArticleRange", {}, [article_range]));
        }

        toc_item.extend(children || []);

        return toc_item;
      },
          peg$c21 = function peg$c21(children) {
        return new EL("MainProvision", {}, children);
      },
          peg$c22 = function peg$c22(paragraph) {
        return new EL("MainProvision", {}, [paragraph]);
      },
          peg$c23 = peg$otherExpectation("article_group_title"),
          peg$c24 = "\u7B2C",
          peg$c25 = peg$literalExpectation("\u7B2C", false),
          peg$c26 = /^[^ \u3000\t\r\n\u7DE8\u7AE0\u7BC0\u6B3E\u76EE]/,
          peg$c27 = peg$classExpectation([" ", "\u3000", "\t", "\r", "\n", "\u7DE8", "\u7AE0", "\u7BC0", "\u6B3E", "\u76EE"], true, false),
          peg$c28 = /^[\u7DE8\u7AE0\u7BC0\u6B3E\u76EE]/,
          peg$c29 = peg$classExpectation(["\u7DE8", "\u7AE0", "\u7BC0", "\u6B3E", "\u76EE"], false, false),
          peg$c30 = /^[\u306E\u30CE]/,
          peg$c31 = peg$classExpectation(["\u306E", "\u30CE"], false, false),
          peg$c32 = /^[^ \u3000\t\r\n]/,
          peg$c33 = peg$classExpectation([" ", "\u3000", "\t", "\r", "\n"], true, false),
          peg$c34 = function peg$c34(type_char) {
        return {
          text: text(),
          type_char: type_char
        };
      },
          peg$c35 = function peg$c35(title) {
        return title;
      },
          peg$c36 = peg$otherExpectation("article_group"),
          peg$c37 = function peg$c37(article_group_title, next_title) {
        var current_level = article_group_type_chars.indexOf(article_group_title.type_char);
        var next_level = article_group_type_chars.indexOf(next_title.type_char);
        return current_level < next_level;
      },
          peg$c38 = function peg$c38(article_group_title, article_group) {
        return article_group;
      },
          peg$c39 = function peg$c39(article_group_title, children) {
        var article_group = new EL(article_group_type[article_group_title.type_char], { Delete: "false", Hide: "false" });

        article_group.append(new EL(article_group_type[article_group_title.type_char] + "Title", {}, [new __Text(article_group_title.text)]));

        var num = parse_named_num(article_group_title.text);
        if (num) {
          article_group.attr.Num = num;
        }

        article_group.extend(children);

        return article_group;
      },
          peg$c40 = peg$otherExpectation("article_paragraph_caption"),
          peg$c41 = function peg$c41(article_paragraph_caption) {
        return article_paragraph_caption;
      },
          peg$c42 = peg$otherExpectation("article_title"),
          peg$c43 = /^[^ \u3000\t\r\n\u6761]/,
          peg$c44 = peg$classExpectation([" ", "\u3000", "\t", "\r", "\n", "\u6761"], true, false),
          peg$c45 = "\u6761",
          peg$c46 = peg$literalExpectation("\u6761", false),
          peg$c47 = peg$otherExpectation("article"),
          peg$c48 = function peg$c48(article_caption, article_title, target) {
        return target;
      },
          peg$c49 = function peg$c49(article_caption, article_title) {
        return [new EL("Sentence", { WritingMode: 'vertical' })];
      },
          peg$c50 = function peg$c50(article_caption, article_title, inline_contents, target) {
        return target;
      },
          peg$c51 = function peg$c51(article_caption, article_title, inline_contents, lists, target, _target) {
        return _target;
      },
          peg$c52 = function peg$c52(article_caption, article_title, inline_contents, lists, target, target_rest) {
        return [target].concat(target_rest);
      },
          peg$c53 = function peg$c53(article_caption, article_title, inline_contents, lists, children1, paragraphs, target, _target) {
        return _target;
      },
          peg$c54 = function peg$c54(article_caption, article_title, inline_contents, lists, children1, paragraphs, target, target_rest) {
        return [target].concat(target_rest);
      },
          peg$c55 = function peg$c55(article_caption, article_title, inline_contents, lists, children1, paragraphs, children2) {
        var article = new EL("Article", { Delete: "false", Hide: "false" });
        if (article_caption !== null) {
          article.append(new EL("ArticleCaption", {}, [article_caption]));
        }
        article.append(new EL("ArticleTitle", {}, [article_title]));

        var num = parse_named_num(article_title);
        if (num) {
          article.attr.Num = num;
        }

        var paragraph = new EL("Paragraph");
        paragraph.attr.OldStyle = "false";
        paragraph.attr.Delete = "false";
        article.append(paragraph);

        paragraph.append(new EL("ParagraphNum"));
        paragraph.append(new EL("ParagraphSentence", {}, inline_contents));
        paragraph.extend(lists || []);
        paragraph.extend(children1 || []);
        paragraph.extend(children2 || []);

        article.extend(paragraphs);

        return article;
      },
          peg$c56 = peg$otherExpectation("paragraph_item"),
          peg$c57 = /^[^ \u3000\t\r\n\u6761<]/,
          peg$c58 = peg$classExpectation([" ", "\u3000", "\t", "\r", "\n", "\u6761", "<"], true, false),
          peg$c59 = function peg$c59(paragraph_caption, paragraph_item_title, inline_contents, target) {
        return target;
      },
          peg$c60 = function peg$c60(paragraph_caption, paragraph_item_title, inline_contents, lists, target, _target) {
        return _target;
      },
          peg$c61 = function peg$c61(paragraph_caption, paragraph_item_title, inline_contents, lists, target, target_rest) {
        return [target].concat(target_rest);
      },
          peg$c62 = function peg$c62(paragraph_caption, paragraph_item_title, inline_contents, lists, children) {
        var lineno = location().start.line;
        var indent = indent_memo[lineno];

        if (base_indent_stack.length > 0) {
          var _base_indent_stack = _slicedToArray(base_indent_stack[base_indent_stack.length - 1], 3),
              base_indent = _base_indent_stack[0],
              is_first = _base_indent_stack[1],
              base_lineno = _base_indent_stack[2];

          if (!is_first || lineno !== base_lineno) {
            indent -= base_indent;
          }
        }

        var paragraph_item = new EL(paragraph_item_tags[indent], { Hide: "false" });
        if (indent === 0) {
          paragraph_item.attr.OldStyle = "false";
        } else {
          paragraph_item.attr.Delete = "false";
        }
        if (paragraph_caption !== null) {
          paragraph_item.append(new EL("ParagraphCaption", {}, [paragraph_caption]));
        }

        paragraph_item.append(new EL(paragraph_item_title_tags[indent], {}, [paragraph_item_title]));

        var num = parse_named_num(paragraph_item_title);
        if (num) {
          paragraph_item.attr.Num = num;
        }

        paragraph_item.append(new EL(paragraph_item_sentence_tags[indent], {}, inline_contents));

        paragraph_item.extend(lists || []);
        paragraph_item.extend(children || []);

        return paragraph_item;
      },
          peg$c63 = peg$otherExpectation("no_name_paragraph_item"),
          peg$c64 = function peg$c64(inline_contents, target) {
        return target;
      },
          peg$c65 = function peg$c65(inline_contents, lists, target, _target) {
        return _target;
      },
          peg$c66 = function peg$c66(inline_contents, lists, target, target_rest) {
        return [target].concat(target_rest);
      },
          peg$c67 = function peg$c67(inline_contents, lists, children) {
        var lineno = location().start.line;
        var indent = indent_memo[lineno];

        if (base_indent_stack.length > 0) {
          var _base_indent_stack2 = _slicedToArray(base_indent_stack[base_indent_stack.length - 1], 3),
              base_indent = _base_indent_stack2[0],
              is_first = _base_indent_stack2[1],
              base_lineno = _base_indent_stack2[2];

          if (!is_first || lineno !== base_lineno) {
            indent -= base_indent;
          }
        }

        var paragraph_item = new EL(paragraph_item_tags[indent], { Hide: "false", Num: "1" });
        if (indent === 0) {
          paragraph_item.attr.OldStyle = "false";
        } else {
          paragraph_item.attr.Delete = "false";
        }
        paragraph_item.append(new EL(paragraph_item_title_tags[indent]));
        paragraph_item.append(new EL(paragraph_item_sentence_tags[indent], {}, inline_contents));
        paragraph_item.extend(lists || []);
        paragraph_item.extend(children || []);

        return paragraph_item;
      },
          peg$c68 = peg$otherExpectation("paragraph_item_child"),
          peg$c69 = peg$otherExpectation("list"),
          peg$c70 = "",
          peg$c71 = function peg$c71(columns_or_sentences) {
        list_depth++;return true;
      },
          peg$c72 = function peg$c72(columns_or_sentences, target) {
        list_depth--;return true;
      },
          peg$c73 = function peg$c73(columns_or_sentences, target) {
        return target;
      },
          peg$c74 = function peg$c74(columns_or_sentences) {
        list_depth--;return false;
      },
          peg$c75 = "DUMMY",
          peg$c76 = peg$literalExpectation("DUMMY", false),
          peg$c77 = function peg$c77(columns_or_sentences, sublists) {
        var list = new EL(list_tags[list_depth]);
        var list_sentence = new EL(list_tags[list_depth] + "Sentence");
        list.append(list_sentence);

        list_sentence.extend(columns_or_sentences);

        list.extend(sublists || []);

        return list;
      },
          peg$c78 = peg$otherExpectation("table_struct"),
          peg$c79 = function peg$c79(table_struct_title, remarkses1, table, remarkses2) {
        var table_struct = new EL("TableStruct");

        if (table_struct_title !== null) {
          table_struct.append(table_struct_title);
        }

        table_struct.extend(remarkses1);

        table_struct.append(table);

        table_struct.extend(remarkses2);

        return table_struct;
      },
          peg$c80 = peg$otherExpectation("table_struct_title"),
          peg$c81 = ":table-struct-title:",
          peg$c82 = peg$literalExpectation(":table-struct-title:", false),
          peg$c83 = function peg$c83(title) {
        return new EL("TableStructTitle", {}, [title]);
      },
          peg$c84 = peg$otherExpectation("table"),
          peg$c85 = "*",
          peg$c86 = peg$literalExpectation("*", false),
          peg$c87 = "  ",
          peg$c88 = peg$literalExpectation("  ", false),
          peg$c89 = "\u3000",
          peg$c90 = peg$literalExpectation("\u3000", false),
          peg$c91 = "\t",
          peg$c92 = peg$literalExpectation("\t", false),
          peg$c93 = function peg$c93(first, target) {
        return target;
      },
          peg$c94 = function peg$c94(first, rest) {
        return [first].concat(rest);
      },
          peg$c95 = function peg$c95(table_row_columns) {
        var table = new EL("Table", { WritingMode: "vertical" });
        for (var i = 0; i < table_row_columns.length; i++) {
          var table_row = new EL("TableRow", {}, table_row_columns[i]);
          table.append(table_row);
        }

        return table;
      },
          peg$c96 = peg$otherExpectation("table_column"),
          peg$c97 = "-",
          peg$c98 = peg$literalExpectation("-", false),
          peg$c99 = "[",
          peg$c100 = peg$literalExpectation("[", false),
          peg$c101 = /^[^ \u3000\t\r\n\]=]/,
          peg$c102 = peg$classExpectation([" ", "\u3000", "\t", "\r", "\n", "]", "="], true, false),
          peg$c103 = "=\"",
          peg$c104 = peg$literalExpectation("=\"", false),
          peg$c105 = /^[^ \u3000\t\r\n\]"]/,
          peg$c106 = peg$classExpectation([" ", "\u3000", "\t", "\r", "\n", "]", "\""], true, false),
          peg$c107 = "\"]",
          peg$c108 = peg$literalExpectation("\"]", false),
          peg$c109 = function peg$c109(name, value) {
        return [name, value];
      },
          peg$c110 = function peg$c110(attr, inline) {
        return new EL("Sentence", { WritingMode: "vertical" }, [inline || new __Text("")]);
      },
          peg$c111 = function peg$c111(attr, first, inline) {
        return new EL("Sentence", { WritingMode: "vertical" }, [inline]);
      },
          peg$c112 = function peg$c112(attr, first, _target) {
        return _target;
      },
          peg$c113 = function peg$c113(attr, first, target) {
        return target;
      },
          peg$c114 = function peg$c114(attr, first, rest) {
        var children = [first].concat(rest || []);

        var table_column = new EL("TableColumn");
        for (var i = 0; i < attr.length; i++) {
          var _attr$i = _slicedToArray(attr[i], 2),
              name = _attr$i[0],
              value = _attr$i[1];

          table_column.attr[name] = value;
        }

        table_column.extend(children);

        return table_column;
      },
          peg$c115 = function peg$c115() {
        return new EL("TableColumn", {
          BorderTop: "solid",
          BorderRight: "solid",
          BorderBottom: "solid",
          BorderLeft: "solid"
        }, [new EL("Sentence", { WritingMode: "vertical" })]);
      },
          peg$c116 = peg$otherExpectation("style_struct"),
          peg$c117 = function peg$c117(style_struct_title, remarkses1, style, remarkses2) {
        var style_struct = new EL("StyleStruct");

        if (style_struct_title !== null) {
          style_struct.append(style_struct_title);
        }

        style_struct.extend(remarkses1);

        style_struct.append(style);

        style_struct.extend(remarkses2);

        return style_struct;
      },
          peg$c118 = peg$otherExpectation("style_struct_title"),
          peg$c119 = ":style-struct-title:",
          peg$c120 = peg$literalExpectation(":style-struct-title:", false),
          peg$c121 = function peg$c121(title) {
        return new EL("StyleStructTitle", {}, [title]);
      },
          peg$c122 = peg$otherExpectation("style"),
          peg$c123 = function peg$c123(table) {
        return [table];
      },
          peg$c124 = function peg$c124(fig) {
        return [fig];
      },
          peg$c125 = function peg$c125(target) {
        return target;
      },
          peg$c126 = function peg$c126(children) {
        return new EL("Style", {}, children);
      },
          peg$c127 = peg$otherExpectation("remarks"),
          peg$c128 = "\u5099\u8003",
          peg$c129 = peg$literalExpectation("\u5099\u8003", false),
          peg$c130 = "\u6CE8",
          peg$c131 = peg$literalExpectation("\u6CE8", false),
          peg$c132 = function peg$c132(label, _target) {
        return new EL("Sentence", { WritingMode: "vertical" }, [_target]);
      },
          peg$c133 = function peg$c133(label, first) {
        base_indent_stack.push([indent_memo[location().start.line] - 1, false, location().start.line]);return true;
      },
          peg$c134 = function peg$c134(label, first, _target) {
        base_indent_stack.pop();return true;
      },
          peg$c135 = function peg$c135(label, first, _target) {
        return _target;
      },
          peg$c136 = function peg$c136(label, first) {
        base_indent_stack.pop();return false;
      },
          peg$c137 = function peg$c137(label, first, _target) {
        return new EL("Sentence", { WritingMode: "vertical" }, [_target]);
      },
          peg$c138 = function peg$c138(label, first, target) {
        return target;
      },
          peg$c139 = function peg$c139(label, first, rest) {
        var children = rest || [];
        if (first !== null) {
          children = [].concat(first).concat(children);
        }
        if (children.length >= 2) {
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.tag.match(/Sentence|Column/)) {
              child.attr.Num = "" + (i + 1);
            }
          }
        }

        var remarks = new EL("Remarks");
        remarks.append(new EL("RemarksLabel", {}, [label]));
        remarks.extend(children);

        return remarks;
      },
          peg$c140 = peg$otherExpectation("fig_struct"),
          peg$c141 = function peg$c141(fig) {
        return new EL("FigStruct", {}, [fig]);
      },
          peg$c142 = peg$otherExpectation("fig"),
          peg$c143 = "..",
          peg$c144 = peg$literalExpectation("..", false),
          peg$c145 = "figure",
          peg$c146 = peg$literalExpectation("figure", false),
          peg$c147 = "::",
          peg$c148 = peg$literalExpectation("::", false),
          peg$c149 = function peg$c149(src) {
        return new EL("Fig", { src: src });
      },
          peg$c150 = peg$otherExpectation("appdx_item"),
          peg$c151 = peg$otherExpectation("appdx_table_title"),
          peg$c152 = "\u5225\u8868",
          peg$c153 = peg$literalExpectation("\u5225\u8868", false),
          peg$c154 = /^[^\r\n(\uFF08]/,
          peg$c155 = peg$classExpectation(["\r", "\n", "(", "\uFF08"], true, false),
          peg$c156 = function peg$c156(title, target) {
        return target;
      },
          peg$c157 = function peg$c157(title, related_article_num, table_struct_title) {
        return {
          text: text(),
          title: title,
          related_article_num: related_article_num,
          table_struct_title: table_struct_title
        };
      },
          peg$c158 = function peg$c158(title_struct) {
        return title_struct;
      },
          peg$c159 = peg$otherExpectation("appdx_table"),
          peg$c160 = function peg$c160(title_struct, target, remarkses) {
        return target.concat(remarkses);
      },
          peg$c161 = function peg$c161(title_struct, children) {
        var appdx_table = new EL("AppdxTable");
        if (title_struct.table_struct_title !== "") {
          console.error("### line " + location().start.line + ": Maybe irregular AppdxTableTitle!");
          appdx_table.append(new EL("AppdxTableTitle", { WritingMode: "vertical" }, [title_struct.text]));
        } else {
          appdx_table.append(new EL("AppdxTableTitle", { WritingMode: "vertical" }, [title_struct.title]));
          if (title_struct.related_article_num) {
            appdx_table.append(new EL("RelatedArticleNum", {}, [title_struct.related_article_num]));
          }
        }
        appdx_table.extend(children || []);

        return appdx_table;
      },
          peg$c162 = peg$otherExpectation("appdx_table_children"),
          peg$c163 = function peg$c163(table_struct) {
        return [table_struct];
      },
          peg$c164 = peg$otherExpectation("appdx_style_title"),
          peg$c165 = "\u69D8\u5F0F",
          peg$c166 = peg$literalExpectation("\u69D8\u5F0F", false),
          peg$c167 = function peg$c167(title, related_article_num, style_struct_title) {
        return {
          text: text(),
          title: title,
          related_article_num: related_article_num,
          style_struct_title: style_struct_title
        };
      },
          peg$c168 = peg$otherExpectation("appdx_style"),
          peg$c169 = function peg$c169(title_struct, first, _target) {
        return _target;
      },
          peg$c170 = function peg$c170(title_struct, first, rest) {
        return [first].concat(rest);
      },
          peg$c171 = function peg$c171(title_struct, target) {
        return target;
      },
          peg$c172 = function peg$c172(title_struct, children) {
        var appdx_style = new EL("AppdxStyle");
        appdx_style.append(new EL("AppdxStyleTitle", {}, [title_struct.title]));
        if (title_struct.related_article_num) {
          appdx_style.append(new EL("RelatedArticleNum", {}, [title_struct.related_article_num]));
        }
        appdx_style.extend(children || []);

        return appdx_style;
      },
          peg$c173 = peg$otherExpectation("appdx_style_children"),
          peg$c174 = peg$otherExpectation("suppl_provision_label"),
          peg$c175 = /^[\u9644\u4ED8]/,
          peg$c176 = peg$classExpectation(["\u9644", "\u4ED8"], false, false),
          peg$c177 = "\u5247",
          peg$c178 = peg$literalExpectation("\u5247", false),
          peg$c179 = function peg$c179(label, target) {
        return target.content;
      },
          peg$c180 = "\u6284",
          peg$c181 = peg$literalExpectation("\u6284", false),
          peg$c182 = function peg$c182(label, amend_law_num, extract) {
        return {
          label: label,
          amend_law_num: amend_law_num,
          extract: extract
        };
      },
          peg$c183 = peg$otherExpectation("suppl_provision"),
          peg$c184 = function peg$c184(suppl_provision_label, first, rest) {
        return [first].concat(rest);
      },
          peg$c185 = function peg$c185(suppl_provision_label, children) {
        var suppl_provision = new EL("SupplProvision");
        if (suppl_provision_label.amend_law_num) {
          suppl_provision.attr["AmendLawNum"] = suppl_provision_label.amend_law_num;
        }
        if (suppl_provision_label.extract !== null) {
          suppl_provision.attr["Extract"] = "true";
        }
        suppl_provision.append(new EL("SupplProvisionLabel", {}, [suppl_provision_label.label]));
        suppl_provision.extend(children);
        return suppl_provision;
      },
          peg$c186 = peg$otherExpectation("columns_or_sentences"),
          peg$c187 = function peg$c187(inline) {
        console.error("### line " + location().start.line + ": Maybe mismatched parenthesis!");
        var sentence = new EL("Sentence", { WritingMode: "vertical" }, [inline]);
        return [sentence];
      },
          peg$c188 = peg$otherExpectation("period_sentences"),
          peg$c189 = function peg$c189(fragments) {
        var sentences = [];
        var proviso_indices = [];
        for (var i = 0; i < fragments.length; i++) {
          var sentence_content = fragments[i];
          var sentence = new EL("Sentence", { WritingMode: "vertical" }, sentence_content);
          if (fragments.length >= 2) sentence.attr.Num = "" + (i + 1);
          if (sentence_content[0] instanceof __Text && sentence_content[0].text.match(/^ただし、|但し、/)) {
            proviso_indices.push(i);
          }
          sentences.push(sentence);
        }
        if (proviso_indices.length > 0) {
          for (var _i = 0; _i < sentences.length; _i++) {
            sentences[_i].attr.Function = proviso_indices.indexOf(_i) >= 0 ? 'proviso' : 'main';
          }
        }
        return sentences;
      },
          peg$c190 = peg$otherExpectation("columns"),
          peg$c191 = function peg$c191(first, target) {
        return target;
      },
          peg$c192 = function peg$c192(first, rest) {
        var column_inner_sets = [first].concat(rest);
        var columns = [];
        for (var i = 0; i < column_inner_sets.length; i++) {
          var column = new EL("Column", {}, column_inner_sets[i]);
          if (column_inner_sets.length >= 2) {
            column.attr.Num = "" + (i + 1);
          }
          columns.push(column);
        }
        return columns;
      },
          peg$c193 = peg$otherExpectation("INLINE"),
          peg$c194 = function peg$c194(texts) {
        return texts;
      },
          peg$c195 = peg$otherExpectation("NEXTINLINE"),
          peg$c196 = /^[\r\n]/,
          peg$c197 = peg$classExpectation(["\r", "\n"], false, false),
          peg$c198 = function peg$c198(inline) {
        return {
          text: text(),
          inline: inline
        };
      },
          peg$c199 = peg$otherExpectation("NOT_PARENTHESIS_CHAR"),
          peg$c200 = /^[^\r\n()\uFF08\uFF09[\]\uFF3B\uFF3D{}\uFF5B\uFF5D\u300C\u300D]/,
          peg$c201 = peg$classExpectation(["\r", "\n", "(", ")", "\uFF08", "\uFF09", "[", "]", "\uFF3B", "\uFF3D", "{", "}", "\uFF5B", "\uFF5D", "\u300C", "\u300D"], true, false),
          peg$c202 = peg$otherExpectation("INLINE_FRAGMENT"),
          peg$c203 = /^[^\r\n()\uFF08\uFF09[\]\uFF3B\uFF3D{}\uFF5B\uFF5D\u300C\u300D \u3000\t]/,
          peg$c204 = peg$classExpectation(["\r", "\n", "(", ")", "\uFF08", "\uFF09", "[", "]", "\uFF3B", "\uFF3D", "{", "}", "\uFF5B", "\uFF5D", "\u300C", "\u300D", " ", "\u3000", "\t"], true, false),
          peg$c205 = function peg$c205(plain) {
        return new __Text(plain);
      },
          peg$c206 = peg$otherExpectation("PERIOD_SENTENCE_FRAGMENT"),
          peg$c207 = "<QuoteStruct>",
          peg$c208 = peg$literalExpectation("<QuoteStruct>", false),
          peg$c209 = /^[^\r\n()\uFF08\uFF09[\]\uFF3B\uFF3D{}\uFF5B\uFF5D\u300C\u300D \u3000\t\u3002]/,
          peg$c210 = peg$classExpectation(["\r", "\n", "(", ")", "\uFF08", "\uFF09", "[", "]", "\uFF3B", "\uFF3D", "{", "}", "\uFF5B", "\uFF5D", "\u300C", "\u300D", " ", "\u3000", "\t", "\u3002"], true, false),
          peg$c211 = "\u3002",
          peg$c212 = peg$literalExpectation("\u3002", false),
          peg$c213 = function peg$c213(texts, tail) {
        var last = texts[texts.length - 1];
        if (tail) {
          if (last instanceof __Text) {
            last.text += tail;
          } else {
            texts.push(new __Text(tail));
          }
        }
        return texts;
      },
          peg$c214 = function peg$c214(plain) {
        return [new __Text(plain)];
      },
          peg$c215 = peg$otherExpectation("OUTSIDE_PARENTHESES_INLINE"),
          peg$c216 = peg$otherExpectation("MISMATCH_START_PARENTHESIS"),
          peg$c217 = /^[(\uFF08[\uFF3B{\uFF5B\u300C]/,
          peg$c218 = peg$classExpectation(["(", "\uFF08", "[", "\uFF3B", "{", "\uFF5B", "\u300C"], false, false),
          peg$c219 = function peg$c219(mismatch) {
        console.error("### line " + location().start.line + ": Mismatch start parenthesis!");
        return new EL("__MismatchStartParenthesis", {}, [mismatch]);
      },
          peg$c220 = peg$otherExpectation("MISMATCH_END_PARENTHESIS"),
          peg$c221 = /^[)\uFF09\]\uFF3D}\uFF5D\u300D]/,
          peg$c222 = peg$classExpectation([")", "\uFF09", "]", "\uFF3D", "}", "\uFF5D", "\u300D"], false, false),
          peg$c223 = function peg$c223(mismatch) {
        console.error("### line " + location().start.line + ": Mismatch end parenthesis!");
        return new EL("__MismatchEndParenthesis", {}, [mismatch]);
      },
          peg$c224 = peg$otherExpectation("PARENTHESES_INLINE"),
          peg$c225 = function peg$c225() {
        parentheses_depth++;return true;
      },
          peg$c226 = function peg$c226(target) {
        parentheses_depth--;return true;
      },
          peg$c227 = function peg$c227() {
        parentheses_depth--;return false;
      },
          peg$c228 = peg$otherExpectation("PARENTHESES_INLINE_INNER"),
          peg$c229 = peg$otherExpectation("ROUND_PARENTHESES_INLINE"),
          peg$c230 = /^[(\uFF08]/,
          peg$c231 = peg$classExpectation(["(", "\uFF08"], false, false),
          peg$c232 = function peg$c232(start, plain) {
        return new __Text(plain);
      },
          peg$c233 = /^[)\uFF09]/,
          peg$c234 = peg$classExpectation([")", "\uFF09"], false, false),
          peg$c235 = function peg$c235(start, target) {
        return target;
      },
          peg$c236 = function peg$c236(start, content, end) {
        return new __Parentheses("round", parentheses_depth, start, end, content, text());
      },
          peg$c237 = peg$otherExpectation("SQUARE_BRACKETS_INLINE"),
          peg$c238 = /^[[\uFF3B]/,
          peg$c239 = peg$classExpectation(["[", "\uFF3B"], false, false),
          peg$c240 = /^[\]\uFF3D]/,
          peg$c241 = peg$classExpectation(["]", "\uFF3D"], false, false),
          peg$c242 = function peg$c242(start, content, end) {
        return new __Parentheses("squareb", parentheses_depth, start, end, content, text());
      },
          peg$c243 = peg$otherExpectation("CURLY_BRACKETS_INLINE"),
          peg$c244 = /^[{\uFF5B]/,
          peg$c245 = peg$classExpectation(["{", "\uFF5B"], false, false),
          peg$c246 = /^[}\uFF5D]/,
          peg$c247 = peg$classExpectation(["}", "\uFF5D"], false, false),
          peg$c248 = function peg$c248(start, content, end) {
        return new __Parentheses("curly", parentheses_depth, start, end, content, text());
      },
          peg$c249 = peg$otherExpectation("SQUARE_PARENTHESES_INLINE"),
          peg$c250 = /^[\u300C]/,
          peg$c251 = peg$classExpectation(["\u300C"], false, false),
          peg$c252 = /^[^\r\n\u300C\u300D]/,
          peg$c253 = peg$classExpectation(["\r", "\n", "\u300C", "\u300D"], true, false),
          peg$c254 = /^[\u300D]/,
          peg$c255 = peg$classExpectation(["\u300D"], false, false),
          peg$c256 = function peg$c256(start, content, end) {
        return new __Parentheses("square", parentheses_depth, start, end, [new __Text(content)], text());
      },
          peg$c257 = peg$otherExpectation("quote_struct"),
          peg$c258 = "</QuoteStruct>",
          peg$c259 = peg$literalExpectation("</QuoteStruct>", false),
          peg$c260 = function peg$c260(start, content, end) {
        return new EL("QuoteStruct", {}, [content]);
      },
          peg$c261 = peg$otherExpectation("INDENT"),
          peg$c262 = "<INDENT str=\"",
          peg$c263 = peg$literalExpectation("<INDENT str=\"", false),
          peg$c264 = /^[^"]/,
          peg$c265 = peg$classExpectation(["\""], true, false),
          peg$c266 = "\">",
          peg$c267 = peg$literalExpectation("\">", false),
          peg$c268 = function peg$c268(str) {
        return str;
      },
          peg$c269 = peg$otherExpectation("DEDENT"),
          peg$c270 = "<DEDENT>",
          peg$c271 = peg$literalExpectation("<DEDENT>", false),
          peg$c272 = /^[ \u3000\t]/,
          peg$c273 = peg$classExpectation([" ", "\u3000", "\t"], false, false),
          peg$c274 = peg$otherExpectation("WHITESPACES"),
          peg$c275 = peg$otherExpectation("NEWLINE"),
          peg$c276 = /^[\r]/,
          peg$c277 = peg$classExpectation(["\r"], false, false),
          peg$c278 = /^[\n]/,
          peg$c279 = peg$classExpectation(["\n"], false, false),
          peg$currPos = 0,
          peg$savedPos = 0,
          peg$posDetailsCache = [{ line: 1, column: 1 }],
          peg$maxFailPos = 0,
          peg$maxFailExpected = [],
          peg$silentFails = 0,
          peg$result;

      if ("startRule" in options) {
        if (!(options.startRule in peg$startRuleFunctions)) {
          throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
        }

        peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
      }

      function text() {
        return input.substring(peg$savedPos, peg$currPos);
      }

      function location() {
        return peg$computeLocation(peg$savedPos, peg$currPos);
      }

      function expected(description, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

        throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
      }

      function error(message, location) {
        location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

        throw peg$buildSimpleError(message, location);
      }

      function peg$literalExpectation(text, ignoreCase) {
        return { type: "literal", text: text, ignoreCase: ignoreCase };
      }

      function peg$classExpectation(parts, inverted, ignoreCase) {
        return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
      }

      function peg$anyExpectation() {
        return { type: "any" };
      }

      function peg$endExpectation() {
        return { type: "end" };
      }

      function peg$otherExpectation(description) {
        return { type: "other", description: description };
      }

      function peg$computePosDetails(pos) {
        var details = peg$posDetailsCache[pos],
            p;

        if (details) {
          return details;
        } else {
          p = pos - 1;
          while (!peg$posDetailsCache[p]) {
            p--;
          }

          details = peg$posDetailsCache[p];
          details = {
            line: details.line,
            column: details.column
          };

          while (p < pos) {
            if (input.charCodeAt(p) === 10) {
              details.line++;
              details.column = 1;
            } else {
              details.column++;
            }

            p++;
          }

          peg$posDetailsCache[pos] = details;
          return details;
        }
      }

      function peg$computeLocation(startPos, endPos) {
        var startPosDetails = peg$computePosDetails(startPos),
            endPosDetails = peg$computePosDetails(endPos);

        return {
          start: {
            offset: startPos,
            line: startPosDetails.line,
            column: startPosDetails.column
          },
          end: {
            offset: endPos,
            line: endPosDetails.line,
            column: endPosDetails.column
          }
        };
      }

      function peg$fail(expected) {
        if (peg$currPos < peg$maxFailPos) {
          return;
        }

        if (peg$currPos > peg$maxFailPos) {
          peg$maxFailPos = peg$currPos;
          peg$maxFailExpected = [];
        }

        peg$maxFailExpected.push(expected);
      }

      function peg$buildSimpleError(message, location) {
        return new peg$SyntaxError(message, null, null, location);
      }

      function peg$buildStructuredError(expected, found, location) {
        return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
      }

      function peg$parsestart() {
        var s0, s1, s2, s3, s4;

        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseNEWLINE();
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseNEWLINE();
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parselaw();
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            if (input.length > peg$currPos) {
              s4 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c0);
              }
            }
            peg$silentFails--;
            if (s4 === peg$FAILED) {
              s3 = void 0;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c1(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parselaw() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        s0 = peg$currPos;
        s1 = peg$parselaw_title();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parseINDENT();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseINDENT();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseenact_statement();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseenact_statement();
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseDEDENT();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseDEDENT();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s3 = peg$c2(s1, s5);
                    s2 = s3;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parsetoc();
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsemain_provision();
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseappdx_item();
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseappdx_item();
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c3(s1, s2, s3, s4, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }

        return s0;
      }

      function peg$parselaw_title() {
        var s0, s1, s2, s3, s4, s5;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$parseINLINE();
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseNEWLINE();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseROUND_PARENTHESES_INLINE();
            if (s3 !== peg$FAILED) {
              s4 = [];
              s5 = peg$parseNEWLINE();
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parseNEWLINE();
                }
              } else {
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c5(s1, s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          s2 = peg$parseINLINE();
          if (s2 !== peg$FAILED) {
            s1 = input.substring(s1, peg$currPos);
          } else {
            s1 = s2;
          }
          if (s1 !== peg$FAILED) {
            s2 = [];
            s3 = peg$parseNEWLINE();
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parseNEWLINE();
              }
            } else {
              s2 = peg$FAILED;
            }
            if (s2 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c6(s1);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c4);
          }
        }

        return s0;
      }

      function peg$parseenact_statement() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parse__();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parsetoc_label();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parsearticle_title();
            peg$silentFails--;
            if (s4 === peg$FAILED) {
              s3 = void 0;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseINLINE();
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseNEWLINE();
                if (s6 !== peg$FAILED) {
                  while (s6 !== peg$FAILED) {
                    s5.push(s6);
                    s6 = peg$parseNEWLINE();
                  }
                } else {
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c8(s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c7);
          }
        }

        return s0;
      }

      function peg$parsetoc_label() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseINDENT();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseDEDENT();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parseNEWLINE();
            peg$silentFails--;
            if (s4 === peg$FAILED) {
              s3 = void 0;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$currPos;
              s5 = [];
              if (peg$c10.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c11);
                }
              }
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                if (peg$c10.test(input.charAt(peg$currPos))) {
                  s6 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c11);
                  }
                }
              }
              if (s5 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c12) {
                  s6 = peg$c12;
                  peg$currPos += 2;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c13);
                  }
                }
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$currPos;
                peg$silentFails++;
                s6 = peg$parseNEWLINE();
                peg$silentFails--;
                if (s6 !== peg$FAILED) {
                  peg$currPos = s5;
                  s5 = void 0;
                } else {
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  s1 = [s1, s2, s3, s4, s5];
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c9);
          }
        }

        return s0;
      }

      function peg$parsetoc() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$parsetoc_label();
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseNEWLINE();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseINDENT();
            if (s3 !== peg$FAILED) {
              s4 = peg$parsetoc_item();
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$currPos;
                s7 = peg$parsetoc_item();
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s6;
                  s7 = peg$c15(s1, s4, s7);
                }
                s6 = s7;
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$currPos;
                  s7 = peg$parsetoc_item();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s6;
                    s7 = peg$c15(s1, s4, s7);
                  }
                  s6 = s7;
                }
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  s7 = peg$parseNEWLINE();
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    s7 = peg$parseNEWLINE();
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$parseDEDENT();
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c16(s1, s4, s5);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c14);
          }
        }

        return s0;
      }

      function peg$parsetoc_item() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseINDENT();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseDEDENT();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parseNEWLINE();
            peg$silentFails--;
            if (s4 === peg$FAILED) {
              s3 = void 0;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$currPos;
              s5 = peg$parseOUTSIDE_PARENTHESES_INLINE();
              if (s5 !== peg$FAILED) {
                s4 = input.substring(s4, peg$currPos);
              } else {
                s4 = s5;
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseROUND_PARENTHESES_INLINE();
                if (s6 !== peg$FAILED) {
                  s5 = input.substring(s5, peg$currPos);
                } else {
                  s5 = s6;
                }
                if (s5 === peg$FAILED) {
                  s5 = null;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseNEWLINE();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    s8 = peg$parseINDENT();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parsetoc_item();
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        s11 = peg$currPos;
                        s12 = peg$parsetoc_item();
                        if (s12 !== peg$FAILED) {
                          peg$savedPos = s11;
                          s12 = peg$c18(s4, s5, s9, s12);
                        }
                        s11 = s12;
                        while (s11 !== peg$FAILED) {
                          s10.push(s11);
                          s11 = peg$currPos;
                          s12 = peg$parsetoc_item();
                          if (s12 !== peg$FAILED) {
                            peg$savedPos = s11;
                            s12 = peg$c18(s4, s5, s9, s12);
                          }
                          s11 = s12;
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = [];
                          s12 = peg$parseNEWLINE();
                          while (s12 !== peg$FAILED) {
                            s11.push(s12);
                            s12 = peg$parseNEWLINE();
                          }
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parseDEDENT();
                            if (s12 !== peg$FAILED) {
                              peg$savedPos = s7;
                              s8 = peg$c19(s4, s5, s9, s10);
                              s7 = s8;
                            } else {
                              peg$currPos = s7;
                              s7 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s7;
                            s7 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                    if (s7 === peg$FAILED) {
                      s7 = null;
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c20(s4, s5, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c17);
          }
        }

        return s0;
      }

      function peg$parsemain_provision() {
        var s0, s1, s2;

        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsearticle();
        if (s2 === peg$FAILED) {
          s2 = peg$parsearticle_group();
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsearticle();
            if (s2 === peg$FAILED) {
              s2 = peg$parsearticle_group();
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c21(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parseno_name_paragraph_item();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c22(s1);
          }
          s0 = s1;
        }

        return s0;
      }

      function peg$parsearticle_group_title() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parse__();
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 31532) {
            s3 = peg$c24;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c25);
            }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            if (peg$c26.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c27);
              }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c26.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c27);
                  }
                }
              }
            } else {
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              if (peg$c28.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c29);
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$currPos;
                if (peg$c30.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c31);
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  if (peg$c32.test(input.charAt(peg$currPos))) {
                    s9 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s9 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c33);
                    }
                  }
                  if (s9 !== peg$FAILED) {
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      if (peg$c32.test(input.charAt(peg$currPos))) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c33);
                        }
                      }
                    }
                  } else {
                    s8 = peg$FAILED;
                  }
                  if (s8 !== peg$FAILED) {
                    s7 = [s7, s8];
                    s6 = s7;
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s6;
                  s6 = peg$FAILED;
                }
                if (s6 === peg$FAILED) {
                  s6 = null;
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$currPos;
                  s8 = peg$parse__();
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parseINLINE();
                    if (s9 !== peg$FAILED) {
                      s8 = [s8, s9];
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  if (s7 === peg$FAILED) {
                    s7 = null;
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s3 = peg$c34(s5);
                    s2 = s3;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parseNEWLINE();
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parseNEWLINE();
              }
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c35(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c23);
          }
        }

        return s0;
      }

      function peg$parsearticle_group() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsearticle_group_title();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsearticle();
          if (s3 === peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$currPos;
            peg$silentFails++;
            s5 = peg$currPos;
            s6 = peg$parsearticle_group_title();
            if (s6 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s7 = peg$c37(s1, s6);
              if (s7) {
                s7 = void 0;
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            peg$silentFails--;
            if (s5 !== peg$FAILED) {
              peg$currPos = s4;
              s4 = void 0;
            } else {
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parsearticle_group();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s3;
                s4 = peg$c38(s1, s5);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsearticle();
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$currPos;
                peg$silentFails++;
                s5 = peg$currPos;
                s6 = peg$parsearticle_group_title();
                if (s6 !== peg$FAILED) {
                  peg$savedPos = peg$currPos;
                  s7 = peg$c37(s1, s6);
                  if (s7) {
                    s7 = void 0;
                  } else {
                    s7 = peg$FAILED;
                  }
                  if (s7 !== peg$FAILED) {
                    s6 = [s6, s7];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
                peg$silentFails--;
                if (s5 !== peg$FAILED) {
                  peg$currPos = s4;
                  s4 = void 0;
                } else {
                  s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parsearticle_group();
                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s3;
                    s4 = peg$c38(s1, s5);
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              }
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c39(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c36);
          }
        }

        return s0;
      }

      function peg$parsearticle_paragraph_caption() {
        var s0, s1, s2, s3, s4, s5;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parse__();
        if (s1 !== peg$FAILED) {
          s2 = peg$parseROUND_PARENTHESES_INLINE();
          if (s2 !== peg$FAILED) {
            s3 = peg$parseNEWLINE();
            if (s3 !== peg$FAILED) {
              s4 = peg$currPos;
              peg$silentFails++;
              if (peg$c32.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c33);
                }
              }
              peg$silentFails--;
              if (s5 !== peg$FAILED) {
                peg$currPos = s4;
                s4 = void 0;
              } else {
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c41(s2);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c40);
          }
        }

        return s0;
      }

      function peg$parsearticle_title() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 31532) {
          s1 = peg$c24;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c25);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          if (peg$c43.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c44);
            }
          }
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              if (peg$c43.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c44);
                }
              }
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 26465) {
              s3 = peg$c45;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c46);
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$currPos;
              if (peg$c30.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c31);
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                if (peg$c32.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c33);
                  }
                }
                if (s7 !== peg$FAILED) {
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    if (peg$c32.test(input.charAt(peg$currPos))) {
                      s7 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c33);
                      }
                    }
                  }
                } else {
                  s6 = peg$FAILED;
                }
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                s1 = [s1, s2, s3, s4];
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c42);
          }
        }

        return s0;
      }

      function peg$parsearticle() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsearticle_paragraph_caption();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parsearticle_title();
          if (s3 !== peg$FAILED) {
            s2 = input.substring(s2, peg$currPos);
          } else {
            s2 = s3;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parse__();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsecolumns_or_sentences();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s3;
                s4 = peg$c48(s1, s2, s5);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = peg$currPos;
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s3;
                s4 = peg$c49(s1, s2);
              }
              s3 = s4;
            }
            if (s3 !== peg$FAILED) {
              s4 = [];
              s5 = peg$parseNEWLINE();
              if (s5 !== peg$FAILED) {
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parseNEWLINE();
                }
              } else {
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseINDENT();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseINDENT();
                  if (s7 !== peg$FAILED) {
                    s8 = [];
                    s9 = peg$parselist();
                    if (s9 !== peg$FAILED) {
                      while (s9 !== peg$FAILED) {
                        s8.push(s9);
                        s9 = peg$parselist();
                      }
                    } else {
                      s8 = peg$FAILED;
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = [];
                      s10 = peg$parseNEWLINE();
                      while (s10 !== peg$FAILED) {
                        s9.push(s10);
                        s10 = peg$parseNEWLINE();
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseDEDENT();
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseDEDENT();
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s5;
                            s6 = peg$c50(s1, s2, s3, s8);
                            s5 = s6;
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
                if (s5 === peg$FAILED) {
                  s5 = null;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$currPos;
                  s7 = peg$parseINDENT();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseparagraph_item_child();
                    if (s8 !== peg$FAILED) {
                      s9 = [];
                      s10 = peg$parseNEWLINE();
                      while (s10 !== peg$FAILED) {
                        s9.push(s10);
                        s10 = peg$parseNEWLINE();
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        s11 = peg$currPos;
                        s12 = peg$parseparagraph_item_child();
                        if (s12 !== peg$FAILED) {
                          s13 = [];
                          s14 = peg$parseNEWLINE();
                          while (s14 !== peg$FAILED) {
                            s13.push(s14);
                            s14 = peg$parseNEWLINE();
                          }
                          if (s13 !== peg$FAILED) {
                            peg$savedPos = s11;
                            s12 = peg$c51(s1, s2, s3, s5, s8, s12);
                            s11 = s12;
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s11;
                          s11 = peg$FAILED;
                        }
                        while (s11 !== peg$FAILED) {
                          s10.push(s11);
                          s11 = peg$currPos;
                          s12 = peg$parseparagraph_item_child();
                          if (s12 !== peg$FAILED) {
                            s13 = [];
                            s14 = peg$parseNEWLINE();
                            while (s14 !== peg$FAILED) {
                              s13.push(s14);
                              s14 = peg$parseNEWLINE();
                            }
                            if (s13 !== peg$FAILED) {
                              peg$savedPos = s11;
                              s12 = peg$c51(s1, s2, s3, s5, s8, s12);
                              s11 = s12;
                            } else {
                              peg$currPos = s11;
                              s11 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s11;
                            s11 = peg$FAILED;
                          }
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseDEDENT();
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s6;
                            s7 = peg$c52(s1, s2, s3, s5, s8, s10);
                            s6 = s7;
                          } else {
                            peg$currPos = s6;
                            s6 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s6;
                          s6 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                  if (s6 === peg$FAILED) {
                    s6 = null;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = [];
                    s8 = peg$parseparagraph_item();
                    while (s8 !== peg$FAILED) {
                      s7.push(s8);
                      s8 = peg$parseparagraph_item();
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$currPos;
                      s9 = peg$parseINDENT();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseparagraph_item_child();
                        if (s10 !== peg$FAILED) {
                          s11 = [];
                          s12 = peg$parseNEWLINE();
                          while (s12 !== peg$FAILED) {
                            s11.push(s12);
                            s12 = peg$parseNEWLINE();
                          }
                          if (s11 !== peg$FAILED) {
                            s12 = [];
                            s13 = peg$currPos;
                            s14 = peg$parseparagraph_item_child();
                            if (s14 !== peg$FAILED) {
                              s15 = [];
                              s16 = peg$parseNEWLINE();
                              while (s16 !== peg$FAILED) {
                                s15.push(s16);
                                s16 = peg$parseNEWLINE();
                              }
                              if (s15 !== peg$FAILED) {
                                peg$savedPos = s13;
                                s14 = peg$c53(s1, s2, s3, s5, s6, s7, s10, s14);
                                s13 = s14;
                              } else {
                                peg$currPos = s13;
                                s13 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s13;
                              s13 = peg$FAILED;
                            }
                            while (s13 !== peg$FAILED) {
                              s12.push(s13);
                              s13 = peg$currPos;
                              s14 = peg$parseparagraph_item_child();
                              if (s14 !== peg$FAILED) {
                                s15 = [];
                                s16 = peg$parseNEWLINE();
                                while (s16 !== peg$FAILED) {
                                  s15.push(s16);
                                  s16 = peg$parseNEWLINE();
                                }
                                if (s15 !== peg$FAILED) {
                                  peg$savedPos = s13;
                                  s14 = peg$c53(s1, s2, s3, s5, s6, s7, s10, s14);
                                  s13 = s14;
                                } else {
                                  peg$currPos = s13;
                                  s13 = peg$FAILED;
                                }
                              } else {
                                peg$currPos = s13;
                                s13 = peg$FAILED;
                              }
                            }
                            if (s12 !== peg$FAILED) {
                              s13 = peg$parseDEDENT();
                              if (s13 !== peg$FAILED) {
                                peg$savedPos = s8;
                                s9 = peg$c54(s1, s2, s3, s5, s6, s7, s10, s12);
                                s8 = s9;
                              } else {
                                peg$currPos = s8;
                                s8 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s8;
                              s8 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s8;
                            s8 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s8;
                          s8 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s8;
                        s8 = peg$FAILED;
                      }
                      if (s8 === peg$FAILED) {
                        s8 = null;
                      }
                      if (s8 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c55(s1, s2, s3, s5, s6, s7, s8);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c47);
          }
        }

        return s0;
      }

      function peg$parseparagraph_item() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsearticle_paragraph_caption();
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$currPos;
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parsearticle_title();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = void 0;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$currPos;
            peg$silentFails++;
            s6 = peg$parseappdx_table_title();
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              peg$silentFails++;
              s7 = peg$parseappdx_style_title();
              peg$silentFails--;
              if (s7 === peg$FAILED) {
                s6 = void 0;
              } else {
                peg$currPos = s6;
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$currPos;
                peg$silentFails++;
                s8 = peg$parsesuppl_provision_label();
                peg$silentFails--;
                if (s8 === peg$FAILED) {
                  s7 = void 0;
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  s8 = [];
                  if (peg$c57.test(input.charAt(peg$currPos))) {
                    s9 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s9 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c58);
                    }
                  }
                  if (s9 !== peg$FAILED) {
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      if (peg$c57.test(input.charAt(peg$currPos))) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c58);
                        }
                      }
                    }
                  } else {
                    s8 = peg$FAILED;
                  }
                  if (s8 !== peg$FAILED) {
                    s4 = [s4, s5, s6, s7, s8];
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s2 = input.substring(s2, peg$currPos);
          } else {
            s2 = s3;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parse__();
            if (s3 !== peg$FAILED) {
              s4 = peg$parsecolumns_or_sentences();
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseNEWLINE();
                if (s6 !== peg$FAILED) {
                  while (s6 !== peg$FAILED) {
                    s5.push(s6);
                    s6 = peg$parseNEWLINE();
                  }
                } else {
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$currPos;
                  s7 = peg$parseINDENT();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseINDENT();
                    if (s8 !== peg$FAILED) {
                      s9 = [];
                      s10 = peg$parselist();
                      if (s10 !== peg$FAILED) {
                        while (s10 !== peg$FAILED) {
                          s9.push(s10);
                          s10 = peg$parselist();
                        }
                      } else {
                        s9 = peg$FAILED;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        s11 = peg$parseNEWLINE();
                        while (s11 !== peg$FAILED) {
                          s10.push(s11);
                          s11 = peg$parseNEWLINE();
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseDEDENT();
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parseDEDENT();
                            if (s12 !== peg$FAILED) {
                              peg$savedPos = s6;
                              s7 = peg$c59(s1, s2, s4, s9);
                              s6 = s7;
                            } else {
                              peg$currPos = s6;
                              s6 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s6;
                            s6 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s6;
                          s6 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s6;
                        s6 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s6;
                      s6 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s6;
                    s6 = peg$FAILED;
                  }
                  if (s6 === peg$FAILED) {
                    s6 = null;
                  }
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    s8 = peg$parseINDENT();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseparagraph_item_child();
                      if (s9 !== peg$FAILED) {
                        s10 = [];
                        s11 = peg$parseNEWLINE();
                        while (s11 !== peg$FAILED) {
                          s10.push(s11);
                          s11 = peg$parseNEWLINE();
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = [];
                          s12 = peg$currPos;
                          s13 = peg$parseparagraph_item_child();
                          if (s13 !== peg$FAILED) {
                            s14 = [];
                            s15 = peg$parseNEWLINE();
                            while (s15 !== peg$FAILED) {
                              s14.push(s15);
                              s15 = peg$parseNEWLINE();
                            }
                            if (s14 !== peg$FAILED) {
                              peg$savedPos = s12;
                              s13 = peg$c60(s1, s2, s4, s6, s9, s13);
                              s12 = s13;
                            } else {
                              peg$currPos = s12;
                              s12 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s12;
                            s12 = peg$FAILED;
                          }
                          while (s12 !== peg$FAILED) {
                            s11.push(s12);
                            s12 = peg$currPos;
                            s13 = peg$parseparagraph_item_child();
                            if (s13 !== peg$FAILED) {
                              s14 = [];
                              s15 = peg$parseNEWLINE();
                              while (s15 !== peg$FAILED) {
                                s14.push(s15);
                                s15 = peg$parseNEWLINE();
                              }
                              if (s14 !== peg$FAILED) {
                                peg$savedPos = s12;
                                s13 = peg$c60(s1, s2, s4, s6, s9, s13);
                                s12 = s13;
                              } else {
                                peg$currPos = s12;
                                s12 = peg$FAILED;
                              }
                            } else {
                              peg$currPos = s12;
                              s12 = peg$FAILED;
                            }
                          }
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parseDEDENT();
                            if (s12 !== peg$FAILED) {
                              peg$savedPos = s7;
                              s8 = peg$c61(s1, s2, s4, s6, s9, s11);
                              s7 = s8;
                            } else {
                              peg$currPos = s7;
                              s7 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s7;
                            s7 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s7;
                          s7 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                    if (s7 === peg$FAILED) {
                      s7 = null;
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c62(s1, s2, s4, s6, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c56);
          }
        }

        return s0;
      }

      function peg$parseno_name_paragraph_item() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsecolumns_or_sentences();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseNEWLINE();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseNEWLINE();
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseINDENT();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseINDENT();
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parselist();
                if (s7 !== peg$FAILED) {
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    s7 = peg$parselist();
                  }
                } else {
                  s6 = peg$FAILED;
                }
                if (s6 !== peg$FAILED) {
                  s7 = [];
                  s8 = peg$parseNEWLINE();
                  while (s8 !== peg$FAILED) {
                    s7.push(s8);
                    s8 = peg$parseNEWLINE();
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseDEDENT();
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseDEDENT();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s3;
                        s4 = peg$c64(s1, s6);
                        s3 = s4;
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$currPos;
              s5 = peg$parseINDENT();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseparagraph_item_child();
                if (s6 !== peg$FAILED) {
                  s7 = [];
                  s8 = peg$parseNEWLINE();
                  while (s8 !== peg$FAILED) {
                    s7.push(s8);
                    s8 = peg$parseNEWLINE();
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = [];
                    s9 = peg$currPos;
                    s10 = peg$parseparagraph_item_child();
                    if (s10 !== peg$FAILED) {
                      s11 = [];
                      s12 = peg$parseNEWLINE();
                      while (s12 !== peg$FAILED) {
                        s11.push(s12);
                        s12 = peg$parseNEWLINE();
                      }
                      if (s11 !== peg$FAILED) {
                        peg$savedPos = s9;
                        s10 = peg$c65(s1, s3, s6, s10);
                        s9 = s10;
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s9;
                      s9 = peg$FAILED;
                    }
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      s9 = peg$currPos;
                      s10 = peg$parseparagraph_item_child();
                      if (s10 !== peg$FAILED) {
                        s11 = [];
                        s12 = peg$parseNEWLINE();
                        while (s12 !== peg$FAILED) {
                          s11.push(s12);
                          s12 = peg$parseNEWLINE();
                        }
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = s9;
                          s10 = peg$c65(s1, s3, s6, s10);
                          s9 = s10;
                        } else {
                          peg$currPos = s9;
                          s9 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s9;
                        s9 = peg$FAILED;
                      }
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseDEDENT();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s4;
                        s5 = peg$c66(s1, s3, s6, s8);
                        s4 = s5;
                      } else {
                        peg$currPos = s4;
                        s4 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s4;
                      s4 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c67(s1, s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c63);
          }
        }

        return s0;
      }

      function peg$parseparagraph_item_child() {
        var s0, s1;

        peg$silentFails++;
        s0 = peg$parsetable_struct();
        if (s0 === peg$FAILED) {
          s0 = peg$parseparagraph_item();
          if (s0 === peg$FAILED) {
            s0 = peg$parsestyle_struct();
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c68);
          }
        }

        return s0;
      }

      function peg$parselist() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsecolumns_or_sentences();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseNEWLINE();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseNEWLINE();
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$currPos;
            peg$silentFails++;
            s5 = peg$currPos;
            s6 = peg$c70;
            if (s6 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s7 = peg$c71(s1);
              if (s7) {
                s7 = void 0;
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s6 = [s6, s7];
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            peg$silentFails--;
            if (s5 !== peg$FAILED) {
              peg$currPos = s4;
              s4 = void 0;
            } else {
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parseINDENT();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseINDENT();
                if (s6 !== peg$FAILED) {
                  s7 = [];
                  s8 = peg$parselist();
                  if (s8 !== peg$FAILED) {
                    while (s8 !== peg$FAILED) {
                      s7.push(s8);
                      s8 = peg$parselist();
                    }
                  } else {
                    s7 = peg$FAILED;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = [];
                    s9 = peg$parseNEWLINE();
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      s9 = peg$parseNEWLINE();
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseDEDENT();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseDEDENT();
                        if (s10 !== peg$FAILED) {
                          s11 = peg$currPos;
                          peg$silentFails++;
                          s12 = peg$currPos;
                          s13 = peg$c70;
                          if (s13 !== peg$FAILED) {
                            peg$savedPos = peg$currPos;
                            s14 = peg$c72(s1, s7);
                            if (s14) {
                              s14 = void 0;
                            } else {
                              s14 = peg$FAILED;
                            }
                            if (s14 !== peg$FAILED) {
                              s13 = [s13, s14];
                              s12 = s13;
                            } else {
                              peg$currPos = s12;
                              s12 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s12;
                            s12 = peg$FAILED;
                          }
                          peg$silentFails--;
                          if (s12 !== peg$FAILED) {
                            peg$currPos = s11;
                            s11 = void 0;
                          } else {
                            s11 = peg$FAILED;
                          }
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s3;
                            s4 = peg$c73(s1, s7);
                            s3 = s4;
                          } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = peg$currPos;
              s4 = peg$currPos;
              peg$silentFails++;
              s5 = peg$currPos;
              s6 = peg$c70;
              if (s6 !== peg$FAILED) {
                peg$savedPos = peg$currPos;
                s7 = peg$c74(s1);
                if (s7) {
                  s7 = void 0;
                } else {
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  s6 = [s6, s7];
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              peg$silentFails--;
              if (s5 !== peg$FAILED) {
                peg$currPos = s4;
                s4 = void 0;
              } else {
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                if (input.substr(peg$currPos, 5) === peg$c75) {
                  s5 = peg$c75;
                  peg$currPos += 5;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c76);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s4 = [s4, s5];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c77(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c69);
          }
        }

        return s0;
      }

      function peg$parsetable_struct() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseINDENT();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseDEDENT();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parseNEWLINE();
            peg$silentFails--;
            if (s4 === peg$FAILED) {
              s3 = void 0;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsetable_struct_title();
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseremarks();
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseremarks();
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parsetable();
                  if (s6 !== peg$FAILED) {
                    s7 = [];
                    s8 = peg$parseremarks();
                    while (s8 !== peg$FAILED) {
                      s7.push(s8);
                      s8 = peg$parseremarks();
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c79(s4, s5, s6, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c78);
          }
        }

        return s0;
      }

      function peg$parsetable_struct_title() {
        var s0, s1, s2, s3, s4;

        peg$silentFails++;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 20) === peg$c81) {
          s1 = peg$c81;
          peg$currPos += 20;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c82);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseINLINE();
            if (s4 !== peg$FAILED) {
              s3 = input.substring(s3, peg$currPos);
            } else {
              s3 = s4;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseNEWLINE();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c83(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c80);
          }
        }

        return s0;
      }

      function peg$parsetable() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 42) {
          s3 = peg$c85;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c86);
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsetable_column();
            if (s5 !== peg$FAILED) {
              s6 = [];
              s7 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c87) {
                s8 = peg$c87;
                peg$currPos += 2;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c88);
                }
              }
              if (s8 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 12288) {
                  s8 = peg$c89;
                  peg$currPos++;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c90);
                  }
                }
                if (s8 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 9) {
                    s8 = peg$c91;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c92);
                    }
                  }
                }
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parsetable_column();
                if (s9 !== peg$FAILED) {
                  peg$savedPos = s7;
                  s8 = peg$c93(s5, s9);
                  s7 = s8;
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              } else {
                peg$currPos = s7;
                s7 = peg$FAILED;
              }
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                s7 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c87) {
                  s8 = peg$c87;
                  peg$currPos += 2;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c88);
                  }
                }
                if (s8 === peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 12288) {
                    s8 = peg$c89;
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c90);
                    }
                  }
                  if (s8 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 9) {
                      s8 = peg$c91;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c92);
                      }
                    }
                  }
                }
                if (s8 !== peg$FAILED) {
                  s9 = peg$parsetable_column();
                  if (s9 !== peg$FAILED) {
                    peg$savedPos = s7;
                    s8 = peg$c93(s5, s9);
                    s7 = s8;
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s7;
                  s7 = peg$FAILED;
                }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s2;
                s3 = peg$c94(s5, s6);
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 42) {
              s3 = peg$c85;
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c86);
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse__();
              if (s4 !== peg$FAILED) {
                s5 = peg$parsetable_column();
                if (s5 !== peg$FAILED) {
                  s6 = [];
                  s7 = peg$currPos;
                  if (input.substr(peg$currPos, 2) === peg$c87) {
                    s8 = peg$c87;
                    peg$currPos += 2;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c88);
                    }
                  }
                  if (s8 === peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 12288) {
                      s8 = peg$c89;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c90);
                      }
                    }
                    if (s8 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 9) {
                        s8 = peg$c91;
                        peg$currPos++;
                      } else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c92);
                        }
                      }
                    }
                  }
                  if (s8 !== peg$FAILED) {
                    s9 = peg$parsetable_column();
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s7;
                      s8 = peg$c93(s5, s9);
                      s7 = s8;
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s7;
                    s7 = peg$FAILED;
                  }
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    s7 = peg$currPos;
                    if (input.substr(peg$currPos, 2) === peg$c87) {
                      s8 = peg$c87;
                      peg$currPos += 2;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c88);
                      }
                    }
                    if (s8 === peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 12288) {
                        s8 = peg$c89;
                        peg$currPos++;
                      } else {
                        s8 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c90);
                        }
                      }
                      if (s8 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 9) {
                          s8 = peg$c91;
                          peg$currPos++;
                        } else {
                          s8 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c92);
                          }
                        }
                      }
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parsetable_column();
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s7;
                        s8 = peg$c93(s5, s9);
                        s7 = s8;
                      } else {
                        peg$currPos = s7;
                        s7 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s7;
                      s7 = peg$FAILED;
                    }
                  }
                  if (s6 !== peg$FAILED) {
                    peg$savedPos = s2;
                    s3 = peg$c94(s5, s6);
                    s2 = s3;
                  } else {
                    peg$currPos = s2;
                    s2 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c95(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c84);
          }
        }

        return s0;
      }

      function peg$parsetable_column() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

        peg$silentFails++;
        s0 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 45) {
          s1 = peg$c97;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c98);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse__();
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 91) {
              s5 = peg$c99;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c100);
              }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              s7 = [];
              if (peg$c101.test(input.charAt(peg$currPos))) {
                s8 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c102);
                }
              }
              if (s8 !== peg$FAILED) {
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  if (peg$c101.test(input.charAt(peg$currPos))) {
                    s8 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s8 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c102);
                    }
                  }
                }
              } else {
                s7 = peg$FAILED;
              }
              if (s7 !== peg$FAILED) {
                s6 = input.substring(s6, peg$currPos);
              } else {
                s6 = s7;
              }
              if (s6 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c103) {
                  s7 = peg$c103;
                  peg$currPos += 2;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c104);
                  }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$currPos;
                  s9 = [];
                  if (peg$c105.test(input.charAt(peg$currPos))) {
                    s10 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s10 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c106);
                    }
                  }
                  if (s10 !== peg$FAILED) {
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      if (peg$c105.test(input.charAt(peg$currPos))) {
                        s10 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c106);
                        }
                      }
                    }
                  } else {
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s8 = input.substring(s8, peg$currPos);
                  } else {
                    s8 = s9;
                  }
                  if (s8 !== peg$FAILED) {
                    if (input.substr(peg$currPos, 2) === peg$c107) {
                      s9 = peg$c107;
                      peg$currPos += 2;
                    } else {
                      s9 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c108);
                      }
                    }
                    if (s9 !== peg$FAILED) {
                      peg$savedPos = s4;
                      s5 = peg$c109(s6, s8);
                      s4 = s5;
                    } else {
                      peg$currPos = s4;
                      s4 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 91) {
                s5 = peg$c99;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c100);
                }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$currPos;
                s7 = [];
                if (peg$c101.test(input.charAt(peg$currPos))) {
                  s8 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s8 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c102);
                  }
                }
                if (s8 !== peg$FAILED) {
                  while (s8 !== peg$FAILED) {
                    s7.push(s8);
                    if (peg$c101.test(input.charAt(peg$currPos))) {
                      s8 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c102);
                      }
                    }
                  }
                } else {
                  s7 = peg$FAILED;
                }
                if (s7 !== peg$FAILED) {
                  s6 = input.substring(s6, peg$currPos);
                } else {
                  s6 = s7;
                }
                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c103) {
                    s7 = peg$c103;
                    peg$currPos += 2;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c104);
                    }
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$currPos;
                    s9 = [];
                    if (peg$c105.test(input.charAt(peg$currPos))) {
                      s10 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s10 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c106);
                      }
                    }
                    if (s10 !== peg$FAILED) {
                      while (s10 !== peg$FAILED) {
                        s9.push(s10);
                        if (peg$c105.test(input.charAt(peg$currPos))) {
                          s10 = input.charAt(peg$currPos);
                          peg$currPos++;
                        } else {
                          s10 = peg$FAILED;
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c106);
                          }
                        }
                      }
                    } else {
                      s9 = peg$FAILED;
                    }
                    if (s9 !== peg$FAILED) {
                      s8 = input.substring(s8, peg$currPos);
                    } else {
                      s8 = s9;
                    }
                    if (s8 !== peg$FAILED) {
                      if (input.substr(peg$currPos, 2) === peg$c107) {
                        s9 = peg$c107;
                        peg$currPos += 2;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c108);
                        }
                      }
                      if (s9 !== peg$FAILED) {
                        peg$savedPos = s4;
                        s5 = peg$c109(s6, s8);
                        s4 = s5;
                      } else {
                        peg$currPos = s4;
                        s4 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s4;
                      s4 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsefig_struct();
              if (s4 === peg$FAILED) {
                s4 = peg$currPos;
                s5 = peg$parseINLINE();
                if (s5 === peg$FAILED) {
                  s5 = null;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parseNEWLINE();
                  if (s6 !== peg$FAILED) {
                    peg$savedPos = s4;
                    s5 = peg$c110(s3, s5);
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$currPos;
                s6 = peg$parseINDENT();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseINDENT();
                  if (s7 !== peg$FAILED) {
                    s8 = [];
                    s9 = peg$currPos;
                    s10 = peg$parsefig_struct();
                    if (s10 === peg$FAILED) {
                      s10 = peg$currPos;
                      s11 = peg$parseINLINE();
                      if (s11 !== peg$FAILED) {
                        s12 = peg$parseNEWLINE();
                        if (s12 !== peg$FAILED) {
                          peg$savedPos = s10;
                          s11 = peg$c111(s3, s4, s11);
                          s10 = s11;
                        } else {
                          peg$currPos = s10;
                          s10 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                    }
                    if (s10 !== peg$FAILED) {
                      peg$savedPos = s9;
                      s10 = peg$c112(s3, s4, s10);
                    }
                    s9 = s10;
                    if (s9 !== peg$FAILED) {
                      while (s9 !== peg$FAILED) {
                        s8.push(s9);
                        s9 = peg$currPos;
                        s10 = peg$parsefig_struct();
                        if (s10 === peg$FAILED) {
                          s10 = peg$currPos;
                          s11 = peg$parseINLINE();
                          if (s11 !== peg$FAILED) {
                            s12 = peg$parseNEWLINE();
                            if (s12 !== peg$FAILED) {
                              peg$savedPos = s10;
                              s11 = peg$c111(s3, s4, s11);
                              s10 = s11;
                            } else {
                              peg$currPos = s10;
                              s10 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s10;
                            s10 = peg$FAILED;
                          }
                        }
                        if (s10 !== peg$FAILED) {
                          peg$savedPos = s9;
                          s10 = peg$c112(s3, s4, s10);
                        }
                        s9 = s10;
                      }
                    } else {
                      s8 = peg$FAILED;
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = [];
                      s10 = peg$parseNEWLINE();
                      while (s10 !== peg$FAILED) {
                        s9.push(s10);
                        s10 = peg$parseNEWLINE();
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseDEDENT();
                        if (s10 !== peg$FAILED) {
                          s11 = peg$parseDEDENT();
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s5;
                            s6 = peg$c113(s3, s4, s8);
                            s5 = s6;
                          } else {
                            peg$currPos = s5;
                            s5 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s5;
                          s5 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s5;
                        s5 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s5;
                      s5 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
                if (s5 === peg$FAILED) {
                  s5 = null;
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c114(s3, s4, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 45) {
            s1 = peg$c97;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c98);
            }
          }
          if (s1 !== peg$FAILED) {
            s2 = peg$parse_();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseNEWLINE();
              if (s3 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c115();
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c96);
          }
        }

        return s0;
      }

      function peg$parsestyle_struct() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseINDENT();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseDEDENT();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$parseNEWLINE();
            peg$silentFails--;
            if (s4 === peg$FAILED) {
              s3 = void 0;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parsestyle_struct_title();
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseremarks();
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseremarks();
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parsestyle();
                  if (s6 !== peg$FAILED) {
                    s7 = [];
                    s8 = peg$parseremarks();
                    while (s8 !== peg$FAILED) {
                      s7.push(s8);
                      s8 = peg$parseremarks();
                    }
                    if (s7 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c117(s4, s5, s6, s7);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c116);
          }
        }

        return s0;
      }

      function peg$parsestyle_struct_title() {
        var s0, s1, s2, s3, s4;

        peg$silentFails++;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 20) === peg$c119) {
          s1 = peg$c119;
          peg$currPos += 20;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c120);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse_();
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseINLINE();
            if (s4 !== peg$FAILED) {
              s3 = input.substring(s3, peg$currPos);
            } else {
              s3 = s4;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parseNEWLINE();
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c121(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c118);
          }
        }

        return s0;
      }

      function peg$parsestyle() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$parsetable();
        if (s2 !== peg$FAILED) {
          peg$savedPos = s1;
          s2 = peg$c123(s2);
        }
        s1 = s2;
        if (s1 === peg$FAILED) {
          s1 = peg$currPos;
          s2 = peg$parsefig();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s1;
            s2 = peg$c124(s2);
          }
          s1 = s2;
          if (s1 === peg$FAILED) {
            s1 = peg$currPos;
            s2 = peg$parseINDENT();
            if (s2 !== peg$FAILED) {
              s3 = peg$parseINDENT();
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parselist();
                if (s5 !== peg$FAILED) {
                  while (s5 !== peg$FAILED) {
                    s4.push(s5);
                    s5 = peg$parselist();
                  }
                } else {
                  s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                  s5 = [];
                  s6 = peg$parseNEWLINE();
                  while (s6 !== peg$FAILED) {
                    s5.push(s6);
                    s6 = peg$parseNEWLINE();
                  }
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseDEDENT();
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parseDEDENT();
                      if (s7 !== peg$FAILED) {
                        peg$savedPos = s1;
                        s2 = peg$c125(s4);
                        s1 = s2;
                      } else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c126(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c122);
          }
        }

        return s0;
      }

      function peg$parseremarks() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c128) {
          s3 = peg$c128;
          peg$currPos += 2;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c129);
          }
        }
        if (s3 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 27880) {
            s3 = peg$c130;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c131);
            }
          }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          if (peg$c32.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c33);
            }
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            if (peg$c32.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c33);
              }
            }
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$parse__();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseINLINE();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s2;
              s3 = peg$c132(s1, s4);
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 === peg$FAILED) {
            s2 = null;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$parseNEWLINE();
            if (s3 !== peg$FAILED) {
              s4 = peg$currPos;
              s5 = peg$parseINDENT();
              if (s5 !== peg$FAILED) {
                s6 = peg$parseINDENT();
                if (s6 !== peg$FAILED) {
                  s7 = [];
                  s8 = peg$currPos;
                  s9 = peg$currPos;
                  peg$silentFails++;
                  s10 = peg$currPos;
                  s11 = peg$c70;
                  if (s11 !== peg$FAILED) {
                    peg$savedPos = peg$currPos;
                    s12 = peg$c133(s1, s2);
                    if (s12) {
                      s12 = void 0;
                    } else {
                      s12 = peg$FAILED;
                    }
                    if (s12 !== peg$FAILED) {
                      s11 = [s11, s12];
                      s10 = s11;
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s10;
                    s10 = peg$FAILED;
                  }
                  peg$silentFails--;
                  if (s10 !== peg$FAILED) {
                    peg$currPos = s9;
                    s9 = void 0;
                  } else {
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseparagraph_item();
                    if (s10 === peg$FAILED) {
                      s10 = peg$parseno_name_paragraph_item();
                    }
                    if (s10 !== peg$FAILED) {
                      s11 = peg$currPos;
                      peg$silentFails++;
                      s12 = peg$currPos;
                      s13 = peg$c70;
                      if (s13 !== peg$FAILED) {
                        peg$savedPos = peg$currPos;
                        s14 = peg$c134(s1, s2, s10);
                        if (s14) {
                          s14 = void 0;
                        } else {
                          s14 = peg$FAILED;
                        }
                        if (s14 !== peg$FAILED) {
                          s13 = [s13, s14];
                          s12 = s13;
                        } else {
                          peg$currPos = s12;
                          s12 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s12;
                        s12 = peg$FAILED;
                      }
                      peg$silentFails--;
                      if (s12 !== peg$FAILED) {
                        peg$currPos = s11;
                        s11 = void 0;
                      } else {
                        s11 = peg$FAILED;
                      }
                      if (s11 !== peg$FAILED) {
                        peg$savedPos = s8;
                        s9 = peg$c135(s1, s2, s10);
                        s8 = s9;
                      } else {
                        peg$currPos = s8;
                        s8 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                  if (s8 === peg$FAILED) {
                    s8 = peg$currPos;
                    s9 = peg$currPos;
                    peg$silentFails++;
                    s10 = peg$currPos;
                    s11 = peg$c70;
                    if (s11 !== peg$FAILED) {
                      peg$savedPos = peg$currPos;
                      s12 = peg$c136(s1, s2);
                      if (s12) {
                        s12 = void 0;
                      } else {
                        s12 = peg$FAILED;
                      }
                      if (s12 !== peg$FAILED) {
                        s11 = [s11, s12];
                        s10 = s11;
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s10;
                      s10 = peg$FAILED;
                    }
                    peg$silentFails--;
                    if (s10 !== peg$FAILED) {
                      peg$currPos = s9;
                      s9 = void 0;
                    } else {
                      s9 = peg$FAILED;
                    }
                    if (s9 !== peg$FAILED) {
                      if (input.substr(peg$currPos, 5) === peg$c75) {
                        s10 = peg$c75;
                        peg$currPos += 5;
                      } else {
                        s10 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c76);
                        }
                      }
                      if (s10 !== peg$FAILED) {
                        s9 = [s9, s10];
                        s8 = s9;
                      } else {
                        peg$currPos = s8;
                        s8 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                    if (s8 === peg$FAILED) {
                      s8 = peg$currPos;
                      s9 = peg$parseINLINE();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseNEWLINE();
                        if (s10 !== peg$FAILED) {
                          peg$savedPos = s8;
                          s9 = peg$c137(s1, s2, s9);
                          s8 = s9;
                        } else {
                          peg$currPos = s8;
                          s8 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s8;
                        s8 = peg$FAILED;
                      }
                    }
                  }
                  if (s8 !== peg$FAILED) {
                    while (s8 !== peg$FAILED) {
                      s7.push(s8);
                      s8 = peg$currPos;
                      s9 = peg$currPos;
                      peg$silentFails++;
                      s10 = peg$currPos;
                      s11 = peg$c70;
                      if (s11 !== peg$FAILED) {
                        peg$savedPos = peg$currPos;
                        s12 = peg$c133(s1, s2);
                        if (s12) {
                          s12 = void 0;
                        } else {
                          s12 = peg$FAILED;
                        }
                        if (s12 !== peg$FAILED) {
                          s11 = [s11, s12];
                          s10 = s11;
                        } else {
                          peg$currPos = s10;
                          s10 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s10;
                        s10 = peg$FAILED;
                      }
                      peg$silentFails--;
                      if (s10 !== peg$FAILED) {
                        peg$currPos = s9;
                        s9 = void 0;
                      } else {
                        s9 = peg$FAILED;
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseparagraph_item();
                        if (s10 === peg$FAILED) {
                          s10 = peg$parseno_name_paragraph_item();
                        }
                        if (s10 !== peg$FAILED) {
                          s11 = peg$currPos;
                          peg$silentFails++;
                          s12 = peg$currPos;
                          s13 = peg$c70;
                          if (s13 !== peg$FAILED) {
                            peg$savedPos = peg$currPos;
                            s14 = peg$c134(s1, s2, s10);
                            if (s14) {
                              s14 = void 0;
                            } else {
                              s14 = peg$FAILED;
                            }
                            if (s14 !== peg$FAILED) {
                              s13 = [s13, s14];
                              s12 = s13;
                            } else {
                              peg$currPos = s12;
                              s12 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s12;
                            s12 = peg$FAILED;
                          }
                          peg$silentFails--;
                          if (s12 !== peg$FAILED) {
                            peg$currPos = s11;
                            s11 = void 0;
                          } else {
                            s11 = peg$FAILED;
                          }
                          if (s11 !== peg$FAILED) {
                            peg$savedPos = s8;
                            s9 = peg$c135(s1, s2, s10);
                            s8 = s9;
                          } else {
                            peg$currPos = s8;
                            s8 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s8;
                          s8 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s8;
                        s8 = peg$FAILED;
                      }
                      if (s8 === peg$FAILED) {
                        s8 = peg$currPos;
                        s9 = peg$currPos;
                        peg$silentFails++;
                        s10 = peg$currPos;
                        s11 = peg$c70;
                        if (s11 !== peg$FAILED) {
                          peg$savedPos = peg$currPos;
                          s12 = peg$c136(s1, s2);
                          if (s12) {
                            s12 = void 0;
                          } else {
                            s12 = peg$FAILED;
                          }
                          if (s12 !== peg$FAILED) {
                            s11 = [s11, s12];
                            s10 = s11;
                          } else {
                            peg$currPos = s10;
                            s10 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s10;
                          s10 = peg$FAILED;
                        }
                        peg$silentFails--;
                        if (s10 !== peg$FAILED) {
                          peg$currPos = s9;
                          s9 = void 0;
                        } else {
                          s9 = peg$FAILED;
                        }
                        if (s9 !== peg$FAILED) {
                          if (input.substr(peg$currPos, 5) === peg$c75) {
                            s10 = peg$c75;
                            peg$currPos += 5;
                          } else {
                            s10 = peg$FAILED;
                            if (peg$silentFails === 0) {
                              peg$fail(peg$c76);
                            }
                          }
                          if (s10 !== peg$FAILED) {
                            s9 = [s9, s10];
                            s8 = s9;
                          } else {
                            peg$currPos = s8;
                            s8 = peg$FAILED;
                          }
                        } else {
                          peg$currPos = s8;
                          s8 = peg$FAILED;
                        }
                        if (s8 === peg$FAILED) {
                          s8 = peg$currPos;
                          s9 = peg$parseINLINE();
                          if (s9 !== peg$FAILED) {
                            s10 = peg$parseNEWLINE();
                            if (s10 !== peg$FAILED) {
                              peg$savedPos = s8;
                              s9 = peg$c137(s1, s2, s9);
                              s8 = s9;
                            } else {
                              peg$currPos = s8;
                              s8 = peg$FAILED;
                            }
                          } else {
                            peg$currPos = s8;
                            s8 = peg$FAILED;
                          }
                        }
                      }
                    }
                  } else {
                    s7 = peg$FAILED;
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = [];
                    s9 = peg$parseNEWLINE();
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      s9 = peg$parseNEWLINE();
                    }
                    if (s8 !== peg$FAILED) {
                      s9 = peg$parseDEDENT();
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseDEDENT();
                        if (s10 !== peg$FAILED) {
                          peg$savedPos = s4;
                          s5 = peg$c138(s1, s2, s7);
                          s4 = s5;
                        } else {
                          peg$currPos = s4;
                          s4 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s4;
                        s4 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s4;
                      s4 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c139(s1, s2, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c127);
          }
        }

        return s0;
      }

      function peg$parsefig_struct() {
        var s0, s1;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsefig();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c141(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c140);
          }
        }

        return s0;
      }

      function peg$parsefig() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;

        peg$silentFails++;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c143) {
          s1 = peg$c143;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c144);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parse__();
          if (s2 !== peg$FAILED) {
            if (input.substr(peg$currPos, 6) === peg$c145) {
              s3 = peg$c145;
              peg$currPos += 6;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c146);
              }
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$parse_();
              if (s4 !== peg$FAILED) {
                if (input.substr(peg$currPos, 2) === peg$c147) {
                  s5 = peg$c147;
                  peg$currPos += 2;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c148);
                  }
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$parse_();
                  if (s6 !== peg$FAILED) {
                    s7 = peg$currPos;
                    s8 = peg$parseINLINE();
                    if (s8 !== peg$FAILED) {
                      s7 = input.substring(s7, peg$currPos);
                    } else {
                      s7 = s8;
                    }
                    if (s7 !== peg$FAILED) {
                      s8 = peg$parseNEWLINE();
                      if (s8 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$c149(s7);
                        s0 = s1;
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c142);
          }
        }

        return s0;
      }

      function peg$parseappdx_item() {
        var s0, s1;

        peg$silentFails++;
        s0 = peg$parseappdx_table();
        if (s0 === peg$FAILED) {
          s0 = peg$parseappdx_style();
          if (s0 === peg$FAILED) {
            s0 = peg$parsesuppl_provision();
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c150);
          }
        }

        return s0;
      }

      function peg$parseappdx_table_title() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$currPos;
        s3 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c152) {
          s4 = peg$c152;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c153);
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c154.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c155);
            }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c154.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c155);
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseROUND_PARENTHESES_INLINE();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c156(s2, s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$currPos;
            s5 = [];
            if (peg$c154.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c155);
              }
            }
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              if (peg$c154.test(input.charAt(peg$currPos))) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c155);
                }
              }
            }
            if (s5 !== peg$FAILED) {
              s4 = input.substring(s4, peg$currPos);
            } else {
              s4 = s5;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s1;
              s2 = peg$c157(s2, s3, s4);
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c158(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c151);
          }
        }

        return s0;
      }

      function peg$parseappdx_table() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseappdx_table_title();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseNEWLINE();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseNEWLINE();
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseINDENT();
            if (s4 !== peg$FAILED) {
              s5 = peg$parseappdx_table_children();
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parseremarks();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parseremarks();
                }
                if (s6 !== peg$FAILED) {
                  s7 = [];
                  s8 = peg$parseNEWLINE();
                  while (s8 !== peg$FAILED) {
                    s7.push(s8);
                    s8 = peg$parseNEWLINE();
                  }
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseDEDENT();
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s3;
                      s4 = peg$c160(s1, s5, s6);
                      s3 = s4;
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c161(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c159);
          }
        }

        return s0;
      }

      function peg$parseappdx_table_children() {
        var s0, s1;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsetable_struct();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c163(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = [];
          s1 = peg$parseparagraph_item();
          if (s1 !== peg$FAILED) {
            while (s1 !== peg$FAILED) {
              s0.push(s1);
              s1 = peg$parseparagraph_item();
            }
          } else {
            s0 = peg$FAILED;
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c162);
          }
        }

        return s0;
      }

      function peg$parseappdx_style_title() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        s2 = peg$currPos;
        s3 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c165) {
          s4 = peg$c165;
          peg$currPos += 2;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c166);
          }
        }
        if (s4 !== peg$FAILED) {
          s5 = [];
          if (peg$c154.test(input.charAt(peg$currPos))) {
            s6 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c155);
            }
          }
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            if (peg$c154.test(input.charAt(peg$currPos))) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c155);
              }
            }
          }
          if (s5 !== peg$FAILED) {
            s4 = [s4, s5];
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s2 = input.substring(s2, peg$currPos);
        } else {
          s2 = s3;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parse_();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseROUND_PARENTHESES_INLINE();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c156(s2, s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            if (peg$c154.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c155);
              }
            }
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c154.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c155);
                }
              }
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s1;
              s2 = peg$c167(s2, s3, s4);
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c158(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c164);
          }
        }

        return s0;
      }

      function peg$parseappdx_style() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseappdx_style_title();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parseNEWLINE();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parseNEWLINE();
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseINDENT();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              s6 = peg$parsestyle_struct();
              if (s6 !== peg$FAILED) {
                s7 = [];
                s8 = peg$currPos;
                s9 = [];
                s10 = peg$parseNEWLINE();
                if (s10 !== peg$FAILED) {
                  while (s10 !== peg$FAILED) {
                    s9.push(s10);
                    s10 = peg$parseNEWLINE();
                  }
                } else {
                  s9 = peg$FAILED;
                }
                if (s9 !== peg$FAILED) {
                  s10 = peg$parsestyle_struct();
                  if (s10 !== peg$FAILED) {
                    peg$savedPos = s8;
                    s9 = peg$c169(s1, s6, s10);
                    s8 = s9;
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s8;
                  s8 = peg$FAILED;
                }
                while (s8 !== peg$FAILED) {
                  s7.push(s8);
                  s8 = peg$currPos;
                  s9 = [];
                  s10 = peg$parseNEWLINE();
                  if (s10 !== peg$FAILED) {
                    while (s10 !== peg$FAILED) {
                      s9.push(s10);
                      s10 = peg$parseNEWLINE();
                    }
                  } else {
                    s9 = peg$FAILED;
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parsestyle_struct();
                    if (s10 !== peg$FAILED) {
                      peg$savedPos = s8;
                      s9 = peg$c169(s1, s6, s10);
                      s8 = s9;
                    } else {
                      peg$currPos = s8;
                      s8 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s8;
                    s8 = peg$FAILED;
                  }
                }
                if (s7 !== peg$FAILED) {
                  peg$savedPos = s5;
                  s6 = peg$c170(s1, s6, s7);
                  s5 = s6;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parseNEWLINE();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parseNEWLINE();
                }
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseDEDENT();
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s3;
                    s4 = peg$c171(s1, s5);
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c172(s1, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c168);
          }
        }

        return s0;
      }

      function peg$parseappdx_style_children() {
        var s0, s1;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsetable_struct();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c163(s1);
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$parsefig();
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c124(s1);
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = [];
            s1 = peg$parseparagraph_item();
            if (s1 !== peg$FAILED) {
              while (s1 !== peg$FAILED) {
                s0.push(s1);
                s1 = peg$parseparagraph_item();
              }
            } else {
              s0 = peg$FAILED;
            }
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c173);
          }
        }

        return s0;
      }

      function peg$parsesuppl_provision_label() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parse__();
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = peg$currPos;
          if (peg$c175.test(input.charAt(peg$currPos))) {
            s4 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c176);
            }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 21063) {
                s6 = peg$c177;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c178);
                }
              }
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            s2 = input.substring(s2, peg$currPos);
          } else {
            s2 = s3;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parseROUND_PARENTHESES_INLINE();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c179(s2, s4);
            }
            s3 = s4;
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s4 = peg$currPos;
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 25220) {
                  s6 = peg$c180;
                  peg$currPos++;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c181);
                  }
                }
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 === peg$FAILED) {
                s4 = null;
              }
              if (s4 !== peg$FAILED) {
                s5 = [];
                s6 = peg$parseNEWLINE();
                if (s6 !== peg$FAILED) {
                  while (s6 !== peg$FAILED) {
                    s5.push(s6);
                    s6 = peg$parseNEWLINE();
                  }
                } else {
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s0;
                  s1 = peg$c182(s2, s3, s4);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c174);
          }
        }

        return s0;
      }

      function peg$parsesuppl_provision() {
        var s0, s1, s2, s3, s4, s5;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parsesuppl_provision_label();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$parsearticle();
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$parsearticle();
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 === peg$FAILED) {
            s2 = [];
            s3 = peg$parseparagraph_item();
            if (s3 !== peg$FAILED) {
              while (s3 !== peg$FAILED) {
                s2.push(s3);
                s3 = peg$parseparagraph_item();
              }
            } else {
              s2 = peg$FAILED;
            }
            if (s2 === peg$FAILED) {
              s2 = peg$currPos;
              s3 = peg$parseno_name_paragraph_item();
              if (s3 !== peg$FAILED) {
                s4 = [];
                s5 = peg$parseparagraph_item();
                while (s5 !== peg$FAILED) {
                  s4.push(s5);
                  s5 = peg$parseparagraph_item();
                }
                if (s4 !== peg$FAILED) {
                  peg$savedPos = s2;
                  s3 = peg$c184(s1, s3, s4);
                  s2 = s3;
                } else {
                  peg$currPos = s2;
                  s2 = peg$FAILED;
                }
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            }
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c185(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c183);
          }
        }

        return s0;
      }

      function peg$parsecolumns_or_sentences() {
        var s0, s1;

        peg$silentFails++;
        s0 = peg$parsecolumns();
        if (s0 === peg$FAILED) {
          s0 = peg$parseperiod_sentences();
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            s1 = peg$parseINLINE();
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c187(s1);
            }
            s0 = s1;
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c186);
          }
        }

        return s0;
      }

      function peg$parseperiod_sentences() {
        var s0, s1, s2;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsePERIOD_SENTENCE_FRAGMENT();
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsePERIOD_SENTENCE_FRAGMENT();
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c189(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c188);
          }
        }

        return s0;
      }

      function peg$parsecolumns() {
        var s0, s1, s2, s3, s4, s5;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$parseperiod_sentences();
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$parse__();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseperiod_sentences();
            if (s5 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c191(s1, s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              s3 = peg$currPos;
              s4 = peg$parse__();
              if (s4 !== peg$FAILED) {
                s5 = peg$parseperiod_sentences();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s3;
                  s4 = peg$c191(s1, s5);
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c192(s1, s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c190);
          }
        }

        return s0;
      }

      function peg$parseINLINE() {
        var s0, s1, s2, s3, s4;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseINDENT();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseDEDENT();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$parseOUTSIDE_PARENTHESES_INLINE();
            if (s4 === peg$FAILED) {
              s4 = peg$parsePARENTHESES_INLINE();
              if (s4 === peg$FAILED) {
                s4 = peg$parseMISMATCH_END_PARENTHESIS();
              }
            }
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$parseOUTSIDE_PARENTHESES_INLINE();
                if (s4 === peg$FAILED) {
                  s4 = peg$parsePARENTHESES_INLINE();
                  if (s4 === peg$FAILED) {
                    s4 = peg$parseMISMATCH_END_PARENTHESIS();
                  }
                }
              }
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c194(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c193);
          }
        }

        return s0;
      }

      function peg$parseNEXTINLINE() {
        var s0, s1, s2;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parseINDENT();
        if (s2 === peg$FAILED) {
          s2 = peg$parseDEDENT();
          if (s2 === peg$FAILED) {
            if (peg$c196.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c197);
              }
            }
          }
        }
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseINDENT();
          if (s2 === peg$FAILED) {
            s2 = peg$parseDEDENT();
            if (s2 === peg$FAILED) {
              if (peg$c196.test(input.charAt(peg$currPos))) {
                s2 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s2 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c197);
                }
              }
            }
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parseINLINE();
          if (s2 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c198(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c195);
          }
        }

        return s0;
      }

      function peg$parseNOT_PARENTHESIS_CHAR() {
        var s0, s1;

        peg$silentFails++;
        if (peg$c200.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c201);
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c199);
          }
        }

        return s0;
      }

      function peg$parseINLINE_FRAGMENT() {
        var s0, s1, s2, s3, s4, s5, s6, s7;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseINDENT();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseDEDENT();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$currPos;
            s5 = peg$currPos;
            s6 = [];
            if (peg$c203.test(input.charAt(peg$currPos))) {
              s7 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s7 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c204);
              }
            }
            if (s7 !== peg$FAILED) {
              while (s7 !== peg$FAILED) {
                s6.push(s7);
                if (peg$c203.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c204);
                  }
                }
              }
            } else {
              s6 = peg$FAILED;
            }
            if (s6 !== peg$FAILED) {
              s5 = input.substring(s5, peg$currPos);
            } else {
              s5 = s6;
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s4;
              s5 = peg$c205(s5);
            }
            s4 = s5;
            if (s4 === peg$FAILED) {
              s4 = peg$parsePARENTHESES_INLINE();
              if (s4 === peg$FAILED) {
                s4 = peg$parseMISMATCH_END_PARENTHESIS();
              }
            }
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$currPos;
                s5 = peg$currPos;
                s6 = [];
                if (peg$c203.test(input.charAt(peg$currPos))) {
                  s7 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c204);
                  }
                }
                if (s7 !== peg$FAILED) {
                  while (s7 !== peg$FAILED) {
                    s6.push(s7);
                    if (peg$c203.test(input.charAt(peg$currPos))) {
                      s7 = input.charAt(peg$currPos);
                      peg$currPos++;
                    } else {
                      s7 = peg$FAILED;
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c204);
                      }
                    }
                  }
                } else {
                  s6 = peg$FAILED;
                }
                if (s6 !== peg$FAILED) {
                  s5 = input.substring(s5, peg$currPos);
                } else {
                  s5 = s6;
                }
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s4;
                  s5 = peg$c205(s5);
                }
                s4 = s5;
                if (s4 === peg$FAILED) {
                  s4 = peg$parsePARENTHESES_INLINE();
                  if (s4 === peg$FAILED) {
                    s4 = peg$parseMISMATCH_END_PARENTHESIS();
                  }
                }
              }
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c194(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c202);
          }
        }

        return s0;
      }

      function peg$parsePERIOD_SENTENCE_FRAGMENT() {
        var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseINDENT();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseDEDENT();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = [];
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            if (input.substr(peg$currPos, 13) === peg$c207) {
              s6 = peg$c207;
              peg$currPos += 13;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c208);
              }
            }
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$currPos;
              s7 = peg$currPos;
              s8 = [];
              if (peg$c209.test(input.charAt(peg$currPos))) {
                s9 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s9 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c210);
                }
              }
              if (s9 !== peg$FAILED) {
                while (s9 !== peg$FAILED) {
                  s8.push(s9);
                  if (peg$c209.test(input.charAt(peg$currPos))) {
                    s9 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s9 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c210);
                    }
                  }
                }
              } else {
                s8 = peg$FAILED;
              }
              if (s8 !== peg$FAILED) {
                s7 = input.substring(s7, peg$currPos);
              } else {
                s7 = s8;
              }
              if (s7 !== peg$FAILED) {
                peg$savedPos = s6;
                s7 = peg$c205(s7);
              }
              s6 = s7;
              if (s6 === peg$FAILED) {
                s6 = peg$parsePARENTHESES_INLINE();
                if (s6 === peg$FAILED) {
                  s6 = peg$parseMISMATCH_END_PARENTHESIS();
                }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s4;
                s5 = peg$c125(s6);
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              while (s4 !== peg$FAILED) {
                s3.push(s4);
                s4 = peg$currPos;
                s5 = peg$currPos;
                peg$silentFails++;
                if (input.substr(peg$currPos, 13) === peg$c207) {
                  s6 = peg$c207;
                  peg$currPos += 13;
                } else {
                  s6 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c208);
                  }
                }
                peg$silentFails--;
                if (s6 === peg$FAILED) {
                  s5 = void 0;
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
                if (s5 !== peg$FAILED) {
                  s6 = peg$currPos;
                  s7 = peg$currPos;
                  s8 = [];
                  if (peg$c209.test(input.charAt(peg$currPos))) {
                    s9 = input.charAt(peg$currPos);
                    peg$currPos++;
                  } else {
                    s9 = peg$FAILED;
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c210);
                    }
                  }
                  if (s9 !== peg$FAILED) {
                    while (s9 !== peg$FAILED) {
                      s8.push(s9);
                      if (peg$c209.test(input.charAt(peg$currPos))) {
                        s9 = input.charAt(peg$currPos);
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c210);
                        }
                      }
                    }
                  } else {
                    s8 = peg$FAILED;
                  }
                  if (s8 !== peg$FAILED) {
                    s7 = input.substring(s7, peg$currPos);
                  } else {
                    s7 = s8;
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s6;
                    s7 = peg$c205(s7);
                  }
                  s6 = s7;
                  if (s6 === peg$FAILED) {
                    s6 = peg$parsePARENTHESES_INLINE();
                    if (s6 === peg$FAILED) {
                      s6 = peg$parseMISMATCH_END_PARENTHESIS();
                    }
                  }
                  if (s6 !== peg$FAILED) {
                    peg$savedPos = s4;
                    s5 = peg$c125(s6);
                    s4 = s5;
                  } else {
                    peg$currPos = s4;
                    s4 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
              }
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 12290) {
                s4 = peg$c211;
                peg$currPos++;
              } else {
                s4 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c212);
                }
              }
              if (s4 === peg$FAILED) {
                s4 = peg$currPos;
                peg$silentFails++;
                s5 = peg$parse__();
                peg$silentFails--;
                if (s5 !== peg$FAILED) {
                  peg$currPos = s4;
                  s4 = void 0;
                } else {
                  s4 = peg$FAILED;
                }
                if (s4 === peg$FAILED) {
                  s4 = peg$currPos;
                  peg$silentFails++;
                  s5 = peg$parseNEWLINE();
                  peg$silentFails--;
                  if (s5 !== peg$FAILED) {
                    peg$currPos = s4;
                    s4 = void 0;
                  } else {
                    s4 = peg$FAILED;
                  }
                }
              }
              if (s4 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c213(s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 12290) {
            s1 = peg$c211;
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c212);
            }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c214(s1);
          }
          s0 = s1;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c206);
          }
        }

        return s0;
      }

      function peg$parseOUTSIDE_PARENTHESES_INLINE() {
        var s0, s1, s2, s3, s4, s5;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$parseINDENT();
        peg$silentFails--;
        if (s2 === peg$FAILED) {
          s1 = void 0;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          peg$silentFails++;
          s3 = peg$parseDEDENT();
          peg$silentFails--;
          if (s3 === peg$FAILED) {
            s2 = void 0;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = [];
            s5 = peg$parseNOT_PARENTHESIS_CHAR();
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                s5 = peg$parseNOT_PARENTHESIS_CHAR();
              }
            } else {
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s3 = input.substring(s3, peg$currPos);
            } else {
              s3 = s4;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c205(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c215);
          }
        }

        return s0;
      }

      function peg$parseMISMATCH_START_PARENTHESIS() {
        var s0, s1, s2;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (peg$c217.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c218);
          }
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c219(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c216);
          }
        }

        return s0;
      }

      function peg$parseMISMATCH_END_PARENTHESIS() {
        var s0, s1, s2;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (peg$c221.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c222);
          }
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c223(s1);
        }
        s0 = s1;
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c220);
          }
        }

        return s0;
      }

      function peg$parsePARENTHESES_INLINE() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        s1 = peg$currPos;
        peg$silentFails++;
        s2 = peg$currPos;
        s3 = peg$c70;
        if (s3 !== peg$FAILED) {
          peg$savedPos = peg$currPos;
          s4 = peg$c225();
          if (s4) {
            s4 = void 0;
          } else {
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        peg$silentFails--;
        if (s2 !== peg$FAILED) {
          peg$currPos = s1;
          s1 = void 0;
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$parsePARENTHESES_INLINE_INNER();
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            peg$silentFails++;
            s4 = peg$currPos;
            s5 = peg$c70;
            if (s5 !== peg$FAILED) {
              peg$savedPos = peg$currPos;
              s6 = peg$c226(s2);
              if (s6) {
                s6 = void 0;
              } else {
                s6 = peg$FAILED;
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
            peg$silentFails--;
            if (s4 !== peg$FAILED) {
              peg$currPos = s3;
              s3 = void 0;
            } else {
              s3 = peg$FAILED;
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c125(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          s1 = peg$currPos;
          peg$silentFails++;
          s2 = peg$currPos;
          s3 = peg$c70;
          if (s3 !== peg$FAILED) {
            peg$savedPos = peg$currPos;
            s4 = peg$c227();
            if (s4) {
              s4 = void 0;
            } else {
              s4 = peg$FAILED;
            }
            if (s4 !== peg$FAILED) {
              s3 = [s3, s4];
              s2 = s3;
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
          peg$silentFails--;
          if (s2 !== peg$FAILED) {
            peg$currPos = s1;
            s1 = void 0;
          } else {
            s1 = peg$FAILED;
          }
          if (s1 !== peg$FAILED) {
            if (input.substr(peg$currPos, 5) === peg$c75) {
              s2 = peg$c75;
              peg$currPos += 5;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c76);
              }
            }
            if (s2 !== peg$FAILED) {
              s1 = [s1, s2];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c224);
          }
        }

        return s0;
      }

      function peg$parsePARENTHESES_INLINE_INNER() {
        var s0, s1;

        peg$silentFails++;
        s0 = peg$parseROUND_PARENTHESES_INLINE();
        if (s0 === peg$FAILED) {
          s0 = peg$parseSQUARE_BRACKETS_INLINE();
          if (s0 === peg$FAILED) {
            s0 = peg$parseCURLY_BRACKETS_INLINE();
            if (s0 === peg$FAILED) {
              s0 = peg$parseSQUARE_PARENTHESES_INLINE();
              if (s0 === peg$FAILED) {
                s0 = peg$parsequote_struct();
                if (s0 === peg$FAILED) {
                  s0 = peg$parseMISMATCH_START_PARENTHESIS();
                }
              }
            }
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c228);
          }
        }

        return s0;
      }

      function peg$parseROUND_PARENTHESES_INLINE() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        if (peg$c230.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c231);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$parseNOT_PARENTHESIS_CHAR();
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseNOT_PARENTHESIS_CHAR();
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c232(s1, s4);
          }
          s3 = s4;
          if (s3 === peg$FAILED) {
            s3 = peg$parsePARENTHESES_INLINE();
            if (s3 === peg$FAILED) {
              s3 = peg$currPos;
              s4 = peg$currPos;
              peg$silentFails++;
              if (peg$c233.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c234);
                }
              }
              peg$silentFails--;
              if (s5 === peg$FAILED) {
                s4 = void 0;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseMISMATCH_END_PARENTHESIS();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s3;
                  s4 = peg$c235(s1, s5);
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$currPos;
            s5 = [];
            s6 = peg$parseNOT_PARENTHESIS_CHAR();
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parseNOT_PARENTHESIS_CHAR();
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s4 = input.substring(s4, peg$currPos);
            } else {
              s4 = s5;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c232(s1, s4);
            }
            s3 = s4;
            if (s3 === peg$FAILED) {
              s3 = peg$parsePARENTHESES_INLINE();
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$currPos;
                peg$silentFails++;
                if (peg$c233.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c234);
                  }
                }
                peg$silentFails--;
                if (s5 === peg$FAILED) {
                  s4 = void 0;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseMISMATCH_END_PARENTHESIS();
                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s3;
                    s4 = peg$c235(s1, s5);
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              }
            }
          }
          if (s2 !== peg$FAILED) {
            if (peg$c233.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c234);
              }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c236(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c229);
          }
        }

        return s0;
      }

      function peg$parseSQUARE_BRACKETS_INLINE() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        if (peg$c238.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c239);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$parseNOT_PARENTHESIS_CHAR();
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseNOT_PARENTHESIS_CHAR();
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c232(s1, s4);
          }
          s3 = s4;
          if (s3 === peg$FAILED) {
            s3 = peg$parsePARENTHESES_INLINE();
            if (s3 === peg$FAILED) {
              s3 = peg$currPos;
              s4 = peg$currPos;
              peg$silentFails++;
              if (peg$c240.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c241);
                }
              }
              peg$silentFails--;
              if (s5 === peg$FAILED) {
                s4 = void 0;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseMISMATCH_END_PARENTHESIS();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s3;
                  s4 = peg$c235(s1, s5);
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$currPos;
            s5 = [];
            s6 = peg$parseNOT_PARENTHESIS_CHAR();
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parseNOT_PARENTHESIS_CHAR();
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s4 = input.substring(s4, peg$currPos);
            } else {
              s4 = s5;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c232(s1, s4);
            }
            s3 = s4;
            if (s3 === peg$FAILED) {
              s3 = peg$parsePARENTHESES_INLINE();
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$currPos;
                peg$silentFails++;
                if (peg$c240.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c241);
                  }
                }
                peg$silentFails--;
                if (s5 === peg$FAILED) {
                  s4 = void 0;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseMISMATCH_END_PARENTHESIS();
                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s3;
                    s4 = peg$c235(s1, s5);
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              }
            }
          }
          if (s2 !== peg$FAILED) {
            if (peg$c240.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c241);
              }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c242(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c237);
          }
        }

        return s0;
      }

      function peg$parseCURLY_BRACKETS_INLINE() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        if (peg$c244.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c245);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          s3 = peg$currPos;
          s4 = peg$currPos;
          s5 = [];
          s6 = peg$parseNOT_PARENTHESIS_CHAR();
          if (s6 !== peg$FAILED) {
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parseNOT_PARENTHESIS_CHAR();
            }
          } else {
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            s4 = input.substring(s4, peg$currPos);
          } else {
            s4 = s5;
          }
          if (s4 !== peg$FAILED) {
            peg$savedPos = s3;
            s4 = peg$c232(s1, s4);
          }
          s3 = s4;
          if (s3 === peg$FAILED) {
            s3 = peg$parsePARENTHESES_INLINE();
            if (s3 === peg$FAILED) {
              s3 = peg$currPos;
              s4 = peg$currPos;
              peg$silentFails++;
              if (peg$c246.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c247);
                }
              }
              peg$silentFails--;
              if (s5 === peg$FAILED) {
                s4 = void 0;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
              if (s4 !== peg$FAILED) {
                s5 = peg$parseMISMATCH_END_PARENTHESIS();
                if (s5 !== peg$FAILED) {
                  peg$savedPos = s3;
                  s4 = peg$c235(s1, s5);
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            }
          }
          while (s3 !== peg$FAILED) {
            s2.push(s3);
            s3 = peg$currPos;
            s4 = peg$currPos;
            s5 = [];
            s6 = peg$parseNOT_PARENTHESIS_CHAR();
            if (s6 !== peg$FAILED) {
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parseNOT_PARENTHESIS_CHAR();
              }
            } else {
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              s4 = input.substring(s4, peg$currPos);
            } else {
              s4 = s5;
            }
            if (s4 !== peg$FAILED) {
              peg$savedPos = s3;
              s4 = peg$c232(s1, s4);
            }
            s3 = s4;
            if (s3 === peg$FAILED) {
              s3 = peg$parsePARENTHESES_INLINE();
              if (s3 === peg$FAILED) {
                s3 = peg$currPos;
                s4 = peg$currPos;
                peg$silentFails++;
                if (peg$c246.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c247);
                  }
                }
                peg$silentFails--;
                if (s5 === peg$FAILED) {
                  s4 = void 0;
                } else {
                  peg$currPos = s4;
                  s4 = peg$FAILED;
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseMISMATCH_END_PARENTHESIS();
                  if (s5 !== peg$FAILED) {
                    peg$savedPos = s3;
                    s4 = peg$c235(s1, s5);
                    s3 = s4;
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s3;
                  s3 = peg$FAILED;
                }
              }
            }
          }
          if (s2 !== peg$FAILED) {
            if (peg$c246.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c247);
              }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c248(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c243);
          }
        }

        return s0;
      }

      function peg$parseSQUARE_PARENTHESES_INLINE() {
        var s0, s1, s2, s3, s4, s5;

        peg$silentFails++;
        s0 = peg$currPos;
        if (peg$c250.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c251);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          s4 = [];
          if (peg$c252.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c253);
            }
          }
          if (s5 !== peg$FAILED) {
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              if (peg$c252.test(input.charAt(peg$currPos))) {
                s5 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c253);
                }
              }
            }
          } else {
            s4 = peg$FAILED;
          }
          if (s4 === peg$FAILED) {
            s4 = peg$parseSQUARE_PARENTHESES_INLINE();
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = [];
            if (peg$c252.test(input.charAt(peg$currPos))) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c253);
              }
            }
            if (s5 !== peg$FAILED) {
              while (s5 !== peg$FAILED) {
                s4.push(s5);
                if (peg$c252.test(input.charAt(peg$currPos))) {
                  s5 = input.charAt(peg$currPos);
                  peg$currPos++;
                } else {
                  s5 = peg$FAILED;
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c253);
                  }
                }
              }
            } else {
              s4 = peg$FAILED;
            }
            if (s4 === peg$FAILED) {
              s4 = peg$parseSQUARE_PARENTHESES_INLINE();
            }
          }
          if (s3 !== peg$FAILED) {
            s2 = input.substring(s2, peg$currPos);
          } else {
            s2 = s3;
          }
          if (s2 !== peg$FAILED) {
            if (peg$c254.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c255);
              }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c256(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c249);
          }
        }

        return s0;
      }

      function peg$parsequote_struct() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 13) === peg$c207) {
          s1 = peg$c207;
          peg$currPos += 13;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c208);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = peg$currPos;
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$currPos;
          peg$silentFails++;
          if (input.substr(peg$currPos, 14) === peg$c258) {
            s6 = peg$c258;
            peg$currPos += 14;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c259);
            }
          }
          peg$silentFails--;
          if (s6 === peg$FAILED) {
            s5 = void 0;
          } else {
            peg$currPos = s5;
            s5 = peg$FAILED;
          }
          if (s5 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s6 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c0);
              }
            }
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$currPos;
            s5 = peg$currPos;
            peg$silentFails++;
            if (input.substr(peg$currPos, 14) === peg$c258) {
              s6 = peg$c258;
              peg$currPos += 14;
            } else {
              s6 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c259);
              }
            }
            peg$silentFails--;
            if (s6 === peg$FAILED) {
              s5 = void 0;
            } else {
              peg$currPos = s5;
              s5 = peg$FAILED;
            }
            if (s5 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s6 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c0);
                }
              }
              if (s6 !== peg$FAILED) {
                s5 = [s5, s6];
                s4 = s5;
              } else {
                peg$currPos = s4;
                s4 = peg$FAILED;
              }
            } else {
              peg$currPos = s4;
              s4 = peg$FAILED;
            }
          }
          if (s3 !== peg$FAILED) {
            s2 = input.substring(s2, peg$currPos);
          } else {
            s2 = s3;
          }
          if (s2 !== peg$FAILED) {
            if (input.substr(peg$currPos, 14) === peg$c258) {
              s3 = peg$c258;
              peg$currPos += 14;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c259);
              }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c260(s1, s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c257);
          }
        }

        return s0;
      }

      function peg$parseINDENT() {
        var s0, s1, s2, s3;

        peg$silentFails++;
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 13) === peg$c262) {
          s1 = peg$c262;
          peg$currPos += 13;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c263);
          }
        }
        if (s1 !== peg$FAILED) {
          s2 = [];
          if (peg$c264.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c265);
            }
          }
          if (s3 !== peg$FAILED) {
            while (s3 !== peg$FAILED) {
              s2.push(s3);
              if (peg$c264.test(input.charAt(peg$currPos))) {
                s3 = input.charAt(peg$currPos);
                peg$currPos++;
              } else {
                s3 = peg$FAILED;
                if (peg$silentFails === 0) {
                  peg$fail(peg$c265);
                }
              }
            }
          } else {
            s2 = peg$FAILED;
          }
          if (s2 !== peg$FAILED) {
            if (input.substr(peg$currPos, 2) === peg$c266) {
              s3 = peg$c266;
              peg$currPos += 2;
            } else {
              s3 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c267);
              }
            }
            if (s3 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c268(s2);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c261);
          }
        }

        return s0;
      }

      function peg$parseDEDENT() {
        var s0, s1;

        peg$silentFails++;
        if (input.substr(peg$currPos, 8) === peg$c270) {
          s0 = peg$c270;
          peg$currPos += 8;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c271);
          }
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c269);
          }
        }

        return s0;
      }

      function peg$parse_() {
        var s0, s1;

        s0 = [];
        if (peg$c272.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c273);
          }
        }
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c272.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c273);
            }
          }
        }

        return s0;
      }

      function peg$parse__() {
        var s0, s1;

        peg$silentFails++;
        s0 = [];
        if (peg$c272.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c273);
          }
        }
        if (s1 !== peg$FAILED) {
          while (s1 !== peg$FAILED) {
            s0.push(s1);
            if (peg$c272.test(input.charAt(peg$currPos))) {
              s1 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) {
                peg$fail(peg$c273);
              }
            }
          }
        } else {
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c274);
          }
        }

        return s0;
      }

      function peg$parseNEWLINE() {
        var s0, s1, s2, s3, s4, s5, s6;

        peg$silentFails++;
        s0 = peg$currPos;
        if (peg$c276.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c277);
          }
        }
        if (s1 === peg$FAILED) {
          s1 = null;
        }
        if (s1 !== peg$FAILED) {
          if (peg$c278.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) {
              peg$fail(peg$c279);
            }
          }
          if (s2 !== peg$FAILED) {
            s3 = peg$currPos;
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              peg$silentFails++;
              s6 = peg$parseNEWLINE();
              peg$silentFails--;
              if (s6 !== peg$FAILED) {
                peg$currPos = s5;
                s5 = void 0;
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                s4 = [s4, s5];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
            if (s3 === peg$FAILED) {
              s3 = null;
            }
            if (s3 !== peg$FAILED) {
              s1 = [s1, s2, s3];
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
        peg$silentFails--;
        if (s0 === peg$FAILED) {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) {
            peg$fail(peg$c275);
          }
        }

        return s0;
      }

      var util = require("./util");
      var EL = util.EL;
      var __Text = util.__Text;
      var __Parentheses = util.__Parentheses;

      var indent_memo = options.indent_memo;

      var indent_depth = 0;

      var base_indent_stack = [];

      var paragraph_item_tags = {
        0: 'Paragraph', 1: 'Item',
        2: 'Subitem1', 3: 'Subitem2', 4: 'Subitem3',
        5: 'Subitem4', 6: 'Subitem5', 7: 'Subitem6',
        8: 'Subitem7', 9: 'Subitem8', 10: 'Subitem9',
        11: 'Subitem10'
      };
      var paragraph_item_title_tags = {
        0: 'ParagraphNum', 1: 'ItemTitle',
        2: 'Subitem1Title', 3: 'Subitem2Title', 4: 'Subitem3Title',
        5: 'Subitem4Title', 6: 'Subitem5Title', 7: 'Subitem6Title',
        8: 'Subitem7Title', 9: 'Subitem8Title', 10: 'Subitem9Title',
        11: 'Subitem10Title'
      };
      var paragraph_item_sentence_tags = {
        0: 'ParagraphSentence', 1: 'ItemSentence',
        2: 'Subitem1Sentence', 3: 'Subitem2Sentence', 4: 'Subitem3Sentence',
        5: 'Subitem4Sentence', 6: 'Subitem5Sentence', 7: 'Subitem6Sentence',
        8: 'Subitem7Sentence', 9: 'Subitem8Sentence', 10: 'Subitem9Sentence',
        11: 'Subitem10Sentence'
      };

      var list_depth = 0;

      var list_tags = {
        0: 'List', 1: 'Sublist1', 2: 'Sublist2', 3: 'Sublist3'
      };

      var article_group_type_chars = "編章節款目";

      var article_group_type = {
        '編': 'Part', '章': 'Chapter', '節': 'Section',
        '款': 'Subsection', '目': 'Division',
        '条': 'Article', '則': 'SupplProvision'
      };

      var article_group_title_tag = {
        '編': 'PartTitle', '章': 'ChapterTitle', '節': 'SectionTitle',
        '款': 'SubsectionTitle', '目': 'DivisionTitle', '条': 'ArticleTitle',
        '則': 'SupplProvisionLabel'
      };

      var re_kanji_num = /((\S*)千)?((\S*)百)?((\S*)十)?(\S*)/;

      function parse_kanji_num(text) {
        var m = text.match(re_kanji_num);
        if (m) {
          var d1000 = m[1] ? kanji_digits[m[2]] || 1 : 0;
          var d100 = m[3] ? kanji_digits[m[4]] || 1 : 0;
          var d10 = m[5] ? kanji_digits[m[6]] || 1 : 0;
          var d1 = kanji_digits[m[7]] || 0;
          return "" + (d1000 * 1000 + d100 * 100 + d10 * 10 + d1);
        }
        return null;
      }

      function get_lawtype(text) {
        if (text.match(/^法律/)) return "Act";else if (text.match(/^政令/)) return "CabinetOrder";else if (text.match(/^勅令/)) return "ImperialOrder";else if (text.match(/^^\S*[^政勅]令/)) return "MinisterialOrdinance";else if (text.match(/^\S*規則/)) return "Rule";else return null;
      }

      var kanji_digits = {
        '〇': 0, '一': 1, '二': 2, '三': 3, '四': 4,
        '五': 5, '六': 6, '七': 7, '八': 8, '九': 9
      };

      var eras = {
        '明治': 'Meiji', '大正': 'Taisho',
        '昭和': 'Showa', '平成': 'Heisei'
      };

      var re_named_num = /^(○?)第?([一二三四五六七八九十百千]+)\S*?([のノ一二三四五六七八九十百千]*)$/;
      var iroha_chars = "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセスン";
      var re_iroha_char = /[イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセスン]/;
      var re_item_num = /^\D*(\d+)\D*$/;

      function parse_roman_num(text) {
        var num = 0;
        for (var i = 0; i < text.length; i++) {
          var char = text[i];
          var next_char = text[i + 1] || "";
          if (char.match(/[iIｉＩ]/)) {
            if (next_char.match(/[xXｘＸ]/)) num -= 1;else num += 1;
          }
          if (char.match(/[xXｘＸ]/)) {
            num += 10;
          }
        }
        return num;
      }

      var re_wide_digits = [[/０/g, '0'], [/１/g, '1'], [/２/g, '2'], [/３/g, '3'], [/４/g, '4'], [/５/g, '5'], [/６/g, '6'], [/７/g, '7'], [/８/g, '8'], [/９/g, '9']];

      function replace_wide_num(text) {
        var ret = text;

        for (var i = 0; i < re_wide_digits.length; i++) {
          var _re_wide_digits$i = _slicedToArray(re_wide_digits[i], 2),
              re_wide = _re_wide_digits$i[0],
              narrow = _re_wide_digits$i[1];

          ret = ret.replace(re_wide, narrow);
        }
        return ret;
      }

      function parse_named_num(text) {
        var nums_group = [];

        var subtexts = text.split(/\s+/)[0].replace("及び", "、").replace("から", "、").replace("まで", "").replace("～", "、").replace("・", "、").split("、");

        for (var i = 0; i < subtexts.length; i++) {
          var subtext = subtexts[i];

          var m = subtext.match(re_named_num);
          if (m) {
            var nums = [parse_kanji_num(m[2])];
            if (m[3]) {
              var bs = m[3].split(/[のノ]/g);
              for (var j = 0; j < bs.length; j++) {
                if (!bs[j]) continue;
                nums.push(parse_kanji_num(bs[j]));
              }
            }
            nums_group.push(nums.join('_'));
            continue;
          }

          m = subtext.match(re_iroha_char);
          if (m) {
            nums_group.push(iroha_chars.indexOf(m[0]) + 1);
            continue;
          }

          subtext = replace_wide_num(subtext);
          m = subtext.match(re_item_num);
          if (m) {
            nums_group.push(m[1]);
            continue;
          }

          var roman_num = parse_roman_num(subtext);
          if (roman_num !== 0) {
            nums_group.push(roman_num);
          }
        }

        return nums_group.join(':');
      }

      var parentheses_depth = 0;

      peg$result = peg$startRuleFunction();

      if (peg$result !== peg$FAILED && peg$currPos === input.length) {
        return peg$result;
      } else {
        if (peg$result !== peg$FAILED && peg$currPos < input.length) {
          peg$fail(peg$endExpectation());
        }

        throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
      }
    }

    module.exports = {
      SyntaxError: peg$SyntaxError,
      parse: peg$parse
    };
  }, { "./util": 5 }], 5: [function (require, module, exports) {
    "use strict";

    var EL = function () {
      function EL(tag, attr, children) {
        _classCallCheck(this, EL);

        // if(!tag) {
        //     error(`${JSON.stringify(tag)} is invalid tag.`);
        // }
        this.tag = tag;
        this.attr = attr || {};
        this.children = children || [];

        this._text = null;
      }

      _createClass(EL, [{
        key: "append",
        value: function append(child) {
          if (child !== undefined && child !== null) {
            // if(!(child instanceof EL) && !(child instanceof String || (typeof child === "string"))) {
            //     error("child is not EL or String.");
            // }
            this.children.push(child);
            this._text = null;
          }
          return this;
        }
      }, {
        key: "extend",
        value: function extend(children) {
          // if(!Array.isArray(children)) {
          //     error(`${JSON.stringify(children).slice(0,100)} is not Array.`);
          // }
          // for(let i = 0; i < children.length; i++) {
          //     let child = children[i];
          //     if(!(child instanceof EL) && !(child instanceof String || (typeof child === "string"))) {
          //         error("child is not EL or String.");
          //     }
          // }
          this.children = this.children.concat(children);
          this._text = null;
          return this;
        }
      }, {
        key: "json",
        value: function json() {
          return {
            tag: this.tag,
            attr: this.attr,
            children: this.children.map(function (el) {
              if (el instanceof EL) return el.json();
              return el;
            })
          };
        }
      }, {
        key: "replace_span",
        value: function replace_span(start, end /* half open */, repl_children) {
          if (!Array.isArray(repl_children)) {
            repl_children = [repl_children];
          }
          var next_c_start = 0;
          for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            var c_start = next_c_start;
            var c_end = c_start + (child instanceof EL ? child.text : child).length; // half open
            next_c_start = c_end;

            if (c_start <= start && start < c_end) {
              if (c_start < end && end <= c_end) {
                var start_in_child = start - c_start;
                var end_in_child = end - c_start;

                if (child instanceof EL) {
                  child.replace_span(start_in_child, end_in_child, repl_children);
                } else {
                  var new_child = [];
                  if (0 < start_in_child) new_child.push(child.slice(0, start_in_child));
                  new_child = new_child.concat(repl_children);
                  if (end_in_child < child.length) new_child.push(child.slice(end_in_child));
                  var new_children = [].concat(this.children.slice(0, i)).concat(new_child).concat(this.children.slice(i + 1));
                  this.children = new_children;
                  this._text = null;
                }
              } else {
                throw "Attempted to replace across elements.";
              }
              break;
            }
          }
        }
      }, {
        key: "text",
        get: function get() {
          if (this._text === null) {
            this._text = this.children.map(function (child) {
              return child instanceof EL ? child.text : child;
            }).join("");
          }
          return this._text;
        },
        set: function set(t) {
          this.children = [t];
          this._text = null;
        }
      }]);

      return EL;
    }();

    var __Text = function (_EL3) {
      _inherits(__Text, _EL3);

      function __Text(text) {
        _classCallCheck(this, __Text);

        return _possibleConstructorReturn(this, (__Text.__proto__ || Object.getPrototypeOf(__Text)).call(this, "__Text", {}, [text]));
      }

      return __Text;
    }(EL);

    var __Parentheses = function (_EL4) {
      _inherits(__Parentheses, _EL4);

      function __Parentheses(type, depth, start, end, content, text) {
        _classCallCheck(this, __Parentheses);

        var _this4 = _possibleConstructorReturn(this, (__Parentheses.__proto__ || Object.getPrototypeOf(__Parentheses)).call(this, "__Parentheses"));

        _this4.attr.type = type;
        _this4.attr.depth = "" + depth;
        _this4.append(new EL("__PStart", { type: type }, [start]));
        _this4.extend(new EL("__PContent", { type: type }, content));
        _this4.append(new EL("__PEnd", { type: type }, [end]));

        _this4.content = text.slice(start.length, text.length - end.length);
        return _this4;
      }

      return __Parentheses;
    }(EL);

    if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
      exports.EL = EL;
      exports.__Text = __Text;
      exports.__Parentheses = __Parentheses;
    }
  }, {}], 6: [function (require, module, exports) {}, {}], 7: [function (require, module, exports) {
    'use strict';

    var utils = require('./utils');
    var assert = require('minimalistic-assert');

    function BlockHash() {
      this.pending = null;
      this.pendingTotal = 0;
      this.blockSize = this.constructor.blockSize;
      this.outSize = this.constructor.outSize;
      this.hmacStrength = this.constructor.hmacStrength;
      this.padLength = this.constructor.padLength / 8;
      this.endian = 'big';

      this._delta8 = this.blockSize / 8;
      this._delta32 = this.blockSize / 32;
    }
    exports.BlockHash = BlockHash;

    BlockHash.prototype.update = function update(msg, enc) {
      // Convert message to array, pad it, and join into 32bit blocks
      msg = utils.toArray(msg, enc);
      if (!this.pending) this.pending = msg;else this.pending = this.pending.concat(msg);
      this.pendingTotal += msg.length;

      // Enough data, try updating
      if (this.pending.length >= this._delta8) {
        msg = this.pending;

        // Process pending data in blocks
        var r = msg.length % this._delta8;
        this.pending = msg.slice(msg.length - r, msg.length);
        if (this.pending.length === 0) this.pending = null;

        msg = utils.join32(msg, 0, msg.length - r, this.endian);
        for (var i = 0; i < msg.length; i += this._delta32) {
          this._update(msg, i, i + this._delta32);
        }
      }

      return this;
    };

    BlockHash.prototype.digest = function digest(enc) {
      this.update(this._pad());
      assert(this.pending === null);

      return this._digest(enc);
    };

    BlockHash.prototype._pad = function pad() {
      var len = this.pendingTotal;
      var bytes = this._delta8;
      var k = bytes - (len + this.padLength) % bytes;
      var res = new Array(k + this.padLength);
      res[0] = 0x80;
      for (var i = 1; i < k; i++) {
        res[i] = 0;
      } // Append length
      len <<= 3;
      if (this.endian === 'big') {
        for (var t = 8; t < this.padLength; t++) {
          res[i++] = 0;
        }res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = len >>> 24 & 0xff;
        res[i++] = len >>> 16 & 0xff;
        res[i++] = len >>> 8 & 0xff;
        res[i++] = len & 0xff;
      } else {
        res[i++] = len & 0xff;
        res[i++] = len >>> 8 & 0xff;
        res[i++] = len >>> 16 & 0xff;
        res[i++] = len >>> 24 & 0xff;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;
        res[i++] = 0;

        for (t = 8; t < this.padLength; t++) {
          res[i++] = 0;
        }
      }

      return res;
    };
  }, { "./utils": 9, "minimalistic-assert": 11 }], 8: [function (require, module, exports) {
    'use strict';

    var utils = require('../utils');
    var common = require('../common');
    var assert = require('minimalistic-assert');

    var rotr64_hi = utils.rotr64_hi;
    var rotr64_lo = utils.rotr64_lo;
    var shr64_hi = utils.shr64_hi;
    var shr64_lo = utils.shr64_lo;
    var sum64 = utils.sum64;
    var sum64_hi = utils.sum64_hi;
    var sum64_lo = utils.sum64_lo;
    var sum64_4_hi = utils.sum64_4_hi;
    var sum64_4_lo = utils.sum64_4_lo;
    var sum64_5_hi = utils.sum64_5_hi;
    var sum64_5_lo = utils.sum64_5_lo;

    var BlockHash = common.BlockHash;

    var sha512_K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

    function SHA512() {
      if (!(this instanceof SHA512)) return new SHA512();

      BlockHash.call(this);
      this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179];
      this.k = sha512_K;
      this.W = new Array(160);
    }
    utils.inherits(SHA512, BlockHash);
    module.exports = SHA512;

    SHA512.blockSize = 1024;
    SHA512.outSize = 512;
    SHA512.hmacStrength = 192;
    SHA512.padLength = 128;

    SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
      var W = this.W;

      // 32 x 32bit words
      for (var i = 0; i < 32; i++) {
        W[i] = msg[start + i];
      }for (; i < W.length; i += 2) {
        var c0_hi = g1_512_hi(W[i - 4], W[i - 3]); // i - 2
        var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
        var c1_hi = W[i - 14]; // i - 7
        var c1_lo = W[i - 13];
        var c2_hi = g0_512_hi(W[i - 30], W[i - 29]); // i - 15
        var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
        var c3_hi = W[i - 32]; // i - 16
        var c3_lo = W[i - 31];

        W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
        W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
      }
    };

    SHA512.prototype._update = function _update(msg, start) {
      this._prepareBlock(msg, start);

      var W = this.W;

      var ah = this.h[0];
      var al = this.h[1];
      var bh = this.h[2];
      var bl = this.h[3];
      var ch = this.h[4];
      var cl = this.h[5];
      var dh = this.h[6];
      var dl = this.h[7];
      var eh = this.h[8];
      var el = this.h[9];
      var fh = this.h[10];
      var fl = this.h[11];
      var gh = this.h[12];
      var gl = this.h[13];
      var hh = this.h[14];
      var hl = this.h[15];

      assert(this.k.length === W.length);
      for (var i = 0; i < W.length; i += 2) {
        var c0_hi = hh;
        var c0_lo = hl;
        var c1_hi = s1_512_hi(eh, el);
        var c1_lo = s1_512_lo(eh, el);
        var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
        var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
        var c3_hi = this.k[i];
        var c3_lo = this.k[i + 1];
        var c4_hi = W[i];
        var c4_lo = W[i + 1];

        var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
        var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);

        c0_hi = s0_512_hi(ah, al);
        c0_lo = s0_512_lo(ah, al);
        c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
        c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);

        var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
        var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);

        hh = gh;
        hl = gl;

        gh = fh;
        gl = fl;

        fh = eh;
        fl = el;

        eh = sum64_hi(dh, dl, T1_hi, T1_lo);
        el = sum64_lo(dl, dl, T1_hi, T1_lo);

        dh = ch;
        dl = cl;

        ch = bh;
        cl = bl;

        bh = ah;
        bl = al;

        ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
        al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
      }

      sum64(this.h, 0, ah, al);
      sum64(this.h, 2, bh, bl);
      sum64(this.h, 4, ch, cl);
      sum64(this.h, 6, dh, dl);
      sum64(this.h, 8, eh, el);
      sum64(this.h, 10, fh, fl);
      sum64(this.h, 12, gh, gl);
      sum64(this.h, 14, hh, hl);
    };

    SHA512.prototype._digest = function digest(enc) {
      if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
    };

    function ch64_hi(xh, xl, yh, yl, zh) {
      var r = xh & yh ^ ~xh & zh;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function ch64_lo(xh, xl, yh, yl, zh, zl) {
      var r = xl & yl ^ ~xl & zl;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function maj64_hi(xh, xl, yh, yl, zh) {
      var r = xh & yh ^ xh & zh ^ yh & zh;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function maj64_lo(xh, xl, yh, yl, zh, zl) {
      var r = xl & yl ^ xl & zl ^ yl & zl;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function s0_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 28);
      var c1_hi = rotr64_hi(xl, xh, 2); // 34
      var c2_hi = rotr64_hi(xl, xh, 7); // 39

      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function s0_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 28);
      var c1_lo = rotr64_lo(xl, xh, 2); // 34
      var c2_lo = rotr64_lo(xl, xh, 7); // 39

      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function s1_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 14);
      var c1_hi = rotr64_hi(xh, xl, 18);
      var c2_hi = rotr64_hi(xl, xh, 9); // 41

      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function s1_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 14);
      var c1_lo = rotr64_lo(xh, xl, 18);
      var c2_lo = rotr64_lo(xl, xh, 9); // 41

      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function g0_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 1);
      var c1_hi = rotr64_hi(xh, xl, 8);
      var c2_hi = shr64_hi(xh, xl, 7);

      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function g0_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 1);
      var c1_lo = rotr64_lo(xh, xl, 8);
      var c2_lo = shr64_lo(xh, xl, 7);

      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function g1_512_hi(xh, xl) {
      var c0_hi = rotr64_hi(xh, xl, 19);
      var c1_hi = rotr64_hi(xl, xh, 29); // 61
      var c2_hi = shr64_hi(xh, xl, 6);

      var r = c0_hi ^ c1_hi ^ c2_hi;
      if (r < 0) r += 0x100000000;
      return r;
    }

    function g1_512_lo(xh, xl) {
      var c0_lo = rotr64_lo(xh, xl, 19);
      var c1_lo = rotr64_lo(xl, xh, 29); // 61
      var c2_lo = shr64_lo(xh, xl, 6);

      var r = c0_lo ^ c1_lo ^ c2_lo;
      if (r < 0) r += 0x100000000;
      return r;
    }
  }, { "../common": 7, "../utils": 9, "minimalistic-assert": 11 }], 9: [function (require, module, exports) {
    'use strict';

    var assert = require('minimalistic-assert');
    var inherits = require('inherits');

    exports.inherits = inherits;

    function toArray(msg, enc) {
      if (Array.isArray(msg)) return msg.slice();
      if (!msg) return [];
      var res = [];
      if (typeof msg === 'string') {
        if (!enc) {
          for (var i = 0; i < msg.length; i++) {
            var c = msg.charCodeAt(i);
            var hi = c >> 8;
            var lo = c & 0xff;
            if (hi) res.push(hi, lo);else res.push(lo);
          }
        } else if (enc === 'hex') {
          msg = msg.replace(/[^a-z0-9]+/ig, '');
          if (msg.length % 2 !== 0) msg = '0' + msg;
          for (i = 0; i < msg.length; i += 2) {
            res.push(parseInt(msg[i] + msg[i + 1], 16));
          }
        }
      } else {
        for (i = 0; i < msg.length; i++) {
          res[i] = msg[i] | 0;
        }
      }
      return res;
    }
    exports.toArray = toArray;

    function toHex(msg) {
      var res = '';
      for (var i = 0; i < msg.length; i++) {
        res += zero2(msg[i].toString(16));
      }return res;
    }
    exports.toHex = toHex;

    function htonl(w) {
      var res = w >>> 24 | w >>> 8 & 0xff00 | w << 8 & 0xff0000 | (w & 0xff) << 24;
      return res >>> 0;
    }
    exports.htonl = htonl;

    function toHex32(msg, endian) {
      var res = '';
      for (var i = 0; i < msg.length; i++) {
        var w = msg[i];
        if (endian === 'little') w = htonl(w);
        res += zero8(w.toString(16));
      }
      return res;
    }
    exports.toHex32 = toHex32;

    function zero2(word) {
      if (word.length === 1) return '0' + word;else return word;
    }
    exports.zero2 = zero2;

    function zero8(word) {
      if (word.length === 7) return '0' + word;else if (word.length === 6) return '00' + word;else if (word.length === 5) return '000' + word;else if (word.length === 4) return '0000' + word;else if (word.length === 3) return '00000' + word;else if (word.length === 2) return '000000' + word;else if (word.length === 1) return '0000000' + word;else return word;
    }
    exports.zero8 = zero8;

    function join32(msg, start, end, endian) {
      var len = end - start;
      assert(len % 4 === 0);
      var res = new Array(len / 4);
      for (var i = 0, k = start; i < res.length; i++, k += 4) {
        var w;
        if (endian === 'big') w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];else w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
        res[i] = w >>> 0;
      }
      return res;
    }
    exports.join32 = join32;

    function split32(msg, endian) {
      var res = new Array(msg.length * 4);
      for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
        var m = msg[i];
        if (endian === 'big') {
          res[k] = m >>> 24;
          res[k + 1] = m >>> 16 & 0xff;
          res[k + 2] = m >>> 8 & 0xff;
          res[k + 3] = m & 0xff;
        } else {
          res[k + 3] = m >>> 24;
          res[k + 2] = m >>> 16 & 0xff;
          res[k + 1] = m >>> 8 & 0xff;
          res[k] = m & 0xff;
        }
      }
      return res;
    }
    exports.split32 = split32;

    function rotr32(w, b) {
      return w >>> b | w << 32 - b;
    }
    exports.rotr32 = rotr32;

    function rotl32(w, b) {
      return w << b | w >>> 32 - b;
    }
    exports.rotl32 = rotl32;

    function sum32(a, b) {
      return a + b >>> 0;
    }
    exports.sum32 = sum32;

    function sum32_3(a, b, c) {
      return a + b + c >>> 0;
    }
    exports.sum32_3 = sum32_3;

    function sum32_4(a, b, c, d) {
      return a + b + c + d >>> 0;
    }
    exports.sum32_4 = sum32_4;

    function sum32_5(a, b, c, d, e) {
      return a + b + c + d + e >>> 0;
    }
    exports.sum32_5 = sum32_5;

    function sum64(buf, pos, ah, al) {
      var bh = buf[pos];
      var bl = buf[pos + 1];

      var lo = al + bl >>> 0;
      var hi = (lo < al ? 1 : 0) + ah + bh;
      buf[pos] = hi >>> 0;
      buf[pos + 1] = lo;
    }
    exports.sum64 = sum64;

    function sum64_hi(ah, al, bh, bl) {
      var lo = al + bl >>> 0;
      var hi = (lo < al ? 1 : 0) + ah + bh;
      return hi >>> 0;
    }
    exports.sum64_hi = sum64_hi;

    function sum64_lo(ah, al, bh, bl) {
      var lo = al + bl;
      return lo >>> 0;
    }
    exports.sum64_lo = sum64_lo;

    function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
      var carry = 0;
      var lo = al;
      lo = lo + bl >>> 0;
      carry += lo < al ? 1 : 0;
      lo = lo + cl >>> 0;
      carry += lo < cl ? 1 : 0;
      lo = lo + dl >>> 0;
      carry += lo < dl ? 1 : 0;

      var hi = ah + bh + ch + dh + carry;
      return hi >>> 0;
    }
    exports.sum64_4_hi = sum64_4_hi;

    function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
      var lo = al + bl + cl + dl;
      return lo >>> 0;
    }
    exports.sum64_4_lo = sum64_4_lo;

    function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
      var carry = 0;
      var lo = al;
      lo = lo + bl >>> 0;
      carry += lo < al ? 1 : 0;
      lo = lo + cl >>> 0;
      carry += lo < cl ? 1 : 0;
      lo = lo + dl >>> 0;
      carry += lo < dl ? 1 : 0;
      lo = lo + el >>> 0;
      carry += lo < el ? 1 : 0;

      var hi = ah + bh + ch + dh + eh + carry;
      return hi >>> 0;
    }
    exports.sum64_5_hi = sum64_5_hi;

    function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
      var lo = al + bl + cl + dl + el;

      return lo >>> 0;
    }
    exports.sum64_5_lo = sum64_5_lo;

    function rotr64_hi(ah, al, num) {
      var r = al << 32 - num | ah >>> num;
      return r >>> 0;
    }
    exports.rotr64_hi = rotr64_hi;

    function rotr64_lo(ah, al, num) {
      var r = ah << 32 - num | al >>> num;
      return r >>> 0;
    }
    exports.rotr64_lo = rotr64_lo;

    function shr64_hi(ah, al, num) {
      return ah >>> num;
    }
    exports.shr64_hi = shr64_hi;

    function shr64_lo(ah, al, num) {
      var r = ah << 32 - num | al >>> num;
      return r >>> 0;
    }
    exports.shr64_lo = shr64_lo;
  }, { "inherits": 10, "minimalistic-assert": 11 }], 10: [function (require, module, exports) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function TempCtor() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
  }, {}], 11: [function (require, module, exports) {
    module.exports = assert;

    function assert(val, msg) {
      if (!val) throw new Error(msg || 'Assertion failed');
    }

    assert.equal = function assertEqual(l, r, msg) {
      if (l != r) throw new Error(msg || 'Assertion failed: ' + l + ' != ' + r);
    };
  }, {}], 12: [function (require, module, exports) {
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
      throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
      throw new Error('clearTimeout has not been defined');
    }
    (function () {
      try {
        if (typeof setTimeout === 'function') {
          cachedSetTimeout = setTimeout;
        } else {
          cachedSetTimeout = defaultSetTimout;
        }
      } catch (e) {
        cachedSetTimeout = defaultSetTimout;
      }
      try {
        if (typeof clearTimeout === 'function') {
          cachedClearTimeout = clearTimeout;
        } else {
          cachedClearTimeout = defaultClearTimeout;
        }
      } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
      }
    })();
    function runTimeout(fun) {
      if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
      }
      // if setTimeout wasn't available but was latter defined
      if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
      }
      try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
      } catch (e) {
        try {
          // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
          return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
          // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
          return cachedSetTimeout.call(this, fun, 0);
        }
      }
    }
    function runClearTimeout(marker) {
      if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
      }
      // if clearTimeout wasn't available but was latter defined
      if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
      }
      try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
      } catch (e) {
        try {
          // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
          return cachedClearTimeout.call(null, marker);
        } catch (e) {
          // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
          // Some versions of I.E. have different rules for clearTimeout vs setTimeout
          return cachedClearTimeout.call(this, marker);
        }
      }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
      if (!draining || !currentQueue) {
        return;
      }
      draining = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
    }

    function drainQueue() {
      if (draining) {
        return;
      }
      var timeout = runTimeout(cleanUpNextTick);
      draining = true;

      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
          if (currentQueue) {
            currentQueue[queueIndex].run();
          }
        }
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
      }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function () {
      this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.prependListener = noop;
    process.prependOnceListener = noop;

    process.listeners = function (name) {
      return [];
    };

    process.binding = function (name) {
      throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
      return '/';
    };
    process.chdir = function (dir) {
      throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
      return 0;
    };
  }, {}] }, {}, [3]);
