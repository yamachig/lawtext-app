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
t_8 += runtime.suppressValue((lineno = 26, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_12])), env.opts.autoescape);
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
t_14 += runtime.suppressValue((lineno = 35, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [l_law_title,1])), env.opts.autoescape);
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
t_14 += runtime.suppressValue((lineno = 44, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_18,1])), env.opts.autoescape);
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
t_20 += runtime.suppressValue((lineno = 58, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [l_enact_statement])), env.opts.autoescape);
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
t_22 += runtime.suppressValue((lineno = 73, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_26])), env.opts.autoescape);
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
t_22 += runtime.suppressValue((lineno = 80, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_30,1])), env.opts.autoescape);
;
}
else {
t_22 += runtime.suppressValue((lineno = 82, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_30])), env.opts.autoescape);
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
t_32 += runtime.suppressValue((lineno = 101, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_36])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_36),"tag") == "ArticleRange") {
t_32 += runtime.suppressValue((lineno = 103, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_36])), env.opts.autoescape);
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
t_32 += runtime.suppressValue((lineno = 109, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_40,l_indent + 1])), env.opts.autoescape);
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
t_32 += runtime.suppressValue((lineno = 117, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_40])), env.opts.autoescape);
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
t_42 += runtime.suppressValue((lineno = 127, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_46])), env.opts.autoescape);
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
t_42 += runtime.suppressValue((lineno = 147, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_46,1])), env.opts.autoescape);
if(runtime.inOperator("AmendLawNum",runtime.memberLookup((l_article_group),"attr"))) {
t_42 += "\r\n  <w:r>\r\n    <w:rStyle w:val=\"Emphasis\"/>\r\n    <w:t>\r\n        （";
t_42 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"AmendLawNum"), env.opts.autoescape);
t_42 += "）\r\n    </w:t>\r\n  </w:r>";
;
}
if(runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"Extract") == "true") {
t_42 += runtime.suppressValue((lineno = 157, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, ["　抄",1])), env.opts.autoescape);
;
}
t_42 += "\r\n</w:p>";
;
}
else {
if(runtime.memberLookup((t_46),"tag") == "Article") {
t_42 += runtime.suppressValue((lineno = 161, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article"), "m_article", context, [t_46])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_46),"tag") == "Paragraph") {
t_42 += runtime.suppressValue((lineno = 163, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_46,{},0])), env.opts.autoescape);
;
}
else {
t_42 += runtime.suppressValue((lineno = 165, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_46])), env.opts.autoescape);
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
t_49 += runtime.suppressValue((lineno = 184, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_53])), env.opts.autoescape);
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
t_49 += runtime.suppressValue((lineno = 192, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_57,l_article,0])), env.opts.autoescape);
;
}
else {
t_49 += runtime.suppressValue((lineno = 194, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_57])), env.opts.autoescape);
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
t_59 += runtime.suppressValue((lineno = 209, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_63])), env.opts.autoescape);
t_59 += "</w:p>";
;
}
;
}
}
frame = frame.pop();
t_59 += "\r\n<w:p>\r\n  <w:pPr>";
t_59 += runtime.suppressValue((lineno = 216, colno = 14, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",1])), env.opts.autoescape);
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
t_59 += runtime.suppressValue((lineno = 230, colno = 26, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",0])), env.opts.autoescape);
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
t_59 += runtime.suppressValue((lineno = 237, colno = 20, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",0])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
if((lineno = 243, colno = 17, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["no_title"]))) {
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
t_59 += runtime.suppressValue((lineno = 261, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_79,1])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
}
if(env.getFilter("length").call(context, runtime.memberLookup((t_75),"children"))) {
t_59 += runtime.suppressValue((lineno = 266, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_75,1])), env.opts.autoescape);
;
}
if(!(lineno = 268, colno = 25, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["no_title"]))) {
t_59 += "<w:r>\r\n        <w:t>";
t_59 += runtime.suppressValue("　", env.opts.autoescape);
t_59 += "</w:t>\r\n      </w:r>";
;
}
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_75),"tag"),["ParagraphSentence","ItemSentence","Subitem1Sentence","Subitem2Sentence","Subitem3Sentence","Subitem4Sentence","Subitem5Sentence","Subitem6Sentence","Subitem7Sentence","Subitem8Sentence","Subitem9Sentence","Subitem10Sentence"])) {
t_59 += runtime.suppressValue((lineno = 279, colno = 36, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item_sentence_run"), "m_paragraph_item_sentence_run", context, [t_75])), env.opts.autoescape);
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
t_59 += runtime.suppressValue((lineno = 304, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_83,l_article,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_83),"tag") == "TableStruct") {
t_59 += runtime.suppressValue((lineno = 306, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_83,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_83),"tag") == "List") {
t_59 += runtime.suppressValue((lineno = 308, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list"), "m_list", context, [t_83,l_indent + 2])), env.opts.autoescape);
;
}
else {
t_59 += runtime.suppressValue((lineno = 310, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_83])), env.opts.autoescape);
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
t_85 += runtime.suppressValue((lineno = 321, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_89])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_89),"tag") == "Column") {
t_85 += runtime.suppressValue((lineno = 323, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_89])), env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_85 += runtime.suppressValue("　", env.opts.autoescape);
;
}
;
}
else {
t_85 += runtime.suppressValue((lineno = 328, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_89])), env.opts.autoescape);
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
t_91 += runtime.suppressValue((lineno = 338, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_95])), env.opts.autoescape);
;
}
else {
t_91 += runtime.suppressValue((lineno = 340, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_95])), env.opts.autoescape);
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
t_97 += runtime.suppressValue((lineno = 350, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_101,l_indent])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_101),"tag") == "Remarks") {
t_97 += runtime.suppressValue((lineno = 352, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_101,l_indent])), env.opts.autoescape);
;
}
else {
t_97 += runtime.suppressValue((lineno = 354, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_101])), env.opts.autoescape);
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
var t_103 = "";l_table = (lineno = 362, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "restructure_table"), "restructure_table", context, [l_table]));
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
t_103 += runtime.suppressValue((lineno = 369, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_row"), "m_table_row", context, [t_107])), env.opts.autoescape);
;
}
else {
t_103 += runtime.suppressValue((lineno = 371, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_107])), env.opts.autoescape);
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
t_109 += runtime.suppressValue((lineno = 383, colno = 23, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_column"), "m_table_column", context, [t_113])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_113),"tag") == "TableColumnMerged") {
t_109 += runtime.suppressValue((lineno = 385, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_column_merged"), "m_table_column_merged", context, [t_113])), env.opts.autoescape);
;
}
else {
t_109 += runtime.suppressValue((lineno = 387, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_113])), env.opts.autoescape);
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
t_115 += "\r\n          <w:p>";
t_115 += runtime.suppressValue((lineno = 436, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_121])), env.opts.autoescape);
t_115 += "\r\n          </w:p>";
;
}
else {
t_115 += runtime.suppressValue((lineno = 439, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_121])), env.opts.autoescape);
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
["appdx_table"], 
[], 
function (l_appdx_table, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_table", l_appdx_table);
var t_125 = "";t_125 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"EmptyParagraph\"/>\r\n  </w:pPr>\r\n</w:p>";
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
t_125 += "\r\n<w:p>";
t_125 += runtime.suppressValue((lineno = 470, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_129,1])), env.opts.autoescape);
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
t_125 += runtime.suppressValue((lineno = 473, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_133,1])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_125 += "\r\n</w:p>";
;
}
;
}
}
frame = frame.pop();
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
t_125 += runtime.suppressValue((lineno = 484, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_137,1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_137),"tag") == "Item") {
t_125 += runtime.suppressValue((lineno = 486, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_137,{},1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_137),"tag") == "Remarks") {
t_125 += runtime.suppressValue((lineno = 488, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_137,1])), env.opts.autoescape);
;
}
else {
t_125 += "\r\n<w:p>\r\n  <w:r>\r\n    <w:t>";
t_125 += runtime.suppressValue((lineno = 492, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [runtime.contextOrFrameLookup(context, frame, "child")])), env.opts.autoescape);
t_125 += "</w:t>\r\n  </w:r>\r\n</w:p>";
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
return new runtime.SafeString(t_125);
});
context.addExport("m_appdx_table");
context.setVariable("m_appdx_table", macro_t_124);
var macro_t_138 = runtime.makeMacro(
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
var t_139 = "";frame = frame.push();
var t_142 = runtime.memberLookup((l_list),"children");
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
if(runtime.memberLookup((t_143),"tag") == "ListSentence") {
t_139 += runtime.suppressValue((lineno = 506, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list_sentence"), "m_list_sentence", context, [t_143,l_indent])), env.opts.autoescape);
;
}
else {
t_139 += runtime.suppressValue((lineno = 508, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_143])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_139);
});
context.addExport("m_list");
context.setVariable("m_list", macro_t_138);
var macro_t_144 = runtime.makeMacro(
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
var t_145 = "";frame = frame.push();
var t_148 = runtime.memberLookup((l_list_sentence),"children");
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
if(runtime.memberLookup((t_149),"tag") == "Sentence") {
t_145 += "\r\n<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"Indent";
t_145 += runtime.suppressValue(1, env.opts.autoescape);
t_145 += "\"/>\r\n  </w:pPr>";
t_145 += runtime.suppressValue((lineno = 524, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_149])), env.opts.autoescape);
t_145 += "</w:p>";
;
}
else {
t_145 += "\r\n<w:p>\r\n  <w:r>\r\n    <w:t>";
t_145 += runtime.suppressValue((lineno = 529, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [runtime.contextOrFrameLookup(context, frame, "child")])), env.opts.autoescape);
t_145 += "</w:t>\r\n  </w:r>\r\n</w:p>";
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_145);
});
context.addExport("m_list_sentence");
context.setVariable("m_list_sentence", macro_t_144);
var macro_t_150 = runtime.makeMacro(
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
var t_151 = "";t_151 += "<w:p>\r\n  <w:pPr>\r\n    <w:pStyle w:val=\"IndentHanging";
t_151 += runtime.suppressValue(l_indent, env.opts.autoescape);
t_151 += "\"/>\r\n  </w:pPr>";
frame = frame.push();
var t_154 = runtime.memberLookup((l_remarks),"children");
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
if(runtime.memberLookup((t_155),"tag") == "RemarksLabel") {
t_151 += runtime.suppressValue((lineno = 546, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_155])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_155),"tag") == "Sentence") {
t_151 += runtime.suppressValue((lineno = 548, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, ["　"])), env.opts.autoescape);
t_151 += runtime.suppressValue((lineno = 548, colno = 24, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_run"), "m_run", context, [t_155])), env.opts.autoescape);
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
t_151 += "</w:p>";
frame = frame.push();
var t_158 = runtime.memberLookup((l_remarks),"children");
if(t_158) {var t_157 = t_158.length;
for(var t_156=0; t_156 < t_158.length; t_156++) {
var t_159 = t_158[t_156];
frame.set("el", t_159);
frame.set("loop.index", t_156 + 1);
frame.set("loop.index0", t_156);
frame.set("loop.revindex", t_157 - t_156);
frame.set("loop.revindex0", t_157 - t_156 - 1);
frame.set("loop.first", t_156 === 0);
frame.set("loop.last", t_156 === t_157 - 1);
frame.set("loop.length", t_157);
if(runtime.memberLookup((t_159),"tag") == "RemarksLabel") {
;
}
else {
if(runtime.memberLookup((t_159),"tag") == "Sentence") {
;
}
else {
if(runtime.memberLookup((t_159),"tag") == "Item") {
t_151 += runtime.suppressValue((lineno = 559, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_159,{},l_indent])), env.opts.autoescape);
;
}
else {
t_151 += "\r\n<w:p>\r\n  <w:r>\r\n    <w:t>";
t_151 += runtime.suppressValue((lineno = 563, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [runtime.contextOrFrameLookup(context, frame, "child")])), env.opts.autoescape);
t_151 += "</w:t>\r\n  </w:r>\r\n</w:p>";
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
context.addExport("m_remarks");
context.setVariable("m_remarks", macro_t_150);
var macro_t_160 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_161 = "";t_161 += runtime.suppressValue(env.getFilter("e").call(context, (lineno = 574, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [l_el]))), env.opts.autoescape);
;
frame = callerFrame;
return new runtime.SafeString(t_161);
});
context.addExport("m_element");
context.setVariable("m_element", macro_t_160);
var macro_t_162 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_163 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_163 += runtime.suppressValue(l_el, env.opts.autoescape);
;
}
else {
t_163 += "<";
t_163 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
frame = frame.push();
var t_166 = env.getFilter("dictsort").call(context, runtime.memberLookup((l_el),"attr"));
if(t_166) {var t_164;
if(runtime.isArray(t_166)) {
var t_165 = t_166.length;
for(t_164=0; t_164 < t_166.length; t_164++) {
var t_167 = t_166[t_164][0]
frame.set("key", t_166[t_164][0]);
var t_168 = t_166[t_164][1]
frame.set("value", t_166[t_164][1]);
frame.set("loop.index", t_164 + 1);
frame.set("loop.index0", t_164);
frame.set("loop.revindex", t_165 - t_164);
frame.set("loop.revindex0", t_165 - t_164 - 1);
frame.set("loop.first", t_164 === 0);
frame.set("loop.last", t_164 === t_165 - 1);
frame.set("loop.length", t_165);
t_163 += runtime.suppressValue(" ", env.opts.autoescape);
t_163 += runtime.suppressValue(t_167, env.opts.autoescape);
t_163 += "=\"";
t_163 += runtime.suppressValue(t_168, env.opts.autoescape);
t_163 += "\"";
;
}
} else {
t_164 = -1;
var t_165 = runtime.keys(t_166).length;
for(var t_169 in t_166) {
t_164++;
var t_170 = t_166[t_169];
frame.set("key", t_169);
frame.set("value", t_170);
frame.set("loop.index", t_164 + 1);
frame.set("loop.index0", t_164);
frame.set("loop.revindex", t_165 - t_164);
frame.set("loop.revindex0", t_165 - t_164 - 1);
frame.set("loop.first", t_164 === 0);
frame.set("loop.last", t_164 === t_165 - 1);
frame.set("loop.length", t_165);
t_163 += runtime.suppressValue(" ", env.opts.autoescape);
t_163 += runtime.suppressValue(t_169, env.opts.autoescape);
t_163 += "=\"";
t_163 += runtime.suppressValue(t_170, env.opts.autoescape);
t_163 += "\"";
;
}
}
}
frame = frame.pop();
t_163 += ">";
frame = frame.push();
var t_173 = runtime.memberLookup((l_el),"children");
if(t_173) {var t_172 = t_173.length;
for(var t_171=0; t_171 < t_173.length; t_171++) {
var t_174 = t_173[t_171];
frame.set("child", t_174);
frame.set("loop.index", t_171 + 1);
frame.set("loop.index0", t_171);
frame.set("loop.revindex", t_172 - t_171);
frame.set("loop.revindex0", t_172 - t_171 - 1);
frame.set("loop.first", t_171 === 0);
frame.set("loop.last", t_171 === t_172 - 1);
frame.set("loop.length", t_172);
if(!runtime.memberLookup((t_174),"tag")) {
t_163 += runtime.suppressValue(t_174, env.opts.autoescape);
;
}
else {
t_163 += runtime.suppressValue((lineno = 591, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [t_174])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_163 += "</";
t_163 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
t_163 += ">";
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_163);
});
context.addExport("m_element_raw");
context.setVariable("m_element_raw", macro_t_162);
var macro_t_175 = runtime.makeMacro(
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
var t_176 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_176 += "\r\n  <w:r>";
if(l_emphasis) {
t_176 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_176 += "\r\n    <w:t>";
t_176 += runtime.suppressValue(l_el, env.opts.autoescape);
t_176 += "</w:t>\r\n  </w:r>";
;
}
else {
frame = frame.push();
var t_179 = runtime.memberLookup((l_el),"children");
if(t_179) {var t_178 = t_179.length;
for(var t_177=0; t_177 < t_179.length; t_177++) {
var t_180 = t_179[t_177];
frame.set("child", t_180);
frame.set("loop.index", t_177 + 1);
frame.set("loop.index0", t_177);
frame.set("loop.revindex", t_178 - t_177);
frame.set("loop.revindex0", t_178 - t_177 - 1);
frame.set("loop.first", t_177 === 0);
frame.set("loop.last", t_177 === t_178 - 1);
frame.set("loop.length", t_178);
if(!runtime.memberLookup((t_180),"tag")) {
t_176 += "\r\n  <w:r>";
if(l_emphasis) {
t_176 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_176 += "\r\n    <w:t>";
t_176 += runtime.suppressValue(t_180, env.opts.autoescape);
t_176 += "</w:t>\r\n  </w:r>";
;
}
else {
if(runtime.memberLookup((t_180),"tag") == "Ruby") {
t_176 += runtime.suppressValue((lineno = 619, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_ruby_run"), "m_ruby_run", context, [t_180,l_emphasis])), env.opts.autoescape);
;
}
else {
t_176 += "\r\n  <w:r>";
if(l_emphasis) {
t_176 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_176 += "\r\n    <w:t>";
t_176 += runtime.suppressValue((lineno = 625, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_180])), env.opts.autoescape);
t_176 += "</w:t>\r\n  </w:r>";
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
return new runtime.SafeString(t_176);
});
context.addExport("m_run");
context.setVariable("m_run", macro_t_175);
var macro_t_181 = runtime.makeMacro(
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
var t_182 = "";t_182 += "\r\n  <w:r>";
if(l_emphasis) {
t_182 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_182 += "\r\n    <w:ruby>";
frame = frame.push();
var t_185 = runtime.memberLookup((l_el),"children");
if(t_185) {var t_184 = t_185.length;
for(var t_183=0; t_183 < t_185.length; t_183++) {
var t_186 = t_185[t_183];
frame.set("child", t_186);
frame.set("loop.index", t_183 + 1);
frame.set("loop.index0", t_183);
frame.set("loop.revindex", t_184 - t_183);
frame.set("loop.revindex0", t_184 - t_183 - 1);
frame.set("loop.first", t_183 === 0);
frame.set("loop.last", t_183 === t_184 - 1);
frame.set("loop.length", t_184);
if(runtime.memberLookup((t_186),"tag") == "Rt") {
t_182 += "\r\n      <w:rt>\r\n        <w:r>\r\n          <w:t>";
frame = frame.push();
var t_189 = runtime.memberLookup((t_186),"children");
if(t_189) {var t_188 = t_189.length;
for(var t_187=0; t_187 < t_189.length; t_187++) {
var t_190 = t_189[t_187];
frame.set("subchild", t_190);
frame.set("loop.index", t_187 + 1);
frame.set("loop.index0", t_187);
frame.set("loop.revindex", t_188 - t_187);
frame.set("loop.revindex0", t_188 - t_187 - 1);
frame.set("loop.first", t_187 === 0);
frame.set("loop.last", t_187 === t_188 - 1);
frame.set("loop.length", t_188);
t_182 += runtime.suppressValue(t_190, env.opts.autoescape);
;
}
}
frame = frame.pop();
t_182 += "</w:t>\r\n        </w:r>\r\n      </w:rt>";
;
}
;
}
}
frame = frame.pop();
frame = frame.push();
var t_193 = runtime.memberLookup((l_el),"children");
if(t_193) {var t_192 = t_193.length;
for(var t_191=0; t_191 < t_193.length; t_191++) {
var t_194 = t_193[t_191];
frame.set("child", t_194);
frame.set("loop.index", t_191 + 1);
frame.set("loop.index0", t_191);
frame.set("loop.revindex", t_192 - t_191);
frame.set("loop.revindex0", t_192 - t_191 - 1);
frame.set("loop.first", t_191 === 0);
frame.set("loop.last", t_191 === t_192 - 1);
frame.set("loop.length", t_192);
if(!runtime.memberLookup((t_194),"tag")) {
t_182 += "\r\n      <w:rubyBase>\r\n        <w:r>\r\n          <w:t>";
t_182 += runtime.suppressValue(t_194, env.opts.autoescape);
t_182 += "</w:t>\r\n        </w:r>\r\n      </w:rubyBase>";
;
}
;
}
}
frame = frame.pop();
t_182 += "\r\n    </w:ruby>\r\n  </w:r>";
frame = frame.push();
var t_197 = runtime.memberLookup((l_el),"children");
if(t_197) {var t_196 = t_197.length;
for(var t_195=0; t_195 < t_197.length; t_195++) {
var t_198 = t_197[t_195];
frame.set("child", t_198);
frame.set("loop.index", t_195 + 1);
frame.set("loop.index0", t_195);
frame.set("loop.revindex", t_196 - t_195);
frame.set("loop.revindex0", t_196 - t_195 - 1);
frame.set("loop.first", t_195 === 0);
frame.set("loop.last", t_195 === t_196 - 1);
frame.set("loop.length", t_196);
if(!runtime.memberLookup((t_198),"tag")) {
;
}
else {
if(runtime.memberLookup((t_198),"tag") == "Rt") {
;
}
else {
t_182 += "\r\n  <w:r>";
if(l_emphasis) {
t_182 += "\r\n    <w:rStyle w:val=\"Emphasis\"/>";
;
}
t_182 += "\r\n    <w:t>";
t_182 += runtime.suppressValue((lineno = 672, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_198])), env.opts.autoescape);
t_182 += "</w:t>\r\n  </w:r>";
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
context.addExport("m_ruby_run");
context.setVariable("m_ruby_run", macro_t_181);
output += "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<w:document xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\">\r\n  <w:body>";
output += runtime.suppressValue((lineno = 681, colno = 10, runtime.callWrap(macro_t_1, "m_law", context, [runtime.contextOrFrameLookup(context, frame, "law")])), env.opts.autoescape);
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
t_8 += runtime.suppressValue((lineno = 26, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_12])), env.opts.autoescape);
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
t_14 += runtime.suppressValue((lineno = 35, colno = 9, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [l_law_title])), env.opts.autoescape);
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
t_14 += runtime.suppressValue((lineno = 40, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_18])), env.opts.autoescape);
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
t_20 += runtime.suppressValue((lineno = 50, colno = 9, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [l_enact_statement])), env.opts.autoescape);
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
t_22 += runtime.suppressValue((lineno = 63, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_26])), env.opts.autoescape);
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
t_22 += runtime.suppressValue((lineno = 71, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_30])), env.opts.autoescape);
;
}
else {
t_22 += runtime.suppressValue((lineno = 73, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_30])), env.opts.autoescape);
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
t_32 += runtime.suppressValue((lineno = 86, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_36])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_36),"tag"),["SupplProvisionLabel","PartTitle","ChapterTitle","SectionTitle","SubsectionTitle","DivisionTitle"])) {
t_32 += runtime.suppressValue((lineno = 92, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_36])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_36),"tag") == "ArticleRange") {
t_32 += runtime.suppressValue((lineno = 94, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_36])), env.opts.autoescape);
;
}
else {
t_32 += runtime.suppressValue((lineno = 96, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_36])), env.opts.autoescape);
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
t_38 += runtime.suppressValue((lineno = 107, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_42])), env.opts.autoescape);
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
t_38 += runtime.suppressValue((lineno = 120, colno = 22, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["article_prefix",runtime.memberLookup((runtime.memberLookup((t_42),"children")),0) + runtime.memberLookup((runtime.memberLookup((l_article_group),"attr")),"AmendLawNum")])), env.opts.autoescape);
;
}
else {
t_38 += runtime.suppressValue((lineno = 122, colno = 22, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["article_prefix",runtime.memberLookup((runtime.memberLookup((t_42),"children")),0)])), env.opts.autoescape);
;
}
;
}
else {
t_38 += runtime.suppressValue((lineno = 125, colno = 20, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["article_prefix",""])), env.opts.autoescape);
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
t_38 += runtime.suppressValue((lineno = 131, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_42])), env.opts.autoescape);
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
t_38 += runtime.suppressValue((lineno = 140, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article"), "m_article", context, [t_42])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_42),"tag") == "Paragraph") {
t_38 += runtime.suppressValue((lineno = 142, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_42])), env.opts.autoescape);
;
}
else {
t_38 += runtime.suppressValue((lineno = 144, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_42])), env.opts.autoescape);
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
t_45 += runtime.suppressValue((lineno = 156, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_49])), env.opts.autoescape);
t_45 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_45 += "<div class=\"article-body\">";
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
t_45 += runtime.suppressValue((lineno = 165, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_53,l_article])), env.opts.autoescape);
;
}
else {
t_45 += runtime.suppressValue((lineno = 167, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_53])), env.opts.autoescape);
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
[], 
function (l_paragraph_item, l_article, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("paragraph_item", l_paragraph_item);
frame.set("article", l_article);
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
t_55 += runtime.suppressValue((lineno = 181, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_59])), env.opts.autoescape);
t_55 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_55 += runtime.suppressValue((lineno = 188, colno = 12, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",1])), env.opts.autoescape);
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
if(l_article && runtime.memberLookup((l_paragraph_item),"tag") == "Paragraph" && runtime.memberLookup((runtime.memberLookup((l_paragraph_item),"attr")),"Num") == "1") {
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
t_55 += runtime.suppressValue((lineno = 202, colno = 24, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",0])), env.opts.autoescape);
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
t_55 += runtime.suppressValue((lineno = 209, colno = 18, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["no_title",0])), env.opts.autoescape);
;
}
;
}
;
}
}
frame = frame.pop();
t_55 += "\r\n\r\n<div class=\"";
if((lineno = 216, colno = 15, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["no_title"]))) {
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
if(l_article && runtime.memberLookup((l_paragraph_item),"tag") == "Paragraph" && runtime.memberLookup((runtime.memberLookup((l_paragraph_item),"attr")),"Num") == "1") {
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
t_55 += runtime.suppressValue((lineno = 234, colno = 39, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["article_prefix"])), env.opts.autoescape);
t_55 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_75),"children")),0), env.opts.autoescape);
t_55 += "\">";
t_55 += runtime.suppressValue((lineno = 235, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_75])), env.opts.autoescape);
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
t_55 += runtime.suppressValue((lineno = 242, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_71])), env.opts.autoescape);
t_55 += "</span>";
;
}
if(!(lineno = 245, colno = 23, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["no_title"]))) {
t_55 += runtime.suppressValue("　", env.opts.autoescape);
;
}
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_71),"tag"),["ParagraphSentence","ItemSentence","Subitem1Sentence","Subitem2Sentence","Subitem3Sentence","Subitem4Sentence","Subitem5Sentence","Subitem6Sentence","Subitem7Sentence","Subitem8Sentence","Subitem9Sentence","Subitem10Sentence"])) {
t_55 += runtime.suppressValue((lineno = 254, colno = 30, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item_sentence"), "m_paragraph_item_sentence", context, [t_71])), env.opts.autoescape);
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_71),"tag"),["Item","Subitem1","Subitem2","Subitem3","Subitem4","Subitem5","Subitem6","Subitem7","Subitem8","Subitem9","Subitem10"])) {
t_55 += runtime.suppressValue((lineno = 261, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_71])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_71),"tag") == "TableStruct") {
t_55 += runtime.suppressValue((lineno = 263, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_71])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_71),"tag") == "List") {
t_55 += runtime.suppressValue((lineno = 265, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list"), "m_list", context, [t_71])), env.opts.autoescape);
;
}
else {
t_55 += runtime.suppressValue((lineno = 267, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_71])), env.opts.autoescape);
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
t_77 += runtime.suppressValue((lineno = 279, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_81])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_81),"tag") == "Column") {
t_77 += runtime.suppressValue((lineno = 281, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_81])), env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_77 += runtime.suppressValue("　", env.opts.autoescape);
;
}
;
}
else {
t_77 += runtime.suppressValue((lineno = 286, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_81])), env.opts.autoescape);
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
t_83 += runtime.suppressValue((lineno = 296, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_87])), env.opts.autoescape);
;
}
else {
t_83 += runtime.suppressValue((lineno = 298, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_87])), env.opts.autoescape);
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
t_89 += runtime.suppressValue((lineno = 308, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_93])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_93),"tag") == "Remarks") {
t_89 += runtime.suppressValue((lineno = 310, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_93])), env.opts.autoescape);
;
}
else {
t_89 += runtime.suppressValue((lineno = 312, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_93])), env.opts.autoescape);
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
t_95 += runtime.suppressValue((lineno = 323, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_row"), "m_table_row", context, [t_99])), env.opts.autoescape);
;
}
else {
t_95 += runtime.suppressValue((lineno = 325, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_99])), env.opts.autoescape);
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
t_101 += runtime.suppressValue((lineno = 337, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_column"), "m_table_column", context, [t_105])), env.opts.autoescape);
;
}
else {
t_101 += runtime.suppressValue((lineno = 339, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_105])), env.opts.autoescape);
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
t_107 += runtime.suppressValue((lineno = 378, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_111])), env.opts.autoescape);
t_107 += "</div>";
;
}
else {
t_107 += runtime.suppressValue((lineno = 381, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_111])), env.opts.autoescape);
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
["appdx_table"], 
[], 
function (l_appdx_table, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_table", l_appdx_table);
var t_113 = "";t_113 += "<div class=\"appdx_table\">";
frame = frame.push();
var t_116 = runtime.memberLookup((l_appdx_table),"children");
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
if(runtime.memberLookup((t_117),"tag") == "AppdxTableTitle") {
t_113 += "<div class=\"appdx_table_title law-anchor\"\r\n         data-tag=\"";
t_113 += runtime.suppressValue(runtime.memberLookup((l_appdx_table),"tag"), env.opts.autoescape);
t_113 += "\"\r\n         data-name=\"";
t_113 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_117),"children")),0), env.opts.autoescape);
t_113 += "\">";
t_113 += runtime.suppressValue((lineno = 396, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_117])), env.opts.autoescape);
frame = frame.push();
var t_120 = runtime.memberLookup((l_appdx_table),"children");
if(t_120) {var t_119 = t_120.length;
for(var t_118=0; t_118 < t_120.length; t_118++) {
var t_121 = t_120[t_118];
frame.set("el2", t_121);
frame.set("loop.index", t_118 + 1);
frame.set("loop.index0", t_118);
frame.set("loop.revindex", t_119 - t_118);
frame.set("loop.revindex0", t_119 - t_118 - 1);
frame.set("loop.first", t_118 === 0);
frame.set("loop.last", t_118 === t_119 - 1);
frame.set("loop.length", t_119);
if(runtime.memberLookup((t_121),"tag") == "RelatedArticleNum") {
t_113 += runtime.suppressValue((lineno = 399, colno = 17, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_121])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_113 += "</div>";
;
}
;
}
}
frame = frame.pop();
t_113 += "<div class=\"appdx_table_body\">";
frame = frame.push();
var t_124 = runtime.memberLookup((l_appdx_table),"children");
if(t_124) {var t_123 = t_124.length;
for(var t_122=0; t_122 < t_124.length; t_122++) {
var t_125 = t_124[t_122];
frame.set("el", t_125);
frame.set("loop.index", t_122 + 1);
frame.set("loop.index0", t_122);
frame.set("loop.revindex", t_123 - t_122);
frame.set("loop.revindex0", t_123 - t_122 - 1);
frame.set("loop.first", t_122 === 0);
frame.set("loop.last", t_122 === t_123 - 1);
frame.set("loop.length", t_123);
if(runtime.memberLookup((t_125),"tag") == "AppdxTableTitle") {
;
}
else {
if(runtime.memberLookup((t_125),"tag") == "RelatedArticleNum") {
;
}
else {
if(runtime.memberLookup((t_125),"tag") == "TableStruct") {
t_113 += runtime.suppressValue((lineno = 410, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_125])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_125),"tag") == "Item") {
t_113 += runtime.suppressValue((lineno = 412, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_125])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_125),"tag") == "Remarks") {
t_113 += runtime.suppressValue((lineno = 414, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_125])), env.opts.autoescape);
;
}
else {
t_113 += runtime.suppressValue((lineno = 416, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_125])), env.opts.autoescape);
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
t_113 += "</div>\r\n</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_113);
});
context.addExport("m_appdx_table");
context.setVariable("m_appdx_table", macro_t_112);
var macro_t_126 = runtime.makeMacro(
["list"], 
[], 
function (l_list, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list", l_list);
var t_127 = "";t_127 += "<div class=\"list\">";
frame = frame.push();
var t_130 = runtime.memberLookup((l_list),"children");
if(t_130) {var t_129 = t_130.length;
for(var t_128=0; t_128 < t_130.length; t_128++) {
var t_131 = t_130[t_128];
frame.set("el", t_131);
frame.set("loop.index", t_128 + 1);
frame.set("loop.index0", t_128);
frame.set("loop.revindex", t_129 - t_128);
frame.set("loop.revindex0", t_129 - t_128 - 1);
frame.set("loop.first", t_128 === 0);
frame.set("loop.last", t_128 === t_129 - 1);
frame.set("loop.length", t_129);
if(runtime.memberLookup((t_131),"tag") == "ListSentence") {
t_127 += runtime.suppressValue((lineno = 429, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list_sentence"), "m_list_sentence", context, [t_131])), env.opts.autoescape);
;
}
else {
t_127 += runtime.suppressValue((lineno = 431, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_131])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_127 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_127);
});
context.addExport("m_list");
context.setVariable("m_list", macro_t_126);
var macro_t_132 = runtime.makeMacro(
["list_sentence"], 
[], 
function (l_list_sentence, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("list_sentence", l_list_sentence);
var t_133 = "";t_133 += "<div class=\"list-sentence\">";
frame = frame.push();
var t_136 = runtime.memberLookup((l_list_sentence),"children");
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
if(runtime.memberLookup((t_137),"tag") == "Sentence") {
t_133 += "<div class=\"sentence\">";
t_133 += runtime.suppressValue((lineno = 444, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_137])), env.opts.autoescape);
t_133 += "</div>";
;
}
else {
t_133 += runtime.suppressValue((lineno = 447, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_137])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_133 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_133);
});
context.addExport("m_list_sentence");
context.setVariable("m_list_sentence", macro_t_132);
var macro_t_138 = runtime.makeMacro(
["remarks"], 
[], 
function (l_remarks, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("remarks", l_remarks);
var t_139 = "";t_139 += "<div class=\"remarks\">";
frame = frame.push();
var t_142 = runtime.memberLookup((l_remarks),"children");
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
if(runtime.memberLookup((t_143),"tag") == "RemarksLabel") {
t_139 += runtime.suppressValue((lineno = 459, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_143])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_143),"tag") == "Sentence") {
t_139 += runtime.suppressValue("　", env.opts.autoescape);
t_139 += runtime.suppressValue((lineno = 461, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_143])), env.opts.autoescape);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
;
}
;
}
else {
if(runtime.memberLookup((t_143),"tag") == "Item") {
t_139 += runtime.suppressValue((lineno = 465, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_143])), env.opts.autoescape);
;
}
else {
t_139 += runtime.suppressValue((lineno = 467, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_143])), env.opts.autoescape);
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
t_139 += "</div>";
;
frame = callerFrame;
return new runtime.SafeString(t_139);
});
context.addExport("m_remarks");
context.setVariable("m_remarks", macro_t_138);
var macro_t_144 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_145 = "";t_145 += runtime.suppressValue(env.getFilter("e").call(context, (lineno = 476, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [l_el]))), env.opts.autoescape);
;
frame = callerFrame;
return new runtime.SafeString(t_145);
});
context.addExport("m_element");
context.setVariable("m_element", macro_t_144);
var macro_t_146 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_147 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_147 += runtime.suppressValue(l_el, env.opts.autoescape);
;
}
else {
t_147 += "<";
t_147 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
frame = frame.push();
var t_150 = env.getFilter("dictsort").call(context, runtime.memberLookup((l_el),"attr"));
if(t_150) {var t_148;
if(runtime.isArray(t_150)) {
var t_149 = t_150.length;
for(t_148=0; t_148 < t_150.length; t_148++) {
var t_151 = t_150[t_148][0]
frame.set("key", t_150[t_148][0]);
var t_152 = t_150[t_148][1]
frame.set("value", t_150[t_148][1]);
frame.set("loop.index", t_148 + 1);
frame.set("loop.index0", t_148);
frame.set("loop.revindex", t_149 - t_148);
frame.set("loop.revindex0", t_149 - t_148 - 1);
frame.set("loop.first", t_148 === 0);
frame.set("loop.last", t_148 === t_149 - 1);
frame.set("loop.length", t_149);
t_147 += runtime.suppressValue(" ", env.opts.autoescape);
t_147 += runtime.suppressValue(t_151, env.opts.autoescape);
t_147 += "=\"";
t_147 += runtime.suppressValue(t_152, env.opts.autoescape);
t_147 += "\"";
;
}
} else {
t_148 = -1;
var t_149 = runtime.keys(t_150).length;
for(var t_153 in t_150) {
t_148++;
var t_154 = t_150[t_153];
frame.set("key", t_153);
frame.set("value", t_154);
frame.set("loop.index", t_148 + 1);
frame.set("loop.index0", t_148);
frame.set("loop.revindex", t_149 - t_148);
frame.set("loop.revindex0", t_149 - t_148 - 1);
frame.set("loop.first", t_148 === 0);
frame.set("loop.last", t_148 === t_149 - 1);
frame.set("loop.length", t_149);
t_147 += runtime.suppressValue(" ", env.opts.autoescape);
t_147 += runtime.suppressValue(t_153, env.opts.autoescape);
t_147 += "=\"";
t_147 += runtime.suppressValue(t_154, env.opts.autoescape);
t_147 += "\"";
;
}
}
}
frame = frame.pop();
t_147 += ">";
frame = frame.push();
var t_157 = runtime.memberLookup((l_el),"children");
if(t_157) {var t_156 = t_157.length;
for(var t_155=0; t_155 < t_157.length; t_155++) {
var t_158 = t_157[t_155];
frame.set("child", t_158);
frame.set("loop.index", t_155 + 1);
frame.set("loop.index0", t_155);
frame.set("loop.revindex", t_156 - t_155);
frame.set("loop.revindex0", t_156 - t_155 - 1);
frame.set("loop.first", t_155 === 0);
frame.set("loop.last", t_155 === t_156 - 1);
frame.set("loop.length", t_156);
if(!runtime.memberLookup((t_158),"tag")) {
t_147 += runtime.suppressValue(t_158, env.opts.autoescape);
;
}
else {
t_147 += runtime.suppressValue((lineno = 493, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [t_158])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_147 += "</";
t_147 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
t_147 += ">";
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_147);
});
context.addExport("m_element_raw");
context.setVariable("m_element_raw", macro_t_146);
var macro_t_159 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_160 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_160 += runtime.suppressValue(l_el, env.opts.autoescape);
;
}
else {
frame = frame.push();
var t_163 = runtime.memberLookup((l_el),"children");
if(t_163) {var t_162 = t_163.length;
for(var t_161=0; t_161 < t_163.length; t_161++) {
var t_164 = t_163[t_161];
frame.set("child", t_164);
frame.set("loop.index", t_161 + 1);
frame.set("loop.index0", t_161);
frame.set("loop.revindex", t_162 - t_161);
frame.set("loop.revindex0", t_162 - t_161 - 1);
frame.set("loop.first", t_161 === 0);
frame.set("loop.last", t_161 === t_162 - 1);
frame.set("loop.length", t_162);
if(!runtime.memberLookup((t_164),"tag")) {
t_160 += runtime.suppressValue(t_164, env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_164),"tag") == "Ruby") {
t_160 += runtime.suppressValue((lineno = 511, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element_raw"), "m_element_raw", context, [t_164])), env.opts.autoescape);
;
}
else {
t_160 += runtime.suppressValue((lineno = 513, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_164])), env.opts.autoescape);
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
return new runtime.SafeString(t_160);
});
context.addExport("m_text");
context.setVariable("m_text", macro_t_159);
output += "<div class=\"law\">";
output += runtime.suppressValue((lineno = 527, colno = 6, runtime.callWrap(macro_t_1, "m_law", context, [runtime.contextOrFrameLookup(context, frame, "law")])), env.opts.autoescape);
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
t_10 += runtime.suppressValue((lineno = 31, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_14])), env.opts.autoescape);
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
var t_16 = "";t_16 += runtime.suppressValue((lineno = 39, colno = 7, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [l_law_title])), env.opts.autoescape);
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
t_16 += runtime.suppressValue((lineno = 44, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_20])), env.opts.autoescape);
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
t_22 += runtime.suppressValue((lineno = 56, colno = 7, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [l_enact_statement])), env.opts.autoescape);
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
t_24 += runtime.suppressValue((lineno = 68, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_28])), env.opts.autoescape);
t_24 += "\r\n";
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_28),"tag"),["TOCPart","TOCChapter","TOCSection","TOCSupplProvision"])) {
t_24 += runtime.suppressValue((lineno = 72, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_28,1])), env.opts.autoescape);
;
}
else {
t_24 += runtime.suppressValue((lineno = 74, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_28])), env.opts.autoescape);
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
var t_37 = (lineno = 91, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
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
t_30 += runtime.suppressValue((lineno = 94, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_34])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_34),"tag") == "ArticleRange") {
t_30 += runtime.suppressValue((lineno = 96, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_34])), env.opts.autoescape);
;
}
else {
t_30 += runtime.suppressValue((lineno = 98, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_34])), env.opts.autoescape);
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
t_30 += runtime.suppressValue((lineno = 105, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_toc_group"), "m_toc_group", context, [t_42,l_indent + 1,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")])), env.opts.autoescape);
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
t_44 += runtime.suppressValue((lineno = 115, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article_group"), "m_article_group", context, [t_48])), env.opts.autoescape);
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
var t_52 = (lineno = 128, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "title_indent")),runtime.memberLookup((t_48),"tag"))]));
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
t_44 += runtime.suppressValue((lineno = 131, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_48])), env.opts.autoescape);
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
t_44 += runtime.suppressValue((lineno = 141, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_article"), "m_article", context, [t_48])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_48),"tag") == "Paragraph") {
t_44 += runtime.suppressValue((lineno = 143, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_48,0])), env.opts.autoescape);
;
}
else {
t_44 += runtime.suppressValue((lineno = 145, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_48])), env.opts.autoescape);
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
t_55 += runtime.suppressValue((lineno = 159, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_59])), env.opts.autoescape);
t_55 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_59),"tag") == "ArticleTitle") {
t_55 += runtime.suppressValue((lineno = 163, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_59])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_59),"tag") == "Paragraph") {
t_55 += runtime.suppressValue((lineno = 165, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_59,0,l_article])), env.opts.autoescape);
;
}
else {
t_55 += runtime.suppressValue((lineno = 167, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_59])), env.opts.autoescape);
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
var t_61 = "";t_61 += runtime.suppressValue((lineno = 177, colno = 12, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["paragraph_item_title_exists",0])), env.opts.autoescape);
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
t_61 += runtime.suppressValue((lineno = 182, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_65])), env.opts.autoescape);
t_61 += "\r\n";
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_65),"tag"),["ParagraphNum","ItemTitle","Subitem1Title","Subitem2Title","Subitem3Title","Subitem4Title","Subitem5Title","Subitem6Title","Subitem7Title","Subitem8Title","Subitem9Title","Subitem10Title"])) {
frame = frame.push();
var t_68 = (lineno = 191, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
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
t_61 += runtime.suppressValue((lineno = 195, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_65])), env.opts.autoescape);
t_61 += runtime.suppressValue((lineno = 196, colno = 18, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"set"), "context[\"set\"]", context, ["paragraph_item_title_exists",1])), env.opts.autoescape);
;
}
;
}
else {
if(runtime.inOperator(runtime.memberLookup((t_65),"tag"),["ParagraphSentence","ItemSentence","Subitem1Sentence","Subitem2Sentence","Subitem3Sentence","Subitem4Sentence","Subitem5Sentence","Subitem6Sentence","Subitem7Sentence","Subitem8Sentence","Subitem9Sentence","Subitem10Sentence"])) {
var t_70;
t_70 = (lineno = 204, colno = 50, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item_sentence"), "m_paragraph_item_sentence", context, [t_65,l_indent]));
frame.set("sentence_text", t_70, true);
if(frame.topLevel) {
context.setVariable("sentence_text", t_70);
}
if(frame.topLevel) {
context.addExport("sentence_text", t_70);
}
if(env.getFilter("length").call(context, env.getFilter("trim").call(context, runtime.contextOrFrameLookup(context, frame, "sentence_text")))) {
if((lineno = 206, colno = 21, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "context")),"get"), "context[\"get\"]", context, ["paragraph_item_title_exists"])) || l_article) {
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
t_61 += runtime.suppressValue((lineno = 223, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_65,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_65),"tag") == "TableStruct") {
t_61 += runtime.suppressValue((lineno = 225, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_65,l_indent + 1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_65),"tag") == "List") {
t_61 += runtime.suppressValue((lineno = 227, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list"), "m_list", context, [t_65,l_indent + 2])), env.opts.autoescape);
;
}
else {
t_61 += runtime.suppressValue((lineno = 229, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_65])), env.opts.autoescape);
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
t_72 += runtime.suppressValue((lineno = 241, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_76])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_76),"tag") == "Column") {
t_72 += runtime.suppressValue((lineno = 243, colno = 13, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_column"), "m_column", context, [t_76])), env.opts.autoescape);
if(!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_72 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "margin_space"), env.opts.autoescape);
;
}
;
}
else {
t_72 += runtime.suppressValue((lineno = 248, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_76])), env.opts.autoescape);
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
t_78 += runtime.suppressValue((lineno = 260, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_82])), env.opts.autoescape);
;
}
else {
t_78 += runtime.suppressValue((lineno = 262, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_82])), env.opts.autoescape);
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
t_84 += runtime.suppressValue((lineno = 272, colno = 12, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table"), "m_table", context, [t_88,l_indent])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_88),"tag") == "Remarks") {
t_84 += runtime.suppressValue((lineno = 274, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_88])), env.opts.autoescape);
;
}
else {
t_84 += runtime.suppressValue((lineno = 276, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_88])), env.opts.autoescape);
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
var macro_t_89 = runtime.makeMacro(
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
var t_90 = "";frame = frame.push();
var t_93 = runtime.memberLookup((l_table),"children");
if(t_93) {var t_92 = t_93.length;
for(var t_91=0; t_91 < t_93.length; t_91++) {
var t_94 = t_93[t_91];
frame.set("el", t_94);
frame.set("loop.index", t_91 + 1);
frame.set("loop.index0", t_91);
frame.set("loop.revindex", t_92 - t_91);
frame.set("loop.revindex0", t_92 - t_91 - 1);
frame.set("loop.first", t_91 === 0);
frame.set("loop.last", t_91 === t_92 - 1);
frame.set("loop.length", t_92);
if(runtime.memberLookup((t_94),"tag") == "TableRow") {
t_90 += runtime.suppressValue((lineno = 286, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_row"), "m_table_row", context, [t_94,l_indent])), env.opts.autoescape);
;
}
else {
t_90 += runtime.suppressValue((lineno = 288, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_94])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_90);
});
context.addExport("m_table");
context.setVariable("m_table", macro_t_89);
var macro_t_95 = runtime.makeMacro(
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
var t_96 = "";frame = frame.push();
var t_99 = runtime.memberLookup((l_table_row),"children");
if(t_99) {var t_98 = t_99.length;
for(var t_97=0; t_97 < t_99.length; t_97++) {
var t_100 = t_99[t_97];
frame.set("el", t_100);
frame.set("loop.index", t_97 + 1);
frame.set("loop.index0", t_97);
frame.set("loop.revindex", t_98 - t_97);
frame.set("loop.revindex0", t_98 - t_97 - 1);
frame.set("loop.first", t_97 === 0);
frame.set("loop.last", t_97 === t_98 - 1);
frame.set("loop.length", t_98);
if(runtime.memberLookup((t_100),"tag") == "TableColumn") {
t_96 += runtime.suppressValue((lineno = 298, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_column"), "m_table_column", context, [t_100,l_indent,runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")])), env.opts.autoescape);
;
}
else {
t_96 += runtime.suppressValue((lineno = 300, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_100])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_96);
});
context.addExport("m_table_row");
context.setVariable("m_table_row", macro_t_95);
var macro_t_101 = runtime.makeMacro(
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
var t_102 = "";frame = frame.push();
var t_105 = runtime.memberLookup((l_table_column),"children");
if(t_105) {var t_104 = t_105.length;
for(var t_103=0; t_103 < t_105.length; t_103++) {
var t_106 = t_105[t_103];
frame.set("el", t_106);
frame.set("loop.index", t_103 + 1);
frame.set("loop.index0", t_103);
frame.set("loop.revindex", t_104 - t_103);
frame.set("loop.revindex0", t_104 - t_103 - 1);
frame.set("loop.first", t_103 === 0);
frame.set("loop.last", t_103 === t_104 - 1);
frame.set("loop.length", t_104);
if(runtime.memberLookup((t_106),"tag") == "Sentence") {
frame = frame.push();
var t_109 = (lineno = 311, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_109) {var t_108 = t_109.length;
for(var t_107=0; t_107 < t_109.length; t_107++) {
var t_110 = t_109[t_107];
frame.set("_", t_110);
frame.set("loop.index", t_107 + 1);
frame.set("loop.index0", t_107);
frame.set("loop.revindex", t_108 - t_107);
frame.set("loop.revindex0", t_108 - t_107 - 1);
frame.set("loop.first", t_107 === 0);
frame.set("loop.last", t_107 === t_108 - 1);
frame.set("loop.length", t_108);
t_102 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first")) {
if(l_first_column) {
t_102 += runtime.suppressValue("* - ", env.opts.autoescape);
;
}
else {
t_102 += runtime.suppressValue("  - ", env.opts.autoescape);
;
}
if(runtime.inOperator("rowspan",runtime.memberLookup((l_table_column),"attr"))) {
t_102 += "[rowspan=\"";
t_102 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"rowspan"), env.opts.autoescape);
t_102 += "\"]";
;
}
if(runtime.inOperator("colspan",runtime.memberLookup((l_table_column),"attr"))) {
t_102 += "[colspan=\"";
t_102 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"colspan"), env.opts.autoescape);
t_102 += "\"]";
;
}
if(runtime.inOperator("Align",runtime.memberLookup((l_table_column),"attr"))) {
t_102 += "[Align=\"";
t_102 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"Align"), env.opts.autoescape);
t_102 += "\"]";
;
}
if(runtime.inOperator("Valign",runtime.memberLookup((l_table_column),"attr"))) {
t_102 += "[Valign=\"";
t_102 += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((l_table_column),"attr")),"Valign"), env.opts.autoescape);
t_102 += "\"]";
;
}
;
}
else {
t_102 += runtime.suppressValue("    ", env.opts.autoescape);
;
}
t_102 += runtime.suppressValue((lineno = 338, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_106])), env.opts.autoescape);
t_102 += "\r\n";
;
}
else {
t_102 += runtime.suppressValue((lineno = 342, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_106])), env.opts.autoescape);
t_102 += "\r\n";
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_102);
});
context.addExport("m_table_column");
context.setVariable("m_table_column", macro_t_101);
var macro_t_111 = runtime.makeMacro(
["appdx_table"], 
[], 
function (l_appdx_table, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("appdx_table", l_appdx_table);
var t_112 = "";t_112 += "\r\n";
frame = frame.push();
var t_115 = runtime.memberLookup((l_appdx_table),"children");
if(t_115) {var t_114 = t_115.length;
for(var t_113=0; t_113 < t_115.length; t_113++) {
var t_116 = t_115[t_113];
frame.set("el", t_116);
frame.set("loop.index", t_113 + 1);
frame.set("loop.index0", t_113);
frame.set("loop.revindex", t_114 - t_113);
frame.set("loop.revindex0", t_114 - t_113 - 1);
frame.set("loop.first", t_113 === 0);
frame.set("loop.last", t_113 === t_114 - 1);
frame.set("loop.length", t_114);
if(runtime.memberLookup((t_116),"tag") == "AppdxTableTitle") {
t_112 += runtime.suppressValue((lineno = 356, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_116])), env.opts.autoescape);
frame = frame.push();
var t_119 = runtime.memberLookup((l_appdx_table),"children");
if(t_119) {var t_118 = t_119.length;
for(var t_117=0; t_117 < t_119.length; t_117++) {
var t_120 = t_119[t_117];
frame.set("el2", t_120);
frame.set("loop.index", t_117 + 1);
frame.set("loop.index0", t_117);
frame.set("loop.revindex", t_118 - t_117);
frame.set("loop.revindex0", t_118 - t_117 - 1);
frame.set("loop.first", t_117 === 0);
frame.set("loop.last", t_117 === t_118 - 1);
frame.set("loop.length", t_118);
if(runtime.memberLookup((t_120),"tag") == "RelatedArticleNum") {
t_112 += runtime.suppressValue((lineno = 359, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_120])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_112 += "\r\n";
;
}
else {
if(runtime.memberLookup((t_116),"tag") == "RelatedArticleNum") {
;
}
else {
if(runtime.memberLookup((t_116),"tag") == "TableStruct") {
t_112 += runtime.suppressValue((lineno = 366, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_table_struct"), "m_table_struct", context, [t_116,1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_116),"tag") == "Item") {
t_112 += runtime.suppressValue((lineno = 368, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_116,1])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_116),"tag") == "Remarks") {
t_112 += runtime.suppressValue((lineno = 370, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_remarks"), "m_remarks", context, [t_116])), env.opts.autoescape);
;
}
else {
t_112 += runtime.suppressValue((lineno = 372, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_116])), env.opts.autoescape);
t_112 += "\r\n";
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
return new runtime.SafeString(t_112);
});
context.addExport("m_appdx_table");
context.setVariable("m_appdx_table", macro_t_111);
var macro_t_121 = runtime.makeMacro(
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
var t_122 = "";frame = frame.push();
var t_125 = runtime.memberLookup((l_list),"children");
if(t_125) {var t_124 = t_125.length;
for(var t_123=0; t_123 < t_125.length; t_123++) {
var t_126 = t_125[t_123];
frame.set("el", t_126);
frame.set("loop.index", t_123 + 1);
frame.set("loop.index0", t_123);
frame.set("loop.revindex", t_124 - t_123);
frame.set("loop.revindex0", t_124 - t_123 - 1);
frame.set("loop.first", t_123 === 0);
frame.set("loop.last", t_123 === t_124 - 1);
frame.set("loop.length", t_124);
if(runtime.memberLookup((t_126),"tag") == "ListSentence") {
t_122 += runtime.suppressValue((lineno = 384, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_list_sentence"), "m_list_sentence", context, [t_126,l_indent])), env.opts.autoescape);
;
}
else {
t_122 += runtime.suppressValue((lineno = 386, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_126])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_122);
});
context.addExport("m_list");
context.setVariable("m_list", macro_t_121);
var macro_t_127 = runtime.makeMacro(
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
var t_128 = "";frame = frame.push();
var t_131 = runtime.memberLookup((l_list_sentence),"children");
if(t_131) {var t_130 = t_131.length;
for(var t_129=0; t_129 < t_131.length; t_129++) {
var t_132 = t_131[t_129];
frame.set("el", t_132);
frame.set("loop.index", t_129 + 1);
frame.set("loop.index0", t_129);
frame.set("loop.revindex", t_130 - t_129);
frame.set("loop.revindex0", t_130 - t_129 - 1);
frame.set("loop.first", t_129 === 0);
frame.set("loop.last", t_129 === t_130 - 1);
frame.set("loop.length", t_130);
if(runtime.memberLookup((t_132),"tag") == "Sentence") {
frame = frame.push();
var t_135 = (lineno = 396, colno = 19, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", context, [l_indent]));
if(t_135) {var t_134 = t_135.length;
for(var t_133=0; t_133 < t_135.length; t_133++) {
var t_136 = t_135[t_133];
frame.set("_", t_136);
frame.set("loop.index", t_133 + 1);
frame.set("loop.index0", t_133);
frame.set("loop.revindex", t_134 - t_133);
frame.set("loop.revindex0", t_134 - t_133 - 1);
frame.set("loop.first", t_133 === 0);
frame.set("loop.last", t_133 === t_134 - 1);
frame.set("loop.length", t_134);
t_128 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
;
}
}
frame = frame.pop();
t_128 += runtime.suppressValue((lineno = 399, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_132])), env.opts.autoescape);
t_128 += "\r\n";
;
}
else {
t_128 += runtime.suppressValue((lineno = 403, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_132])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
;
frame = callerFrame;
return new runtime.SafeString(t_128);
});
context.addExport("m_list_sentence");
context.setVariable("m_list_sentence", macro_t_127);
var macro_t_137 = runtime.makeMacro(
["remarks"], 
[], 
function (l_remarks, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("remarks", l_remarks);
var t_138 = "";frame = frame.push();
var t_141 = runtime.memberLookup((l_remarks),"children");
if(t_141) {var t_140 = t_141.length;
for(var t_139=0; t_139 < t_141.length; t_139++) {
var t_142 = t_141[t_139];
frame.set("el", t_142);
frame.set("loop.index", t_139 + 1);
frame.set("loop.index0", t_139);
frame.set("loop.revindex", t_140 - t_139);
frame.set("loop.revindex0", t_140 - t_139 - 1);
frame.set("loop.first", t_139 === 0);
frame.set("loop.last", t_139 === t_140 - 1);
frame.set("loop.length", t_140);
if(runtime.memberLookup((t_142),"tag") == "RemarksLabel") {
t_138 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "indent_space"), env.opts.autoescape);
t_138 += runtime.suppressValue((lineno = 413, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_142])), env.opts.autoescape);
;
}
else {
if(runtime.memberLookup((t_142),"tag") == "Sentence") {
t_138 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "margin_space"), env.opts.autoescape);
t_138 += runtime.suppressValue((lineno = 415, colno = 25, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_text"), "m_text", context, [t_142])), env.opts.autoescape);
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last")) {
t_138 += "\r\n";
;
}
;
}
else {
if(runtime.memberLookup((t_142),"tag") == "Item") {
t_138 += runtime.suppressValue((lineno = 421, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_paragraph_item"), "m_paragraph_item", context, [t_142,0])), env.opts.autoescape);
;
}
else {
t_138 += runtime.suppressValue((lineno = 423, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_142])), env.opts.autoescape);
t_138 += "\r\n";
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
return new runtime.SafeString(t_138);
});
context.addExport("m_remarks");
context.setVariable("m_remarks", macro_t_137);
var macro_t_143 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_144 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_144 += runtime.suppressValue(l_el, env.opts.autoescape);
;
}
else {
t_144 += "<";
t_144 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
frame = frame.push();
var t_147 = env.getFilter("dictsort").call(context, runtime.memberLookup((l_el),"attr"));
if(t_147) {var t_145;
if(runtime.isArray(t_147)) {
var t_146 = t_147.length;
for(t_145=0; t_145 < t_147.length; t_145++) {
var t_148 = t_147[t_145][0]
frame.set("key", t_147[t_145][0]);
var t_149 = t_147[t_145][1]
frame.set("value", t_147[t_145][1]);
frame.set("loop.index", t_145 + 1);
frame.set("loop.index0", t_145);
frame.set("loop.revindex", t_146 - t_145);
frame.set("loop.revindex0", t_146 - t_145 - 1);
frame.set("loop.first", t_145 === 0);
frame.set("loop.last", t_145 === t_146 - 1);
frame.set("loop.length", t_146);
t_144 += runtime.suppressValue(" ", env.opts.autoescape);
t_144 += runtime.suppressValue(t_148, env.opts.autoescape);
t_144 += "=";
t_144 += runtime.suppressValue(t_149, env.opts.autoescape);
;
}
} else {
t_145 = -1;
var t_146 = runtime.keys(t_147).length;
for(var t_150 in t_147) {
t_145++;
var t_151 = t_147[t_150];
frame.set("key", t_150);
frame.set("value", t_151);
frame.set("loop.index", t_145 + 1);
frame.set("loop.index0", t_145);
frame.set("loop.revindex", t_146 - t_145);
frame.set("loop.revindex0", t_146 - t_145 - 1);
frame.set("loop.first", t_145 === 0);
frame.set("loop.last", t_145 === t_146 - 1);
frame.set("loop.length", t_146);
t_144 += runtime.suppressValue(" ", env.opts.autoescape);
t_144 += runtime.suppressValue(t_150, env.opts.autoescape);
t_144 += "=";
t_144 += runtime.suppressValue(t_151, env.opts.autoescape);
;
}
}
}
frame = frame.pop();
t_144 += ">";
frame = frame.push();
var t_154 = runtime.memberLookup((l_el),"children");
if(t_154) {var t_153 = t_154.length;
for(var t_152=0; t_152 < t_154.length; t_152++) {
var t_155 = t_154[t_152];
frame.set("child", t_155);
frame.set("loop.index", t_152 + 1);
frame.set("loop.index0", t_152);
frame.set("loop.revindex", t_153 - t_152);
frame.set("loop.revindex0", t_153 - t_152 - 1);
frame.set("loop.first", t_152 === 0);
frame.set("loop.last", t_152 === t_153 - 1);
frame.set("loop.length", t_153);
if(!runtime.memberLookup((t_155),"tag")) {
t_144 += runtime.suppressValue(t_155, env.opts.autoescape);
;
}
else {
t_144 += runtime.suppressValue((lineno = 444, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_155])), env.opts.autoescape);
;
}
;
}
}
frame = frame.pop();
t_144 += "</";
t_144 += runtime.suppressValue(runtime.memberLookup((l_el),"tag"), env.opts.autoescape);
t_144 += ">";
;
}
;
}
;
frame = callerFrame;
return new runtime.SafeString(t_144);
});
context.addExport("m_element");
context.setVariable("m_element", macro_t_143);
var macro_t_156 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_157 = "";if(!l_el) {
;
}
else {
if(!runtime.memberLookup((l_el),"tag")) {
t_157 += runtime.suppressValue(l_el, env.opts.autoescape);
;
}
else {
frame = frame.push();
var t_160 = runtime.memberLookup((l_el),"children");
if(t_160) {var t_159 = t_160.length;
for(var t_158=0; t_158 < t_160.length; t_158++) {
var t_161 = t_160[t_158];
frame.set("child", t_161);
frame.set("loop.index", t_158 + 1);
frame.set("loop.index0", t_158);
frame.set("loop.revindex", t_159 - t_158);
frame.set("loop.revindex0", t_159 - t_158 - 1);
frame.set("loop.first", t_158 === 0);
frame.set("loop.last", t_158 === t_159 - 1);
frame.set("loop.length", t_159);
if(!runtime.memberLookup((t_161),"tag")) {
t_157 += runtime.suppressValue(t_161, env.opts.autoescape);
;
}
else {
t_157 += runtime.suppressValue((lineno = 462, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "m_element"), "m_element", context, [t_161])), env.opts.autoescape);
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
return new runtime.SafeString(t_157);
});
context.addExport("m_text");
context.setVariable("m_text", macro_t_156);
output += runtime.suppressValue((lineno = 475, colno = 6, runtime.callWrap(macro_t_3, "m_law", context, [runtime.contextOrFrameLookup(context, frame, "law")])), env.opts.autoescape);
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

