'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function em(input) {
    var emSize = parseFloat($("body").css("font-size"));
    return emSize * input;
}

var Lawtext = Lawtext || {};

Lawtext.element_to_json = function (el) {
    var children = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = el.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;

            if (node.nodeType === Node.TEXT_NODE) {
                var text = node.nodeValue.trim();
                if (text) {
                    children.push(text);
                }
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                children.push(Lawtext.element_to_json(node));
            } else {
                console.log(node);
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

    var attr = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = el.attributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var at = _step2.value;

            attr[at.name] = at.value;
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

    return new Lawtext.EL(el.tagName, attr, children);
};

Lawtext.LawNameItem = function () {
    function _class(law_name, law_no, promulgation_date) {
        _classCallCheck(this, _class);

        this.law_name = law_name;
        this.law_no = law_no;
        this.promulgation_date = promulgation_date;
    }

    return _class;
}();

Lawtext.law_name_data = [];

Lawtext.xml_to_json = function (xml) {
    var parser = new DOMParser();
    var dom = parser.parseFromString(xml, "text/xml");
    return Lawtext.element_to_json(dom.documentElement);
};

Lawtext.restructure_table = function (table) {
    var new_table_children = [];
    var rowspan_state = {};
    var colspan_value = {};
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = table.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var row = _step3.value;

            if (row.tag !== "TableRow") {
                new_table_children.push(row);
                return;
            }
            var new_row_children = [];
            var c = 0;
            var ci = 0;
            while (true) {

                var rss = rowspan_state[c] || 0;
                if (rss) {
                    var _colspan = colspan_value[c] || 0;
                    new_row_children.push({
                        tag: "TableColumnMerged",
                        attr: _colspan ? {
                            colspan: _colspan
                        } : {},
                        children: []
                    });
                    rowspan_state[c] = rss - 1;
                    if (_colspan) {
                        c += _colspan - 1;
                    }
                    c += 1;
                    continue;
                }

                if (ci >= row.children.length) {
                    break;
                }

                var column = row.children[ci];
                new_row_children.push(column);
                if (column.tag !== "TableColumn") {
                    ci += 1;
                    continue;
                }

                var colspan = Number(column.attr.colspan || 0);
                if (column.attr.rowspan !== undefined) {
                    var rowspan = Number(column.attr.rowspan);
                    rowspan_state[c] = rowspan - 1;
                    colspan_value[c] = colspan;
                    if (colspan) {
                        c += colspan - 1;
                    }
                }
                c += 1;
                ci += 1;
            }

            new_table_children.push({
                tag: row.tag,
                attr: row.attr,
                children: new_row_children
            });
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

    var ret = {
        tag: table.tag,
        attr: table.attr,
        children: new_table_children
    };

    return ret;
};

Lawtext.Context = function () {
    function _class2() {
        _classCallCheck(this, _class2);

        this.data = {};
    }

    _createClass(_class2, [{
        key: "get",
        value: function get(key) {
            return this.data[key];
        }
    }, {
        key: "set",
        value: function set(key, value) {
            this.data[key] = value;
            return "";
        }
    }]);

    return _class2;
}();

Lawtext.annotate = function (el) {
    if (typeof el === "string" || el instanceof String) {
        return el;
    }

    var child_str = el.children.map(function (child) {
        return Lawtext.annotate(child);
    }).join("");

    if (el.tag === "____Declaration") {
        return "<span class=\"lawtext-analyzed lawtext-analyzed-declaration\" lawtext_declaration_index=\"" + el.attr.declaration_index + "\">" + child_str + "</span>";
    } else if (el.tag === "____VarRef") {
        return "<span class=\"lawtext-analyzed lawtext-analyzed-varref\" lawtext_declaration_index=\"" + el.attr.ref_declaration_index + "\">" + child_str + "</span>";
    } else if (el.tag === "____LawNum") {
        return "<a class=\"lawtext-analyzed lawtext-analyzed-lawnum\" href=\"#" + child_str + "\" target=\"_blank\">" + child_str + "</a>";
    } else if (el.tag === "__Parentheses") {
        return "<span class=\"lawtext-analyzed lawtext-analyzed-parentheses\" lawtext_parentheses_type=\"" + el.attr.type + "\" data-lawtext-parentheses-depth=\"" + el.attr.depth + "\">" + child_str + "</span>";
    } else if (el.tag === "__PStart") {
        return "<span class=\"lawtext-analyzed lawtext-analyzed-start-parenthesis\" lawtext_parentheses_type=\"" + el.attr.type + "\">" + child_str + "</span>";
    } else if (el.tag === "__PContent") {
        return "<span class=\"lawtext-analyzed lawtext-analyzed-parentheses-content\" lawtext_parentheses_type=\"" + el.attr.type + "\">" + child_str + "</span>";
    } else if (el.tag === "__PEnd") {
        return "<span class=\"lawtext-analyzed lawtext-analyzed-end-parenthesis\" lawtext_parentheses_type=\"" + el.attr.type + "\">" + child_str + "</span>";
    } else if (el.tag === "__MismatchStartParenthesis") {
        return "<span class=\"lawtext-analyzed lawtext-analyzed-mismatch-start-parenthesis\">" + child_str + "</span>";
    } else if (el.tag === "__MismatchEndParenthesis") {
        return "<span class=\"lawtext-analyzed lawtext-analyzed-mismatch-end-parenthesis\">" + child_str + "</span>";
    } else {
        return child_str;
    }
};

Lawtext.render_law = function (template_name, law) {
    var rendered = nunjucks.render(template_name, {
        law: law,
        "print": console.log,
        "context": new Lawtext.Context(),
        "annotate": Lawtext.annotate
    });
    if (template_name === "lawtext") {
        rendered = rendered.replace(/(\r?\n\r?\n)(?:\r?\n)+/g, "$1");
    }
    return rendered;
};

Lawtext.render_elements_fragment = function (elements) {
    var rendered = nunjucks.render("htmlfragment.html", {
        elements: elements,
        "print": console.log,
        "context": new Lawtext.Context(),
        "annotate": Lawtext.annotate
    });
    return rendered;
};

Lawtext.analyze_xml = function (el) {
    if (typeof el === 'string' || el instanceof String) {
        return el;
    }
    if (["Sentence", "EnactStatement"].indexOf(el.tag) >= 0) {
        if (el.text) {
            el.children = Lawtext.parse(el.text, { startRule: "INLINE" });
        }
    } else {
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = el.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var child = _step4.value;

                Lawtext.analyze_xml(child);
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
};

Lawtext.get_law_range = function (orig_law, range) {
    var s_pos = range.start;
    var e_pos = range.end;

    var law = new Lawtext.EL(orig_law.tag, orig_law.attr);

    var orig_law_num = orig_law.children.find(function (el) {
        return el.tag == "LawNum";
    });
    if (orig_law_num) {
        law.append(orig_law_num);
    }

    var orig_law_body = orig_law.children.find(function (el) {
        return el.tag == "LawBody";
    });
    var law_body = new Lawtext.EL(orig_law_body.tag, orig_law_body.attr);
    law.append(law_body);

    var orig_law_title = orig_law_body.children.find(function (el) {
        return el.tag == "LawTitle";
    });
    if (orig_law_title) {
        law_body.append(orig_law_title);
    }

    var in_container_range = false;
    var in_item_range = false;

    var find_els = function find_els(el, tag) {
        if (!(el instanceof Lawtext.EL)) return [];
        if (el.tag === tag) return [el];
        var ret = [];
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = el.children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var child = _step5.value;

                ret = ret.concat(find_els(child, tag));
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

    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = orig_law_body.children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var toplevel = _step6.value;

            if (!in_container_range && toplevel.tag === s_pos.container_tag && (toplevel.tag !== "SupplProvision" || toplevel.attr.AmendLawNum === s_pos.container_id)) {
                in_container_range = true;
            }

            var container_children = [];

            if (in_container_range && e_pos.item_tag === "SupplProvisionLabel" && toplevel.tag === e_pos.container_tag && (toplevel.tag !== "SupplProvision" || toplevel.attr.AmendLawNum === e_pos.container_id)) {
                in_container_range = false;
            }

            if (in_container_range) {

                var items = find_els(toplevel, "Article");
                if (items.length === 0) items = find_els(toplevel, "Paragraph");

                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = items[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var item = _step7.value;


                        if (!in_item_range && (s_pos.item_tag === "SupplProvisionLabel" || item.tag === s_pos.item_tag && (!s_pos.item_id || item.attr.Num === s_pos.item_id))) {
                            in_item_range = true;
                        }

                        if (in_item_range) {
                            container_children.push(item);
                        }

                        if (in_item_range && item.tag === e_pos.item_tag && (!e_pos.item_id || item.attr.Num === e_pos.item_id)) {
                            in_item_range = false;
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
            }

            if (container_children.length > 0) {
                var suppl_provision_label = toplevel.children.find(function (el) {
                    return el.tag === "SupplProvisionLabel";
                });
                if (suppl_provision_label) container_children.unshift(suppl_provision_label);
                law_body.append(new Lawtext.EL(toplevel.tag, toplevel.attr, container_children));
            }

            if (in_container_range && toplevel.tag === e_pos.container_tag && (toplevel.tag !== "SupplProvision" || toplevel.attr.AmendLawNum === e_pos.container_id)) {
                in_container_range = false;
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

    return law;
};

Lawtext.Data = function (_Backbone$Model) {
    _inherits(_class3, _Backbone$Model);

    _createClass(_class3, [{
        key: "defaults",
        get: function get() {
            return {
                law: null,
                opening_file: false,
                law_search_key: null,
                analysis: null
            };
        }
    }]);

    function _class3() {
        _classCallCheck(this, _class3);

        var _this = _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));

        _this.open_file_input = $("<input>").attr({
            type: "file",
            accept: "text/plain,application/xml"
        }).css({ display: "none" });
        $("body").append(_this.open_file_input);
        _this.open_file_input.change(function (e) {
            _this.open_file_input_change(e);
        });

        $(window).resize(_.throttle(function () {
            _this.trigger("window-resize");
        }, 300));
        return _this;
    }

    _createClass(_class3, [{
        key: "open_file",
        value: function open_file() {
            this.open_file_input.click();
        }
    }, {
        key: "open_file_input_change",
        value: function open_file_input_change(evt) {
            var _this2 = this;

            this.set({ opening_file: true });

            var file = evt.target.files[0];
            if (file === null) return;
            var reader = new FileReader();
            reader.onload = function (e) {
                $(evt.target).val("");
                var div = $("<div>");
                var text = e.target.result;
                _this2.load_law_text(text, true);
                _this2.set({ law_search_key: null });
                _this2.trigger("file-loaded");
            };
            reader.readAsText(file);
        }
    }, {
        key: "invoke_error",
        value: function invoke_error(title, body_el) {
            this.trigger("error", title, body_el);
        }
    }, {
        key: "load_law_text",
        value: function load_law_text(text, analyze_xml) {
            var div = $("<div>");
            var law = null;
            if (/^(?:<\?xml|<Law)/.test(text.trim())) {
                law = Lawtext.xml_to_json(text);
                if (analyze_xml) {
                    Lawtext.analyze_xml(law);
                }
            } else {
                try {
                    law = Lawtext.parse(text, { startRule: "start" });
                } catch (err) {
                    var err_str = err.toString();
                    var pre = $("<pre>").css({ "white-space": "pre-wrap" }).css({ "line-height": "1.2em" }).css({ "padding": "1em 0" }).html(err_str);
                    this.invoke_error("読み込んだLawtextにエラーがあります", pre[0]);
                    law = null;
                }
            }
            if (law) {
                this.set({ opening_file: false, law: law });
            } else {
                this.set({ opening_file: false });
            }
        }
    }, {
        key: "search_law",
        value: function search_law(law_search_key) {
            var _this3 = this;

            this.set({ opening_file: true });
            setTimeout(function () {
                _this3.search_law_inner(law_search_key);
            }, 30);
        }
    }, {
        key: "search_law_inner",
        value: function search_law_inner(law_search_key) {
            var _this4 = this;

            var load_law_num = function load_law_num(lawnum) {

                var law_data = localStorage ? localStorage.getItem("law_for:" + lawnum) : null;
                if (law_data) {
                    law_data = JSON.parse(law_data);
                    var datetime = new Date(law_data.datetime);
                    var now = new Date();
                    var ms = now.getTime() - datetime.getTime();
                    var days = ms / (1000 * 60 * 60 * 24);
                    if (days < 1) {
                        _this4.load_law_text(law_data.xml, true);
                        return;
                    }
                }

                fetch("https://lic857vlz1.execute-api.ap-northeast-1.amazonaws.com/prod/Lawtext-API?method=lawdata&lawnum=" + encodeURI(lawnum), {
                    mode: "cors"
                }).then(function (response) {
                    return new Promise(function (resolve, reject) {
                        response.text().then(function (text) {
                            return resolve([response, text]);
                        });
                    });
                }).then(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        response = _ref2[0],
                        text = _ref2[1];

                    return new Promise(function (resolve, reject) {
                        if (response.ok && !/^(?:<\?xml|<Law)/.test(text.trim())) {
                            JSZip.loadAsync(text, { base64: true }).then(function (zip) {
                                return zip.file("body.xml").async("string");
                            }).then(function (xml) {
                                return resolve([response, xml]);
                            });
                        } else {
                            resolve([response, text]);
                        }
                    });
                }).then(function (_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2),
                        response = _ref4[0],
                        text = _ref4[1];

                    if (response.ok) {
                        _this4.load_law_text(text, true);
                        if (localStorage) {
                            localStorage.setItem("law_for:" + lawnum, JSON.stringify({
                                datetime: new Date().toISOString(),
                                xml: text
                            }));
                        }
                    } else {
                        console.log(response);
                        _this4.set({ opening_file: false });
                        _this4.invoke_error("法令の読み込み中にエラーが発生しました", text);
                    }
                });
            };

            var law_num_data = localStorage ? localStorage.getItem("law_num_for:" + law_search_key) : null;
            if (law_num_data) {
                law_num_data = JSON.parse(law_num_data);
                var datetime = new Date(law_num_data.datetime);
                var now = new Date();
                var ms = now.getTime() - datetime.getTime();
                var days = ms / (1000 * 60 * 60 * 24);
                if (days < 1) {
                    load_law_num(law_num_data.lawnum);
                    return;
                }
            }

            var re_lawnum = /^(?:明治|大正|昭和|平成)[元〇一二三四五六七八九十]+年(?:\S+?第[〇一二三四五六七八九十百千]+号|人事院規則[〇一二三四五六七八九―]+|[一二三四五六七八九十]+月[一二三四五六七八九十]+日内閣総理大臣決定)$/;
            var match = re_lawnum.exec(law_search_key);
            if (match) {
                var lawnum = match[0];
                load_law_num(lawnum);
                if (localStorage) {
                    localStorage.setItem("law_num_for:" + law_search_key, JSON.stringify({
                        datetime: new Date().toISOString(),
                        lawnum: lawnum
                    }));
                }
            } else {
                fetch("https://lic857vlz1.execute-api.ap-northeast-1.amazonaws.com/prod/Lawtext-API?method=lawnums&lawname=" + encodeURI(law_search_key), {
                    mode: "cors"
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    if (data.length) {
                        var _lawnum = data[0][1];
                        load_law_num(_lawnum);
                        if (localStorage) {
                            localStorage.setItem("law_num_for:" + law_search_key, JSON.stringify({
                                datetime: new Date().toISOString(),
                                lawnum: _lawnum
                            }));
                        }
                        return;
                    } else {
                        _this4.invoke_error("法令が見つかりません", "\u300C" + law_search_key + "\u300D\u3092\u691C\u7D22\u3057\u307E\u3057\u305F\u304C\u3001\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
                    }
                    _this4.set({ opening_file: false });
                });
            }
        }
    }, {
        key: "get_law_name",
        value: function get_law_name() {
            var law = this.get("law");
            if (law === null) return;

            var law_num = _(law.children).findWhere({ tag: "LawNum" });
            var law_body = _(law.children).findWhere({ tag: "LawBody" });
            var law_title = law_body && _(law_body.children).findWhere({ tag: "LawTitle" });

            var s_law_num = law_num ? law_num.children[0] : "";
            var s_law_title = law_title ? law_title.children[0] : "";
            s_law_num = s_law_num && s_law_title ? "\uFF08" + s_law_num + "\uFF09" : s_law_num;

            return s_law_title + s_law_num;
        }
    }, {
        key: "download_docx",
        value: function download_docx(range) {
            var _this5 = this;

            var law = this.get("law");
            if (law === null) return;

            if (range) {
                law = Lawtext.get_law_range(law, range);
            }

            var s_content_types = nunjucks.render("docx/[Content_Types].xml");
            var s_rels = nunjucks.render("docx/_rels/.rels");
            var s_document_rels = nunjucks.render("docx/word/_rels/document.xml.rels");
            var s_document = nunjucks.render("docx/word/document.xml", {
                law: law,
                restructure_table: Lawtext.restructure_table,
                print: console.log,
                context: new Lawtext.Context()
            });
            var s_styles = nunjucks.render("docx/word/styles.xml");

            var zip = new JSZip();
            zip.file("[Content_Types].xml", s_content_types);
            zip.file("_rels/.rels", s_rels);
            zip.file("word/_rels/document.xml.rels", s_document_rels);
            zip.file("word/document.xml", s_document);
            zip.file("word/styles.xml", s_styles);
            zip.generateAsync({
                type: "uint8array",
                compression: "DEFLATE",
                compressionOptions: {
                    level: 9
                }
            }).then(function (buffer) {
                var blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
                var law_name = _this5.get_law_name() || "lawtext_output";
                saveAs(blob, law_name + ".docx");
            });
        }
    }, {
        key: "download_lawtext",
        value: function download_lawtext() {
            var law = this.get("law");
            if (law === null) return;

            var s_lawtext = nunjucks.render("lawtext.j2", {
                law: law,
                print: console.log,
                context: new Lawtext.Context()
            });
            var blob = new Blob([s_lawtext], { type: "text/plain" });
            var law_name = this.get_law_name() || "lawtext_output";
            saveAs(blob, law_name + ".law.txt");
        }
    }, {
        key: "download_xml",
        value: function download_xml() {
            var law = this.get("law");
            if (law === null) return;

            var s_lawtext = nunjucks.render("xml.xml", {
                law: law,
                print: console.log,
                context: new Lawtext.Context()
            });
            var blob = new Blob([s_lawtext], { type: "application/xml" });
            var law_name = this.get_law_name() || "lawtext_output";
            saveAs(blob, law_name + ".xml");
        }
    }, {
        key: "get_declaration",
        value: function get_declaration(index) {
            var analysis = this.get("analysis");
            if (analysis === null) return null;

            var declarations = analysis.declarations;
            return declarations[index];
        }
    }]);

    return _class3;
}(Backbone.Model);

Lawtext.SidebarView_template = _.template(Lawtext.sidebar_view_template);
Lawtext.SidebarView = function (_Backbone$View) {
    _inherits(_class4, _Backbone$View);

    _createClass(_class4, [{
        key: "tagName",
        get: function get() {
            return "div";
        }
    }, {
        key: "className",
        get: function get() {
            return "lawtext-sidebar-view";
        }
    }]);

    function _class4(options) {
        _classCallCheck(this, _class4);

        var _this6 = _possibleConstructorReturn(this, (_class4.__proto__ || Object.getPrototypeOf(_class4)).apply(this, arguments));

        _this6.data = options.data;
        _this6.listenTo(_this6.data, "change:law change:opening_file", _.debounce(function () {
            _this6.render();
        }, 100));
        return _this6;
    }

    _createClass(_class4, [{
        key: "render",
        value: function render(options) {
            this.$el.html(Lawtext.SidebarView_template({
                data: this.data.attributes
            }));
        }
    }]);

    return _class4;
}(Backbone.View);

Lawtext.VarRefView_template = _.template("\n<span class=\"lawtext-varref-text\"><%= text %></span><span class=\"lawtext-varref-float-block\" style=\"display: none; height: 0;\">\n<div class=\"lawtext-varref-float-block-inner\">\n<div class=\"lawtext-varref-arrow\"></div>\n<div class=\"lawtext-varref-window\">\n</div>\n</div>\n</span>\n".trim());
Lawtext.VarRefView = function (_Backbone$View2) {
    _inherits(_class5, _Backbone$View2);

    _createClass(_class5, [{
        key: "tagName",
        get: function get() {
            return "span";
        }
    }, {
        key: "className",
        get: function get() {
            return "lawtext-varref-view";
        }
    }, {
        key: "events",
        get: function get() {
            return {
                "click .lawtext-varref-text": "text_click"
            };
        }
    }]);

    function _class5(options) {
        _classCallCheck(this, _class5);

        var _this7 = _possibleConstructorReturn(this, (_class5.__proto__ || Object.getPrototypeOf(_class5)).apply(this, arguments));

        _this7.data = options.data;
        _this7.declaration_index = options.declaration_index;
        _this7.text = options.text;

        _this7.text_obj = null;
        _this7.block_obj = null;
        _this7.inner_obj = null;
        _this7.arrow_obj = null;
        _this7.window_obj = null;

        _this7.rendered = false;

        _this7.listenTo(_this7, "rendered", _this7.update_size);
        _this7.listenTo(_this7.data, "window-resize", _this7.update_size);
        return _this7;
    }

    _createClass(_class5, [{
        key: "get_content",
        value: function get_content() {
            var declaration = this.data.get_declaration(this.declaration_index);
            var container_stack = declaration.name_pos.env.container_stack;
            var names = [];
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
                for (var _iterator8 = container_stack[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                    var container = _step8.value;

                    if (container.tag === "EnactStatement") {
                        names.push("（制定文）");
                    } else if (container.tag === "Article") {
                        var article_name = _(container.children).findWhere({ tag: "ArticleTitle" }).text;
                        names.push(article_name);
                    } else if (container.tag === "Paragraph") {
                        var paragraph_num = _(container.children).findWhere({ tag: "ParagraphNum" }).text || "１";
                        names.push(paragraph_num);
                    } else if (["Item", "Subitem1", "Subitem2", "Subitem3", "Subitem4", "Subitem5", "Subitem6", "Subitem7", "Subitem8", "Subitem9", "Subitem10"].indexOf(container.tag) >= 0) {
                        var item_title = _(container.children).findWhere({ tag: container.tag + "Title" }).text;
                        names.push(item_title);
                    } else if (container.tag === "Table") {
                        var table_struct_title_el = _(container.children).findWhere({ tag: "TableStructTitle" });
                        var table_struct_title = table_struct_title_el ? table_struct_title_el.text : "表";
                        names.push(table_struct_title + "（抜粋）");
                    }
                }
            } catch (err) {
                _didIteratorError8 = true;
                _iteratorError8 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion8 && _iterator8.return) {
                        _iterator8.return();
                    }
                } finally {
                    if (_didIteratorError8) {
                        throw _iteratorError8;
                    }
                }
            }

            var closest_children = container_stack[container_stack.length - 1].children.filter(function (el) {
                return ["ArticleTitle", "ParagraphNum", "ItemTitle", "Subitem1Title", "Subitem2Title", "Subitem3Title", "Subitem4Title", "Subitem5Title", "Subitem6Title", "Subitem7Title", "Subitem8Title", "Subitem9Title", "Subitem10Title", "SupplProvision"].indexOf(el.tag) < 0;
            });
            var fragment = Lawtext.render_elements_fragment(closest_children).trim();
            var ret = $("\n<div class=\"paragraph-item-body\"><span class=\"paragraph-item-num\">" + names.join("／") + "</span>\u3000" + fragment + "</div>\n");
            ret.find(".lawtext-analyzed-declaration[lawtext_declaration_index=\"" + this.declaration_index + "\"]").css({ "font-weight": "bold" });
            return ret;
        }
    }, {
        key: "render",
        value: function render() {
            var _this8 = this;

            this.$el.html(Lawtext.VarRefView_template({
                data: this.data.attributes,
                text: this.text
            }));
            this.text_obj = this.$(".lawtext-varref-text");
            this.block_obj = this.$(".lawtext-varref-float-block");
            this.inner_obj = this.$(".lawtext-varref-float-block-inner");
            this.arrow_obj = this.$(".lawtext-varref-arrow");
            this.window_obj = this.$(".lawtext-varref-window");
            this.rendered = true;

            this.listenTo(this.block_obj, "transitionend", alert);
            this.block_obj[0].addEventListener("transitionend", function () {
                if (!_this8.is_open) _this8.block_obj.hide();
            }, false);

            this.trigger("rendered");
        }
    }, {
        key: "update_window",
        value: function update_window() {
            this.window_obj.empty();
            this.window_obj.append(this.get_content());
        }
    }, {
        key: "update_size",
        value: function update_size() {
            if (!this.rendered) return;

            var text_left = this.text_obj.offset().left;
            var window_left = this.window_obj.offset().left;
            var rel_left = text_left - window_left;
            var left = Math.max(rel_left, em(0.2));
            this.arrow_obj.css({ "margin-left": left + "px" });

            var inner_height = this.inner_obj.outerHeight();
            this.block_obj.height(inner_height);
        }
    }, {
        key: "text_click",
        value: function text_click() {
            if (this.is_open) {
                this.block_obj.height(0);
                this.is_open = false;
            } else {
                this.update_window();
                this.block_obj.show();
                this.update_size();
                this.is_open = true;
            }
        }
    }, {
        key: "is_open",
        get: function get() {
            return this.$el.hasClass("lawtext-varref-open");
        },
        set: function set(value) {
            return this.$el.toggleClass("lawtext-varref-open", value);
        }
    }]);

    return _class5;
}(Backbone.View);

Lawtext.HTMLpreviewView_template = _.template(Lawtext.htmlpreview_view_template);
Lawtext.HTMLpreviewView = function (_Backbone$View3) {
    _inherits(_class6, _Backbone$View3);

    _createClass(_class6, [{
        key: "tagName",
        get: function get() {
            return "div";
        }
    }, {
        key: "className",
        get: function get() {
            return "lawtext-htmlpreview-view";
        }
    }]);

    function _class6(options) {
        _classCallCheck(this, _class6);

        var _this9 = _possibleConstructorReturn(this, (_class6.__proto__ || Object.getPrototypeOf(_class6)).apply(this, arguments));

        _this9.data = options.data;
        _this9.law_html = null;
        _this9.analyzed = false;

        _this9.listenTo(_this9.data, "change:law", _this9.law_change);
        _this9.listenTo(_this9.data, "change:law change:opening_file", _.debounce(function () {
            _this9.render();
        }, 100));
        _this9.listenTo(_this9.data, "scroll-to-law-anchor", _this9.scroll_to_law_anchor);

        _this9.varref_views = [];
        return _this9;
    }

    _createClass(_class6, [{
        key: "law_change",
        value: function law_change() {
            this.law_html = null;
            this.analyzed = false;
        }
    }, {
        key: "render",
        value: function render() {
            var law = this.data.get("law");
            if (law !== null && this.law_html === null) {
                var analysis = Lawtext.analyze(law);
                this.law_html = Lawtext.render_law("htmlfragment.html", law);
                this.analyzed = true;
                this.data.set(_defineProperty({ analysis: analysis }, "analysis", analysis));
            }

            this.$el.html(Lawtext.HTMLpreviewView_template({
                data: this.data.attributes,
                law_html: this.law_html
            }));

            this.varref_views = [];
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = this.$(".lawtext-analyzed-varref")[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var el = _step9.value;

                    var obj = $(el);
                    var varref_view = new Lawtext.VarRefView({
                        data: this.data,
                        declaration_index: parseInt(obj.attr("lawtext_declaration_index"), 10),
                        text: obj.text()
                    });
                    obj.replaceWith(varref_view.el);
                    varref_view.render();
                    this.varref_views.push(varref_view);
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
                        _iterator9.return();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }
        }
    }, {
        key: "scroll_to_law_anchor",
        value: function scroll_to_law_anchor(tag, name) {
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = this.$(".law-anchor")[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var el = _step10.value;

                    var obj = $(el);
                    if (obj.data("tag") === tag && obj.data("name") === name) {
                        $("html,body").animate({ scrollTop: obj.offset().top }, "normal");
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10.return) {
                        _iterator10.return();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }
        }
    }]);

    return _class6;
}(Backbone.View);

Lawtext.MainView_template = _.template(Lawtext.main_view_template);
Lawtext.MainView = function (_Backbone$View4) {
    _inherits(_class7, _Backbone$View4);

    _createClass(_class7, [{
        key: "tagName",
        get: function get() {
            return "div";
        }
    }, {
        key: "className",
        get: function get() {
            return "lawtext-main-view";
        }
    }, {
        key: "events",
        get: function get() {
            return {
                "click .lawtext-open-file-button": "open_file_button_click",
                "click .lawtext-download-sample-lawtext-button": "download_sample_lawtext_button_click",
                "click .search-law-button": "search_law_button_click",
                "click .lawtext-download-docx-button": "download_docx_button_click",
                "click .lawtext-download-docx-selected-button": "download_docx_selected_button_click",
                "click .lawtext-download-lawtext-button": "download_lawtext_button_click",
                "click .lawtext-download-xml-button": "download_xml_button_click",
                "click .law-link": "law_link_click",
                "click .lawtext-analyzed-varref-text": "varref_text_click"
            };
        }
    }]);

    function _class7(options) {
        _classCallCheck(this, _class7);

        var _this10 = _possibleConstructorReturn(this, (_class7.__proto__ || Object.getPrototypeOf(_class7)).apply(this, arguments));

        _this10.data = options.data;
        _this10.router = options.router;

        _this10.sidebar_view = new Lawtext.SidebarView({
            data: Lawtext.data
        });
        _this10.htmlpreview_view = new Lawtext.HTMLpreviewView({
            data: Lawtext.data
        });

        _this10.listenTo(_this10.data, "change:law_search_key", _this10.law_search_key_change);
        _this10.listenTo(_this10.data, "change:law", _this10.law_change);
        _this10.listenTo(_this10.data, "error", _this10.onerror);
        return _this10;
    }

    _createClass(_class7, [{
        key: "render",
        value: function render() {
            this.sidebar_view.$el.detach();
            this.htmlpreview_view.$el.detach();

            this.$el.html(Lawtext.MainView_template({}));

            this.$(".lawtext-sidebar-view-place").replaceWith(this.sidebar_view.el);
            this.sidebar_view.render();
            this.$(".lawtext-htmlpreview-view-place").replaceWith(this.htmlpreview_view.el);
            this.htmlpreview_view.render();
        }
    }, {
        key: "search_law_button_click",
        value: function search_law_button_click(e) {
            var obj = $(e.currentTarget);

            var textbox = obj.parent().parent().find(".search-law-textbox");
            var text = textbox.val().trim();

            this.router.navigate(text, { trigger: true });

            return false;
        }
    }, {
        key: "open_file_button_click",
        value: function open_file_button_click(e) {
            this.data.open_file();
        }
    }, {
        key: "download_sample_lawtext_button_click",
        value: function download_sample_lawtext_button_click(e) {
            var blob = new Blob([Lawtext.sample_lawtext], { type: "text/plain" });
            saveAs(blob, "sample_lawtext.law.txt");
        }
    }, {
        key: "tobe_downloaded_range",
        value: function tobe_downloaded_range() {
            var selection = window.getSelection();

            var get_pos = function get_pos(node) {
                var el = $(node.parentNode);
                var item_el = _(el.parents("[selection-id]")).last();
                if (!item_el && el.attr("selection-id")) item_el = el[0];
                if (!item_el) return null;
                var m = item_el.getAttribute("selection-id").match(/([^_]+)(?:_([^_]+))?___([^_]+)(?:_([^_]+))?/);
                return {
                    container_tag: m[1],
                    container_id: m[2] || null,
                    item_tag: m[3],
                    item_id: m[4] || null
                };
            };

            var s_pos = get_pos(selection.anchorNode);
            var e_pos = get_pos(selection.focusNode);
            if (!s_pos || !e_pos) return null;

            return {
                start: s_pos,
                end: e_pos
            };
        }
    }, {
        key: "download_docx_selected_button_click",
        value: function download_docx_selected_button_click(e) {
            var range = this.tobe_downloaded_range();
            if (range) {
                this.data.download_docx(range);
            } else {
                alert("選択範囲が取得できませんでした。");
            }
        }
    }, {
        key: "download_docx_button_click",
        value: function download_docx_button_click(e) {
            this.data.download_docx();
        }
    }, {
        key: "download_lawtext_button_click",
        value: function download_lawtext_button_click(e) {
            this.data.download_lawtext();
        }
    }, {
        key: "download_xml_button_click",
        value: function download_xml_button_click(e) {
            this.data.download_xml();
        }
    }, {
        key: "law_link_click",
        value: function law_link_click(e) {
            var obj = $(e.currentTarget);
            this.data.trigger("scroll-to-law-anchor", obj.data("tag"), obj.data("name"));
        }
    }, {
        key: "law_search_key_change",
        value: function law_search_key_change() {
            var law_search_key = this.data.get("law_search_key");
            if (law_search_key) {
                this.data.search_law(law_search_key);
            }
        }
    }, {
        key: "law_change",
        value: function law_change() {
            var law = this.data.get("law");
            var law_search_key = this.data.get("law_search_key");

            if (law && law_search_key) {
                var law_body = _(law.children).findWhere({ tag: "LawBody" });
                var law_title = _(law_body.children).findWhere({ tag: "LawTitle" });
                document.title = law_title.children[0] + " | Lawtext";
            } else {
                document.title = "Lawtext";
            }
        }
    }, {
        key: "onerror",
        value: function onerror(title, body_el) {
            var modal = this.$("#errorModal");
            modal.find(".modal-title").html(title);
            modal.find(".modal-body").html(body_el);
            modal.modal("show");
        }
    }, {
        key: "varref_text_click",
        value: function varref_text_click(e) {
            var obj = $(e.currentTarget);

            var varref = obj.closest(".lawtext-analyzed-varref");
            var is_open = varref.hasClass("lawtext-analyzed-varref-open");

            var parent_div = varref.closest("div");

            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = parent_div.find(".lawtext-analyzed-varref.lawtext-analyzed-varref-open")[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var _el2 = _step11.value;

                    var _varref = $(_el2);
                    var _parent_div = _varref.closest("div");
                    if (!parent_div[0].isEqualNode(_parent_div[0])) return;
                    var _arr = $(_varref.find(".lawtext-analyzed-varref-arrow")[0]);
                    var _win = $(_varref.find(".lawtext-analyzed-varref-window")[0]);
                    _varref.removeClass("lawtext-analyzed-varref-open");
                    _arr.hide();
                    _win.slideUp(200);
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
                        _iterator11.return();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }

            if (!is_open) {
                var arr = $(varref.find(".lawtext-analyzed-varref-arrow")[0]);
                var win = $(varref.find(".lawtext-analyzed-varref-window")[0]);
                var is_empty = win.hasClass("lawtext-analyzed-varref-empty");
                if (is_empty) {
                    var decl_index = varref.attr("lawtext_declaration_index");
                    var decl = self.$(".lawtext-analyzed-declaration[lawtext_declaration_index=\"" + decl_index + "\"]");
                    var decl_container = decl.closest(".article,.enact-statement").clone();
                    var _iteratorNormalCompletion12 = true;
                    var _didIteratorError12 = false;
                    var _iteratorError12 = undefined;

                    try {
                        for (var _iterator12 = decl_container.find(".lawtext-analyzed-declaration[lawtext_declaration_index]")[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                            var el = _step12.value;

                            var _obj = $(el);
                            _obj.removeAttr("lawtext_declaration_index");
                        }
                    } catch (err) {
                        _didIteratorError12 = true;
                        _iteratorError12 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion12 && _iterator12.return) {
                                _iterator12.return();
                            }
                        } finally {
                            if (_didIteratorError12) {
                                throw _iteratorError12;
                            }
                        }
                    }

                    var _iteratorNormalCompletion13 = true;
                    var _didIteratorError13 = false;
                    var _iteratorError13 = undefined;

                    try {
                        for (var _iterator13 = decl_container.find(".lawtext-analyzed-varref-window")[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                            var _el = _step13.value;

                            var _obj2 = $(_el);
                            _obj2.html();
                            _obj2.addClass("lawtext-analyzed-varref-empty");
                        }
                    } catch (err) {
                        _didIteratorError13 = true;
                        _iteratorError13 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion13 && _iterator13.return) {
                                _iterator13.return();
                            }
                        } finally {
                            if (_didIteratorError13) {
                                throw _iteratorError13;
                            }
                        }
                    }

                    win.html(decl_container);
                    win.removeClass("lawtext-analyzed-varref-empty");
                }
                varref.addClass("lawtext-analyzed-varref-open");
                arr.show();
                win.slideDown(200);
            }
        }
    }]);

    return _class7;
}(Backbone.View);

Lawtext.Router = function (_Backbone$Router) {
    _inherits(_class8, _Backbone$Router);

    _createClass(_class8, [{
        key: "routes",
        get: function get() {
            return {
                ":law_search_key": "law",
                "": "index"
            };
        }
    }]);

    function _class8(options) {
        _classCallCheck(this, _class8);

        var _this11 = _possibleConstructorReturn(this, (_class8.__proto__ || Object.getPrototypeOf(_class8)).apply(this, arguments));

        _this11.data = options.data;

        _this11.listenTo(_this11.data, "file-loaded", function () {
            _this11.navigate("", { trigger: false });
        });
        return _this11;
    }

    _createClass(_class8, [{
        key: "law",
        value: function law(law_search_key) {
            this.data.set({ law_search_key: law_search_key });
        }
    }, {
        key: "index",
        value: function index() {
            this.data.set({ law_search_key: null, law: null });
        }
    }]);

    return _class8;
}(Backbone.Router);

$(function () {

    Lawtext.data = new Lawtext.Data();

    Lawtext.router = new Lawtext.Router({
        data: Lawtext.data
    });

    Lawtext.main_view = new Lawtext.MainView({
        data: Lawtext.data,
        router: Lawtext.router
    });
    $(".lawtext-main-view-place").replaceWith(Lawtext.main_view.el);
    Lawtext.main_view.render();

    Backbone.history.start({ pushState: false });

    $(".search-law-textbox").focus();
});
