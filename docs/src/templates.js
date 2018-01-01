(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["docx/word/document.xml"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["law"], 
[], 
function (l_law, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law", l_law);
var t_2 = "";frame = frame.push();
var t_5 = runtime.memberLookup((l_law),"children");
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("el", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
if(runtime.memberLookup((t_6),"tag") == "LawBody") {
t_2 += runtime.suppressValue((lineno = 3, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_law_body"), "m_law_body", context, [t_6])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_6),"tag") == "LawNum") {
;
}
else {
t_2 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_2 += runtime.suppressValue((lineno = 8, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_6])), env.opts.autoescape);
t_2 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("m_law");
context.setVariable("m_law", macro_t_1);
var macro_t_7 = runtime.makeMacro(
["law_body"], 
[], 
function (l_law_body, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law_body", l_law_body);
var t_8 = "";frame = frame.push();
var t_11 = runtime.memberLookup((l_law_body),"children");
if(t_11) {var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("el", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
if(runtime.memberLookup((t_12),"tag") == "LawTitle") {
t_8 += runtime.suppressValue((lineno = 20, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_law_title"), "m_law_title", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_12),"tag") == "EnactStatement") {
t_8 += runtime.suppressValue((lineno = 22, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_enact_statement"), "m_enact_statement", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_12),"tag") == "TOC") {
t_8 += runtime.suppressValue((lineno = 24, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc"), "m_toc", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_12),"tag"),["MainProvision","SupplProvision"])) {
t_8 += runtime.suppressValue((lineno = 26, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_12),"tag") == "AppdxTable") {
t_8 += runtime.suppressValue((lineno = 28, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_appdx_table"), "m_appdx_table", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_12),"tag") == "AppdxStyle") {
t_8 += runtime.suppressValue((lineno = 30, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_appdx_style"), "m_appdx_style", context, [t_12])), env.opts.autoescape);
;
}
else {
t_8 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_8 += runtime.suppressValue((lineno = 34, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_12])), env.opts.autoescape);
t_8 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_8);
});
context.addExport("m_law_body");
context.setVariable("m_law_body", macro_t_7);
var macro_t_13 = runtime.makeMacro(
["law_title"], 
[], 
function (l_law_title, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law_title", l_law_title);
var t_14 = "";t_14 += "\r\n<w:p>";
t_14 += runtime.suppressValue((lineno = 45, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [l_law_title,1])), env.opts.autoescape);
t_14 += "</w:p>";
frame = frame.push();
var t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "law")),"children");
if(t_17) {var t_16 = t_17.length;
for(var t_15=0; t_15 < t_17.length; t_15++) {
var t_18 = t_17[t_15];
frame.set("child", t_18);
frame.set("loop.index", t_15 + 1);
frame.set("loop.index0", t_15);
frame.set("loop.revindex", t_16 - t_15);
frame.set("loop.revindex0", t_16 - t_15 - 1);
frame.set("loop.first", t_15 === 0);
frame.set("loop.last", t_15 === t_16 - 1);
frame.set("loop.length", t_16);
if(runtime.memberLookup((t_18),"tag") == "LawNum") {
t_14 += "\r\n<w:p>\r\n  <w:r>\r\n    <w:rStyle w:val=\"Emphasis\"/>\r\n    <w:t>（</w:t>\r\n  </w:r>";
t_14 += runtime.suppressValue((lineno = 54, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_18,1])), env.opts.autoescape);
t_14 += "<w:r>\r\n    <w:rStyle w:val=\"Emphasis\"/>\r\n    <w:t>）</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_14);
});
context.addExport("m_law_title");
context.setVariable("m_law_title", macro_t_13);
var macro_t_19 = runtime.makeMacro(
["enact_statement"], 
[], 
function (l_enact_statement, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("enact_statement", l_enact_statement);
var t_20 = "";t_20 += "\r\n<w:p>";
t_20 += runtime.suppressValue((lineno = 68, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [l_enact_statement])), env.opts.autoescape);
t_20 += "</w:p>";
;
frame = callerFrame;
return new runtime.SafeString(t_20);
});
context.addExport("m_enact_statement");
context.setVariable("m_enact_statement", macro_t_19);
var macro_t_21 = runtime.makeMacro(
["toc"], 
[], 
function (l_toc, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("toc", l_toc);
var t_22 = "";t_22 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"EmptyParagraph\"/>\r\n  </w:pPr>\r\n</w:p>";
frame = frame.push();
var t_25 = runtime.memberLookup((l_toc),"children");
if(t_25) {var t_24 = t_25.length;
for(var t_23=0; t_23 < t_25.length; t_23++) {
var t_26 = t_25[t_23];
frame.set("el", t_26);
frame.set("loop.index", t_23 + 1);
frame.set("loop.index0", t_23);
frame.set("loop.revindex", t_24 - t_23);
frame.set("loop.revindex0", t_24 - t_23 - 1);
frame.set("loop.first", t_23 === 0);
frame.set("loop.last", t_23 === t_24 - 1);
frame.set("loop.length", t_24);
if(runtime.memberLookup((t_26),"tag") == "TOCLabel") {
t_22 += "\r\n<w:p>";
t_22 += runtime.suppressValue((lineno = 83, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_26])), env.opts.autoescape);
t_22 += "</w:p>";
;
}
;
}
}
frame = frame.pop();
frame = frame.push();
var t_29 = runtime.memberLookup((l_toc),"children");
if(t_29) {var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("el", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
if(runtime.memberLookup((t_30),"tag") == "TOCLabel") {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_30),"tag"),["TOCPart","TOCChapter","TOCSection","TOCSupplProvision"])) {
t_22 += runtime.suppressValue((lineno = 90, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_30,1])), env.opts.autoescape);
;
}
else {
t_22 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_22 += runtime.suppressValue((lineno = 94, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_30])), env.opts.autoescape);
t_22 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.addExport("m_toc");
context.setVariable("m_toc", macro_t_21);
var macro_t_31 = runtime.makeMacro(
["toc_group", "indent"], 
[], 
function (l_toc_group, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("toc_group", l_toc_group);
frame.set("indent", l_indent);
var t_32 = "";t_32 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"IndentHanging";
t_32 += runtime.suppressValue(l_indent, env.opts.autoescape);
t_32 += "\"/>\r\n  </w:pPr>";
frame = frame.push();
var t_35 = runtime.memberLookup((l_toc_group),"children");
if(t_35) {var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("el", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
if(runtime.inOperator(runtime.memberLookup((t_36),"tag"),["TOCChapter","TOCSection","TOCSubsection","TOCDivision"])) {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_36),"tag"),["SupplProvisionLabel","PartTitle","ChapterTitle","SectionTitle","SubsectionTitle","DivisionTitle"])) {
t_32 += runtime.suppressValue((lineno = 115, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_36])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_36),"tag") == "ArticleRange") {
t_32 += runtime.suppressValue((lineno = 117, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_36])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_32 += "\r\n</w:p>";
frame = frame.push();
var t_39 = runtime.memberLookup((l_toc_group),"children");
if(t_39) {var t_38 = t_39.length;
for(var t_37=0; t_37 < t_39.length; t_37++) {
var t_40 = t_39[t_37];
frame.set("el", t_40);
frame.set("loop.index", t_37 + 1);
frame.set("loop.index0", t_37);
frame.set("loop.revindex", t_38 - t_37);
frame.set("loop.revindex0", t_38 - t_37 - 1);
frame.set("loop.first", t_37 === 0);
frame.set("loop.last", t_37 === t_38 - 1);
frame.set("loop.length", t_38);
if(runtime.inOperator(runtime.memberLookup((t_40),"tag"),["TOCChapter","TOCSection","TOCSubsection","TOCDivision"])) {
t_32 += runtime.suppressValue((lineno = 123, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_40,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_40),"tag"),["SupplProvisionLabel","PartTitle","ChapterTitle","SectionTitle","SubsectionTitle","DivisionTitle"])) {
;
}
else {
if(runtime.memberLookup((t_40),"tag") == "ArticleRange") {
;
}
else {
t_32 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_32 += runtime.suppressValue((lineno = 133, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_40])), env.opts.autoescape);
t_32 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_32);
});
context.addExport("m_toc_group");
context.setVariable("m_toc_group", macro_t_31);
var macro_t_41 = runtime.makeMacro(
["article_group"], 
[], 
function (l_article_group, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("article_group", l_article_group);
var t_42 = "";frame = frame.push();
var t_45 = runtime.memberLookup((l_article_group),"children");
if(t_45) {var t_44 = t_45.length;
for(var t_43=0; t_43 < t_45.length; t_43++) {
var t_46 = t_45[t_43];
frame.set("el", t_46);
frame.set("loop.index", t_43 + 1);
frame.set("loop.index0", t_43);
frame.set("loop.revindex", t_44 - t_43);
frame.set("loop.revindex0", t_44 - t_43 - 1);
frame.set("loop.first", t_43 === 0);
frame.set("loop.last", t_43 === t_44 - 1);
frame.set("loop.length", t_44);
if(runtime.inOperator(runtime.memberLookup((t_46),"tag"),["Part","Chapter","Section","Subsection","Division"])) {
t_42 += runtime.suppressValue((lineno = 145, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_46])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_46),"tag"),["SupplProvisionLabel","PartTitle","ChapterTitle","SectionTitle","SubsectionTitle","DivisionTitle"])) {
var t_47;
t_47 = runtime.memberLookup(({"SupplProvisionLabel": 3,"PartTitle": 2,"ChapterTitle": 3,"SectionTitle": 4,"SubsectionTitle": 5,"DivisionTitle": 6}),runtime.memberLookup((t_46),"tag"));
frame.set("title_indent", t_47, true);
if(frame.topLevel) {
context.setVariable("title_indent", t_47);
}
if(frame.topLevel) {
context.addExport("title_indent", t_47);
}
t_42 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"EmptyParagraph\"/>\r\n  </w:pPr>\r\n</w:p>\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"IndentHanging";
t_42 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title_indent"), env.opts.autoescape);
t_42 += "\"/>\r\n  </w:pPr>";
t_42 += runtime.suppressValue((lineno = 165, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_46,1])), env.opts.autoescape);
if(runtime.inOperator("AmendLawNum",runtime.memberLookup((l_article_group),"attr"))) {
t_42 += "\r\n  <w:r>\r\n    <w:rStyle w:val=\"Emphasis\"/>\r\n    <w:t>\r\n        （";
t_42 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"AmendLawNum"), env.opts.autoescape);
t_42 += "）\r\n    </w:t>\r\n  </w:r>";
;
}
if(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"Extract") == "true") {
t_42 += runtime.suppressValue((lineno = 175, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, ["　抄",1])), env.opts.autoescape);
;
}
t_42 += "\r\n</w:p>";
;
}
else {
if(runtime.memberLookup((t_46),"tag") == "Article") {
t_42 += runtime.suppressValue((lineno = 179, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article"), "m_article", context, [t_46])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_46),"tag") == "Paragraph") {
t_42 += runtime.suppressValue((lineno = 181, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_46,{},0])), env.opts.autoescape);
;
}
else {
t_42 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_42 += runtime.suppressValue((lineno = 185, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_46])), env.opts.autoescape);
t_42 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_42);
});
context.addExport("m_article_group");
context.setVariable("m_article_group", macro_t_41);
var macro_t_48 = runtime.makeMacro(
["article"], 
[], 
function (l_article, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("article", l_article);
var t_49 = "";t_49 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"EmptyParagraph\"/>\r\n  </w:pPr>\r\n</w:p>";
frame = frame.push();
var t_52 = runtime.memberLookup((l_article),"children");
if(t_52) {var t_51 = t_52.length;
for(var t_50=0; t_50 < t_52.length; t_50++) {
var t_53 = t_52[t_50];
frame.set("el", t_53);
frame.set("loop.index", t_50 + 1);
frame.set("loop.index0", t_50);
frame.set("loop.revindex", t_51 - t_50);
frame.set("loop.revindex0", t_51 - t_50 - 1);
frame.set("loop.first", t_50 === 0);
frame.set("loop.last", t_50 === t_51 - 1);
frame.set("loop.length", t_51);
if(runtime.memberLookup((t_53),"tag") == "ArticleCaption") {
t_49 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"IndentHanging";
t_49 += runtime.suppressValue(1, env.opts.autoescape);
t_49 += "\"/>\r\n  </w:pPr>";
t_49 += runtime.suppressValue((lineno = 206, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_53])), env.opts.autoescape);
t_49 += "</w:p>";
;
}
;
}
}
frame = frame.pop();
frame = frame.push();
var t_56 = runtime.memberLookup((l_article),"children");
if(t_56) {var t_55 = t_56.length;
for(var t_54=0; t_54 < t_56.length; t_54++) {
var t_57 = t_56[t_54];
frame.set("el", t_57);
frame.set("loop.index", t_54 + 1);
frame.set("loop.index0", t_54);
frame.set("loop.revindex", t_55 - t_54);
frame.set("loop.revindex0", t_55 - t_54 - 1);
frame.set("loop.first", t_54 === 0);
frame.set("loop.last", t_54 === t_55 - 1);
frame.set("loop.length", t_55);
if(runtime.memberLookup((t_57),"tag") == "ArticleCaption") {
;
}
else {
if(runtime.memberLookup((t_57),"tag") == "ArticleTitle") {
;
}
else {
if(runtime.memberLookup((t_57),"tag") == "Paragraph") {
t_49 += runtime.suppressValue((lineno = 214, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_57,l_article,0])), env.opts.autoescape);
;
}
else {
t_49 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_49 += runtime.suppressValue((lineno = 218, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_57])), env.opts.autoescape);
t_49 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_49);
});
context.addExport("m_article");
context.setVariable("m_article", macro_t_48);
var macro_t_58 = runtime.makeMacro(
["paragraph_item", "article", "indent"], 
[], 
function (l_paragraph_item, l_article, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("paragraph_item", l_paragraph_item);
frame.set("article", l_article);
frame.set("indent", l_indent);
var t_59 = "";frame = frame.push();
var t_62 = runtime.memberLookup((l_paragraph_item),"children");
if(t_62) {var t_61 = t_62.length;
for(var t_60=0; t_60 < t_62.length; t_60++) {
var t_63 = t_62[t_60];
frame.set("el", t_63);
frame.set("loop.index", t_60 + 1);
frame.set("loop.index0", t_60);
frame.set("loop.revindex", t_61 - t_60);
frame.set("loop.revindex0", t_61 - t_60 - 1);
frame.set("loop.first", t_60 === 0);
frame.set("loop.last", t_60 === t_61 - 1);
frame.set("loop.length", t_61);
if(runtime.memberLookup((t_63),"tag") == "ParagraphCaption") {
t_59 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"IndentHanging";
t_59 += runtime.suppressValue(1, env.opts.autoescape);
t_59 += "\"/>\r\n  </w:pPr>";
t_59 += runtime.suppressValue((lineno = 235, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_63])), env.opts.autoescape);
t_59 += "</w:p>";
;
}
;
}
}
frame = frame.pop();
t_59 += "\r\n<w:p>\r\n  <w:pPr>";
t_59 += runtime.suppressValue((lineno = 242, colno = 14, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",1])), env.opts.autoescape);
frame = frame.push();
var t_66 = runtime.memberLookup((l_paragraph_item),"children");
if(t_66) {var t_65 = t_66.length;
for(var t_64=0; t_64 < t_66.length; t_64++) {
var t_67 = t_66[t_64];
frame.set("el", t_67);
frame.set("loop.index", t_64 + 1);
frame.set("loop.index0", t_64);
frame.set("loop.revindex", t_65 - t_64);
frame.set("loop.revindex0", t_65 - t_64 - 1);
frame.set("loop.first", t_64 === 0);
frame.set("loop.last", t_64 === t_65 - 1);
frame.set("loop.length", t_65);
if(runtime.inOperator(runtime.memberLookup((t_67),"tag"),["ParagraphNum","ItemTitle","Subitem1Title","Subitem2Title","Subitem3Title","Subitem4Title","Subitem5Title","Subitem6Title","Subitem7Title","Subitem8Title","Subitem9Title","Subitem10Title"])) {
if(l_article && runtime.memberLookup((l_paragraph_item),"tag") == "Paragraph" && runtime.memberLookup((runtime.memberLookup((l_paragraph_item),"attr")),"Num") == "1") {
frame = frame.push();
var t_70 = runtime.memberLookup((l_article),"children");
if(t_70) {var t_69 = t_70.length;
for(var t_68=0; t_68 < t_70.length; t_68++) {
var t_71 = t_70[t_68];
frame.set("el2", t_71);
frame.set("loop.index", t_68 + 1);
frame.set("loop.index0", t_68);
frame.set("loop.revindex", t_69 - t_68);
frame.set("loop.revindex0", t_69 - t_68 - 1);
frame.set("loop.first", t_68 === 0);
frame.set("loop.last", t_68 === t_69 - 1);
frame.set("loop.length", t_69);
if(runtime.memberLookup((t_71),"tag") == "ArticleTitle") {
if(env.getFilter("length").call(context, runtime.memberLookup((t_71),"children"))) {
t_59 += runtime.suppressValue((lineno = 256, colno = 26, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",0])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
;
}
if(env.getFilter("length").call(context, runtime.memberLookup((t_67),"children"))) {
t_59 += runtime.suppressValue((lineno = 263, colno = 20, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",0])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
if((lineno = 269, colno = 17, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["no_title"]))) {
t_59 += "<w:pStyle w:val=\"IndentFirstLine";
t_59 += runtime.suppressValue(l_indent, env.opts.autoescape);
t_59 += "\"/>";
;
}
else {
t_59 += "<w:pStyle w:val=\"";
t_59 += runtime.suppressValue(runtime.memberLookup((l_paragraph_item),"tag"), env.opts.autoescape);
t_59 += "\"/>";
;
}
t_59 += "</w:pPr>";
frame = frame.push();
var t_74 = runtime.memberLookup((l_paragraph_item),"children");
if(t_74) {var t_73 = t_74.length;
for(var t_72=0; t_72 < t_74.length; t_72++) {
var t_75 = t_74[t_72];
frame.set("el", t_75);
frame.set("loop.index", t_72 + 1);
frame.set("loop.index0", t_72);
frame.set("loop.revindex", t_73 - t_72);
frame.set("loop.revindex0", t_73 - t_72 - 1);
frame.set("loop.first", t_72 === 0);
frame.set("loop.last", t_72 === t_73 - 1);
frame.set("loop.length", t_73);
if(runtime.memberLookup((t_75),"tag") == "ParagraphCaption") {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_75),"tag"),["ParagraphNum","ItemTitle","Subitem1Title","Subitem2Title","Subitem3Title","Subitem4Title","Subitem5Title","Subitem6Title","Subitem7Title","Subitem8Title","Subitem9Title","Subitem10Title"])) {
if(l_article && runtime.memberLookup((l_paragraph_item),"tag") == "Paragraph" && runtime.memberLookup((runtime.memberLookup((l_paragraph_item),"attr")),"Num") == "1") {
frame = frame.push();
var t_78 = runtime.memberLookup((l_article),"children");
if(t_78) {var t_77 = t_78.length;
for(var t_76=0; t_76 < t_78.length; t_76++) {
var t_79 = t_78[t_76];
frame.set("el2", t_79);
frame.set("loop.index", t_76 + 1);
frame.set("loop.index0", t_76);
frame.set("loop.revindex", t_77 - t_76);
frame.set("loop.revindex0", t_77 - t_76 - 1);
frame.set("loop.first", t_76 === 0);
frame.set("loop.last", t_76 === t_77 - 1);
frame.set("loop.length", t_77);
if(runtime.memberLookup((t_79),"tag") == "ArticleTitle") {
t_59 += runtime.suppressValue((lineno = 287, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_79,1])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
}
if(env.getFilter("length").call(context, runtime.memberLookup((t_75),"children"))) {
t_59 += runtime.suppressValue((lineno = 292, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_75,1])), env.opts.autoescape);
;
}
if(!(lineno = 294, colno = 25, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["no_title"]))) {
t_59 += "<w:r>\r\n        <w:t>";
t_59 += runtime.suppressValue("　", env.opts.autoescape);
t_59 += "</w:t>\r\n      </w:r>";
;
}
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_75),"tag"),["ParagraphSentence","ItemSentence","Subitem1Sentence","Subitem2Sentence","Subitem3Sentence","Subitem4Sentence","Subitem5Sentence","Subitem6Sentence","Subitem7Sentence","Subitem8Sentence","Subitem9Sentence","Subitem10Sentence"])) {
t_59 += runtime.suppressValue((lineno = 305, colno = 36, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item_sentence_run"), "m_paragraph_item_sentence_run", context, [t_75])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_59 += "\r\n</w:p>";
frame = frame.push();
var t_82 = runtime.memberLookup((l_paragraph_item),"children");
if(t_82) {var t_81 = t_82.length;
for(var t_80=0; t_80 < t_82.length; t_80++) {
var t_83 = t_82[t_80];
frame.set("el", t_83);
frame.set("loop.index", t_80 + 1);
frame.set("loop.index0", t_80);
frame.set("loop.revindex", t_81 - t_80);
frame.set("loop.revindex0", t_81 - t_80 - 1);
frame.set("loop.first", t_80 === 0);
frame.set("loop.last", t_80 === t_81 - 1);
frame.set("loop.length", t_81);
if(runtime.memberLookup((t_83),"tag") == "ParagraphCaption") {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_83),"tag"),["ParagraphNum","ItemTitle","Subitem1Title","Subitem2Title","Subitem3Title","Subitem4Title","Subitem5Title","Subitem6Title","Subitem7Title","Subitem8Title","Subitem9Title","Subitem10Title"])) {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_83),"tag"),["ParagraphSentence","ItemSentence","Subitem1Sentence","Subitem2Sentence","Subitem3Sentence","Subitem4Sentence","Subitem5Sentence","Subitem6Sentence","Subitem7Sentence","Subitem8Sentence","Subitem9Sentence","Subitem10Sentence"])) {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_83),"tag"),["Item","Subitem1","Subitem2","Subitem3","Subitem4","Subitem5","Subitem6","Subitem7","Subitem8","Subitem9","Subitem10"])) {
t_59 += runtime.suppressValue((lineno = 330, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_83,l_article,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_83),"tag") == "TableStruct") {
t_59 += runtime.suppressValue((lineno = 332, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_83,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_83),"tag") == "List") {
t_59 += runtime.suppressValue((lineno = 334, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list"), "m_list", context, [t_83,l_indent + 2])), env.opts.autoescape);
;
}
else {
t_59 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_59 += runtime.suppressValue((lineno = 338, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_83])), env.opts.autoescape);
t_59 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_59);
});
context.addExport("m_paragraph_item");
context.setVariable("m_paragraph_item", macro_t_58);
var macro_t_84 = runtime.makeMacro(
["paragraph_item_sentence"], 
[], 
function (l_paragraph_item_sentence, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("paragraph_item_sentence", l_paragraph_item_sentence);
var t_85 = "";frame = frame.push();
var t_88 = runtime.memberLookup((l_paragraph_item_sentence),"children");
if(t_88) {var t_87 = t_88.length;
for(var t_86=0; t_86 < t_88.length; t_86++) {
var t_89 = t_88[t_86];
frame.set("el", t_89);
frame.set("loop.index", t_86 + 1);
frame.set("loop.index0", t_86);
frame.set("loop.revindex", t_87 - t_86);
frame.set("loop.revindex0", t_87 - t_86 - 1);
frame.set("loop.first", t_86 === 0);
frame.set("loop.last", t_86 === t_87 - 1);
frame.set("loop.length", t_87);
if(runtime.memberLookup((t_89),"tag") == "Sentence") {
t_85 += runtime.suppressValue((lineno = 351, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_89])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_89),"tag") == "Column") {
t_85 += runtime.suppressValue((lineno = 353, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_89])), env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_85 += runtime.suppressValue((lineno = 355, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, ["　"])), env.opts.autoescape);
;
}
;
}
else {
t_85 += "<w:r>\r\n    <w:t>";
t_85 += runtime.suppressValue((lineno = 359, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_89])), env.opts.autoescape);
t_85 += "</w:t>\r\n  </w:r>";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_85);
});
context.addExport("m_paragraph_item_sentence_run");
context.setVariable("m_paragraph_item_sentence_run", macro_t_84);
var macro_t_90 = runtime.makeMacro(
["column"], 
[], 
function (l_column, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("column", l_column);
var t_91 = "";frame = frame.push();
var t_94 = runtime.memberLookup((l_column),"children");
if(t_94) {var t_93 = t_94.length;
for(var t_92=0; t_92 < t_94.length; t_92++) {
var t_95 = t_94[t_92];
frame.set("el", t_95);
frame.set("loop.index", t_92 + 1);
frame.set("loop.index0", t_92);
frame.set("loop.revindex", t_93 - t_92);
frame.set("loop.revindex0", t_93 - t_92 - 1);
frame.set("loop.first", t_92 === 0);
frame.set("loop.last", t_92 === t_93 - 1);
frame.set("loop.length", t_93);
if(runtime.memberLookup((t_95),"tag") == "Sentence") {
t_91 += runtime.suppressValue((lineno = 370, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_95])), env.opts.autoescape);
;
}
else {
t_91 += "<w:r>\r\n    <w:t>";
t_91 += runtime.suppressValue((lineno = 373, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_95])), env.opts.autoescape);
t_91 += "</w:t>\r\n  </w:r>";
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_91);
});
context.addExport("m_column");
context.setVariable("m_column", macro_t_90);
var macro_t_96 = runtime.makeMacro(
["table_struct", "indent"], 
[], 
function (l_table_struct, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_struct", l_table_struct);
frame.set("indent", l_indent);
var t_97 = "";frame = frame.push();
var t_100 = runtime.memberLookup((l_table_struct),"children");
if(t_100) {var t_99 = t_100.length;
for(var t_98=0; t_98 < t_100.length; t_98++) {
var t_101 = t_100[t_98];
frame.set("el", t_101);
frame.set("loop.index", t_98 + 1);
frame.set("loop.index0", t_98);
frame.set("loop.revindex", t_99 - t_98);
frame.set("loop.revindex0", t_99 - t_98 - 1);
frame.set("loop.first", t_98 === 0);
frame.set("loop.last", t_98 === t_99 - 1);
frame.set("loop.length", t_99);
if(runtime.memberLookup((t_101),"tag") == "Table") {
t_97 += runtime.suppressValue((lineno = 384, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_101,l_indent])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_101),"tag") == "TableStructTitle") {
t_97 += "<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"IndentHanging";
t_97 += runtime.suppressValue(l_indent, env.opts.autoescape);
t_97 += "\"/>\r\n  </w:pPr>";
t_97 += runtime.suppressValue((lineno = 390, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_101])), env.opts.autoescape);
t_97 += "</w:p>";
;
}
else {
if(runtime.memberLookup((t_101),"tag") == "Remarks") {
t_97 += runtime.suppressValue((lineno = 393, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_101,l_indent])), env.opts.autoescape);
;
}
else {
t_97 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_97 += runtime.suppressValue((lineno = 397, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_101])), env.opts.autoescape);
t_97 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_97);
});
context.addExport("m_table_struct");
context.setVariable("m_table_struct", macro_t_96);
var macro_t_102 = runtime.makeMacro(
["table", "indent"], 
[], 
function (l_table, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table", l_table);
frame.set("indent", l_indent);
var t_103 = "";l_table = (lineno = 407, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "restructure_table"), "restructure_table", context, [l_table]));
frame.set("table", l_table, true);
if(frame.topLevel) {
context.setVariable("table", l_table);
}
if(frame.topLevel) {
context.addExport("table", l_table);
}
t_103 += "\r\n<w:tbl>\r\n  <w:tblPr>\r\n    <w:tblStyle w:val=\"IndentTable";
t_103 += runtime.suppressValue(l_indent, env.opts.autoescape);
t_103 += "\"/>\r\n  </w:tblPr>";
frame = frame.push();
var t_106 = runtime.memberLookup((l_table),"children");
if(t_106) {var t_105 = t_106.length;
for(var t_104=0; t_104 < t_106.length; t_104++) {
var t_107 = t_106[t_104];
frame.set("el", t_107);
frame.set("loop.index", t_104 + 1);
frame.set("loop.index0", t_104);
frame.set("loop.revindex", t_105 - t_104);
frame.set("loop.revindex0", t_105 - t_104 - 1);
frame.set("loop.first", t_104 === 0);
frame.set("loop.last", t_104 === t_105 - 1);
frame.set("loop.length", t_105);
if(runtime.memberLookup((t_107),"tag") == "TableRow") {
t_103 += runtime.suppressValue((lineno = 414, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_row"), "m_table_row", context, [t_107])), env.opts.autoescape);
;
}
else {
t_103 += "<w:tr>\r\n    <w:tc>\r\n      <w:p>\r\n        <w:r>\r\n          <w:t>";
t_103 += runtime.suppressValue((lineno = 420, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_107])), env.opts.autoescape);
t_103 += "</w:t>\r\n        </w:r>\r\n      </w:p>\r\n    </w:tc>\r\n  </w:tr>";
;
}
;
}
}
frame = frame.pop();
t_103 += "\r\n</w:tbl>";
;
frame = callerFrame;
return new runtime.SafeString(t_103);
});
context.addExport("m_table");
context.setVariable("m_table", macro_t_102);
var macro_t_108 = runtime.makeMacro(
["table_row"], 
[], 
function (l_table_row, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_row", l_table_row);
var t_109 = "";t_109 += "\r\n  <w:tr>";
frame = frame.push();
var t_112 = runtime.memberLookup((l_table_row),"children");
if(t_112) {var t_111 = t_112.length;
for(var t_110=0; t_110 < t_112.length; t_110++) {
var t_113 = t_112[t_110];
frame.set("el", t_113);
frame.set("loop.index", t_110 + 1);
frame.set("loop.index0", t_110);
frame.set("loop.revindex", t_111 - t_110);
frame.set("loop.revindex0", t_111 - t_110 - 1);
frame.set("loop.first", t_110 === 0);
frame.set("loop.last", t_110 === t_111 - 1);
frame.set("loop.length", t_111);
if(runtime.memberLookup((t_113),"tag") == "TableColumn") {
t_109 += runtime.suppressValue((lineno = 436, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_column"), "m_table_column", context, [t_113])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_113),"tag") == "TableColumnMerged") {
t_109 += runtime.suppressValue((lineno = 438, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_column_merged"), "m_table_column_merged", context, [t_113])), env.opts.autoescape);
;
}
else {
t_109 += "<w:tc>\r\n      <w:p>\r\n        <w:r>\r\n          <w:t>";
t_109 += runtime.suppressValue((lineno = 443, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_113])), env.opts.autoescape);
t_109 += "</w:t>\r\n        </w:r>\r\n      </w:p>\r\n    </w:tc>";
;
}
;
}
;
}
}
frame = frame.pop();
t_109 += "\r\n  </w:tr>";
;
frame = callerFrame;
return new runtime.SafeString(t_109);
});
context.addExport("m_table_row");
context.setVariable("m_table_row", macro_t_108);
var macro_t_114 = runtime.makeMacro(
["table_column"], 
[], 
function (l_table_column, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_column", l_table_column);
var t_115 = "";t_115 += "\r\n    <w:tc>\r\n      <w:tcPr>";
if(runtime.inOperator("colspan",runtime.memberLookup((l_table_column),"attr"))) {
t_115 += "\r\n          <w:gridSpan w:val=\"";
t_115 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"colspan"), env.opts.autoescape);
t_115 += "\"/>";
;
}
if(runtime.inOperator("rowspan",runtime.memberLookup((l_table_column),"attr"))) {
t_115 += "\r\n          <w:vMerge w:val=\"restart\"/>";
;
}
var t_116;
t_116 = {"top": "top","middle": "center","bottom": "bottom"};
frame.set("valign_dict", t_116, true);
if(frame.topLevel) {
context.setVariable("valign_dict", t_116);
}
if(frame.topLevel) {
context.addExport("valign_dict", t_116);
}
if(runtime.inOperator("Align",runtime.memberLookup((l_table_column),"attr"))) {
t_115 += "\r\n          <w:jc w:val=\"";
t_115 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"Align"), env.opts.autoescape);
t_115 += "\"/>";
;
}
if(runtime.inOperator("Valign",runtime.memberLookup((l_table_column),"attr"))) {
t_115 += "\r\n          <w:vAlign w:val=\"";
t_115 += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "valign_dict")),runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"Valign")), env.opts.autoescape);
t_115 += "\"/>";
;
}
else {
t_115 += "\r\n          <w:vAlign w:val=\"center\"/>";
;
}
t_115 += "\r\n        <w:tcBorders>";
var t_117;
t_117 = {"none": "nil","solid": "single","dotted": "dotted","double": "double"};
frame.set("border_dict", t_117, true);
if(frame.topLevel) {
context.setVariable("border_dict", t_117);
}
if(frame.topLevel) {
context.addExport("border_dict", t_117);
}
if(runtime.inOperator("BorderTop",runtime.memberLookup((l_table_column),"attr"))) {
t_115 += "\r\n            <w:top w:val=\"";
t_115 += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "border_dict")),runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"BorderTop")), env.opts.autoescape);
t_115 += "\"/>";
;
}
if(runtime.inOperator("BorderBottom",runtime.memberLookup((l_table_column),"attr"))) {
t_115 += "\r\n            <w:bottom w:val=\"";
t_115 += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "border_dict")),runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"BorderTop")), env.opts.autoescape);
t_115 += "\"/>";
;
}
if(runtime.inOperator("BorderLeft",runtime.memberLookup((l_table_column),"attr"))) {
t_115 += "\r\n            <w:left w:val=\"";
t_115 += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "border_dict")),runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"BorderTop")), env.opts.autoescape);
t_115 += "\"/>";
;
}
if(runtime.inOperator("BorderRight",runtime.memberLookup((l_table_column),"attr"))) {
t_115 += "\r\n            <w:right w:val=\"";
t_115 += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "border_dict")),runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"BorderTop")), env.opts.autoescape);
t_115 += "\"/>";
;
}
t_115 += "</w:tcBorders>\r\n      </w:tcPr>";
frame = frame.push();
var t_120 = runtime.memberLookup((l_table_column),"children");
if(t_120) {var t_119 = t_120.length;
for(var t_118=0; t_118 < t_120.length; t_118++) {
var t_121 = t_120[t_118];
frame.set("el", t_121);
frame.set("loop.index", t_118 + 1);
frame.set("loop.index0", t_118);
frame.set("loop.revindex", t_119 - t_118);
frame.set("loop.revindex0", t_119 - t_118 - 1);
frame.set("loop.first", t_118 === 0);
frame.set("loop.last", t_118 === t_119 - 1);
frame.set("loop.length", t_119);
if(runtime.memberLookup((t_121),"tag") == "Sentence") {
t_115 += "\r\n        <w:p>";
t_115 += runtime.suppressValue((lineno = 495, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_121])), env.opts.autoescape);
t_115 += "\r\n        </w:p>";
;
}
else {
if(runtime.memberLookup((t_121),"tag") == "Item") {
t_115 += runtime.suppressValue((lineno = 498, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_121,{},0])), env.opts.autoescape);
;
}
else {
t_115 += "<w:p>\r\n          <w:r>\r\n            <w:t>";
t_115 += runtime.suppressValue((lineno = 502, colno = 27, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_121])), env.opts.autoescape);
t_115 += "</w:t>\r\n          </w:r>\r\n        </w:p>";
;
}
;
}
;
}
}
frame = frame.pop();
t_115 += "\r\n    </w:tc>";
;
frame = callerFrame;
return new runtime.SafeString(t_115);
});
context.addExport("m_table_column");
context.setVariable("m_table_column", macro_t_114);
var macro_t_122 = runtime.makeMacro(
["table_column"], 
[], 
function (l_table_column, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_column", l_table_column);
var t_123 = "";t_123 += "\r\n<w:tc>\r\n  <w:tcPr>";
if(runtime.inOperator("colspan",runtime.memberLookup((l_table_column),"attr"))) {
t_123 += "<w:gridSpan w:val=\"";
t_123 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"colspan"), env.opts.autoescape);
t_123 += "\"/>";
;
}
t_123 += "<w:vMerge/>\r\n  </w:tcPr>\r\n  <w:p></w:p>\r\n</w:tc>";
;
frame = callerFrame;
return new runtime.SafeString(t_123);
});
context.addExport("m_table_column_merged");
context.setVariable("m_table_column_merged", macro_t_122);
var macro_t_124 = runtime.makeMacro(
["style_struct", "indent"], 
[], 
function (l_style_struct, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("style_struct", l_style_struct);
frame.set("indent", l_indent);
var t_125 = "";frame = frame.push();
var t_128 = runtime.memberLookup((l_style_struct),"children");
if(t_128) {var t_127 = t_128.length;
for(var t_126=0; t_126 < t_128.length; t_126++) {
var t_129 = t_128[t_126];
frame.set("el", t_129);
frame.set("loop.index", t_126 + 1);
frame.set("loop.index0", t_126);
frame.set("loop.revindex", t_127 - t_126);
frame.set("loop.revindex0", t_127 - t_126 - 1);
frame.set("loop.first", t_126 === 0);
frame.set("loop.last", t_126 === t_127 - 1);
frame.set("loop.length", t_127);
if(runtime.memberLookup((t_129),"tag") == "StyleStructTitle") {
t_125 += "<w:p>";
t_125 += runtime.suppressValue((lineno = 530, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_129,l_indent])), env.opts.autoescape);
t_125 += "</w:p>";
;
}
else {
if(runtime.memberLookup((t_129),"tag") == "Style") {
t_125 += runtime.suppressValue((lineno = 533, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_style"), "m_style", context, [t_129,l_indent])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_129),"tag") == "Remarks") {
t_125 += runtime.suppressValue((lineno = 535, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_129])), env.opts.autoescape);
;
}
else {
t_125 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_125 += runtime.suppressValue((lineno = 539, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_129])), env.opts.autoescape);
t_125 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_125);
});
context.addExport("m_style_struct");
context.setVariable("m_style_struct", macro_t_124);
var macro_t_130 = runtime.makeMacro(
["style", "indent"], 
[], 
function (l_style, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("style", l_style);
frame.set("indent", l_indent);
var t_131 = "";frame = frame.push();
var t_134 = runtime.memberLookup((l_style),"children");
if(t_134) {var t_133 = t_134.length;
for(var t_132=0; t_132 < t_134.length; t_132++) {
var t_135 = t_134[t_132];
frame.set("el", t_135);
frame.set("loop.index", t_132 + 1);
frame.set("loop.index0", t_132);
frame.set("loop.revindex", t_133 - t_132);
frame.set("loop.revindex0", t_133 - t_132 - 1);
frame.set("loop.first", t_132 === 0);
frame.set("loop.last", t_132 === t_133 - 1);
frame.set("loop.length", t_133);
if(runtime.memberLookup((t_135),"tag") == "Fig") {
t_131 += runtime.suppressValue((lineno = 551, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_fig"), "m_fig", context, [t_135,l_indent])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_135),"tag") == "Table") {
t_131 += runtime.suppressValue((lineno = 553, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_135,l_indent])), env.opts.autoescape);
;
}
else {
t_131 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_131 += runtime.suppressValue((lineno = 557, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_135])), env.opts.autoescape);
t_131 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_131);
});
context.addExport("m_style");
context.setVariable("m_style", macro_t_130);
var macro_t_136 = runtime.makeMacro(
["appdx_table"], 
[], 
function (l_appdx_table, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_table", l_appdx_table);
var t_137 = "";t_137 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"EmptyParagraph\"/>\r\n  </w:pPr>\r\n</w:p>";
frame = frame.push();
var t_140 = runtime.memberLookup((l_appdx_table),"children");
if(t_140) {var t_139 = t_140.length;
for(var t_138=0; t_138 < t_140.length; t_138++) {
var t_141 = t_140[t_138];
frame.set("el", t_141);
frame.set("loop.index", t_138 + 1);
frame.set("loop.index0", t_138);
frame.set("loop.revindex", t_139 - t_138);
frame.set("loop.revindex0", t_139 - t_138 - 1);
frame.set("loop.first", t_138 === 0);
frame.set("loop.last", t_138 === t_139 - 1);
frame.set("loop.length", t_139);
if(runtime.memberLookup((t_141),"tag") == "AppdxTableTitle") {
t_137 += "\r\n<w:p>";
t_137 += runtime.suppressValue((lineno = 575, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_141,1])), env.opts.autoescape);
frame = frame.push();
var t_144 = runtime.memberLookup((l_appdx_table),"children");
if(t_144) {var t_143 = t_144.length;
for(var t_142=0; t_142 < t_144.length; t_142++) {
var t_145 = t_144[t_142];
frame.set("el2", t_145);
frame.set("loop.index", t_142 + 1);
frame.set("loop.index0", t_142);
frame.set("loop.revindex", t_143 - t_142);
frame.set("loop.revindex0", t_143 - t_142 - 1);
frame.set("loop.first", t_142 === 0);
frame.set("loop.last", t_142 === t_143 - 1);
frame.set("loop.length", t_143);
if(runtime.memberLookup((t_145),"tag") == "RelatedArticleNum") {
t_137 += runtime.suppressValue((lineno = 578, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_145,1])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_137 += "\r\n</w:p>";
;
}
;
}
}
frame = frame.pop();
frame = frame.push();
var t_148 = runtime.memberLookup((l_appdx_table),"children");
if(t_148) {var t_147 = t_148.length;
for(var t_146=0; t_146 < t_148.length; t_146++) {
var t_149 = t_148[t_146];
frame.set("el", t_149);
frame.set("loop.index", t_146 + 1);
frame.set("loop.index0", t_146);
frame.set("loop.revindex", t_147 - t_146);
frame.set("loop.revindex0", t_147 - t_146 - 1);
frame.set("loop.first", t_146 === 0);
frame.set("loop.last", t_146 === t_147 - 1);
frame.set("loop.length", t_147);
if(runtime.memberLookup((t_149),"tag") == "AppdxTableTitle") {
;
}
else {
if(runtime.memberLookup((t_149),"tag") == "RelatedArticleNum") {
;
}
else {
if(runtime.memberLookup((t_149),"tag") == "TableStruct") {
t_137 += runtime.suppressValue((lineno = 589, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_149,1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_149),"tag") == "Item") {
t_137 += runtime.suppressValue((lineno = 591, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_149,{},1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_149),"tag") == "Remarks") {
t_137 += runtime.suppressValue((lineno = 593, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_149,1])), env.opts.autoescape);
;
}
else {
t_137 += "\r\n<w:p>\r\n  <w:r>\r\n    <w:t>";
t_137 += runtime.suppressValue((lineno = 597, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_149])), env.opts.autoescape);
t_137 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_137);
});
context.addExport("m_appdx_table");
context.setVariable("m_appdx_table", macro_t_136);
var macro_t_150 = runtime.makeMacro(
["appdx_style"], 
[], 
function (l_appdx_style, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_style", l_appdx_style);
var t_151 = "";t_151 += "<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"EmptyParagraph\"/>\r\n  </w:pPr>\r\n</w:p>";
t_151 += "\r\n";
frame = frame.push();
var t_154 = runtime.memberLookup((l_appdx_style),"children");
if(t_154) {var t_153 = t_154.length;
for(var t_152=0; t_152 < t_154.length; t_152++) {
var t_155 = t_154[t_152];
frame.set("el", t_155);
frame.set("loop.index", t_152 + 1);
frame.set("loop.index0", t_152);
frame.set("loop.revindex", t_153 - t_152);
frame.set("loop.revindex0", t_153 - t_152 - 1);
frame.set("loop.first", t_152 === 0);
frame.set("loop.last", t_152 === t_153 - 1);
frame.set("loop.length", t_153);
if(runtime.memberLookup((t_155),"tag") == "AppdxStyleTitle") {
t_151 += "<w:p>";
t_151 += runtime.suppressValue((lineno = 618, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_155,1])), env.opts.autoescape);
frame = frame.push();
var t_158 = runtime.memberLookup((l_appdx_style),"children");
if(t_158) {var t_157 = t_158.length;
for(var t_156=0; t_156 < t_158.length; t_156++) {
var t_159 = t_158[t_156];
frame.set("el2", t_159);
frame.set("loop.index", t_156 + 1);
frame.set("loop.index0", t_156);
frame.set("loop.revindex", t_157 - t_156);
frame.set("loop.revindex0", t_157 - t_156 - 1);
frame.set("loop.first", t_156 === 0);
frame.set("loop.last", t_156 === t_157 - 1);
frame.set("loop.length", t_157);
if(runtime.memberLookup((t_159),"tag") == "RelatedArticleNum") {
t_151 += runtime.suppressValue((lineno = 621, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_159,1])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_151 += "\r\n</w:p>";
;
}
else {
if(runtime.memberLookup((t_155),"tag") == "RelatedArticleNum") {
;
}
else {
if(runtime.memberLookup((t_155),"tag") == "StyleStruct") {
t_151 += runtime.suppressValue((lineno = 627, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_style_struct"), "m_style_struct", context, [t_155,1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_155),"tag") == "Remarks") {
t_151 += runtime.suppressValue((lineno = 629, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_155])), env.opts.autoescape);
;
}
else {
t_151 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_151 += runtime.suppressValue((lineno = 633, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_155])), env.opts.autoescape);
t_151 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_151);
});
context.addExport("m_appdx_style");
context.setVariable("m_appdx_style", macro_t_150);
var macro_t_160 = runtime.makeMacro(
["list", "indent"], 
[], 
function (l_list, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list", l_list);
frame.set("indent", l_indent);
var t_161 = "";frame = frame.push();
var t_164 = runtime.memberLookup((l_list),"children");
if(t_164) {var t_163 = t_164.length;
for(var t_162=0; t_162 < t_164.length; t_162++) {
var t_165 = t_164[t_162];
frame.set("el", t_165);
frame.set("loop.index", t_162 + 1);
frame.set("loop.index0", t_162);
frame.set("loop.revindex", t_163 - t_162);
frame.set("loop.revindex0", t_163 - t_162 - 1);
frame.set("loop.first", t_162 === 0);
frame.set("loop.last", t_162 === t_163 - 1);
frame.set("loop.length", t_163);
if(runtime.memberLookup((t_165),"tag") == "ListSentence") {
t_161 += runtime.suppressValue((lineno = 646, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list_sentence"), "m_list_sentence", context, [t_165,l_indent])), env.opts.autoescape);
;
}
else {
t_161 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_161 += runtime.suppressValue((lineno = 650, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_165])), env.opts.autoescape);
t_161 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_161);
});
context.addExport("m_list");
context.setVariable("m_list", macro_t_160);
var macro_t_166 = runtime.makeMacro(
["list_sentence", "indent"], 
[], 
function (l_list_sentence, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list_sentence", l_list_sentence);
frame.set("indent", l_indent);
var t_167 = "";frame = frame.push();
var t_170 = runtime.memberLookup((l_list_sentence),"children");
if(t_170) {var t_169 = t_170.length;
for(var t_168=0; t_168 < t_170.length; t_168++) {
var t_171 = t_170[t_168];
frame.set("el", t_171);
frame.set("loop.index", t_168 + 1);
frame.set("loop.index0", t_168);
frame.set("loop.revindex", t_169 - t_168);
frame.set("loop.revindex0", t_169 - t_168 - 1);
frame.set("loop.first", t_168 === 0);
frame.set("loop.last", t_168 === t_169 - 1);
frame.set("loop.length", t_169);
if(runtime.memberLookup((t_171),"tag") == "Sentence") {
t_167 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"Indent";
t_167 += runtime.suppressValue(1, env.opts.autoescape);
t_167 += "\"/>\r\n  </w:pPr>";
t_167 += runtime.suppressValue((lineno = 668, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_171])), env.opts.autoescape);
t_167 += "</w:p>";
;
}
else {
if(runtime.memberLookup((t_171),"tag") == "Column") {
t_167 += "<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"Indent";
t_167 += runtime.suppressValue(1, env.opts.autoescape);
t_167 += "\"/>\r\n  </w:pPr>";
t_167 += runtime.suppressValue((lineno = 675, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_171])), env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_167 += runtime.suppressValue((lineno = 677, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, ["　"])), env.opts.autoescape);
;
}
t_167 += "</w:p>";
;
}
else {
t_167 += "\r\n<w:p>\r\n  <w:r>\r\n    <w:t>";
t_167 += runtime.suppressValue((lineno = 683, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_171])), env.opts.autoescape);
t_167 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_167);
});
context.addExport("m_list_sentence");
context.setVariable("m_list_sentence", macro_t_166);
var macro_t_172 = runtime.makeMacro(
["fig", "indent"], 
[], 
function (l_fig, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("fig", l_fig);
frame.set("indent", l_indent);
var t_173 = "";t_173 += "<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"Indent";
t_173 += runtime.suppressValue(1, env.opts.autoescape);
t_173 += "\"/>\r\n  </w:pPr>\r\n  <w:r>\r\n    <w:t>[";
t_173 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_fig),"attr")),"src"), env.opts.autoescape);
t_173 += "]</w:t>\r\n  </w:r>\r\n</w:p>";
frame = frame.push();
var t_176 = runtime.memberLookup((l_fig),"children");
if(t_176) {var t_175 = t_176.length;
for(var t_174=0; t_174 < t_176.length; t_174++) {
var t_177 = t_176[t_174];
frame.set("el", t_177);
frame.set("loop.index", t_174 + 1);
frame.set("loop.index0", t_174);
frame.set("loop.revindex", t_175 - t_174);
frame.set("loop.revindex0", t_175 - t_174 - 1);
frame.set("loop.first", t_174 === 0);
frame.set("loop.last", t_174 === t_175 - 1);
frame.set("loop.length", t_175);
t_173 += "<w:p>\r\n  <w:r>\r\n    <w:t>";
t_173 += runtime.suppressValue((lineno = 705, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_177])), env.opts.autoescape);
t_173 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_173);
});
context.addExport("m_fig");
context.setVariable("m_fig", macro_t_172);
var macro_t_178 = runtime.makeMacro(
["remarks", "indent"], 
[], 
function (l_remarks, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("remarks", l_remarks);
frame.set("indent", l_indent);
var t_179 = "";t_179 += "<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"IndentHanging";
t_179 += runtime.suppressValue(l_indent, env.opts.autoescape);
t_179 += "\"/>\r\n  </w:pPr>";
frame = frame.push();
var t_182 = runtime.memberLookup((l_remarks),"children");
if(t_182) {var t_181 = t_182.length;
for(var t_180=0; t_180 < t_182.length; t_180++) {
var t_183 = t_182[t_180];
frame.set("el", t_183);
frame.set("loop.index", t_180 + 1);
frame.set("loop.index0", t_180);
frame.set("loop.revindex", t_181 - t_180);
frame.set("loop.revindex0", t_181 - t_180 - 1);
frame.set("loop.first", t_180 === 0);
frame.set("loop.last", t_180 === t_181 - 1);
frame.set("loop.length", t_181);
if(runtime.memberLookup((t_183),"tag") == "RemarksLabel") {
t_179 += runtime.suppressValue((lineno = 720, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_183])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_183),"tag") == "Sentence") {
t_179 += runtime.suppressValue((lineno = 722, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, ["　"])), env.opts.autoescape);
t_179 += runtime.suppressValue((lineno = 722, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_183])), env.opts.autoescape);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_179 += "</w:p>";
frame = frame.push();
var t_186 = runtime.memberLookup((l_remarks),"children");
if(t_186) {var t_185 = t_186.length;
for(var t_184=0; t_184 < t_186.length; t_184++) {
var t_187 = t_186[t_184];
frame.set("el", t_187);
frame.set("loop.index", t_184 + 1);
frame.set("loop.index0", t_184);
frame.set("loop.revindex", t_185 - t_184);
frame.set("loop.revindex0", t_185 - t_184 - 1);
frame.set("loop.first", t_184 === 0);
frame.set("loop.last", t_184 === t_185 - 1);
frame.set("loop.length", t_185);
if(runtime.memberLookup((t_187),"tag") == "RemarksLabel") {
;
}
else {
if(runtime.memberLookup((t_187),"tag") == "Sentence") {
;
}
else {
if(runtime.memberLookup((t_187),"tag") == "Item") {
t_179 += runtime.suppressValue((lineno = 733, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_187,{},l_indent])), env.opts.autoescape);
;
}
else {
t_179 += "\r\n<w:p>\r\n  <w:r>\r\n    <w:t>";
t_179 += runtime.suppressValue((lineno = 737, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_187])), env.opts.autoescape);
t_179 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_179);
});
context.addExport("m_remarks");
context.setVariable("m_remarks", macro_t_178);
var macro_t_188 = runtime.makeMacro(
["quote_struct"], 
[], 
function (l_quote_struct, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("quote_struct", l_quote_struct);
var t_189 = "";t_189 += "<w:r>\r\n    <w:t>";
t_189 += runtime.suppressValue((lineno = 749, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [l_quote_struct])), env.opts.autoescape);
t_189 += "</w:t>\r\n  </w:r>";
;
frame = callerFrame;
return new runtime.SafeString(t_189);
});
context.addExport("m_quote_struct_run");
context.setVariable("m_quote_struct_run", macro_t_188);
var macro_t_190 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_191 = "";t_191 += runtime.suppressValue(env.getFilter("escape").call(context, ("" + (lineno = 756, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [l_el])))), env.opts.autoescape);
;
frame = callerFrame;
return new runtime.SafeString(t_191);
});
context.addExport("m_element");
context.setVariable("m_element", macro_t_190);
var macro_t_192 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_193 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_193 += runtime.suppressValue(env.getFilter("escape").call(context, l_el), env.opts.autoescape);
;
}
else {
t_193 += "<";
t_193 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
frame = frame.push();
var t_196 = env.getFilter("dictsort").call(context, runtime.memberLookup((l_el),"attr"));
if(t_196) {var t_194;
if(runtime.isArray(t_196)) {
var t_195 = t_196.length;
for(t_194=0; t_194 < t_196.length; t_194++) {
var t_197 = t_196[t_194][0]
frame.set("key", t_196[t_194][0]);
var t_198 = t_196[t_194][1]
frame.set("value", t_196[t_194][1]);
frame.set("loop.index", t_194 + 1);
frame.set("loop.index0", t_194);
frame.set("loop.revindex", t_195 - t_194);
frame.set("loop.revindex0", t_195 - t_194 - 1);
frame.set("loop.first", t_194 === 0);
frame.set("loop.last", t_194 === t_195 - 1);
frame.set("loop.length", t_195);
t_193 += runtime.suppressValue(" ", env.opts.autoescape);
t_193 += runtime.suppressValue(t_197, env.opts.autoescape);
t_193 += "=\"";
t_193 += runtime.suppressValue(t_198, env.opts.autoescape);
t_193 += "\"";
;
}
} else {
t_194 = -1;
var t_195 = runtime.keys(t_196).length;
for(var t_199 in t_196) {
t_194++;
var t_200 = t_196[t_199];
frame.set("key", t_199);
frame.set("value", t_200);
frame.set("loop.index", t_194 + 1);
frame.set("loop.index0", t_194);
frame.set("loop.revindex", t_195 - t_194);
frame.set("loop.revindex0", t_195 - t_194 - 1);
frame.set("loop.first", t_194 === 0);
frame.set("loop.last", t_194 === t_195 - 1);
frame.set("loop.length", t_195);
t_193 += runtime.suppressValue(" ", env.opts.autoescape);
t_193 += runtime.suppressValue(t_199, env.opts.autoescape);
t_193 += "=\"";
t_193 += runtime.suppressValue(t_200, env.opts.autoescape);
t_193 += "\"";
;
}
}
}
frame = frame.pop();
t_193 += ">";
frame = frame.push();
var t_203 = runtime.memberLookup((l_el),"children");
if(t_203) {var t_202 = t_203.length;
for(var t_201=0; t_201 < t_203.length; t_201++) {
var t_204 = t_203[t_201];
frame.set("child", t_204);
frame.set("loop.index", t_201 + 1);
frame.set("loop.index0", t_201);
frame.set("loop.revindex", t_202 - t_201);
frame.set("loop.revindex0", t_202 - t_201 - 1);
frame.set("loop.first", t_201 === 0);
frame.set("loop.last", t_201 === t_202 - 1);
frame.set("loop.length", t_202);
if(!runtime.memberLookup((t_204),"tag")) {
t_193 += runtime.suppressValue(t_204, env.opts.autoescape);
;
}
else {
t_193 += runtime.suppressValue((lineno = 773, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [t_204])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_193 += "</";
t_193 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
t_193 += ">";
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_193);
});
context.addExport("m_element_raw");
context.setVariable("m_element_raw", macro_t_192);
var macro_t_205 = runtime.makeMacro(
["el", "emphasis"], 
[], 
function (l_el, l_emphasis, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
frame.set("emphasis", l_emphasis);
var t_206 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_206 += "\r\n  <w:r>";
if(l_emphasis) {
t_206 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_206 += "\r\n    <w:t>";
t_206 += runtime.suppressValue(env.getFilter("escape").call(context, l_el), env.opts.autoescape);
t_206 += "</w:t>\r\n  </w:r>";
;
}
else {
frame = frame.push();
var t_209 = runtime.memberLookup((l_el),"children");
if(t_209) {var t_208 = t_209.length;
for(var t_207=0; t_207 < t_209.length; t_207++) {
var t_210 = t_209[t_207];
frame.set("child", t_210);
frame.set("loop.index", t_207 + 1);
frame.set("loop.index0", t_207);
frame.set("loop.revindex", t_208 - t_207);
frame.set("loop.revindex0", t_208 - t_207 - 1);
frame.set("loop.first", t_207 === 0);
frame.set("loop.last", t_207 === t_208 - 1);
frame.set("loop.length", t_208);
if(!runtime.memberLookup((t_210),"tag")) {
t_206 += "\r\n  <w:r>";
if(l_emphasis) {
t_206 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_206 += "\r\n    <w:t>";
t_206 += runtime.suppressValue(env.getFilter("escape").call(context, t_210), env.opts.autoescape);
t_206 += "</w:t>\r\n  </w:r>";
;
}
else {
if(runtime.memberLookup((t_210),"tag") == "Ruby") {
t_206 += runtime.suppressValue((lineno = 801, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_ruby_run"), "m_ruby_run", context, [t_210,l_emphasis])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_210),"tag") == "QuoteStruct") {
t_206 += runtime.suppressValue((lineno = 803, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_quote_struct_run"), "m_quote_struct_run", context, [t_210])), env.opts.autoescape);
;
}
else {
t_206 += "\r\n  <w:r>";
if(l_emphasis) {
t_206 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_206 += "\r\n    <w:t>";
t_206 += runtime.suppressValue((lineno = 809, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_210])), env.opts.autoescape);
t_206 += "</w:t>\r\n  </w:r>";
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_206);
});
context.addExport("m_run");
context.setVariable("m_run", macro_t_205);
var macro_t_211 = runtime.makeMacro(
["el", "emphasis"], 
[], 
function (l_el, l_emphasis, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
frame.set("emphasis", l_emphasis);
var t_212 = "";t_212 += "\r\n  <w:r>";
if(l_emphasis) {
t_212 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_212 += "\r\n    <w:ruby>";
frame = frame.push();
var t_215 = runtime.memberLookup((l_el),"children");
if(t_215) {var t_214 = t_215.length;
for(var t_213=0; t_213 < t_215.length; t_213++) {
var t_216 = t_215[t_213];
frame.set("child", t_216);
frame.set("loop.index", t_213 + 1);
frame.set("loop.index0", t_213);
frame.set("loop.revindex", t_214 - t_213);
frame.set("loop.revindex0", t_214 - t_213 - 1);
frame.set("loop.first", t_213 === 0);
frame.set("loop.last", t_213 === t_214 - 1);
frame.set("loop.length", t_214);
if(runtime.memberLookup((t_216),"tag") == "Rt") {
t_212 += "\r\n      <w:rt>\r\n        <w:r>\r\n          <w:t>";
frame = frame.push();
var t_219 = runtime.memberLookup((t_216),"children");
if(t_219) {var t_218 = t_219.length;
for(var t_217=0; t_217 < t_219.length; t_217++) {
var t_220 = t_219[t_217];
frame.set("subchild", t_220);
frame.set("loop.index", t_217 + 1);
frame.set("loop.index0", t_217);
frame.set("loop.revindex", t_218 - t_217);
frame.set("loop.revindex0", t_218 - t_217 - 1);
frame.set("loop.first", t_217 === 0);
frame.set("loop.last", t_217 === t_218 - 1);
frame.set("loop.length", t_218);
t_212 += runtime.suppressValue(t_220, env.opts.autoescape);
;
}
}
frame = frame.pop();
t_212 += "</w:t>\r\n        </w:r>\r\n      </w:rt>";
;
}
;
}
}
frame = frame.pop();
frame = frame.push();
var t_223 = runtime.memberLookup((l_el),"children");
if(t_223) {var t_222 = t_223.length;
for(var t_221=0; t_221 < t_223.length; t_221++) {
var t_224 = t_223[t_221];
frame.set("child", t_224);
frame.set("loop.index", t_221 + 1);
frame.set("loop.index0", t_221);
frame.set("loop.revindex", t_222 - t_221);
frame.set("loop.revindex0", t_222 - t_221 - 1);
frame.set("loop.first", t_221 === 0);
frame.set("loop.last", t_221 === t_222 - 1);
frame.set("loop.length", t_222);
if(!runtime.memberLookup((t_224),"tag")) {
t_212 += "\r\n      <w:rubyBase>\r\n        <w:r>\r\n          <w:t>";
t_212 += runtime.suppressValue(t_224, env.opts.autoescape);
t_212 += "</w:t>\r\n        </w:r>\r\n      </w:rubyBase>";
;
}
;
}
}
frame = frame.pop();
t_212 += "\r\n    </w:ruby>\r\n  </w:r>";
frame = frame.push();
var t_227 = runtime.memberLookup((l_el),"children");
if(t_227) {var t_226 = t_227.length;
for(var t_225=0; t_225 < t_227.length; t_225++) {
var t_228 = t_227[t_225];
frame.set("child", t_228);
frame.set("loop.index", t_225 + 1);
frame.set("loop.index0", t_225);
frame.set("loop.revindex", t_226 - t_225);
frame.set("loop.revindex0", t_226 - t_225 - 1);
frame.set("loop.first", t_225 === 0);
frame.set("loop.last", t_225 === t_226 - 1);
frame.set("loop.length", t_226);
if(!runtime.memberLookup((t_228),"tag")) {
;
}
else {
if(runtime.memberLookup((t_228),"tag") == "Rt") {
;
}
else {
t_212 += "\r\n  <w:r>";
if(l_emphasis) {
t_212 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_212 += "\r\n    <w:t>";
t_212 += runtime.suppressValue((lineno = 856, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_228])), env.opts.autoescape);
t_212 += "</w:t>\r\n  </w:r>";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_212);
});
context.addExport("m_ruby_run");
context.setVariable("m_ruby_run", macro_t_211);
output += "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\r\n  <w:body>";
output += runtime.suppressValue((lineno = 865, colno = 10, runtime.callWrap(macro_t_1, "m_law", context, [runtime.contextOrFrameLookup(context, frame, "law")])), env.opts.autoescape);
output += "</w:body>\r\n</w:document>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["docx/word/styles.xml"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = 10.5;
frame.set("font_size_pt", t_1, true);
if(frame.topLevel) {
context.setVariable("font_size_pt", t_1);
}
if(frame.topLevel) {
context.addExport("font_size_pt", t_1);
}
output += "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<w:styles xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\r\n\r\n  <w:docDefaults>\r\n    <w:rPrDefault>\r\n      <w:rPr>\r\n        <w:rFonts w:asciiTheme=\"minorHAnsi\" w:eastAsiaTheme=\"minorEastAsia\" w:hAnsiTheme=\"minorHAnsi\" w:cstheme=\"minorBidi\"/>\r\n        <w:kern w:val=\"2\"/>\r\n        <w:sz w:val=\"21\"/>\r\n        <w:szCs w:val=\"22\"/>\r\n        <w:lang w:val=\"en-US\" w:eastAsia=\"ja-JP\" w:bidi=\"ar-SA\"/>\r\n      </w:rPr>\r\n    </w:rPrDefault>\r\n    <w:pPrDefault/>\r\n  </w:docDefaults>\r\n\r\n  <w:style w:type=\"character\" w:default=\"1\" w:styleId=\"DefaultCharacter\">\r\n    <w:name w:val=\"c00 デフォルト文字\"/>\r\n    <w:uiPriority w:val=\"1\"/>\r\n  </w:style>\r\n\r\n  <w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"EmptyParagraph\">\r\n    <w:name w:val=\"04 空の段落\"/>\r\n    <w:basedOn w:val=\"DefaultParagraph\"/>\r\n    <w:qFormat/>\r\n  </w:style>\r\n\r\n  <w:style w:type=\"character\" w:customStyle=\"1\" w:styleId=\"Emphasis\">\r\n    <w:name w:val=\"c01 強調文字\"/>\r\n    <w:basedOn w:val=\"DefaultCharacter\"/>\r\n    <w:uiPriority w:val=\"1\"/>\r\n    <w:qFormat/>\r\n    <w:rPr>\r\n      <w:rFonts w:eastAsia=\"ＭＳ ゴシック\"/>\r\n    </w:rPr>\r\n  </w:style>\r\n\r\n  <w:style w:type=\"paragraph\" w:default=\"1\" w:styleId=\"DefaultParagraph\">\r\n    <w:name w:val=\"00 デフォルト段落\"/>\r\n    <w:qFormat/>\r\n    <w:pPr>\r\n      <w:widowControl w:val=\"0\"/>\r\n      <w:jc w:val=\"start\"/>\r\n      <w:autoSpaceDE w:val=\"0\"/>\r\n      <w:autoSpaceDN w:val=\"0\"/>\r\n    </w:pPr>\r\n    <w:rPr>\r\n      <w:rFonts w:ascii=\"ＭＳ 明朝\" w:eastAsia=\"ＭＳ 明朝\" w:hAnsi=\"ＭＳ 明朝\"/>\r\n      <w:sz w:val=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "font_size_pt") * 2, env.opts.autoescape);
output += "\"/>\r\n    </w:rPr>\r\n  </w:style>\r\n\r\n  <w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"Paragraph\">\r\n    <w:name w:val=\"01-01 条項\"/>\r\n    <w:basedOn w:val=\"DefaultParagraph\"/>\r\n    <w:qFormat/>\r\n    <w:pPr>\r\n      <w:ind w:hangingChars=\"100\"/>\r\n    </w:pPr>\r\n  </w:style>\r\n\r\n  <w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"Item\">\r\n    <w:name w:val=\"01-02 号\"/>\r\n    <w:basedOn w:val=\"DefaultParagraph\"/>\r\n    <w:qFormat/>\r\n    <w:pPr>\r\n      <w:ind w:leftChars=\"100\" w:hangingChars=\"100\"/>\r\n    </w:pPr>\r\n  </w:style>\r\n\r\n";
frame = frame.push();
var t_4 = (lineno = 71, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [1,11]));
if(t_4) {var t_3 = t_4.length;
for(var t_2=0; t_2 < t_4.length; t_2++) {
var t_5 = t_4[t_2];
frame.set("i", t_5);
frame.set("loop.index", t_2 + 1);
frame.set("loop.index0", t_2);
frame.set("loop.revindex", t_3 - t_2);
frame.set("loop.revindex0", t_3 - t_2 - 1);
frame.set("loop.first", t_2 === 0);
frame.set("loop.last", t_2 === t_3 - 1);
frame.set("loop.length", t_3);
output += "<w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"Subitem";
output += runtime.suppressValue(t_5, env.opts.autoescape);
output += "\">\r\n  <w:name w:val=\"01-";
output += runtime.suppressValue((t_5 < 8?"0":""), env.opts.autoescape);
output += runtime.suppressValue(t_5 + 2, env.opts.autoescape);
output += " 号の細分";
output += runtime.suppressValue(t_5, env.opts.autoescape);
output += "\"/>\r\n  <w:basedOn w:val=\"DefaultParagraph\"/>\r\n  <w:qFormat/>\r\n  <w:pPr>\r\n    <w:ind w:leftChars=\"";
output += runtime.suppressValue((t_5 + 1) * 100, env.opts.autoescape);
output += "\" w:hangingChars=\"100\"/>\r\n  </w:pPr>\r\n</w:style>";
;
}
}
frame = frame.pop();
output += "\r\n\r\n";
frame = frame.push();
var t_8 = (lineno = 82, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [1,11]));
if(t_8) {var t_7 = t_8.length;
for(var t_6=0; t_6 < t_8.length; t_6++) {
var t_9 = t_8[t_6];
frame.set("i", t_9);
frame.set("loop.index", t_6 + 1);
frame.set("loop.index0", t_6);
frame.set("loop.revindex", t_7 - t_6);
frame.set("loop.revindex0", t_7 - t_6 - 1);
frame.set("loop.first", t_6 === 0);
frame.set("loop.last", t_6 === t_7 - 1);
frame.set("loop.length", t_7);
output += "<w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"Indent";
output += runtime.suppressValue(t_9, env.opts.autoescape);
output += "\">\r\n  <w:name w:val=\"02-";
output += runtime.suppressValue((t_9 < 10?"0":""), env.opts.autoescape);
output += runtime.suppressValue(t_9, env.opts.autoescape);
output += " インデント";
output += runtime.suppressValue(t_9, env.opts.autoescape);
output += "\"/>\r\n  <w:basedOn w:val=\"DefaultParagraph\"/>\r\n  <w:qFormat/>\r\n  <w:pPr>\r\n    <w:ind w:leftChars=\"";
output += runtime.suppressValue(t_9 * 100, env.opts.autoescape);
output += "\"/>\r\n  </w:pPr>\r\n</w:style>";
;
}
}
frame = frame.pop();
output += "\r\n\r\n";
frame = frame.push();
var t_12 = (lineno = 93, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [1,11]));
if(t_12) {var t_11 = t_12.length;
for(var t_10=0; t_10 < t_12.length; t_10++) {
var t_13 = t_12[t_10];
frame.set("i", t_13);
frame.set("loop.index", t_10 + 1);
frame.set("loop.index0", t_10);
frame.set("loop.revindex", t_11 - t_10);
frame.set("loop.revindex0", t_11 - t_10 - 1);
frame.set("loop.first", t_10 === 0);
frame.set("loop.last", t_10 === t_11 - 1);
frame.set("loop.length", t_11);
output += "<w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"IndentHanging";
output += runtime.suppressValue(t_13, env.opts.autoescape);
output += "\">\r\n  <w:name w:val=\"03-";
output += runtime.suppressValue((t_13 < 10?"0":""), env.opts.autoescape);
output += runtime.suppressValue(t_13, env.opts.autoescape);
output += " ぶら下げインデント";
output += runtime.suppressValue(t_13, env.opts.autoescape);
output += "\"/>\r\n  <w:basedOn w:val=\"DefaultParagraph\"/>\r\n  <w:qFormat/>\r\n  <w:pPr>\r\n    <w:ind w:leftChars=\"";
output += runtime.suppressValue(t_13 * 100, env.opts.autoescape);
output += "\" w:hangingChars=\"100\"/>\r\n  </w:pPr>\r\n</w:style>";
;
}
}
frame = frame.pop();
output += "\r\n\r\n";
frame = frame.push();
var t_16 = (lineno = 104, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [0,11]));
if(t_16) {var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("i", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "<w:style w:type=\"paragraph\" w:customStyle=\"1\" w:styleId=\"IndentFirstLine";
output += runtime.suppressValue(t_17, env.opts.autoescape);
output += "\">\r\n  <w:name w:val=\"04-";
output += runtime.suppressValue((t_17 < 10?"0":""), env.opts.autoescape);
output += runtime.suppressValue(t_17, env.opts.autoescape);
output += " 字下げインデント";
output += runtime.suppressValue(t_17, env.opts.autoescape);
output += "\"/>\r\n  <w:basedOn w:val=\"DefaultParagraph\"/>\r\n  <w:qFormat/>\r\n  <w:pPr>\r\n    <w:ind w:leftChars=\"";
output += runtime.suppressValue(t_17 * 100, env.opts.autoescape);
output += "\" w:firstLineChars=\"100\"/>\r\n  </w:pPr>\r\n</w:style>";
;
}
}
frame = frame.pop();
output += "\r\n\r\n<w:style w:type=\"table\" w:default=\"1\" w:styleId=\"DefaultTable\">\r\n  <w:name w:val=\"t00 デフォルト表\"/>\r\n  <w:tblPr>\r\n    <w:tblBorders>\r\n      <w:top w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"auto\"/>\r\n      <w:left w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"auto\"/>\r\n      <w:bottom w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"auto\"/>\r\n      <w:right w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"auto\"/>\r\n      <w:insideH w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"auto\"/>\r\n      <w:insideV w:val=\"single\" w:sz=\"4\" w:space=\"0\" w:color=\"auto\"/>\r\n    </w:tblBorders>\r\n    <w:tblCellMar>\r\n      <w:top w:w=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "font_size_pt") * 5, env.opts.autoescape);
output += "\" w:type=\"dxa\"/>\r\n      <w:left w:w=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "font_size_pt") * 5, env.opts.autoescape);
output += "\" w:type=\"dxa\"/>\r\n      <w:bottom w:w=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "font_size_pt") * 5, env.opts.autoescape);
output += "\" w:type=\"dxa\"/>\r\n      <w:right w:w=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "font_size_pt") * 5, env.opts.autoescape);
output += "\" w:type=\"dxa\"/>\r\n    </w:tblCellMar>\r\n  </w:tblPr>\r\n</w:style>\r\n\r\n";
frame = frame.push();
var t_20 = (lineno = 135, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [1,11]));
if(t_20) {var t_19 = t_20.length;
for(var t_18=0; t_18 < t_20.length; t_18++) {
var t_21 = t_20[t_18];
frame.set("i", t_21);
frame.set("loop.index", t_18 + 1);
frame.set("loop.index0", t_18);
frame.set("loop.revindex", t_19 - t_18);
frame.set("loop.revindex0", t_19 - t_18 - 1);
frame.set("loop.first", t_18 === 0);
frame.set("loop.last", t_18 === t_19 - 1);
frame.set("loop.length", t_19);
output += "<w:style w:type=\"table\" w:customStyle=\"1\" w:styleId=\"IndentTable";
output += runtime.suppressValue(t_21, env.opts.autoescape);
output += "\">\r\n  <w:name w:val=\"t01-";
output += runtime.suppressValue((t_21 < 10?"0":""), env.opts.autoescape);
output += runtime.suppressValue(t_21, env.opts.autoescape);
output += " インデント表";
output += runtime.suppressValue(t_21, env.opts.autoescape);
output += "\"/>\r\n  <w:basedOn w:val=\"DefaultTable\"/>\r\n  <w:tblPr>\r\n    <w:tblInd w:w=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "font_size_pt") * 20 * t_21 + runtime.contextOrFrameLookup(context, frame, "font_size_pt") * 5, env.opts.autoescape);
output += "\" w:type=\"dxa\"/>\r\n  </w:tblPr>\r\n</w:style>";
;
}
}
frame = frame.pop();
output += "\r\n\r\n</w:styles>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["docx/word/_rels/document.xml.rels"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\r\n  <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles\" Target=\"styles.xml\"/>\r\n</Relationships>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["docx/[Content_Types].xml"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<Types xmlns=\"http://schemas.openxmlformats.org/package/2006/content-types\">\r\n  <Default Extension=\"rels\" ContentType=\"application/vnd.openxmlformats-package.relationships+xml\"/>\r\n  <Default Extension=\"xml\" ContentType=\"application/xml\"/>\r\n  <Override PartName=\"/word/document.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml\"/>\r\n  <Override PartName=\"/word/styles.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml\"/>\r\n  <Override PartName=\"/word/fontTable.xml\" ContentType=\"application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml\"/>\r\n</Types>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["docx/_rels/.rels"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\r\n<Relationships xmlns=\"http://schemas.openxmlformats.org/package/2006/relationships\">\r\n  <Relationship Id=\"rId1\" Type=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument\" Target=\"word/document.xml\"/>\r\n</Relationships>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["html.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\r\n<html lang=\"ja\">\r\n<head>\r\n<meta charset=\"UTF-8\">\r\n<style>\r\n";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "style"), env.opts.autoescape);
output += "\r\n</style>\r\n</head>\r\n<body>\r\n\r\n\r\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("htmlfragment.html", false, "html.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
callback(null,t_2);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\r\n\r\n\r\n</body>\r\n</html>\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["htmlfragment.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["law"], 
[], 
function (l_law, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law", l_law);
var t_2 = "";frame = frame.push();
var t_5 = runtime.memberLookup((l_law),"children");
if(t_5) {var t_4 = t_5.length;
for(var t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3];
frame.set("el", t_6);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
if(runtime.memberLookup((t_6),"tag") == "LawBody") {
t_2 += runtime.suppressValue((lineno = 3, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_law_body"), "m_law_body", context, [t_6])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_6),"tag") == "LawNum") {
;
}
else {
t_2 += runtime.suppressValue((lineno = 6, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_6])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("m_law");
context.setVariable("m_law", macro_t_1);
var macro_t_7 = runtime.makeMacro(
["law_body"], 
[], 
function (l_law_body, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law_body", l_law_body);
var t_8 = "";frame = frame.push();
var t_11 = runtime.memberLookup((l_law_body),"children");
if(t_11) {var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("el", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
if(runtime.memberLookup((t_12),"tag") == "LawTitle") {
t_8 += runtime.suppressValue((lineno = 16, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_law_title"), "m_law_title", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_12),"tag") == "EnactStatement") {
t_8 += runtime.suppressValue((lineno = 18, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_enact_statement"), "m_enact_statement", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_12),"tag") == "TOC") {
t_8 += runtime.suppressValue((lineno = 20, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc"), "m_toc", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_12),"tag"),["MainProvision","SupplProvision"])) {
t_8 += runtime.suppressValue((lineno = 22, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_12),"tag") == "AppdxTable") {
t_8 += runtime.suppressValue((lineno = 24, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_appdx_table"), "m_appdx_table", context, [t_12])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_12),"tag") == "AppdxStyle") {
t_8 += runtime.suppressValue((lineno = 26, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_appdx_style"), "m_appdx_style", context, [t_12])), env.opts.autoescape);
;
}
else {
t_8 += runtime.suppressValue((lineno = 28, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_12])), env.opts.autoescape);
;
}
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_8);
});
context.addExport("m_law_body");
context.setVariable("m_law_body", macro_t_7);
var macro_t_13 = runtime.makeMacro(
["law_title"], 
[], 
function (l_law_title, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law_title", l_law_title);
var t_14 = "";t_14 += "<div class=\"law-title\">";
t_14 += runtime.suppressValue((lineno = 37, colno = 9, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [l_law_title])), env.opts.autoescape);
t_14 += "</div>";
frame = frame.push();
var t_17 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "law")),"children");
if(t_17) {var t_16 = t_17.length;
for(var t_15=0; t_15 < t_17.length; t_15++) {
var t_18 = t_17[t_15];
frame.set("child", t_18);
frame.set("loop.index", t_15 + 1);
frame.set("loop.index0", t_15);
frame.set("loop.revindex", t_16 - t_15);
frame.set("loop.revindex0", t_16 - t_15 - 1);
frame.set("loop.first", t_15 === 0);
frame.set("loop.last", t_15 === t_16 - 1);
frame.set("loop.length", t_16);
if(runtime.memberLookup((t_18),"tag") == "LawNum") {
t_14 += "<div class=\"law-num\">\r\n      （";
t_14 += runtime.suppressValue((lineno = 42, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_18])), env.opts.autoescape);
t_14 += "）\r\n    </div>";
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_14);
});
context.addExport("m_law_title");
context.setVariable("m_law_title", macro_t_13);
var macro_t_19 = runtime.makeMacro(
["enact_statement"], 
[], 
function (l_enact_statement, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("enact_statement", l_enact_statement);
var t_20 = "";t_20 += "<div class=\"enact-statement\">";
t_20 += runtime.suppressValue((lineno = 52, colno = 9, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [l_enact_statement])), env.opts.autoescape);
t_20 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_20);
});
context.addExport("m_enact_statement");
context.setVariable("m_enact_statement", macro_t_19);
var macro_t_21 = runtime.makeMacro(
["toc"], 
[], 
function (l_toc, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("toc", l_toc);
var t_22 = "";t_22 += "<div class=\"toc\">";
frame = frame.push();
var t_25 = runtime.memberLookup((l_toc),"children");
if(t_25) {var t_24 = t_25.length;
for(var t_23=0; t_23 < t_25.length; t_23++) {
var t_26 = t_25[t_23];
frame.set("el", t_26);
frame.set("loop.index", t_23 + 1);
frame.set("loop.index0", t_23);
frame.set("loop.revindex", t_24 - t_23);
frame.set("loop.revindex0", t_24 - t_23 - 1);
frame.set("loop.first", t_23 === 0);
frame.set("loop.last", t_23 === t_24 - 1);
frame.set("loop.length", t_24);
if(runtime.memberLookup((t_26),"tag") == "TOCLabel") {
t_22 += "<div class=\"toc-label law-anchor\"\r\n         data-tag=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((l_toc),"tag"), env.opts.autoescape);
t_22 += "\"\r\n         data-name=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_26),"children")),0), env.opts.autoescape);
t_22 += "\">";
t_22 += runtime.suppressValue((lineno = 65, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_26])), env.opts.autoescape);
t_22 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_22 += "<div class=\"toc-body\">";
frame = frame.push();
var t_29 = runtime.memberLookup((l_toc),"children");
if(t_29) {var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("el", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
if(runtime.memberLookup((t_30),"tag") == "TOCLabel") {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_30),"tag"),["TOCPart","TOCChapter","TOCSection","TOCSupplProvision"])) {
t_22 += runtime.suppressValue((lineno = 73, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_30])), env.opts.autoescape);
;
}
else {
t_22 += runtime.suppressValue((lineno = 75, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_30])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
t_22 += "</div>\r\n</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.addExport("m_toc");
context.setVariable("m_toc", macro_t_21);
var macro_t_31 = runtime.makeMacro(
["toc_group"], 
[], 
function (l_toc_group, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("toc_group", l_toc_group);
var t_32 = "";t_32 += "<div class=\"toc-group\">";
frame = frame.push();
var t_35 = runtime.memberLookup((l_toc_group),"children");
if(t_35) {var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("el", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
if(runtime.inOperator(runtime.memberLookup((t_36),"tag"),["TOCChapter","TOCSection","TOCSubsection","TOCDivision"])) {
t_32 += runtime.suppressValue((lineno = 88, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_36])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_36),"tag"),["SupplProvisionLabel","PartTitle","ChapterTitle","SectionTitle","SubsectionTitle","DivisionTitle"])) {
t_32 += runtime.suppressValue((lineno = 94, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_36])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_36),"tag") == "ArticleRange") {
t_32 += runtime.suppressValue((lineno = 96, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_36])), env.opts.autoescape);
;
}
else {
t_32 += runtime.suppressValue((lineno = 98, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_36])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_32 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_32);
});
context.addExport("m_toc_group");
context.setVariable("m_toc_group", macro_t_31);
var macro_t_37 = runtime.makeMacro(
["article_group"], 
[], 
function (l_article_group, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("article_group", l_article_group);
var t_38 = "";frame = frame.push();
var t_41 = runtime.memberLookup((l_article_group),"children");
if(t_41) {var t_40 = t_41.length;
for(var t_39=0; t_39 < t_41.length; t_39++) {
var t_42 = t_41[t_39];
frame.set("el", t_42);
frame.set("loop.index", t_39 + 1);
frame.set("loop.index0", t_39);
frame.set("loop.revindex", t_40 - t_39);
frame.set("loop.revindex0", t_40 - t_39 - 1);
frame.set("loop.first", t_39 === 0);
frame.set("loop.last", t_39 === t_40 - 1);
frame.set("loop.length", t_40);
if(runtime.inOperator(runtime.memberLookup((t_42),"tag"),["Part","Chapter","Section","Subsection","Division"])) {
t_38 += runtime.suppressValue((lineno = 109, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_42])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_42),"tag"),["SupplProvisionLabel","PartTitle","ChapterTitle","SectionTitle","SubsectionTitle","DivisionTitle"])) {
var t_43;
t_43 = runtime.memberLookup(({"SupplProvisionLabel": 3,"PartTitle": 2,"ChapterTitle": 3,"SectionTitle": 4,"SubsectionTitle": 5,"DivisionTitle": 6}),runtime.memberLookup((t_42),"tag"));
frame.set("title_indent", t_43, true);
if(frame.topLevel) {
context.setVariable("title_indent", t_43);
}
if(frame.topLevel) {
context.addExport("title_indent", t_43);
}
if(runtime.memberLookup((l_article_group),"tag") == "SupplProvision") {
if(runtime.inOperator("AmendLawNum",runtime.memberLookup((l_article_group),"attr"))) {
t_38 += runtime.suppressValue((lineno = 122, colno = 22, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["article_prefix",runtime.memberLookup((runtime.memberLookup((t_42),"children")),0) + runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"AmendLawNum")])), env.opts.autoescape);
;
}
else {
t_38 += runtime.suppressValue((lineno = 124, colno = 22, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["article_prefix",runtime.memberLookup((runtime.memberLookup((t_42),"children")),0)])), env.opts.autoescape);
;
}
;
}
else {
t_38 += runtime.suppressValue((lineno = 127, colno = 20, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["article_prefix",""])), env.opts.autoescape);
;
}
t_38 += "<div class=\"article-group-title law-anchor\"\r\n         style=\"margin-left:";
t_38 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title_indent"), env.opts.autoescape);
t_38 += "em;\"\r\n         data-tag=\"";
t_38 += runtime.suppressValue(runtime.memberLookup((l_article_group),"tag"), env.opts.autoescape);
t_38 += "\"\r\n         data-name=\"";
t_38 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_42),"children")),0), env.opts.autoescape);
t_38 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"AmendLawNum"), env.opts.autoescape);
t_38 += "\">";
t_38 += runtime.suppressValue((lineno = 133, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_42])), env.opts.autoescape);
if(runtime.inOperator("AmendLawNum",runtime.memberLookup((l_article_group),"attr"))) {
t_38 += "（";
t_38 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"AmendLawNum"), env.opts.autoescape);
t_38 += "）";
;
}
if(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"Extract") == "true") {
t_38 += runtime.suppressValue("　", env.opts.autoescape);
t_38 += "抄";
;
}
t_38 += "</div>";
;
}
else {
if(runtime.memberLookup((t_42),"tag") == "Article") {
t_38 += runtime.suppressValue((lineno = 142, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article"), "m_article", context, [t_42])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_42),"tag") == "Paragraph") {
t_38 += runtime.suppressValue((lineno = 144, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_42])), env.opts.autoescape);
;
}
else {
t_38 += runtime.suppressValue((lineno = 146, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_42])), env.opts.autoescape);
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_38);
});
context.addExport("m_article_group");
context.setVariable("m_article_group", macro_t_37);
var macro_t_44 = runtime.makeMacro(
["article"], 
[], 
function (l_article, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("article", l_article);
var t_45 = "";t_45 += "<div class=\"article\">";
frame = frame.push();
var t_48 = runtime.memberLookup((l_article),"children");
if(t_48) {var t_47 = t_48.length;
for(var t_46=0; t_46 < t_48.length; t_46++) {
var t_49 = t_48[t_46];
frame.set("el", t_49);
frame.set("loop.index", t_46 + 1);
frame.set("loop.index0", t_46);
frame.set("loop.revindex", t_47 - t_46);
frame.set("loop.revindex0", t_47 - t_46 - 1);
frame.set("loop.first", t_46 === 0);
frame.set("loop.last", t_46 === t_47 - 1);
frame.set("loop.length", t_47);
if(runtime.memberLookup((t_49),"tag") == "ArticleCaption") {
t_45 += "<div class=\"article-caption\">";
t_45 += runtime.suppressValue((lineno = 158, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_49])), env.opts.autoescape);
t_45 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_45 += "<div class=\"article-body\">";
t_45 += runtime.suppressValue((lineno = 163, colno = 12, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["first_paragraph",1])), env.opts.autoescape);
frame = frame.push();
var t_52 = runtime.memberLookup((l_article),"children");
if(t_52) {var t_51 = t_52.length;
for(var t_50=0; t_50 < t_52.length; t_50++) {
var t_53 = t_52[t_50];
frame.set("el", t_53);
frame.set("loop.index", t_50 + 1);
frame.set("loop.index0", t_50);
frame.set("loop.revindex", t_51 - t_50);
frame.set("loop.revindex0", t_51 - t_50 - 1);
frame.set("loop.first", t_50 === 0);
frame.set("loop.last", t_50 === t_51 - 1);
frame.set("loop.length", t_51);
if(runtime.memberLookup((t_53),"tag") == "ArticleCaption") {
;
}
else {
if(runtime.memberLookup((t_53),"tag") == "ArticleTitle") {
;
}
else {
if(runtime.memberLookup((t_53),"tag") == "Paragraph") {
t_45 += runtime.suppressValue((lineno = 168, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_53,l_article,(lineno = 168, colno = 46, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["first_paragraph"]))])), env.opts.autoescape);
t_45 += runtime.suppressValue((lineno = 169, colno = 16, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["first_paragraph",0])), env.opts.autoescape);
;
}
else {
t_45 += runtime.suppressValue((lineno = 171, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_53])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_45 += "</div>\r\n</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_45);
});
context.addExport("m_article");
context.setVariable("m_article", macro_t_44);
var macro_t_54 = runtime.makeMacro(
["paragraph_item", "article"], 
["first_paragraph"], 
function (l_paragraph_item, l_article, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("paragraph_item", l_paragraph_item);
frame.set("article", l_article);
frame.set("first_paragraph", kwargs.hasOwnProperty("first_paragraph") ? kwargs["first_paragraph"] : 0);
var t_55 = "";t_55 += "<div class=\"paragraph-item\">";
frame = frame.push();
var t_58 = runtime.memberLookup((l_paragraph_item),"children");
if(t_58) {var t_57 = t_58.length;
for(var t_56=0; t_56 < t_58.length; t_56++) {
var t_59 = t_58[t_56];
frame.set("el", t_59);
frame.set("loop.index", t_56 + 1);
frame.set("loop.index0", t_56);
frame.set("loop.revindex", t_57 - t_56);
frame.set("loop.revindex0", t_57 - t_56 - 1);
frame.set("loop.first", t_56 === 0);
frame.set("loop.last", t_56 === t_57 - 1);
frame.set("loop.length", t_57);
if(runtime.memberLookup((t_59),"tag") == "ParagraphCaption") {
t_55 += "<div class=\"paragraph-item-caption\">";
t_55 += runtime.suppressValue((lineno = 185, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_59])), env.opts.autoescape);
t_55 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_55 += runtime.suppressValue((lineno = 192, colno = 12, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",1])), env.opts.autoescape);
frame = frame.push();
var t_62 = runtime.memberLookup((l_paragraph_item),"children");
if(t_62) {var t_61 = t_62.length;
for(var t_60=0; t_60 < t_62.length; t_60++) {
var t_63 = t_62[t_60];
frame.set("el", t_63);
frame.set("loop.index", t_60 + 1);
frame.set("loop.index0", t_60);
frame.set("loop.revindex", t_61 - t_60);
frame.set("loop.revindex0", t_61 - t_60 - 1);
frame.set("loop.first", t_60 === 0);
frame.set("loop.last", t_60 === t_61 - 1);
frame.set("loop.length", t_61);
if(runtime.inOperator(runtime.memberLookup((t_63),"tag"),["ParagraphNum","ItemTitle","Subitem1Title","Subitem2Title","Subitem3Title","Subitem4Title","Subitem5Title","Subitem6Title","Subitem7Title","Subitem8Title","Subitem9Title","Subitem10Title"])) {
if(l_article && runtime.memberLookup((l_paragraph_item),"tag") == "Paragraph" && runtime.contextOrFrameLookup(context, frame, "first_paragraph")) {
frame = frame.push();
var t_66 = runtime.memberLookup((l_article),"children");
if(t_66) {var t_65 = t_66.length;
for(var t_64=0; t_64 < t_66.length; t_64++) {
var t_67 = t_66[t_64];
frame.set("el2", t_67);
frame.set("loop.index", t_64 + 1);
frame.set("loop.index0", t_64);
frame.set("loop.revindex", t_65 - t_64);
frame.set("loop.revindex0", t_65 - t_64 - 1);
frame.set("loop.first", t_64 === 0);
frame.set("loop.last", t_64 === t_65 - 1);
frame.set("loop.length", t_65);
if(runtime.memberLookup((t_67),"tag") == "ArticleTitle") {
if(env.getFilter("length").call(context, runtime.memberLookup((t_67),"children"))) {
t_55 += runtime.suppressValue((lineno = 206, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",0])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
;
}
if(env.getFilter("length").call(context, runtime.memberLookup((t_63),"children"))) {
t_55 += runtime.suppressValue((lineno = 213, colno = 18, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",0])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
t_55 += "\r\n\r\n<div class=\"";
if((lineno = 220, colno = 15, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["no_title"]))) {
t_55 += "indent-first-line";
;
}
else {
t_55 += "paragraph-item-body";
;
}
t_55 += "\">";
frame = frame.push();
var t_70 = runtime.memberLookup((l_paragraph_item),"children");
if(t_70) {var t_69 = t_70.length;
for(var t_68=0; t_68 < t_70.length; t_68++) {
var t_71 = t_70[t_68];
frame.set("el", t_71);
frame.set("loop.index", t_68 + 1);
frame.set("loop.index0", t_68);
frame.set("loop.revindex", t_69 - t_68);
frame.set("loop.revindex0", t_69 - t_68 - 1);
frame.set("loop.first", t_68 === 0);
frame.set("loop.last", t_68 === t_69 - 1);
frame.set("loop.length", t_69);
if(runtime.memberLookup((t_71),"tag") == "ParagraphCaption") {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_71),"tag"),["ParagraphNum","ItemTitle","Subitem1Title","Subitem2Title","Subitem3Title","Subitem4Title","Subitem5Title","Subitem6Title","Subitem7Title","Subitem8Title","Subitem9Title","Subitem10Title"])) {
if(l_article && runtime.memberLookup((l_paragraph_item),"tag") == "Paragraph" && runtime.contextOrFrameLookup(context, frame, "first_paragraph")) {
frame = frame.push();
var t_74 = runtime.memberLookup((l_article),"children");
if(t_74) {var t_73 = t_74.length;
for(var t_72=0; t_72 < t_74.length; t_72++) {
var t_75 = t_74[t_72];
frame.set("el2", t_75);
frame.set("loop.index", t_72 + 1);
frame.set("loop.index0", t_72);
frame.set("loop.revindex", t_73 - t_72);
frame.set("loop.revindex0", t_73 - t_72 - 1);
frame.set("loop.first", t_72 === 0);
frame.set("loop.last", t_72 === t_73 - 1);
frame.set("loop.length", t_73);
if(runtime.memberLookup((t_75),"tag") == "ArticleTitle") {
t_55 += "<span class=\"article-title law-anchor\"\r\n                data-tag=\"";
t_55 += runtime.suppressValue(runtime.memberLookup((l_article),"tag"), env.opts.autoescape);
t_55 += "\"\r\n                data-name=\"";
t_55 += runtime.suppressValue((lineno = 238, colno = 39, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["article_prefix"])), env.opts.autoescape);
t_55 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_75),"children")),0), env.opts.autoescape);
t_55 += "\">";
t_55 += runtime.suppressValue((lineno = 239, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_75])), env.opts.autoescape);
t_55 += "</span>";
;
}
;
}
}
frame = frame.pop();
;
}
if(runtime.memberLookup((t_71),"children")) {
t_55 += "<span class=\"paragraph-item-num\">";
t_55 += runtime.suppressValue((lineno = 246, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_71])), env.opts.autoescape);
t_55 += "</span>";
;
}
if(!(lineno = 249, colno = 23, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["no_title"]))) {
t_55 += runtime.suppressValue("　", env.opts.autoescape);
;
}
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_71),"tag"),["ParagraphSentence","ItemSentence","Subitem1Sentence","Subitem2Sentence","Subitem3Sentence","Subitem4Sentence","Subitem5Sentence","Subitem6Sentence","Subitem7Sentence","Subitem8Sentence","Subitem9Sentence","Subitem10Sentence"])) {
t_55 += runtime.suppressValue((lineno = 258, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item_sentence"), "m_paragraph_item_sentence", context, [t_71])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_71),"tag"),["Item","Subitem1","Subitem2","Subitem3","Subitem4","Subitem5","Subitem6","Subitem7","Subitem8","Subitem9","Subitem10"])) {
t_55 += runtime.suppressValue((lineno = 265, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_71])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_71),"tag") == "TableStruct") {
t_55 += runtime.suppressValue((lineno = 267, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_71])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_71),"tag") == "List") {
t_55 += runtime.suppressValue((lineno = 269, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list"), "m_list", context, [t_71])), env.opts.autoescape);
;
}
else {
t_55 += runtime.suppressValue((lineno = 271, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_71])), env.opts.autoescape);
;
}
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_55 += "</div>\r\n</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_55);
});
context.addExport("m_paragraph_item");
context.setVariable("m_paragraph_item", macro_t_54);
var macro_t_76 = runtime.makeMacro(
["paragraph_item_sentence"], 
[], 
function (l_paragraph_item_sentence, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("paragraph_item_sentence", l_paragraph_item_sentence);
var t_77 = "";frame = frame.push();
var t_80 = runtime.memberLookup((l_paragraph_item_sentence),"children");
if(t_80) {var t_79 = t_80.length;
for(var t_78=0; t_78 < t_80.length; t_78++) {
var t_81 = t_80[t_78];
frame.set("el", t_81);
frame.set("loop.index", t_78 + 1);
frame.set("loop.index0", t_78);
frame.set("loop.revindex", t_79 - t_78);
frame.set("loop.revindex0", t_79 - t_78 - 1);
frame.set("loop.first", t_78 === 0);
frame.set("loop.last", t_78 === t_79 - 1);
frame.set("loop.length", t_79);
if(runtime.memberLookup((t_81),"tag") == "Sentence") {
t_77 += runtime.suppressValue((lineno = 283, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_81])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_81),"tag") == "Column") {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")) {
t_77 += "<span class=\"first-column\">";
t_77 += runtime.suppressValue((lineno = 286, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_81])), env.opts.autoescape);
t_77 += "</span>";
;
}
else {
t_77 += runtime.suppressValue((lineno = 288, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_81])), env.opts.autoescape);
;
}
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_77 += runtime.suppressValue("　", env.opts.autoescape);
;
}
;
}
else {
t_77 += runtime.suppressValue((lineno = 294, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_81])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_77);
});
context.addExport("m_paragraph_item_sentence");
context.setVariable("m_paragraph_item_sentence", macro_t_76);
var macro_t_82 = runtime.makeMacro(
["column"], 
[], 
function (l_column, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("column", l_column);
var t_83 = "";frame = frame.push();
var t_86 = runtime.memberLookup((l_column),"children");
if(t_86) {var t_85 = t_86.length;
for(var t_84=0; t_84 < t_86.length; t_84++) {
var t_87 = t_86[t_84];
frame.set("el", t_87);
frame.set("loop.index", t_84 + 1);
frame.set("loop.index0", t_84);
frame.set("loop.revindex", t_85 - t_84);
frame.set("loop.revindex0", t_85 - t_84 - 1);
frame.set("loop.first", t_84 === 0);
frame.set("loop.last", t_84 === t_85 - 1);
frame.set("loop.length", t_85);
if(runtime.memberLookup((t_87),"tag") == "Sentence") {
t_83 += runtime.suppressValue((lineno = 304, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_87])), env.opts.autoescape);
;
}
else {
t_83 += runtime.suppressValue((lineno = 306, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_87])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_83);
});
context.addExport("m_column");
context.setVariable("m_column", macro_t_82);
var macro_t_88 = runtime.makeMacro(
["table_struct"], 
[], 
function (l_table_struct, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_struct", l_table_struct);
var t_89 = "";frame = frame.push();
var t_92 = runtime.memberLookup((l_table_struct),"children");
if(t_92) {var t_91 = t_92.length;
for(var t_90=0; t_90 < t_92.length; t_90++) {
var t_93 = t_92[t_90];
frame.set("el", t_93);
frame.set("loop.index", t_90 + 1);
frame.set("loop.index0", t_90);
frame.set("loop.revindex", t_91 - t_90);
frame.set("loop.revindex0", t_91 - t_90 - 1);
frame.set("loop.first", t_90 === 0);
frame.set("loop.last", t_90 === t_91 - 1);
frame.set("loop.length", t_91);
if(runtime.memberLookup((t_93),"tag") == "Table") {
t_89 += runtime.suppressValue((lineno = 316, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_93])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_93),"tag") == "TableStructTitle") {
t_89 += "<div>";
t_89 += runtime.suppressValue((lineno = 318, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_93])), env.opts.autoescape);
t_89 += "</div>";
;
}
else {
if(runtime.memberLookup((t_93),"tag") == "Remarks") {
t_89 += runtime.suppressValue((lineno = 320, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_93])), env.opts.autoescape);
;
}
else {
t_89 += runtime.suppressValue((lineno = 322, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_93])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_89);
});
context.addExport("m_table_struct");
context.setVariable("m_table_struct", macro_t_88);
var macro_t_94 = runtime.makeMacro(
["table"], 
[], 
function (l_table, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table", l_table);
var t_95 = "";t_95 += "<table>";
frame = frame.push();
var t_98 = runtime.memberLookup((l_table),"children");
if(t_98) {var t_97 = t_98.length;
for(var t_96=0; t_96 < t_98.length; t_96++) {
var t_99 = t_98[t_96];
frame.set("el", t_99);
frame.set("loop.index", t_96 + 1);
frame.set("loop.index0", t_96);
frame.set("loop.revindex", t_97 - t_96);
frame.set("loop.revindex0", t_97 - t_96 - 1);
frame.set("loop.first", t_96 === 0);
frame.set("loop.last", t_96 === t_97 - 1);
frame.set("loop.length", t_97);
if(runtime.memberLookup((t_99),"tag") == "TableRow") {
t_95 += runtime.suppressValue((lineno = 333, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_row"), "m_table_row", context, [t_99])), env.opts.autoescape);
;
}
else {
t_95 += runtime.suppressValue((lineno = 335, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_99])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_95 += "</table>";
;
frame = callerFrame;
return new runtime.SafeString(t_95);
});
context.addExport("m_table");
context.setVariable("m_table", macro_t_94);
var macro_t_100 = runtime.makeMacro(
["table_row"], 
[], 
function (l_table_row, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_row", l_table_row);
var t_101 = "";t_101 += "<tr>";
frame = frame.push();
var t_104 = runtime.memberLookup((l_table_row),"children");
if(t_104) {var t_103 = t_104.length;
for(var t_102=0; t_102 < t_104.length; t_102++) {
var t_105 = t_104[t_102];
frame.set("el", t_105);
frame.set("loop.index", t_102 + 1);
frame.set("loop.index0", t_102);
frame.set("loop.revindex", t_103 - t_102);
frame.set("loop.revindex0", t_103 - t_102 - 1);
frame.set("loop.first", t_102 === 0);
frame.set("loop.last", t_102 === t_103 - 1);
frame.set("loop.length", t_103);
if(runtime.memberLookup((t_105),"tag") == "TableColumn") {
t_101 += runtime.suppressValue((lineno = 347, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_column"), "m_table_column", context, [t_105])), env.opts.autoescape);
;
}
else {
t_101 += runtime.suppressValue((lineno = 349, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_105])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_101 += "</tr>";
;
frame = callerFrame;
return new runtime.SafeString(t_101);
});
context.addExport("m_table_row");
context.setVariable("m_table_row", macro_t_100);
var macro_t_106 = runtime.makeMacro(
["table_column"], 
[], 
function (l_table_column, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_column", l_table_column);
var t_107 = "";t_107 += "<td ";
if(runtime.inOperator("rowspan",runtime.memberLookup((l_table_column),"attr"))) {
t_107 += "rowspan=\"";
t_107 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"rowspan"), env.opts.autoescape);
t_107 += "\"";
;
}
if(runtime.inOperator("colspan",runtime.memberLookup((l_table_column),"attr"))) {
t_107 += "colspan=\"";
t_107 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"colspan"), env.opts.autoescape);
t_107 += "\"";
;
}
t_107 += " style=\"";
if(runtime.inOperator("BorderTop",runtime.memberLookup((l_table_column),"attr"))) {
t_107 += "border-top-style:";
t_107 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"BorderTop"), env.opts.autoescape);
t_107 += ";";
;
}
if(runtime.inOperator("BorderBottom",runtime.memberLookup((l_table_column),"attr"))) {
t_107 += "border-bottom-style:";
t_107 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"BorderBottom"), env.opts.autoescape);
t_107 += ";";
;
}
if(runtime.inOperator("BorderLeft",runtime.memberLookup((l_table_column),"attr"))) {
t_107 += "border-left-style:";
t_107 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"BorderLeft"), env.opts.autoescape);
t_107 += ";";
;
}
if(runtime.inOperator("BorderRight",runtime.memberLookup((l_table_column),"attr"))) {
t_107 += "border-right-style:";
t_107 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"BorderRight"), env.opts.autoescape);
t_107 += ";";
;
}
if(runtime.inOperator("Align",runtime.memberLookup((l_table_column),"attr"))) {
t_107 += "text-align:";
t_107 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"Align"), env.opts.autoescape);
t_107 += ";";
;
}
if(runtime.inOperator("Valign",runtime.memberLookup((l_table_column),"attr"))) {
t_107 += "vertical-align:";
t_107 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"Valign"), env.opts.autoescape);
t_107 += ";";
;
}
t_107 += "\">";
frame = frame.push();
var t_110 = runtime.memberLookup((l_table_column),"children");
if(t_110) {var t_109 = t_110.length;
for(var t_108=0; t_108 < t_110.length; t_108++) {
var t_111 = t_110[t_108];
frame.set("el", t_111);
frame.set("loop.index", t_108 + 1);
frame.set("loop.index0", t_108);
frame.set("loop.revindex", t_109 - t_108);
frame.set("loop.revindex0", t_109 - t_108 - 1);
frame.set("loop.first", t_108 === 0);
frame.set("loop.last", t_108 === t_109 - 1);
frame.set("loop.length", t_109);
if(runtime.memberLookup((t_111),"tag") == "Sentence") {
t_107 += "<div class=\"sentence\">";
t_107 += runtime.suppressValue((lineno = 388, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_111])), env.opts.autoescape);
t_107 += "</div>";
;
}
else {
if(runtime.memberLookup((t_111),"tag") == "Item") {
t_107 += runtime.suppressValue((lineno = 391, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_111])), env.opts.autoescape);
;
}
else {
t_107 += runtime.suppressValue((lineno = 393, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_111])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
t_107 += "</td>";
;
frame = callerFrame;
return new runtime.SafeString(t_107);
});
context.addExport("m_table_column");
context.setVariable("m_table_column", macro_t_106);
var macro_t_112 = runtime.makeMacro(
["style_struct"], 
[], 
function (l_style_struct, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("style_struct", l_style_struct);
var t_113 = "";frame = frame.push();
var t_116 = runtime.memberLookup((l_style_struct),"children");
if(t_116) {var t_115 = t_116.length;
for(var t_114=0; t_114 < t_116.length; t_114++) {
var t_117 = t_116[t_114];
frame.set("el", t_117);
frame.set("loop.index", t_114 + 1);
frame.set("loop.index0", t_114);
frame.set("loop.revindex", t_115 - t_114);
frame.set("loop.revindex0", t_115 - t_114 - 1);
frame.set("loop.first", t_114 === 0);
frame.set("loop.last", t_114 === t_115 - 1);
frame.set("loop.length", t_115);
if(runtime.memberLookup((t_117),"tag") == "StyleStructTitle") {
t_113 += "<div class=\"style_struct_title\">";
t_113 += runtime.suppressValue((lineno = 405, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_117])), env.opts.autoescape);
t_113 += "</div>";
;
}
else {
if(runtime.memberLookup((t_117),"tag") == "Style") {
t_113 += runtime.suppressValue((lineno = 408, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_style"), "m_style", context, [t_117])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_117),"tag") == "Remarks") {
t_113 += runtime.suppressValue((lineno = 410, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_117])), env.opts.autoescape);
;
}
else {
t_113 += runtime.suppressValue((lineno = 412, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_117])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_113);
});
context.addExport("m_style_struct");
context.setVariable("m_style_struct", macro_t_112);
var macro_t_118 = runtime.makeMacro(
["style"], 
[], 
function (l_style, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("style", l_style);
var t_119 = "";frame = frame.push();
var t_122 = runtime.memberLookup((l_style),"children");
if(t_122) {var t_121 = t_122.length;
for(var t_120=0; t_120 < t_122.length; t_120++) {
var t_123 = t_122[t_120];
frame.set("el", t_123);
frame.set("loop.index", t_120 + 1);
frame.set("loop.index0", t_120);
frame.set("loop.revindex", t_121 - t_120);
frame.set("loop.revindex0", t_121 - t_120 - 1);
frame.set("loop.first", t_120 === 0);
frame.set("loop.last", t_120 === t_121 - 1);
frame.set("loop.length", t_121);
if(runtime.memberLookup((t_123),"tag") == "Fig") {
t_119 += runtime.suppressValue((lineno = 422, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_fig"), "m_fig", context, [t_123])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_123),"tag") == "Table") {
t_119 += runtime.suppressValue((lineno = 424, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_123])), env.opts.autoescape);
;
}
else {
t_119 += runtime.suppressValue((lineno = 426, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_123])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_119);
});
context.addExport("m_style");
context.setVariable("m_style", macro_t_118);
var macro_t_124 = runtime.makeMacro(
["appdx_table"], 
[], 
function (l_appdx_table, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_table", l_appdx_table);
var t_125 = "";t_125 += "<div class=\"appdx_table\">";
frame = frame.push();
var t_128 = runtime.memberLookup((l_appdx_table),"children");
if(t_128) {var t_127 = t_128.length;
for(var t_126=0; t_126 < t_128.length; t_126++) {
var t_129 = t_128[t_126];
frame.set("el", t_129);
frame.set("loop.index", t_126 + 1);
frame.set("loop.index0", t_126);
frame.set("loop.revindex", t_127 - t_126);
frame.set("loop.revindex0", t_127 - t_126 - 1);
frame.set("loop.first", t_126 === 0);
frame.set("loop.last", t_126 === t_127 - 1);
frame.set("loop.length", t_127);
if(runtime.memberLookup((t_129),"tag") == "AppdxTableTitle") {
t_125 += "<div class=\"appdx_table_title law-anchor\"\r\n         data-tag=\"";
t_125 += runtime.suppressValue(runtime.memberLookup((l_appdx_table),"tag"), env.opts.autoescape);
t_125 += "\"\r\n         data-name=\"";
t_125 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_129),"children")),0), env.opts.autoescape);
t_125 += "\">";
t_125 += runtime.suppressValue((lineno = 440, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_129])), env.opts.autoescape);
frame = frame.push();
var t_132 = runtime.memberLookup((l_appdx_table),"children");
if(t_132) {var t_131 = t_132.length;
for(var t_130=0; t_130 < t_132.length; t_130++) {
var t_133 = t_132[t_130];
frame.set("el2", t_133);
frame.set("loop.index", t_130 + 1);
frame.set("loop.index0", t_130);
frame.set("loop.revindex", t_131 - t_130);
frame.set("loop.revindex0", t_131 - t_130 - 1);
frame.set("loop.first", t_130 === 0);
frame.set("loop.last", t_130 === t_131 - 1);
frame.set("loop.length", t_131);
if(runtime.memberLookup((t_133),"tag") == "RelatedArticleNum") {
t_125 += runtime.suppressValue((lineno = 443, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_133])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_125 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_125 += "<div class=\"appdx_table_body\">";
frame = frame.push();
var t_136 = runtime.memberLookup((l_appdx_table),"children");
if(t_136) {var t_135 = t_136.length;
for(var t_134=0; t_134 < t_136.length; t_134++) {
var t_137 = t_136[t_134];
frame.set("el", t_137);
frame.set("loop.index", t_134 + 1);
frame.set("loop.index0", t_134);
frame.set("loop.revindex", t_135 - t_134);
frame.set("loop.revindex0", t_135 - t_134 - 1);
frame.set("loop.first", t_134 === 0);
frame.set("loop.last", t_134 === t_135 - 1);
frame.set("loop.length", t_135);
if(runtime.memberLookup((t_137),"tag") == "AppdxTableTitle") {
;
}
else {
if(runtime.memberLookup((t_137),"tag") == "RelatedArticleNum") {
;
}
else {
if(runtime.memberLookup((t_137),"tag") == "TableStruct") {
t_125 += runtime.suppressValue((lineno = 454, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_137])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_137),"tag") == "Item") {
t_125 += runtime.suppressValue((lineno = 456, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_137])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_137),"tag") == "Remarks") {
t_125 += runtime.suppressValue((lineno = 458, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_137])), env.opts.autoescape);
;
}
else {
t_125 += runtime.suppressValue((lineno = 460, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_137])), env.opts.autoescape);
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_125 += "</div>\r\n</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_125);
});
context.addExport("m_appdx_table");
context.setVariable("m_appdx_table", macro_t_124);
var macro_t_138 = runtime.makeMacro(
["appdx_style"], 
[], 
function (l_appdx_style, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_style", l_appdx_style);
var t_139 = "";t_139 += "<div class=\"appdx_style\">";
frame = frame.push();
var t_142 = runtime.memberLookup((l_appdx_style),"children");
if(t_142) {var t_141 = t_142.length;
for(var t_140=0; t_140 < t_142.length; t_140++) {
var t_143 = t_142[t_140];
frame.set("el", t_143);
frame.set("loop.index", t_140 + 1);
frame.set("loop.index0", t_140);
frame.set("loop.revindex", t_141 - t_140);
frame.set("loop.revindex0", t_141 - t_140 - 1);
frame.set("loop.first", t_140 === 0);
frame.set("loop.last", t_140 === t_141 - 1);
frame.set("loop.length", t_141);
if(runtime.memberLookup((t_143),"tag") == "AppdxStyleTitle") {
t_139 += "<div class=\"appdx_style_title law-anchor\"\r\n        data-tag=\"";
t_139 += runtime.suppressValue(runtime.memberLookup((l_appdx_style),"tag"), env.opts.autoescape);
t_139 += "\"\r\n        data-name=\"";
t_139 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_143),"children")),0), env.opts.autoescape);
t_139 += "\">";
t_139 += runtime.suppressValue((lineno = 476, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_143])), env.opts.autoescape);
frame = frame.push();
var t_146 = runtime.memberLookup((l_appdx_style),"children");
if(t_146) {var t_145 = t_146.length;
for(var t_144=0; t_144 < t_146.length; t_144++) {
var t_147 = t_146[t_144];
frame.set("el2", t_147);
frame.set("loop.index", t_144 + 1);
frame.set("loop.index0", t_144);
frame.set("loop.revindex", t_145 - t_144);
frame.set("loop.revindex0", t_145 - t_144 - 1);
frame.set("loop.first", t_144 === 0);
frame.set("loop.last", t_144 === t_145 - 1);
frame.set("loop.length", t_145);
if(runtime.memberLookup((t_147),"tag") == "RelatedArticleNum") {
t_139 += runtime.suppressValue((lineno = 479, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_147])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_139 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_139 += "<div class=\"appdx_style_body\">";
frame = frame.push();
var t_150 = runtime.memberLookup((l_appdx_style),"children");
if(t_150) {var t_149 = t_150.length;
for(var t_148=0; t_148 < t_150.length; t_148++) {
var t_151 = t_150[t_148];
frame.set("el", t_151);
frame.set("loop.index", t_148 + 1);
frame.set("loop.index0", t_148);
frame.set("loop.revindex", t_149 - t_148);
frame.set("loop.revindex0", t_149 - t_148 - 1);
frame.set("loop.first", t_148 === 0);
frame.set("loop.last", t_148 === t_149 - 1);
frame.set("loop.length", t_149);
if(runtime.memberLookup((t_151),"tag") == "AppdxStyleTitle") {
;
}
else {
if(runtime.memberLookup((t_151),"tag") == "RelatedArticleNum") {
;
}
else {
if(runtime.memberLookup((t_151),"tag") == "StyleStruct") {
t_139 += runtime.suppressValue((lineno = 490, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_style_struct"), "m_style_struct", context, [t_151])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_151),"tag") == "Remarks") {
t_139 += runtime.suppressValue((lineno = 492, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_151])), env.opts.autoescape);
;
}
else {
t_139 += runtime.suppressValue((lineno = 494, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_151])), env.opts.autoescape);
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_139 += "</div>\r\n</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_139);
});
context.addExport("m_appdx_style");
context.setVariable("m_appdx_style", macro_t_138);
var macro_t_152 = runtime.makeMacro(
["list"], 
[], 
function (l_list, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list", l_list);
var t_153 = "";t_153 += "<div class=\"list\">";
frame = frame.push();
var t_156 = runtime.memberLookup((l_list),"children");
if(t_156) {var t_155 = t_156.length;
for(var t_154=0; t_154 < t_156.length; t_154++) {
var t_157 = t_156[t_154];
frame.set("el", t_157);
frame.set("loop.index", t_154 + 1);
frame.set("loop.index0", t_154);
frame.set("loop.revindex", t_155 - t_154);
frame.set("loop.revindex0", t_155 - t_154 - 1);
frame.set("loop.first", t_154 === 0);
frame.set("loop.last", t_154 === t_155 - 1);
frame.set("loop.length", t_155);
if(runtime.memberLookup((t_157),"tag") == "ListSentence") {
t_153 += runtime.suppressValue((lineno = 507, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list_sentence"), "m_list_sentence", context, [t_157])), env.opts.autoescape);
;
}
else {
t_153 += runtime.suppressValue((lineno = 509, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_157])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_153 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_153);
});
context.addExport("m_list");
context.setVariable("m_list", macro_t_152);
var macro_t_158 = runtime.makeMacro(
["list_sentence"], 
[], 
function (l_list_sentence, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list_sentence", l_list_sentence);
var t_159 = "";t_159 += "<div class=\"list-sentence\">";
frame = frame.push();
var t_162 = runtime.memberLookup((l_list_sentence),"children");
if(t_162) {var t_161 = t_162.length;
for(var t_160=0; t_160 < t_162.length; t_160++) {
var t_163 = t_162[t_160];
frame.set("el", t_163);
frame.set("loop.index", t_160 + 1);
frame.set("loop.index0", t_160);
frame.set("loop.revindex", t_161 - t_160);
frame.set("loop.revindex0", t_161 - t_160 - 1);
frame.set("loop.first", t_160 === 0);
frame.set("loop.last", t_160 === t_161 - 1);
frame.set("loop.length", t_161);
if(runtime.memberLookup((t_163),"tag") == "Sentence") {
t_159 += "<div class=\"sentence\">";
t_159 += runtime.suppressValue((lineno = 522, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_163])), env.opts.autoescape);
t_159 += "</div>";
;
}
else {
if(runtime.memberLookup((t_163),"tag") == "Column") {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")) {
t_159 += "<span class=\"first-column\">";
t_159 += runtime.suppressValue((lineno = 526, colno = 42, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_163])), env.opts.autoescape);
t_159 += "</span>";
;
}
else {
t_159 += runtime.suppressValue((lineno = 528, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_163])), env.opts.autoescape);
;
}
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_159 += runtime.suppressValue("　", env.opts.autoescape);
;
}
;
}
else {
t_159 += runtime.suppressValue((lineno = 534, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_163])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
t_159 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_159);
});
context.addExport("m_list_sentence");
context.setVariable("m_list_sentence", macro_t_158);
var macro_t_164 = runtime.makeMacro(
["fig"], 
[], 
function (l_fig, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("fig", l_fig);
var t_165 = "";t_165 += "[";
t_165 += runtime.suppressValue(env.getFilter("escape").call(context, runtime.memberLookup((runtime.memberLookup((l_fig),"attr")),"src")), env.opts.autoescape);
t_165 += "]";
frame = frame.push();
var t_168 = runtime.memberLookup((l_fig),"children");
if(t_168) {var t_167 = t_168.length;
for(var t_166=0; t_166 < t_168.length; t_166++) {
var t_169 = t_168[t_166];
frame.set("el", t_169);
frame.set("loop.index", t_166 + 1);
frame.set("loop.index0", t_166);
frame.set("loop.revindex", t_167 - t_166);
frame.set("loop.revindex0", t_167 - t_166 - 1);
frame.set("loop.first", t_166 === 0);
frame.set("loop.last", t_166 === t_167 - 1);
frame.set("loop.length", t_167);
t_165 += runtime.suppressValue((lineno = 545, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_169])), env.opts.autoescape);
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_165);
});
context.addExport("m_fig");
context.setVariable("m_fig", macro_t_164);
var macro_t_170 = runtime.makeMacro(
["remarks"], 
[], 
function (l_remarks, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("remarks", l_remarks);
var t_171 = "";t_171 += "<div class=\"remarks\">";
frame = frame.push();
var t_174 = runtime.memberLookup((l_remarks),"children");
if(t_174) {var t_173 = t_174.length;
for(var t_172=0; t_172 < t_174.length; t_172++) {
var t_175 = t_174[t_172];
frame.set("el", t_175);
frame.set("loop.index", t_172 + 1);
frame.set("loop.index0", t_172);
frame.set("loop.revindex", t_173 - t_172);
frame.set("loop.revindex0", t_173 - t_172 - 1);
frame.set("loop.first", t_172 === 0);
frame.set("loop.last", t_172 === t_173 - 1);
frame.set("loop.length", t_173);
if(runtime.memberLookup((t_175),"tag") == "RemarksLabel") {
t_171 += runtime.suppressValue((lineno = 555, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_175])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_175),"tag") == "Sentence") {
t_171 += runtime.suppressValue("　", env.opts.autoescape);
t_171 += runtime.suppressValue((lineno = 557, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_175])), env.opts.autoescape);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
;
}
;
}
else {
if(runtime.memberLookup((t_175),"tag") == "Item") {
t_171 += runtime.suppressValue((lineno = 561, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_175])), env.opts.autoescape);
;
}
else {
t_171 += runtime.suppressValue((lineno = 563, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_175])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_171 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_171);
});
context.addExport("m_remarks");
context.setVariable("m_remarks", macro_t_170);
var macro_t_176 = runtime.makeMacro(
["quote_struct"], 
[], 
function (l_quote_struct, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("quote_struct", l_quote_struct);
var t_177 = "";frame = frame.push();
var t_180 = runtime.memberLookup((l_quote_struct),"children");
if(t_180) {var t_179 = t_180.length;
for(var t_178=0; t_178 < t_180.length; t_178++) {
var t_181 = t_180[t_178];
frame.set("el", t_181);
frame.set("loop.index", t_178 + 1);
frame.set("loop.index0", t_178);
frame.set("loop.revindex", t_179 - t_178);
frame.set("loop.revindex0", t_179 - t_178 - 1);
frame.set("loop.first", t_178 === 0);
frame.set("loop.last", t_178 === t_179 - 1);
frame.set("loop.length", t_179);
if(runtime.memberLookup((t_181),"tag") == "Table") {
t_177 += runtime.suppressValue((lineno = 574, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_181])), env.opts.autoescape);
;
}
else {
t_177 += runtime.suppressValue((lineno = 576, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_181])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_177);
});
context.addExport("m_quote_struct");
context.setVariable("m_quote_struct", macro_t_176);
var macro_t_182 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_183 = "";t_183 += "<pre>";
t_183 += runtime.suppressValue(env.getFilter("escape").call(context, ("" + (lineno = 585, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [l_el])))), env.opts.autoescape);
t_183 += "</pre>";
;
frame = callerFrame;
return new runtime.SafeString(t_183);
});
context.addExport("m_element");
context.setVariable("m_element", macro_t_182);
var macro_t_184 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_185 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_185 += runtime.suppressValue(env.getFilter("escape").call(context, l_el), env.opts.autoescape);
;
}
else {
t_185 += "<";
t_185 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
frame = frame.push();
var t_188 = env.getFilter("dictsort").call(context, runtime.memberLookup((l_el),"attr"));
if(t_188) {var t_186;
if(runtime.isArray(t_188)) {
var t_187 = t_188.length;
for(t_186=0; t_186 < t_188.length; t_186++) {
var t_189 = t_188[t_186][0]
frame.set("key", t_188[t_186][0]);
var t_190 = t_188[t_186][1]
frame.set("value", t_188[t_186][1]);
frame.set("loop.index", t_186 + 1);
frame.set("loop.index0", t_186);
frame.set("loop.revindex", t_187 - t_186);
frame.set("loop.revindex0", t_187 - t_186 - 1);
frame.set("loop.first", t_186 === 0);
frame.set("loop.last", t_186 === t_187 - 1);
frame.set("loop.length", t_187);
t_185 += runtime.suppressValue(" ", env.opts.autoescape);
t_185 += runtime.suppressValue(t_189, env.opts.autoescape);
t_185 += "=\"";
t_185 += runtime.suppressValue(t_190, env.opts.autoescape);
t_185 += "\"";
;
}
} else {
t_186 = -1;
var t_187 = runtime.keys(t_188).length;
for(var t_191 in t_188) {
t_186++;
var t_192 = t_188[t_191];
frame.set("key", t_191);
frame.set("value", t_192);
frame.set("loop.index", t_186 + 1);
frame.set("loop.index0", t_186);
frame.set("loop.revindex", t_187 - t_186);
frame.set("loop.revindex0", t_187 - t_186 - 1);
frame.set("loop.first", t_186 === 0);
frame.set("loop.last", t_186 === t_187 - 1);
frame.set("loop.length", t_187);
t_185 += runtime.suppressValue(" ", env.opts.autoescape);
t_185 += runtime.suppressValue(t_191, env.opts.autoescape);
t_185 += "=\"";
t_185 += runtime.suppressValue(t_192, env.opts.autoescape);
t_185 += "\"";
;
}
}
}
frame = frame.pop();
t_185 += ">";
frame = frame.push();
var t_195 = runtime.memberLookup((l_el),"children");
if(t_195) {var t_194 = t_195.length;
for(var t_193=0; t_193 < t_195.length; t_193++) {
var t_196 = t_195[t_193];
frame.set("child", t_196);
frame.set("loop.index", t_193 + 1);
frame.set("loop.index0", t_193);
frame.set("loop.revindex", t_194 - t_193);
frame.set("loop.revindex0", t_194 - t_193 - 1);
frame.set("loop.first", t_193 === 0);
frame.set("loop.last", t_193 === t_194 - 1);
frame.set("loop.length", t_194);
if(!runtime.memberLookup((t_196),"tag")) {
t_185 += runtime.suppressValue(t_196, env.opts.autoescape);
;
}
else {
t_185 += runtime.suppressValue((lineno = 603, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [t_196])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_185 += "</";
t_185 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
t_185 += ">";
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_185);
});
context.addExport("m_element_raw");
context.setVariable("m_element_raw", macro_t_184);
var macro_t_197 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_198 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_198 += runtime.suppressValue(env.getFilter("safe").call(context, l_el), env.opts.autoescape);
;
}
else {
frame = frame.push();
var t_201 = runtime.memberLookup((l_el),"children");
if(t_201) {var t_200 = t_201.length;
for(var t_199=0; t_199 < t_201.length; t_199++) {
var t_202 = t_201[t_199];
frame.set("child", t_202);
frame.set("loop.index", t_199 + 1);
frame.set("loop.index0", t_199);
frame.set("loop.revindex", t_200 - t_199);
frame.set("loop.revindex0", t_200 - t_199 - 1);
frame.set("loop.first", t_199 === 0);
frame.set("loop.last", t_199 === t_200 - 1);
frame.set("loop.length", t_200);
if(!runtime.memberLookup((t_202),"tag")) {
t_198 += runtime.suppressValue(env.getFilter("safe").call(context, t_202), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_202),"tag") == "Ruby") {
t_198 += runtime.suppressValue((lineno = 621, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [t_202])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_202),"tag") == "QuoteStruct") {
t_198 += runtime.suppressValue((lineno = 623, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_quote_struct"), "m_quote_struct", context, [t_202])), env.opts.autoescape);
;
}
else {
t_198 += runtime.suppressValue((lineno = 625, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_202])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_198);
});
context.addExport("m_text");
context.setVariable("m_text", macro_t_197);
output += "<div class=\"law\">";
output += runtime.suppressValue((lineno = 639, colno = 6, runtime.callWrap(macro_t_1, "m_law", context, [runtime.contextOrFrameLookup(context, frame, "law")])), env.opts.autoescape);
output += "</div>\r\n\r\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["lawtext.j2"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "  ";
frame.set("indent_space", t_1, true);
if(frame.topLevel) {
context.setVariable("indent_space", t_1);
}
if(frame.topLevel) {
context.addExport("indent_space", t_1);
}
var t_2;
t_2 = "　";
frame.set("margin_space", t_2, true);
if(frame.topLevel) {
context.setVariable("margin_space", t_2);
}
if(frame.topLevel) {
context.addExport("margin_space", t_2);
}
var macro_t_3 = runtime.makeMacro(
["law"], 
[], 
function (l_law, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law", l_law);
var t_4 = "";frame = frame.push();
var t_7 = runtime.memberLookup((l_law),"children");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("el", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
if(runtime.memberLookup((t_8),"tag") == "LawBody") {
t_4 += runtime.suppressValue((lineno = 6, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_law_body"), "m_law_body", context, [t_8])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_8),"tag") == "LawNum") {
;
}
else {
t_4 += runtime.suppressValue((lineno = 9, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_8])), env.opts.autoescape);
t_4 += "\r\n";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_4);
});
context.addExport("m_law");
context.setVariable("m_law", macro_t_3);
var macro_t_9 = runtime.makeMacro(
["law_body"], 
[], 
function (l_law_body, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law_body", l_law_body);
var t_10 = "";frame = frame.push();
var t_13 = runtime.memberLookup((l_law_body),"children");
if(t_13) {var t_12 = t_13.length;
for(var t_11=0; t_11 < t_13.length; t_11++) {
var t_14 = t_13[t_11];
frame.set("el", t_14);
frame.set("loop.index", t_11 + 1);
frame.set("loop.index0", t_11);
frame.set("loop.revindex", t_12 - t_11);
frame.set("loop.revindex0", t_12 - t_11 - 1);
frame.set("loop.first", t_11 === 0);
frame.set("loop.last", t_11 === t_12 - 1);
frame.set("loop.length", t_12);
if(runtime.memberLookup((t_14),"tag") == "LawTitle") {
t_10 += runtime.suppressValue((lineno = 21, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_law_title"), "m_law_title", context, [t_14])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_14),"tag") == "EnactStatement") {
t_10 += runtime.suppressValue((lineno = 23, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_enact_statement"), "m_enact_statement", context, [t_14])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_14),"tag") == "TOC") {
t_10 += runtime.suppressValue((lineno = 25, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc"), "m_toc", context, [t_14])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_14),"tag"),["MainProvision","SupplProvision"])) {
t_10 += runtime.suppressValue((lineno = 27, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_14])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_14),"tag") == "AppdxTable") {
t_10 += runtime.suppressValue((lineno = 29, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_appdx_table"), "m_appdx_table", context, [t_14])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_14),"tag") == "AppdxStyle") {
t_10 += runtime.suppressValue((lineno = 31, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_appdx_style"), "m_appdx_style", context, [t_14])), env.opts.autoescape);
;
}
else {
t_10 += runtime.suppressValue((lineno = 33, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_14])), env.opts.autoescape);
;
}
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_10);
});
context.addExport("m_law_body");
context.setVariable("m_law_body", macro_t_9);
var macro_t_15 = runtime.makeMacro(
["law_title"], 
[], 
function (l_law_title, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("law_title", l_law_title);
var t_16 = "";t_16 += runtime.suppressValue((lineno = 41, colno = 7, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [l_law_title])), env.opts.autoescape);
t_16 += "\r\n";
frame = frame.push();
var t_19 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "law")),"children");
if(t_19) {var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("el", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
if(runtime.memberLookup((t_20),"tag") == "LawNum") {
t_16 += "（";
t_16 += runtime.suppressValue((lineno = 46, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_20])), env.opts.autoescape);
t_16 += "）";
t_16 += "\r\n";
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_16);
});
context.addExport("m_law_title");
context.setVariable("m_law_title", macro_t_15);
var macro_t_21 = runtime.makeMacro(
["enact_statement"], 
[], 
function (l_enact_statement, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("enact_statement", l_enact_statement);
var t_22 = "";t_22 += "\r\n";
t_22 += runtime.suppressValue((lineno = 58, colno = 7, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [l_enact_statement])), env.opts.autoescape);
t_22 += "\r\n";
;
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.addExport("m_enact_statement");
context.setVariable("m_enact_statement", macro_t_21);
var macro_t_23 = runtime.makeMacro(
["toc"], 
[], 
function (l_toc, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("toc", l_toc);
var t_24 = "";t_24 += "\r\n";
frame = frame.push();
var t_27 = runtime.memberLookup((l_toc),"children");
if(t_27) {var t_26 = t_27.length;
for(var t_25=0; t_25 < t_27.length; t_25++) {
var t_28 = t_27[t_25];
frame.set("el", t_28);
frame.set("loop.index", t_25 + 1);
frame.set("loop.index0", t_25);
frame.set("loop.revindex", t_26 - t_25);
frame.set("loop.revindex0", t_26 - t_25 - 1);
frame.set("loop.first", t_25 === 0);
frame.set("loop.last", t_25 === t_26 - 1);
frame.set("loop.length", t_26);
if(runtime.memberLookup((t_28),"tag") == "TOCLabel") {
t_24 += runtime.suppressValue((lineno = 70, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_28])), env.opts.autoescape);
t_24 += "\r\n";
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_28),"tag"),["TOCPart","TOCChapter","TOCSection","TOCSupplProvision"])) {
t_24 += runtime.suppressValue((lineno = 74, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_28,1])), env.opts.autoescape);
;
}
else {
t_24 += runtime.suppressValue((lineno = 76, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_28])), env.opts.autoescape);
t_24 += "\r\n";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_24);
});
context.addExport("m_toc");
context.setVariable("m_toc", macro_t_23);
var macro_t_29 = runtime.makeMacro(
["toc_group", "indent", "no_newline"], 
[], 
function (l_toc_group, l_indent, l_no_newline, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("toc_group", l_toc_group);
frame.set("indent", l_indent);
frame.set("no_newline", l_no_newline);
var t_30 = "";frame = frame.push();
var t_33 = runtime.memberLookup((l_toc_group),"children");
if(t_33) {var t_32 = t_33.length;
for(var t_31=0; t_31 < t_33.length; t_31++) {
var t_34 = t_33[t_31];
frame.set("el", t_34);
frame.set("loop.index", t_31 + 1);
frame.set("loop.index0", t_31);
frame.set("loop.revindex", t_32 - t_31);
frame.set("loop.revindex0", t_32 - t_31 - 1);
frame.set("loop.first", t_31 === 0);
frame.set("loop.last", t_31 === t_32 - 1);
frame.set("loop.length", t_32);
if(runtime.inOperator(runtime.memberLookup((t_34),"tag"),["TOCChapter","TOCSection","TOCSubsection","TOCDivision"])) {
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_34),"tag"),["SupplProvisionLabel","PartTitle","ChapterTitle","SectionTitle","SubsectionTitle","DivisionTitle"])) {
frame = frame.push();
var t_37 = (lineno = 93, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_37) {var t_36 = t_37.length;
for(var t_35=0; t_35 < t_37.length; t_35++) {
var t_38 = t_37[t_35];
frame.set("_", t_38);
frame.set("loop.index", t_35 + 1);
frame.set("loop.index0", t_35);
frame.set("loop.revindex", t_36 - t_35);
frame.set("loop.revindex0", t_36 - t_35 - 1);
frame.set("loop.first", t_35 === 0);
frame.set("loop.last", t_35 === t_36 - 1);
frame.set("loop.length", t_36);
t_30 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
t_30 += runtime.suppressValue((lineno = 96, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_34])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_34),"tag") == "ArticleRange") {
t_30 += runtime.suppressValue((lineno = 98, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_34])), env.opts.autoescape);
;
}
else {
t_30 += runtime.suppressValue((lineno = 100, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_34])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
t_30 += "\r\n";
frame = frame.push();
var t_41 = runtime.memberLookup((l_toc_group),"children");
if(t_41) {var t_40 = t_41.length;
for(var t_39=0; t_39 < t_41.length; t_39++) {
var t_42 = t_41[t_39];
frame.set("el", t_42);
frame.set("loop.index", t_39 + 1);
frame.set("loop.index0", t_39);
frame.set("loop.revindex", t_40 - t_39);
frame.set("loop.revindex0", t_40 - t_39 - 1);
frame.set("loop.first", t_39 === 0);
frame.set("loop.last", t_39 === t_40 - 1);
frame.set("loop.length", t_40);
if(runtime.inOperator(runtime.memberLookup((t_42),"tag"),["TOCChapter","TOCSection","TOCSubsection","TOCDivision"])) {
t_30 += runtime.suppressValue((lineno = 107, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_42,l_indent + 1,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_30);
});
context.addExport("m_toc_group");
context.setVariable("m_toc_group", macro_t_29);
var macro_t_43 = runtime.makeMacro(
["article_group"], 
[], 
function (l_article_group, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("article_group", l_article_group);
var t_44 = "";frame = frame.push();
var t_47 = runtime.memberLookup((l_article_group),"children");
if(t_47) {var t_46 = t_47.length;
for(var t_45=0; t_45 < t_47.length; t_45++) {
var t_48 = t_47[t_45];
frame.set("el", t_48);
frame.set("loop.index", t_45 + 1);
frame.set("loop.index0", t_45);
frame.set("loop.revindex", t_46 - t_45);
frame.set("loop.revindex0", t_46 - t_45 - 1);
frame.set("loop.first", t_45 === 0);
frame.set("loop.last", t_45 === t_46 - 1);
frame.set("loop.length", t_46);
if(runtime.inOperator(runtime.memberLookup((t_48),"tag"),["Part","Chapter","Section","Subsection","Division"])) {
t_44 += runtime.suppressValue((lineno = 117, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_48])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_48),"tag"),["SupplProvisionLabel","PartTitle","ChapterTitle","SectionTitle","SubsectionTitle","DivisionTitle"])) {
t_44 += "\r\n";
var t_49;
t_49 = {"SupplProvisionLabel": 3,"PartTitle": 2,"ChapterTitle": 3,"SectionTitle": 4,"SubsectionTitle": 5,"DivisionTitle": 6};
frame.set("title_indent", t_49, true);
if(frame.topLevel) {
context.setVariable("title_indent", t_49);
}
if(frame.topLevel) {
context.addExport("title_indent", t_49);
}
frame = frame.push();
var t_52 = (lineno = 130, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "title_indent")),runtime.memberLookup((t_48),"tag"))]));
if(t_52) {var t_51 = t_52.length;
for(var t_50=0; t_50 < t_52.length; t_50++) {
var t_53 = t_52[t_50];
frame.set("_", t_53);
frame.set("loop.index", t_50 + 1);
frame.set("loop.index0", t_50);
frame.set("loop.revindex", t_51 - t_50);
frame.set("loop.revindex0", t_51 - t_50 - 1);
frame.set("loop.first", t_50 === 0);
frame.set("loop.last", t_50 === t_51 - 1);
frame.set("loop.length", t_51);
t_44 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
t_44 += runtime.suppressValue((lineno = 133, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_48])), env.opts.autoescape);
if(runtime.inOperator("AmendLawNum",runtime.memberLookup((l_article_group),"attr"))) {
t_44 += "（";
t_44 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"AmendLawNum"), env.opts.autoescape);
t_44 += "）";
;
}
if(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"Extract") == "true") {
t_44 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "margin_space"), env.opts.autoescape);
t_44 += "抄";
;
}
t_44 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_48),"tag") == "Article") {
t_44 += runtime.suppressValue((lineno = 143, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article"), "m_article", context, [t_48])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_48),"tag") == "Paragraph") {
t_44 += runtime.suppressValue((lineno = 145, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_48,0])), env.opts.autoescape);
;
}
else {
t_44 += runtime.suppressValue((lineno = 147, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_48])), env.opts.autoescape);
t_44 += "\r\n";
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_44);
});
context.addExport("m_article_group");
context.setVariable("m_article_group", macro_t_43);
var macro_t_54 = runtime.makeMacro(
["article"], 
[], 
function (l_article, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("article", l_article);
var t_55 = "";t_55 += "\r\n";
frame = frame.push();
var t_58 = runtime.memberLookup((l_article),"children");
if(t_58) {var t_57 = t_58.length;
for(var t_56=0; t_56 < t_58.length; t_56++) {
var t_59 = t_58[t_56];
frame.set("el", t_59);
frame.set("loop.index", t_56 + 1);
frame.set("loop.index0", t_56);
frame.set("loop.revindex", t_57 - t_56);
frame.set("loop.revindex0", t_57 - t_56 - 1);
frame.set("loop.first", t_56 === 0);
frame.set("loop.last", t_56 === t_57 - 1);
frame.set("loop.length", t_57);
if(runtime.memberLookup((t_59),"tag") == "ArticleCaption") {
t_55 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
t_55 += runtime.suppressValue((lineno = 161, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_59])), env.opts.autoescape);
t_55 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_59),"tag") == "ArticleTitle") {
t_55 += runtime.suppressValue((lineno = 165, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_59])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_59),"tag") == "Paragraph") {
t_55 += runtime.suppressValue((lineno = 167, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_59,0,l_article])), env.opts.autoescape);
;
}
else {
t_55 += runtime.suppressValue((lineno = 169, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_59])), env.opts.autoescape);
t_55 += "\r\n";
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_55);
});
context.addExport("m_article");
context.setVariable("m_article", macro_t_54);
var macro_t_60 = runtime.makeMacro(
["paragraph_item", "indent", "article"], 
[], 
function (l_paragraph_item, l_indent, l_article, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("paragraph_item", l_paragraph_item);
frame.set("indent", l_indent);
frame.set("article", l_article);
var t_61 = "";t_61 += runtime.suppressValue((lineno = 179, colno = 12, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["paragraph_item_title_exists",0])), env.opts.autoescape);
frame = frame.push();
var t_64 = runtime.memberLookup((l_paragraph_item),"children");
if(t_64) {var t_63 = t_64.length;
for(var t_62=0; t_62 < t_64.length; t_62++) {
var t_65 = t_64[t_62];
frame.set("el", t_65);
frame.set("loop.index", t_62 + 1);
frame.set("loop.index0", t_62);
frame.set("loop.revindex", t_63 - t_62);
frame.set("loop.revindex0", t_63 - t_62 - 1);
frame.set("loop.first", t_62 === 0);
frame.set("loop.last", t_62 === t_63 - 1);
frame.set("loop.length", t_63);
if(runtime.memberLookup((t_65),"tag") == "ParagraphCaption") {
t_61 += "\r\n";
t_61 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
t_61 += runtime.suppressValue((lineno = 184, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_65])), env.opts.autoescape);
t_61 += "\r\n";
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_65),"tag"),["ParagraphNum","ItemTitle","Subitem1Title","Subitem2Title","Subitem3Title","Subitem4Title","Subitem5Title","Subitem6Title","Subitem7Title","Subitem8Title","Subitem9Title","Subitem10Title"])) {
frame = frame.push();
var t_68 = (lineno = 193, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_68) {var t_67 = t_68.length;
for(var t_66=0; t_66 < t_68.length; t_66++) {
var t_69 = t_68[t_66];
frame.set("_", t_69);
frame.set("loop.index", t_66 + 1);
frame.set("loop.index0", t_66);
frame.set("loop.revindex", t_67 - t_66);
frame.set("loop.revindex0", t_67 - t_66 - 1);
frame.set("loop.first", t_66 === 0);
frame.set("loop.last", t_66 === t_67 - 1);
frame.set("loop.length", t_67);
t_61 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
if(env.getFilter("length").call(context, runtime.memberLookup((t_65),"children"))) {
t_61 += runtime.suppressValue((lineno = 197, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_65])), env.opts.autoescape);
t_61 += runtime.suppressValue((lineno = 198, colno = 18, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["paragraph_item_title_exists",1])), env.opts.autoescape);
;
}
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_65),"tag"),["ParagraphSentence","ItemSentence","Subitem1Sentence","Subitem2Sentence","Subitem3Sentence","Subitem4Sentence","Subitem5Sentence","Subitem6Sentence","Subitem7Sentence","Subitem8Sentence","Subitem9Sentence","Subitem10Sentence"])) {
var t_70;
t_70 = (lineno = 206, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item_sentence"), "m_paragraph_item_sentence", context, [t_65,l_indent]));
frame.set("sentence_text", t_70, true);
if(frame.topLevel) {
context.setVariable("sentence_text", t_70);
}
if(frame.topLevel) {
context.addExport("sentence_text", t_70);
}
if(env.getFilter("length").call(context, env.getFilter("trim").call(context, runtime.contextOrFrameLookup(context, frame, "sentence_text")))) {
if((lineno = 208, colno = 21, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["paragraph_item_title_exists"])) || l_article) {
t_61 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "margin_space"), env.opts.autoescape);
;
}
else {
t_61 += "\r\n";
;
}
t_61 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sentence_text"), env.opts.autoescape);
;
}
else {
t_61 += "\r\n";
;
}
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_65),"tag"),["Item","Subitem1","Subitem2","Subitem3","Subitem4","Subitem5","Subitem6","Subitem7","Subitem8","Subitem9","Subitem10"])) {
t_61 += runtime.suppressValue((lineno = 225, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_65,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_65),"tag") == "TableStruct") {
t_61 += runtime.suppressValue((lineno = 227, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_65,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_65),"tag") == "List") {
t_61 += runtime.suppressValue((lineno = 229, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list"), "m_list", context, [t_65,l_indent + 2])), env.opts.autoescape);
;
}
else {
t_61 += runtime.suppressValue((lineno = 231, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_65])), env.opts.autoescape);
t_61 += "\r\n";
;
}
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_61);
});
context.addExport("m_paragraph_item");
context.setVariable("m_paragraph_item", macro_t_60);
var macro_t_71 = runtime.makeMacro(
["paragraph_item_sentence", "indent"], 
[], 
function (l_paragraph_item_sentence, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("paragraph_item_sentence", l_paragraph_item_sentence);
frame.set("indent", l_indent);
var t_72 = "";frame = frame.push();
var t_75 = runtime.memberLookup((l_paragraph_item_sentence),"children");
if(t_75) {var t_74 = t_75.length;
for(var t_73=0; t_73 < t_75.length; t_73++) {
var t_76 = t_75[t_73];
frame.set("el", t_76);
frame.set("loop.index", t_73 + 1);
frame.set("loop.index0", t_73);
frame.set("loop.revindex", t_74 - t_73);
frame.set("loop.revindex0", t_74 - t_73 - 1);
frame.set("loop.first", t_73 === 0);
frame.set("loop.last", t_73 === t_74 - 1);
frame.set("loop.length", t_74);
if(runtime.memberLookup((t_76),"tag") == "Sentence") {
t_72 += runtime.suppressValue((lineno = 243, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_76])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_76),"tag") == "Column") {
t_72 += runtime.suppressValue((lineno = 245, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_76])), env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_72 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "margin_space"), env.opts.autoescape);
;
}
;
}
else {
t_72 += runtime.suppressValue((lineno = 250, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_76])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
t_72 += "\r\n";
;
frame = callerFrame;
return new runtime.SafeString(t_72);
});
context.addExport("m_paragraph_item_sentence");
context.setVariable("m_paragraph_item_sentence", macro_t_71);
var macro_t_77 = runtime.makeMacro(
["column"], 
[], 
function (l_column, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("column", l_column);
var t_78 = "";frame = frame.push();
var t_81 = runtime.memberLookup((l_column),"children");
if(t_81) {var t_80 = t_81.length;
for(var t_79=0; t_79 < t_81.length; t_79++) {
var t_82 = t_81[t_79];
frame.set("el", t_82);
frame.set("loop.index", t_79 + 1);
frame.set("loop.index0", t_79);
frame.set("loop.revindex", t_80 - t_79);
frame.set("loop.revindex0", t_80 - t_79 - 1);
frame.set("loop.first", t_79 === 0);
frame.set("loop.last", t_79 === t_80 - 1);
frame.set("loop.length", t_80);
if(runtime.memberLookup((t_82),"tag") == "Sentence") {
t_78 += runtime.suppressValue((lineno = 262, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_82])), env.opts.autoescape);
;
}
else {
t_78 += runtime.suppressValue((lineno = 264, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_82])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_78);
});
context.addExport("m_column");
context.setVariable("m_column", macro_t_77);
var macro_t_83 = runtime.makeMacro(
["table_struct", "indent"], 
[], 
function (l_table_struct, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_struct", l_table_struct);
frame.set("indent", l_indent);
var t_84 = "";frame = frame.push();
var t_87 = runtime.memberLookup((l_table_struct),"children");
if(t_87) {var t_86 = t_87.length;
for(var t_85=0; t_85 < t_87.length; t_85++) {
var t_88 = t_87[t_85];
frame.set("el", t_88);
frame.set("loop.index", t_85 + 1);
frame.set("loop.index0", t_85);
frame.set("loop.revindex", t_86 - t_85);
frame.set("loop.revindex0", t_86 - t_85 - 1);
frame.set("loop.first", t_85 === 0);
frame.set("loop.last", t_85 === t_86 - 1);
frame.set("loop.length", t_86);
if(runtime.memberLookup((t_88),"tag") == "Table") {
t_84 += runtime.suppressValue((lineno = 274, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_88,l_indent])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_88),"tag") == "TableStructTitle") {
frame = frame.push();
var t_91 = (lineno = 276, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_91) {var t_90 = t_91.length;
for(var t_89=0; t_89 < t_91.length; t_89++) {
var t_92 = t_91[t_89];
frame.set("_", t_92);
frame.set("loop.index", t_89 + 1);
frame.set("loop.index0", t_89);
frame.set("loop.revindex", t_90 - t_89);
frame.set("loop.revindex0", t_90 - t_89 - 1);
frame.set("loop.first", t_89 === 0);
frame.set("loop.last", t_89 === t_90 - 1);
frame.set("loop.length", t_90);
t_84 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
t_84 += ":table-struct-title:";
t_84 += runtime.suppressValue((lineno = 279, colno = 31, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_88])), env.opts.autoescape);
t_84 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_88),"tag") == "Remarks") {
t_84 += runtime.suppressValue((lineno = 283, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_88])), env.opts.autoescape);
;
}
else {
t_84 += runtime.suppressValue((lineno = 285, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_88])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_84);
});
context.addExport("m_table_struct");
context.setVariable("m_table_struct", macro_t_83);
var macro_t_93 = runtime.makeMacro(
["table", "indent"], 
[], 
function (l_table, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table", l_table);
frame.set("indent", l_indent);
var t_94 = "";frame = frame.push();
var t_97 = runtime.memberLookup((l_table),"children");
if(t_97) {var t_96 = t_97.length;
for(var t_95=0; t_95 < t_97.length; t_95++) {
var t_98 = t_97[t_95];
frame.set("el", t_98);
frame.set("loop.index", t_95 + 1);
frame.set("loop.index0", t_95);
frame.set("loop.revindex", t_96 - t_95);
frame.set("loop.revindex0", t_96 - t_95 - 1);
frame.set("loop.first", t_95 === 0);
frame.set("loop.last", t_95 === t_96 - 1);
frame.set("loop.length", t_96);
if(runtime.memberLookup((t_98),"tag") == "TableRow") {
t_94 += runtime.suppressValue((lineno = 295, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_row"), "m_table_row", context, [t_98,l_indent])), env.opts.autoescape);
;
}
else {
t_94 += runtime.suppressValue((lineno = 297, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_98])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_94);
});
context.addExport("m_table");
context.setVariable("m_table", macro_t_93);
var macro_t_99 = runtime.makeMacro(
["table_row", "indent"], 
[], 
function (l_table_row, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_row", l_table_row);
frame.set("indent", l_indent);
var t_100 = "";frame = frame.push();
var t_103 = runtime.memberLookup((l_table_row),"children");
if(t_103) {var t_102 = t_103.length;
for(var t_101=0; t_101 < t_103.length; t_101++) {
var t_104 = t_103[t_101];
frame.set("el", t_104);
frame.set("loop.index", t_101 + 1);
frame.set("loop.index0", t_101);
frame.set("loop.revindex", t_102 - t_101);
frame.set("loop.revindex0", t_102 - t_101 - 1);
frame.set("loop.first", t_101 === 0);
frame.set("loop.last", t_101 === t_102 - 1);
frame.set("loop.length", t_102);
if(runtime.memberLookup((t_104),"tag") == "TableColumn") {
t_100 += runtime.suppressValue((lineno = 307, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_column"), "m_table_column", context, [t_104,l_indent,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")])), env.opts.autoescape);
;
}
else {
t_100 += runtime.suppressValue((lineno = 309, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_104])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_100);
});
context.addExport("m_table_row");
context.setVariable("m_table_row", macro_t_99);
var macro_t_105 = runtime.makeMacro(
["table_column", "indent", "first_column"], 
[], 
function (l_table_column, l_indent, l_first_column, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("table_column", l_table_column);
frame.set("indent", l_indent);
frame.set("first_column", l_first_column);
var t_106 = "";frame = frame.push();
var t_109 = runtime.memberLookup((l_table_column),"children");
if(t_109) {var t_108 = t_109.length;
for(var t_107=0; t_107 < t_109.length; t_107++) {
var t_110 = t_109[t_107];
frame.set("el", t_110);
frame.set("loop.index", t_107 + 1);
frame.set("loop.index0", t_107);
frame.set("loop.revindex", t_108 - t_107);
frame.set("loop.revindex0", t_108 - t_107 - 1);
frame.set("loop.first", t_107 === 0);
frame.set("loop.last", t_107 === t_108 - 1);
frame.set("loop.length", t_108);
if(runtime.memberLookup((t_110),"tag") == "Sentence") {
frame = frame.push();
var t_113 = (lineno = 320, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_113) {var t_112 = t_113.length;
for(var t_111=0; t_111 < t_113.length; t_111++) {
var t_114 = t_113[t_111];
frame.set("_", t_114);
frame.set("loop.index", t_111 + 1);
frame.set("loop.index0", t_111);
frame.set("loop.revindex", t_112 - t_111);
frame.set("loop.revindex0", t_112 - t_111 - 1);
frame.set("loop.first", t_111 === 0);
frame.set("loop.last", t_111 === t_112 - 1);
frame.set("loop.length", t_112);
t_106 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")) {
if(l_first_column) {
t_106 += runtime.suppressValue("* - ", env.opts.autoescape);
;
}
else {
t_106 += runtime.suppressValue("  - ", env.opts.autoescape);
;
}
if(runtime.inOperator("rowspan",runtime.memberLookup((l_table_column),"attr"))) {
t_106 += "[rowspan=\"";
t_106 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"rowspan"), env.opts.autoescape);
t_106 += "\"]";
;
}
if(runtime.inOperator("colspan",runtime.memberLookup((l_table_column),"attr"))) {
t_106 += "[colspan=\"";
t_106 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"colspan"), env.opts.autoescape);
t_106 += "\"]";
;
}
if(runtime.inOperator("Align",runtime.memberLookup((l_table_column),"attr"))) {
t_106 += "[Align=\"";
t_106 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"Align"), env.opts.autoescape);
t_106 += "\"]";
;
}
if(runtime.inOperator("Valign",runtime.memberLookup((l_table_column),"attr"))) {
t_106 += "[Valign=\"";
t_106 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"Valign"), env.opts.autoescape);
t_106 += "\"]";
;
}
;
}
else {
t_106 += runtime.suppressValue("    ", env.opts.autoescape);
;
}
t_106 += runtime.suppressValue((lineno = 347, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_110])), env.opts.autoescape);
t_106 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_110),"tag") == "Item") {
frame = frame.push();
var t_117 = (lineno = 351, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_117) {var t_116 = t_117.length;
for(var t_115=0; t_115 < t_117.length; t_115++) {
var t_118 = t_117[t_115];
frame.set("_", t_118);
frame.set("loop.index", t_115 + 1);
frame.set("loop.index0", t_115);
frame.set("loop.revindex", t_116 - t_115);
frame.set("loop.revindex0", t_116 - t_115 - 1);
frame.set("loop.first", t_115 === 0);
frame.set("loop.last", t_115 === t_116 - 1);
frame.set("loop.length", t_116);
t_106 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
if(l_first_column) {
t_106 += runtime.suppressValue("* - ", env.opts.autoescape);
;
}
else {
t_106 += runtime.suppressValue("  - ", env.opts.autoescape);
;
}
t_106 += runtime.suppressValue((lineno = 359, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_110,0])), env.opts.autoescape);
;
}
else {
t_106 += runtime.suppressValue((lineno = 361, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_110])), env.opts.autoescape);
t_106 += "\r\n";
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_106);
});
context.addExport("m_table_column");
context.setVariable("m_table_column", macro_t_105);
var macro_t_119 = runtime.makeMacro(
["style_struct", "indent"], 
[], 
function (l_style_struct, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("style_struct", l_style_struct);
frame.set("indent", l_indent);
var t_120 = "";t_120 += "\r\n";
frame = frame.push();
var t_123 = runtime.memberLookup((l_style_struct),"children");
if(t_123) {var t_122 = t_123.length;
for(var t_121=0; t_121 < t_123.length; t_121++) {
var t_124 = t_123[t_121];
frame.set("el", t_124);
frame.set("loop.index", t_121 + 1);
frame.set("loop.index0", t_121);
frame.set("loop.revindex", t_122 - t_121);
frame.set("loop.revindex0", t_122 - t_121 - 1);
frame.set("loop.first", t_121 === 0);
frame.set("loop.last", t_121 === t_122 - 1);
frame.set("loop.length", t_122);
if(runtime.memberLookup((t_124),"tag") == "StyleStructTitle") {
frame = frame.push();
var t_127 = (lineno = 375, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_127) {var t_126 = t_127.length;
for(var t_125=0; t_125 < t_127.length; t_125++) {
var t_128 = t_127[t_125];
frame.set("_", t_128);
frame.set("loop.index", t_125 + 1);
frame.set("loop.index0", t_125);
frame.set("loop.revindex", t_126 - t_125);
frame.set("loop.revindex0", t_126 - t_125 - 1);
frame.set("loop.first", t_125 === 0);
frame.set("loop.last", t_125 === t_126 - 1);
frame.set("loop.length", t_126);
t_120 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
t_120 += runtime.suppressValue((lineno = 378, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_124])), env.opts.autoescape);
t_120 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_124),"tag") == "Style") {
t_120 += runtime.suppressValue((lineno = 382, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_style"), "m_style", context, [t_124,l_indent])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_124),"tag") == "Remarks") {
t_120 += runtime.suppressValue((lineno = 384, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_124])), env.opts.autoescape);
;
}
else {
t_120 += runtime.suppressValue((lineno = 386, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_124])), env.opts.autoescape);
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_120);
});
context.addExport("m_style_struct");
context.setVariable("m_style_struct", macro_t_119);
var macro_t_129 = runtime.makeMacro(
["style", "indent"], 
[], 
function (l_style, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("style", l_style);
frame.set("indent", l_indent);
var t_130 = "";frame = frame.push();
var t_133 = runtime.memberLookup((l_style),"children");
if(t_133) {var t_132 = t_133.length;
for(var t_131=0; t_131 < t_133.length; t_131++) {
var t_134 = t_133[t_131];
frame.set("el", t_134);
frame.set("loop.index", t_131 + 1);
frame.set("loop.index0", t_131);
frame.set("loop.revindex", t_132 - t_131);
frame.set("loop.revindex0", t_132 - t_131 - 1);
frame.set("loop.first", t_131 === 0);
frame.set("loop.last", t_131 === t_132 - 1);
frame.set("loop.length", t_132);
if(runtime.memberLookup((t_134),"tag") == "Fig") {
t_130 += runtime.suppressValue((lineno = 396, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_fig"), "m_fig", context, [t_134,l_indent])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_134),"tag") == "Table") {
t_130 += runtime.suppressValue((lineno = 398, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_134,l_indent])), env.opts.autoescape);
;
}
else {
t_130 += runtime.suppressValue((lineno = 400, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_134])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_130);
});
context.addExport("m_style");
context.setVariable("m_style", macro_t_129);
var macro_t_135 = runtime.makeMacro(
["appdx_table"], 
[], 
function (l_appdx_table, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_table", l_appdx_table);
var t_136 = "";t_136 += "\r\n";
frame = frame.push();
var t_139 = runtime.memberLookup((l_appdx_table),"children");
if(t_139) {var t_138 = t_139.length;
for(var t_137=0; t_137 < t_139.length; t_137++) {
var t_140 = t_139[t_137];
frame.set("el", t_140);
frame.set("loop.index", t_137 + 1);
frame.set("loop.index0", t_137);
frame.set("loop.revindex", t_138 - t_137);
frame.set("loop.revindex0", t_138 - t_137 - 1);
frame.set("loop.first", t_137 === 0);
frame.set("loop.last", t_137 === t_138 - 1);
frame.set("loop.length", t_138);
if(runtime.memberLookup((t_140),"tag") == "AppdxTableTitle") {
t_136 += runtime.suppressValue((lineno = 412, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_140])), env.opts.autoescape);
frame = frame.push();
var t_143 = runtime.memberLookup((l_appdx_table),"children");
if(t_143) {var t_142 = t_143.length;
for(var t_141=0; t_141 < t_143.length; t_141++) {
var t_144 = t_143[t_141];
frame.set("el2", t_144);
frame.set("loop.index", t_141 + 1);
frame.set("loop.index0", t_141);
frame.set("loop.revindex", t_142 - t_141);
frame.set("loop.revindex0", t_142 - t_141 - 1);
frame.set("loop.first", t_141 === 0);
frame.set("loop.last", t_141 === t_142 - 1);
frame.set("loop.length", t_142);
if(runtime.memberLookup((t_144),"tag") == "RelatedArticleNum") {
t_136 += runtime.suppressValue((lineno = 415, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_144])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_136 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_140),"tag") == "RelatedArticleNum") {
;
}
else {
if(runtime.memberLookup((t_140),"tag") == "TableStruct") {
t_136 += runtime.suppressValue((lineno = 422, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_140,1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_140),"tag") == "Item") {
t_136 += runtime.suppressValue((lineno = 424, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_140,1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_140),"tag") == "Remarks") {
t_136 += runtime.suppressValue((lineno = 426, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_140])), env.opts.autoescape);
;
}
else {
t_136 += runtime.suppressValue((lineno = 428, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_140])), env.opts.autoescape);
t_136 += "\r\n";
;
}
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_136);
});
context.addExport("m_appdx_table");
context.setVariable("m_appdx_table", macro_t_135);
var macro_t_145 = runtime.makeMacro(
["appdx_style"], 
[], 
function (l_appdx_style, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_style", l_appdx_style);
var t_146 = "";t_146 += "\r\n";
frame = frame.push();
var t_149 = runtime.memberLookup((l_appdx_style),"children");
if(t_149) {var t_148 = t_149.length;
for(var t_147=0; t_147 < t_149.length; t_147++) {
var t_150 = t_149[t_147];
frame.set("el", t_150);
frame.set("loop.index", t_147 + 1);
frame.set("loop.index0", t_147);
frame.set("loop.revindex", t_148 - t_147);
frame.set("loop.revindex0", t_148 - t_147 - 1);
frame.set("loop.first", t_147 === 0);
frame.set("loop.last", t_147 === t_148 - 1);
frame.set("loop.length", t_148);
if(runtime.memberLookup((t_150),"tag") == "AppdxStyleTitle") {
t_146 += runtime.suppressValue((lineno = 442, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_150])), env.opts.autoescape);
frame = frame.push();
var t_153 = runtime.memberLookup((l_appdx_style),"children");
if(t_153) {var t_152 = t_153.length;
for(var t_151=0; t_151 < t_153.length; t_151++) {
var t_154 = t_153[t_151];
frame.set("el2", t_154);
frame.set("loop.index", t_151 + 1);
frame.set("loop.index0", t_151);
frame.set("loop.revindex", t_152 - t_151);
frame.set("loop.revindex0", t_152 - t_151 - 1);
frame.set("loop.first", t_151 === 0);
frame.set("loop.last", t_151 === t_152 - 1);
frame.set("loop.length", t_152);
if(runtime.memberLookup((t_154),"tag") == "RelatedArticleNum") {
t_146 += runtime.suppressValue((lineno = 445, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_154])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_146 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_150),"tag") == "RelatedArticleNum") {
;
}
else {
if(runtime.memberLookup((t_150),"tag") == "StyleStruct") {
t_146 += runtime.suppressValue((lineno = 452, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_style_struct"), "m_style_struct", context, [t_150,1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_150),"tag") == "Remarks") {
t_146 += runtime.suppressValue((lineno = 454, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_150])), env.opts.autoescape);
;
}
else {
t_146 += runtime.suppressValue((lineno = 456, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_150])), env.opts.autoescape);
t_146 += "\r\n";
;
}
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_146);
});
context.addExport("m_appdx_style");
context.setVariable("m_appdx_style", macro_t_145);
var macro_t_155 = runtime.makeMacro(
["list", "indent"], 
[], 
function (l_list, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list", l_list);
frame.set("indent", l_indent);
var t_156 = "";frame = frame.push();
var t_159 = runtime.memberLookup((l_list),"children");
if(t_159) {var t_158 = t_159.length;
for(var t_157=0; t_157 < t_159.length; t_157++) {
var t_160 = t_159[t_157];
frame.set("el", t_160);
frame.set("loop.index", t_157 + 1);
frame.set("loop.index0", t_157);
frame.set("loop.revindex", t_158 - t_157);
frame.set("loop.revindex0", t_158 - t_157 - 1);
frame.set("loop.first", t_157 === 0);
frame.set("loop.last", t_157 === t_158 - 1);
frame.set("loop.length", t_158);
if(runtime.memberLookup((t_160),"tag") == "ListSentence") {
t_156 += runtime.suppressValue((lineno = 468, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list_sentence"), "m_list_sentence", context, [t_160,l_indent])), env.opts.autoescape);
;
}
else {
t_156 += runtime.suppressValue((lineno = 470, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_160])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_156);
});
context.addExport("m_list");
context.setVariable("m_list", macro_t_155);
var macro_t_161 = runtime.makeMacro(
["list_sentence", "indent"], 
[], 
function (l_list_sentence, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list_sentence", l_list_sentence);
frame.set("indent", l_indent);
var t_162 = "";frame = frame.push();
var t_165 = (lineno = 478, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_165) {var t_164 = t_165.length;
for(var t_163=0; t_163 < t_165.length; t_163++) {
var t_166 = t_165[t_163];
frame.set("_", t_166);
frame.set("loop.index", t_163 + 1);
frame.set("loop.index0", t_163);
frame.set("loop.revindex", t_164 - t_163);
frame.set("loop.revindex0", t_164 - t_163 - 1);
frame.set("loop.first", t_163 === 0);
frame.set("loop.last", t_163 === t_164 - 1);
frame.set("loop.length", t_164);
t_162 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
frame = frame.push();
var t_169 = runtime.memberLookup((l_list_sentence),"children");
if(t_169) {var t_168 = t_169.length;
for(var t_167=0; t_167 < t_169.length; t_167++) {
var t_170 = t_169[t_167];
frame.set("el", t_170);
frame.set("loop.index", t_167 + 1);
frame.set("loop.index0", t_167);
frame.set("loop.revindex", t_168 - t_167);
frame.set("loop.revindex0", t_168 - t_167 - 1);
frame.set("loop.first", t_167 === 0);
frame.set("loop.last", t_167 === t_168 - 1);
frame.set("loop.length", t_168);
if(runtime.memberLookup((t_170),"tag") == "Sentence") {
t_162 += runtime.suppressValue((lineno = 483, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_170])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_170),"tag") == "Column") {
t_162 += runtime.suppressValue((lineno = 485, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_170])), env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_162 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "margin_space"), env.opts.autoescape);
;
}
;
}
else {
t_162 += runtime.suppressValue((lineno = 490, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_170])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
t_162 += "\r\n";
;
frame = callerFrame;
return new runtime.SafeString(t_162);
});
context.addExport("m_list_sentence");
context.setVariable("m_list_sentence", macro_t_161);
var macro_t_171 = runtime.makeMacro(
["fig", "indent"], 
[], 
function (l_fig, l_indent, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("fig", l_fig);
frame.set("indent", l_indent);
var t_172 = "";frame = frame.push();
var t_175 = (lineno = 500, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_175) {var t_174 = t_175.length;
for(var t_173=0; t_173 < t_175.length; t_173++) {
var t_176 = t_175[t_173];
frame.set("_", t_176);
frame.set("loop.index", t_173 + 1);
frame.set("loop.index0", t_173);
frame.set("loop.revindex", t_174 - t_173);
frame.set("loop.revindex0", t_174 - t_173 - 1);
frame.set("loop.first", t_173 === 0);
frame.set("loop.last", t_173 === t_174 - 1);
frame.set("loop.length", t_174);
t_172 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
t_172 += ".. figure:: ";
t_172 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_fig),"attr")),"src"), env.opts.autoescape);
t_172 += "\r\n";
frame = frame.push();
var t_179 = runtime.memberLookup((l_fig),"children");
if(t_179) {var t_178 = t_179.length;
for(var t_177=0; t_177 < t_179.length; t_177++) {
var t_180 = t_179[t_177];
frame.set("el", t_180);
frame.set("loop.index", t_177 + 1);
frame.set("loop.index0", t_177);
frame.set("loop.revindex", t_178 - t_177);
frame.set("loop.revindex0", t_178 - t_177 - 1);
frame.set("loop.first", t_177 === 0);
frame.set("loop.last", t_177 === t_178 - 1);
frame.set("loop.length", t_178);
t_172 += runtime.suppressValue((lineno = 507, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_180])), env.opts.autoescape);
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_172);
});
context.addExport("m_fig");
context.setVariable("m_fig", macro_t_171);
var macro_t_181 = runtime.makeMacro(
["remarks"], 
[], 
function (l_remarks, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("remarks", l_remarks);
var t_182 = "";frame = frame.push();
var t_185 = runtime.memberLookup((l_remarks),"children");
if(t_185) {var t_184 = t_185.length;
for(var t_183=0; t_183 < t_185.length; t_183++) {
var t_186 = t_185[t_183];
frame.set("el", t_186);
frame.set("loop.index", t_183 + 1);
frame.set("loop.index0", t_183);
frame.set("loop.revindex", t_184 - t_183);
frame.set("loop.revindex0", t_184 - t_183 - 1);
frame.set("loop.first", t_183 === 0);
frame.set("loop.last", t_183 === t_184 - 1);
frame.set("loop.length", t_184);
if(runtime.memberLookup((t_186),"tag") == "RemarksLabel") {
t_182 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
t_182 += runtime.suppressValue((lineno = 516, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_186])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_186),"tag") == "Sentence") {
t_182 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "margin_space"), env.opts.autoescape);
t_182 += runtime.suppressValue((lineno = 518, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_186])), env.opts.autoescape);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_182 += "\r\n";
;
}
;
}
else {
if(runtime.memberLookup((t_186),"tag") == "Item") {
t_182 += runtime.suppressValue((lineno = 524, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_186,0])), env.opts.autoescape);
;
}
else {
t_182 += runtime.suppressValue((lineno = 526, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_186])), env.opts.autoescape);
t_182 += "\r\n";
;
}
;
}
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_182);
});
context.addExport("m_remarks");
context.setVariable("m_remarks", macro_t_181);
var macro_t_187 = runtime.makeMacro(
["quote_struct"], 
[], 
function (l_quote_struct, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("quote_struct", l_quote_struct);
var t_188 = "";t_188 += runtime.suppressValue((lineno = 536, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [l_quote_struct])), env.opts.autoescape);
;
frame = callerFrame;
return new runtime.SafeString(t_188);
});
context.addExport("m_quote_struct");
context.setVariable("m_quote_struct", macro_t_187);
var macro_t_189 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_190 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_190 += runtime.suppressValue(l_el, env.opts.autoescape);
;
}
else {
t_190 += "<";
t_190 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
frame = frame.push();
var t_193 = env.getFilter("dictsort").call(context, runtime.memberLookup((l_el),"attr"));
if(t_193) {var t_191;
if(runtime.isArray(t_193)) {
var t_192 = t_193.length;
for(t_191=0; t_191 < t_193.length; t_191++) {
var t_194 = t_193[t_191][0]
frame.set("key", t_193[t_191][0]);
var t_195 = t_193[t_191][1]
frame.set("value", t_193[t_191][1]);
frame.set("loop.index", t_191 + 1);
frame.set("loop.index0", t_191);
frame.set("loop.revindex", t_192 - t_191);
frame.set("loop.revindex0", t_192 - t_191 - 1);
frame.set("loop.first", t_191 === 0);
frame.set("loop.last", t_191 === t_192 - 1);
frame.set("loop.length", t_192);
t_190 += runtime.suppressValue(" ", env.opts.autoescape);
t_190 += runtime.suppressValue(t_194, env.opts.autoescape);
t_190 += "=";
t_190 += runtime.suppressValue(t_195, env.opts.autoescape);
;
}
} else {
t_191 = -1;
var t_192 = runtime.keys(t_193).length;
for(var t_196 in t_193) {
t_191++;
var t_197 = t_193[t_196];
frame.set("key", t_196);
frame.set("value", t_197);
frame.set("loop.index", t_191 + 1);
frame.set("loop.index0", t_191);
frame.set("loop.revindex", t_192 - t_191);
frame.set("loop.revindex0", t_192 - t_191 - 1);
frame.set("loop.first", t_191 === 0);
frame.set("loop.last", t_191 === t_192 - 1);
frame.set("loop.length", t_192);
t_190 += runtime.suppressValue(" ", env.opts.autoescape);
t_190 += runtime.suppressValue(t_196, env.opts.autoescape);
t_190 += "=";
t_190 += runtime.suppressValue(t_197, env.opts.autoescape);
;
}
}
}
frame = frame.pop();
t_190 += ">";
frame = frame.push();
var t_200 = runtime.memberLookup((l_el),"children");
if(t_200) {var t_199 = t_200.length;
for(var t_198=0; t_198 < t_200.length; t_198++) {
var t_201 = t_200[t_198];
frame.set("child", t_201);
frame.set("loop.index", t_198 + 1);
frame.set("loop.index0", t_198);
frame.set("loop.revindex", t_199 - t_198);
frame.set("loop.revindex0", t_199 - t_198 - 1);
frame.set("loop.first", t_198 === 0);
frame.set("loop.last", t_198 === t_199 - 1);
frame.set("loop.length", t_199);
if(!runtime.memberLookup((t_201),"tag")) {
t_190 += runtime.suppressValue(t_201, env.opts.autoescape);
;
}
else {
t_190 += runtime.suppressValue((lineno = 553, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_201])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_190 += "</";
t_190 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
t_190 += ">";
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_190);
});
context.addExport("m_element");
context.setVariable("m_element", macro_t_189);
var macro_t_202 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_203 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_203 += runtime.suppressValue(l_el, env.opts.autoescape);
;
}
else {
frame = frame.push();
var t_206 = runtime.memberLookup((l_el),"children");
if(t_206) {var t_205 = t_206.length;
for(var t_204=0; t_204 < t_206.length; t_204++) {
var t_207 = t_206[t_204];
frame.set("child", t_207);
frame.set("loop.index", t_204 + 1);
frame.set("loop.index0", t_204);
frame.set("loop.revindex", t_205 - t_204);
frame.set("loop.revindex0", t_205 - t_204 - 1);
frame.set("loop.first", t_204 === 0);
frame.set("loop.last", t_204 === t_205 - 1);
frame.set("loop.length", t_205);
if(!runtime.memberLookup((t_207),"tag")) {
t_203 += runtime.suppressValue(t_207, env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_207),"tag") == "QuoteStruct") {
t_203 += runtime.suppressValue((lineno = 571, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_quote_struct"), "m_quote_struct", context, [t_207])), env.opts.autoescape);
;
}
else {
t_203 += runtime.suppressValue((lineno = 573, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_207])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_203);
});
context.addExport("m_text");
context.setVariable("m_text", macro_t_202);
output += runtime.suppressValue((lineno = 586, colno = 6, runtime.callWrap(macro_t_3, "m_law", context, [runtime.contextOrFrameLookup(context, frame, "law")])), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["xml.xml"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_2 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_2 += runtime.suppressValue(l_el, env.opts.autoescape);
;
}
else {
t_2 += "<";
t_2 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
frame = frame.push();
var t_5 = env.getFilter("dictsort").call(context, runtime.memberLookup((l_el),"attr"));
if(t_5) {var t_3;
if(runtime.isArray(t_5)) {
var t_4 = t_5.length;
for(t_3=0; t_3 < t_5.length; t_3++) {
var t_6 = t_5[t_3][0]
frame.set("key", t_5[t_3][0]);
var t_7 = t_5[t_3][1]
frame.set("value", t_5[t_3][1]);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
t_2 += runtime.suppressValue(" ", env.opts.autoescape);
t_2 += runtime.suppressValue(t_6, env.opts.autoescape);
t_2 += "=\"";
t_2 += runtime.suppressValue(t_7, env.opts.autoescape);
t_2 += "\"";
;
}
} else {
t_3 = -1;
var t_4 = runtime.keys(t_5).length;
for(var t_8 in t_5) {
t_3++;
var t_9 = t_5[t_8];
frame.set("key", t_8);
frame.set("value", t_9);
frame.set("loop.index", t_3 + 1);
frame.set("loop.index0", t_3);
frame.set("loop.revindex", t_4 - t_3);
frame.set("loop.revindex0", t_4 - t_3 - 1);
frame.set("loop.first", t_3 === 0);
frame.set("loop.last", t_3 === t_4 - 1);
frame.set("loop.length", t_4);
t_2 += runtime.suppressValue(" ", env.opts.autoescape);
t_2 += runtime.suppressValue(t_8, env.opts.autoescape);
t_2 += "=\"";
t_2 += runtime.suppressValue(t_9, env.opts.autoescape);
t_2 += "\"";
;
}
}
}
frame = frame.pop();
t_2 += ">";
frame = frame.push();
var t_12 = runtime.memberLookup((l_el),"children");
if(t_12) {var t_11 = t_12.length;
for(var t_10=0; t_10 < t_12.length; t_10++) {
var t_13 = t_12[t_10];
frame.set("child", t_13);
frame.set("loop.index", t_10 + 1);
frame.set("loop.index0", t_10);
frame.set("loop.revindex", t_11 - t_10);
frame.set("loop.revindex0", t_11 - t_10 - 1);
frame.set("loop.first", t_10 === 0);
frame.set("loop.last", t_10 === t_11 - 1);
frame.set("loop.length", t_11);
if(!runtime.memberLookup((t_13),"tag")) {
t_2 += runtime.suppressValue(t_13, env.opts.autoescape);
;
}
else {
t_2 += runtime.suppressValue((lineno = 12, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [t_13])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_2 += "</";
t_2 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
t_2 += ">";
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("m_element_raw");
context.setVariable("m_element_raw", macro_t_1);
output += "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
output += runtime.suppressValue((lineno = 20, colno = 14, runtime.callWrap(macro_t_1, "m_element_raw", context, [runtime.contextOrFrameLookup(context, frame, "law")])), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

