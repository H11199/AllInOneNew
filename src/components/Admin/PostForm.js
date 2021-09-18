import { ref, getDatabase, push } from "@firebase/database";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import CKEditor from "react-ckeditor-component";
import { Link, useHistory } from "react-router-dom";

let config = {
  toolbarGroups: [
    { name: "document", groups: ["mode", "document", "doctools"] },
    {
      name: "editing",
      groups: ["find", "selection", "spellchecker", "editing"],
    },
    { name: "forms", groups: ["forms"] },
    { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
    {
      name: "paragraph",
      groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"],
    },
    "/",
    { name: "links", groups: ["links"] },
    { name: "insert", groups: ["insert"] },
    { name: "styles", groups: ["styles"] },
    { name: "colors", groups: ["colors"] },
    { name: "tools", groups: ["tools"] },
    "/",
    { name: "clipboard", groups: ["clipboard", "undo"] },
    { name: "others", groups: ["others"] },
    { name: "about", groups: ["about"] },
  ],
  removeButtons:
    "Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,SelectAll,Scayt,Replace,Form,Checkbox,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,BidiLtr,BidiRtl,Language,Flash,Smiley,SpecialChar,PageBreak,Iframe,Anchor,ShowBlocks,About,CopyFormatting,Undo,Redo",
  fontSize_sizes: "16/16px;24/24px;48/48px;",
  font_names:
    "Arial/Arial, Helvetica, sans-serif;" +
    "Times New Roman/Times New Roman, Times, serif;" +
    "Verdana",
  allowedContent: true,
  // disableNativeSpellChecker: false
  // skin: "moono",
  // plugins:
  //   "dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,elementspath,enterkey,entities,popup,filetools,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,notificationaggregator,uploadwidget,uploadimage,wsc"
};

function PostForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [text, setText] = useState(null);
  const [imglink, setImgLink] = useState("");
  const [summary, setSummary] = useState("");

  const onChange = (evt) => {
    setText(evt.editor.getData());
  };
  const onBlur = (evt) => {
    console.log("onBlur event called with event info: ", evt);
  };

  const afterPaste = (evt) => {
    console.log("afterPaste event called with event info: ", evt);
  };
  const handlePreview = (event) => {
    let data = {
      Title: title,
      Date: date,
      Topic: topic,
      Post: text,
      imgLink: imglink,
      Summary: summary,
    };
    localStorage.setItem("post-info", JSON.stringify(data));
    window.open("/preview", "_blank");
  };
  const handleAddUser = (event) => {
    const db = getDatabase();
    let data = {
      Title: title,
      Date: date,
      Topic: topic,
      Post: text,
      imgLink: imglink,
      Summary: summary,
    };

    push(ref(db, "posts"), data)
      .then(() => {
        alert("submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container container-post">
      <h2>Create Your Post 👍</h2>
      <form>
        <div class="form-group">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
          />
        </div>
        <div class="form-group">
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Date"
          />
        </div>
        <div class="form-group">
          <input
            value={imglink}
            onChange={(e) => setImgLink(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Cover Image URL"
          />
        </div>
        <div class="form-group">
          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Topic"
          />
        </div>
        <div class="form-group">
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Summary"
          />
        </div>
        <div className="text-editor">
          <div>
            <CKEditor
              activeClass="p10"
              config={config}
              content={text}
              // onChange={this.onChange}
              events={{
                blur: onBlur,
                afterPaste: afterPaste,
                change: onChange,
              }}
            />
          </div>
        </div>
        <div
          class="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group mr-2" role="group" aria-label="second group">
            <button
              type="submit"
              onClick={handleAddUser}
              class="btn btn-primary btn-post"
            >
              Submit
            </button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button
              type="submit"
              onClick={handlePreview}
              class="btn btn-info btn-post"
            >
              Preview
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default PostForm;
