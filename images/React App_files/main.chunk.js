(this["webpackJsonpnoteful"] = this["webpackJsonpnoteful"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _NotesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotesList */ "./src/NotesList.js");
/* harmony import */ var _FolderNotesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FolderNotesList */ "./src/FolderNotesList.js");
/* harmony import */ var _MinutesPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MinutesPage */ "./src/MinutesPage.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBar */ "./src/NavBar.js");
/* harmony import */ var _dummy_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dummy-store */ "./src/dummy-store.js");
/* harmony import */ var _NotefulContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotefulContext */ "./src/NotefulContext.js");
var _jsxFileName = "/Users/randydouglas/Desktop/WWW/noteful/src/App.js";









class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const contextValue = {
      notes: _dummy_store__WEBPACK_IMPORTED_MODULE_6__["default"].notes,
      folders: _dummy_store__WEBPACK_IMPORTED_MODULE_6__["default"].folders,
      deleteBookmark: () => {}
    };
    console.log(this.context, 'pizza');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotefulContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
      value: contextValue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      folders: _dummy_store__WEBPACK_IMPORTED_MODULE_6__["default"].folders,
      notes: _dummy_store__WEBPACK_IMPORTED_MODULE_6__["default"].notes,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, "Noteful"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _NotesList__WEBPACK_IMPORTED_MODULE_2__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/folder/:folderId" // use : here in path only
      ,
      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FolderNotesList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        notes: _dummy_store__WEBPACK_IMPORTED_MODULE_6__["default"].notes,
        folders: _dummy_store__WEBPACK_IMPORTED_MODULE_6__["default"].folders,
        match: this.context.match,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 22
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/note/:notesId",
      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MinutesPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
        notes: _dummy_store__WEBPACK_IMPORTED_MODULE_6__["default"].notes,
        match: this.context.match,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }))));
  }

}
/*              <Route
              exact
              path='/'
              render={() => <NotesList notes={STORE.notes} />}
            />
            <Route
              path='/folder/:folderId' // use : here in path only
              render={(props) =>
                <FolderNotesList
                  notes={STORE.notes}
                  folders={STORE.folders}
                  match={props.match} />}
            />
            <Route
              path='/note/:notesId'
              render={(props) =>
                <MinutesPage
                  notes={STORE.notes}
                  match={props.match}
                />}

                
      class App extends React.Component {
  render() {
    const contextValue = {
      notes: STORE.notes,
      folders: STORE.folders,
      deleteBookmark: () => { }
    }

    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <nav>
            <NavBar
              folders={STORE.folders}
              notes={STORE.notes}
            />
          </nav>
          <header>
            <h1><Link to='/'>Noteful</Link></h1>
          </header>
          <main>
            <Route
              exact
              path='/'
              component={NotesList}
            />
            <Route
              path='/folder/:folderId' // use : here in path only
              component={FolderNotesList}
            />
            <Route
              path='/note/:notesId'
              component={MinutesPage}
            />
          </main>
        </div>
      </NotefulContext.Provider>
    );
  }
}
   
*/


App.contextType = _NotefulContext__WEBPACK_IMPORTED_MODULE_7__["default"];
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/FolderNotesList.js":
/*!********************************!*\
  !*** ./src/FolderNotesList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Note */ "./src/Note.js");
/* harmony import */ var _NotefulContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotefulContext */ "./src/NotefulContext.js");
var _jsxFileName = "/Users/randydouglas/Desktop/WWW/noteful/src/FolderNotesList.js";




class FolderNotesList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    console.log(this.context, 'folderId');
    const notesList = this.context.notes.filter(note => {
      if (note.folderId === this.context.match.params.folderId) {
        return note;
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 12
      }
    }, notesList.map(note => {
      let noteId = note.id;
      let noteName = note.name;
      let noteDate = note.modified;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Note__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noteId: noteId,
        name: noteName,
        date: noteDate,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      });
    }));
  }

}

FolderNotesList.contextType = _NotefulContext__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (FolderNotesList);

/***/ }),

/***/ "./src/MinutesPage.js":
/*!****************************!*\
  !*** ./src/MinutesPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Note */ "./src/Note.js");
/* harmony import */ var _NotefulContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotefulContext */ "./src/NotefulContext.js");
var _jsxFileName = "/Users/randydouglas/Desktop/WWW/noteful/src/MinutesPage.js";




class MinutesPage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, 'wow');
    const oneNote = this.context.notes.find(note => {
      if (note.id === this.props.match.params.notesId) {
        return note;
      }
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, oneNote.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, oneNote.modified), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, "Delete Note")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, oneNote.content));
  }

}
/* 
 */


MinutesPage.contextType = _NotefulContext__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (MinutesPage);

/***/ }),

/***/ "./src/NavBar.js":
/*!***********************!*\
  !*** ./src/NavBar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/randydouglas/Desktop/WWW/noteful/src/NavBar.js";



function NavBar(props) {
  const contents = props.folders.map((folder, ind) => {
    let folderName = folder.name;
    let folderId = folder.id; //link should not have colon, only in the route component

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      key: ind,
      to: `/folder/${folderId}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, folderName));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, contents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "Add Folder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => props.history.push('/'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Go Back"));
}
/*
*/


/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(NavBar));

/***/ }),

/***/ "./src/Note.js":
/*!*********************!*\
  !*** ./src/Note.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _NotefulContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotefulContext */ "./src/NotefulContext.js");
var _jsxFileName = "/Users/randydouglas/Desktop/WWW/noteful/src/Note.js";





function deleteNote(noteId, callback) {
  fetch(_config__WEBPACK_IMPORTED_MODULE_2__["default"].API_NOTES).then(res => {
    if (!res.ok) {
      return res.json().then(error => {
        throw error;
      });
    }

    return res.json();
  }).then(data => {
    console.log(data);
    callback(noteId);
  }).catch(error => {
    console.error(error);
  });
}

function Note(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotefulContext__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, context => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: props.noteId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `/note/${props.noteId}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, props.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, props.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => deleteNote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Delete Note"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ }),

/***/ "./src/NotefulContext.js":
/*!*******************************!*\
  !*** ./src/NotefulContext.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const NotefulContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  notes: [],
  folders: [],
  deleteBookmark: () => {}
});
/* harmony default export */ __webpack_exports__["default"] = (NotefulContext);

/***/ }),

/***/ "./src/NotesList.js":
/*!**************************!*\
  !*** ./src/NotesList.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Note */ "./src/Note.js");
/* harmony import */ var _NotefulContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotefulContext */ "./src/NotefulContext.js");
var _jsxFileName = "/Users/randydouglas/Desktop/WWW/noteful/src/NotesList.js";




class NotesList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    console.log(this.context);
    const notes = this.context.notes.map(note => {
      let noteName = note.name;
      let noteDate = note.modified;
      let noteId = note.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Note__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noteId: noteId,
        name: noteName,
        date: noteDate,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 15
        }
      });
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, notes), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, "Add Note"));
  }

}

NotesList.contextType = _NotefulContext__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ __webpack_exports__["default"] = (NotesList);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  API_FOLDERS: `http://localhost:9090/folders`,
  API_NOTES: `http://localhost:9090/notes`
});

/***/ }),

/***/ "./src/dummy-store.js":
/*!****************************!*\
  !*** ./src/dummy-store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "folders": [{
    "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Important"
  }, {
    "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Super"
  }, {
    "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Spangley"
  }],
  "notes": [{
    "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Dogs",
    "modified": "2019-01-03T00:00:00.000Z",
    "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
  }, {
    "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Cats",
    "modified": "2018-08-15T23:00:00.000Z",
    "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. Est qui ducimus id. Beatae sint aspernatur error ullam quae illum sint eum. Voluptas corrupti praesentium soluta cumque illo impedit vero omnis nisi.\n \rNam sunt reprehenderit soluta quis explicabo impedit id. Repudiandae eligendi libero ad ut dolores. Laborum nihil sint et labore iusto reiciendis cum. Repellat quos recusandae natus nobis ullam autem veniam id.\n \rEsse blanditiis neque tempore ex voluptate commodi nemo. Velit sapiente at placeat eveniet ut rem. Quidem harum ut dignissimos. Omnis pariatur quas aperiam. Quasi voluptas qui nulla. Iure quas veniam aut quia et."
  }, {
    "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Pigs",
    "modified": "2018-03-01T00:00:00.000Z",
    "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Occaecati dignissimos quam qui facere deserunt quia. Quaerat aut eos laudantium dolor odio officiis illum. Velit vel qui dolorem et.\n \rQui ut vel excepturi in at. Ut accusamus cumque quia sapiente ut ipsa nesciunt. Dolorum quod eligendi qui aliquid sint.\n \rAt id deserunt voluptatem et rerum. Voluptatem fuga tempora aut dignissimos est odio maiores illo. Fugiat in ad expedita voluptas voluptatum nihil."
  }, {
    "id": "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Birds",
    "modified": "2019-01-04T00:00:00.000Z",
    "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Eum culpa odit. Veniam porro molestiae dolores sunt reiciendis culpa. Atque accusamus dolore eos odio facilis. Dolores reprehenderit et provident dolores possimus mollitia.\n \rAdipisci dolor necessitatibus nihil quod quia vel veniam. Placeat qui vero. Cum cum amet at nisi. Distinctio rerum similique explicabo atque ratione. Recusandae omnis earum est. Quas iusto nihil itaque architecto ea.\n \rPerferendis neque doloremque quibusdam accusantium ut dolor illum dolorum. Vero et similique nihil beatae. In repellendus dolores praesentium. Optio alias rerum culpa placeat maiores natus sed. Ipsa et qui cum ex maiores."
  }, {
    "id": "d26e0714-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Bears",
    "modified": "2018-07-12T23:00:00.000Z",
    "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Distinctio dolor nihil ad iure quo tempore id ipsum. Doloremque sunt dicta odit. Id veritatis aut et doloremque natus.\n \rDeleniti temporibus repellendus molestias nemo. Cupiditate quae consectetur. Reiciendis corporis maxime consequatur qui quaerat cum aut. Quia officiis aut.\n \rAsperiores aut culpa voluptatem amet accusantium officia. Et et et adipisci ullam nesciunt eum magni totam. Quae repellendus suscipit animi vel laudantium sed enim nulla esse. Cupiditate quos minus laudantium autem eum quas tempore. Eos quibusdam quibusdam. Voluptatem molestiae qui accusamus blanditiis voluptates quia."
  }, {
    "id": "d26e0854-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Horses",
    "modified": "2018-08-20T23:00:00.000Z",
    "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Aliquid magnam ut quis quas impedit molestiae laudantium adipisci et. Officiis ut dolor rerum molestiae. Natus rerum libero aperiam. Rem aut consequatur. Quas soluta modi rerum id qui quis et voluptatem perferendis.\n \rIpsum quod sed minima rerum. Voluptatem pariatur voluptatem iure. Voluptatem perferendis qui doloremque distinctio nobis praesentium corrupti unde sed.\n \rPlaceat deleniti in praesentium aut tenetur. Recusandae debitis sint voluptates quam sed eum et quos qui. Atque esse nostrum et architecto qui perspiciatis odit aut. Aut quis corrupti ut. Maiores ratione sit dolor consectetur eius iusto illo sequi. Mollitia fugit dolores."
  }, {
    "id": "d26e0980-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Tigers",
    "modified": "2018-03-03T00:00:00.000Z",
    "folderId": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Eaque aliquid sit. Ducimus consequatur nam. Corporis ut dolorum amet molestiae minima ut quasi nesciunt. Ad omnis et. Dolorem nemo id non voluptatem mollitia sit laudantium. Consequatur quia consequuntur praesentium perferendis alias molestiae voluptatem qui temporibus.\n \rRerum tempore sed eum delectus excepturi odio. Ipsam omnis occaecati qui. Ut aspernatur et et est consequatur architecto laboriosam. Voluptates ullam beatae vero.\n \rAmet magnam neque temporibus totam aperiam aut dignissimos. Voluptas aut est ut quisquam totam. Dolor quibusdam nesciunt voluptatem cum sit harum in dicta. Sed nostrum et veniam id hic voluptatem inventore quo. Ipsam officiis unde dolor eum est dolores qui itaque aspernatur. Magnam aliquam qui qui."
  }, {
    "id": "d26e0aac-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Wolves",
    "modified": "2018-05-16T23:00:00.000Z",
    "folderId": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Expedita mollitia et. Voluptates optio expedita. Esse ullam numquam quae rem. Cum esse itaque et. Corrupti nam illum debitis ipsa excepturi neque rem totam. Repellendus consequatur qui itaque distinctio ut esse ut est.\n \rCulpa a impedit dignissimos. Eos nam totam delectus tempora autem nulla. Id nobis dolores. Minima autem vel provident quo temporibus.\n \rQuis modi eius voluptas fugit dolorem est reiciendis blanditiis. Labore minus qui ab dolorem eos repellat deleniti. Omnis assumenda non. Distinctio voluptas ea fugit corporis. Maiores et occaecati."
  }, {
    "id": "d26e0bce-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Elephants",
    "modified": "2018-04-11T23:00:00.000Z",
    "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Rem enim voluptatem autem fuga possimus. Perferendis voluptatem labore vero veritatis laborum aspernatur molestiae. Enim et quibusdam harum ab velit ad occaecati. Incidunt repellendus quidem rem quia quasi veritatis reiciendis. Quas omnis nam. Quo quisquam occaecati deleniti reiciendis quo temporibus cupiditate consequatur.\n \rSit ullam aut harum sunt rerum error. Quod omnis asperiores sed illum molestiae. Doloremque perspiciatis voluptas vel. Vel esse architecto ut quibusdam laudantium ut et.\n \rRecusandae quo sed quis ratione voluptates nam dolorem consequatur id. Dolores nesciunt illo possimus impedit. Perferendis ea sequi pariatur cumque. Iste nisi perspiciatis. Cumque repellendus optio voluptas maiores nobis. Accusantium sit hic eius occaecati veritatis qui asperiores illum."
  }, {
    "id": "d26e0f48-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Lions",
    "modified": "2018-04-26T23:00:00.000Z",
    "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Occaecati qui magni blanditiis. Et animi quas. Harum quo dolore quia nam amet numquam. Omnis et ex numquam et nostrum dolores voluptatibus. Ut dolores qui voluptatibus. Debitis fuga similique sapiente est perspiciatis.\n \rQuis magni quod iusto ipsum laboriosam suscipit excepturi. Dignissimos praesentium eum explicabo recusandae voluptates. Aliquid laboriosam aperiam sapiente aspernatur mollitia tempore deleniti.\n \rDolor ratione nam ut. Ad eum vel. Eos iusto modi praesentium. Nihil eos libero rerum expedita. Corrupti aut exercitationem eveniet sunt."
  }, {
    "id": "d26e1074-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Monkeys",
    "modified": "2018-02-05T00:00:00.000Z",
    "folderId": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Tenetur deleniti vero. Qui et sit voluptatem et dolor voluptas. Aut adipisci autem dolorem ad excepturi ut facere.\n \rQuos recusandae vitae earum minima quidem sapiente repellat. Veniam inventore ut. Ad quibusdam aliquam id in nihil iste qui nobis. Quidem distinctio eos explicabo.\n \rEa enim rerum deleniti quo earum. Provident fugit eum dolore sequi nobis. Architecto molestias odio et doloremque pariatur facere modi. Eum et est blanditiis delectus at est maiores vel velit. Eligendi velit dicta enim omnis."
  }, {
    "id": "d26e11a0-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Bats",
    "modified": "2018-12-01T00:00:00.000Z",
    "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Tempore aliquam nobis amet dolor laborum aspernatur aspernatur. Non porro est mollitia nobis. Eveniet possimus non et mollitia non.\n \rNecessitatibus dolor eaque consectetur ullam quia ad vero. Dolores dolore minus consequatur itaque a corporis sit provident dicta. Ad in tempora ex consequuntur autem accusantium veritatis. Quia a odit qui autem repellendus et perspiciatis harum. Molestias iste at dicta optio vel nulla enim.\n \rAliquid recusandae optio numquam tempora totam voluptatum inventore. Minus ipsum vel officiis consectetur repudiandae unde necessitatibus in. Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid."
  }, {
    "id": "d26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Turtles",
    "modified": "2018-09-11T23:00:00.000Z",
    "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Fugiat dolores et nostrum laborum id delectus sint reiciendis. Recusandae nulla repellendus. Labore eum hic nesciunt enim corporis necessitatibus. Iusto pariatur aut qui blanditiis.\n \rTempore et vel ut maxime et reprehenderit deleniti esse officia. Laboriosam et reiciendis distinctio qui enim. Amet suscipit sit.\n \rVitae id impedit reprehenderit eveniet nesciunt et soluta. Labore aliquam sed dolores voluptatibus est omnis quo molestias aut. Dolor optio sed alias excepturi delectus aut consequuntur veniam nemo."
  }, {
    "id": "d26e1452-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Zebras",
    "modified": "2018-08-13T23:00:00.000Z",
    "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "content": "Veritatis porro minima perspiciatis. Repellat veniam quo iste ut. Iusto voluptas quae quibusdam. Odit neque iusto cupiditate iste quam. Fuga itaque aut praesentium ullam saepe ut et vero.\n \rQuisquam doloremque molestiae. Enim rerum dolorem et velit itaque magnam laborum. Aut officiis porro.\n \rQuae eum eaque error. Sed itaque ipsam nam provident aut voluptate. Perferendis repudiandae sequi laudantium est est animi eum. Unde alias et doloribus est hic et. Sed distinctio incidunt maiores aut voluptatibus et omnis mollitia fugit."
  }]
});

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/randydouglas/Desktop/WWW/noteful/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/randydouglas/Desktop/WWW/noteful/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/randydouglas/Desktop/WWW/noteful/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/randydouglas/Desktop/WWW/noteful/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map