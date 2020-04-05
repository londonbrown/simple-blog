(this.webpackJsonpapp = this.webpackJsonpapp || []).push([
  [0],
  {
    131: function(e, t, a) {
      e.exports = a(274);
    },
    136: function(e, t, a) {},
    138: function(e, t, a) {},
    21: function(e) {
      e.exports = JSON.parse(
        '{"a":"https://blog.api.lahiyam.com","b":"http://localhost:3000/dev","c":"/post","e":"/user","d":"fcb0cf58-36e0-4d4c-8aa2-f399503eff0b","f":"https://www.youtube.com/channel/UCqYiG8tku2RuKMNQOJBF2bQ"}'
      );
    },
    269: function(e, t, a) {},
    271: function(e, t, a) {},
    272: function(e, t, a) {},
    274: function(e, t, a) {
      "use strict";
      a.r(t);
      var n,
        s = a(0),
        r = a.n(s),
        l = a(19),
        i = a.n(l),
        o = (a(136), a(16)),
        c = a.n(o),
        u = a(8),
        d = a(6),
        h = a(11),
        m = a(12),
        p = a(7),
        v = a(13),
        f = a(127),
        b = (a(138), a(36)),
        g = a(50),
        E = a(129),
        y = a(69),
        k = a(284),
        O = a(285),
        j = a(42),
        C = a.n(j),
        w = a(63);
      !(function(e) {
        (e.POST = "/post"),
          (e.EDIT = "/edit"),
          (e.HOME = "/"),
          (e.USER = "/user"),
          (e.NEW = "/new");
      })(n || (n = {}));
      var x = n,
        D = a(21),
        P = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(h.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    { className: this.props.className },
                    r.a.createElement(
                      g.a,
                      { expand: "md", variant: "dark", className: "px-md-0" },
                      r.a.createElement(
                        g.a.Brand,
                        { href: "/" },
                        "\u05d7\u05d9"
                      ),
                      r.a.createElement(
                        g.a.Collapse,
                        null,
                        r.a.createElement(
                          b.a,
                          { className: "mr-auto" },
                          r.a.createElement(
                            b.a.Item,
                            null,
                            r.a.createElement(
                              b.a.Link,
                              { href: D.f },
                              "YouTube"
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        b.a,
                        { className: "ml-auto mr-lg-2 mr-sm-0" },
                        r.a.createElement(
                          w.LinkContainer,
                          { to: x.NEW },
                          r.a.createElement(
                            b.a.Link,
                            null,
                            r.a.createElement(
                              b.a.Item,
                              null,
                              r.a.createElement(
                                "span",
                                {
                                  className: "mr-1",
                                  style: { verticalAlign: "middle" }
                                },
                                "Add Post"
                              ),
                              r.a.createElement(C.a, {
                                style: { verticalAlign: "middle" },
                                icon: "add_circle"
                              })
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        E.a,
                        { inline: !0 },
                        r.a.createElement(
                          g.a.Collapse,
                          null,
                          r.a.createElement(
                            k.a,
                            null,
                            r.a.createElement(y.a, {
                              type: "text",
                              placeholder: "Search"
                            }),
                            r.a.createElement(
                              k.a.Append,
                              null,
                              r.a.createElement(
                                O.a,
                                { variant: "secondary", className: "py-0" },
                                r.a.createElement(C.a, {
                                  className: "align-middle",
                                  icon: "search"
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.Component),
        N = a(286),
        T = a(287),
        S = a(125),
        U = a(291),
        A = r.a.createContext({
          client: void 0,
          defaultUser: void 0,
          updateModal: void 0
        }),
        L = a(71),
        I = a.n(L),
        B = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(h.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(I.a, {
                    value: this.props.content,
                    readOnly: !0,
                    modules: { syntax: !0, toolbar: [] },
                    className: "quill-no-toolbar"
                  });
                }
              }
            ]),
            t
          );
        })(s.Component),
        M = (function(e) {
          function t(e) {
            var a;
            return (
              Object(u.a)(this, t),
              ((a = Object(h.a)(
                this,
                Object(m.a)(t).call(this, e)
              )).onClickListener = a.onClickListener.bind(Object(p.a)(a))),
              a
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "onClickListener",
                value: function(e) {
                  e.preventDefault(),
                    this.context.updateModal({
                      enabled: !0,
                      title: this.props.title,
                      body: this.props.content,
                      footer: this.props.username
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = r.a.createElement(
                    U.a.Title,
                    { className: "display-4" },
                    this.props.title
                  );
                  return r.a.createElement(
                    U.a,
                    {
                      className: "mt-4 mb-4 ".concat(
                        this.props.canBeModal && "card-modal"
                      )
                    },
                    r.a.createElement(
                      U.a.Body,
                      null,
                      this.props.canBeModal
                        ? r.a.createElement(
                            w.LinkContainer,
                            {
                              onClick: this.onClickListener,
                              to: "/post/".concat(this.props.id),
                              style: { cursor: "pointer" }
                            },
                            e
                          )
                        : r.a.createElement(r.a.Fragment, null, e),
                      this.props.createdAt &&
                        r.a.createElement(
                          r.a.Fragment,
                          null,
                          r.a.createElement(
                            U.a.Text,
                            null,
                            r.a.createElement(
                              "small",
                              { className: "text-muted" },
                              "Created on ",
                              new Date(this.props.createdAt).toString()
                            )
                          ),
                          r.a.createElement("hr", null)
                        ),
                      "object" === typeof this.props.content
                        ? r.a.createElement(B, { content: this.props.content })
                        : r.a.createElement(U.a.Text, null, this.props.content),
                      r.a.createElement("hr", null),
                      r.a.createElement(
                        U.a.Text,
                        null,
                        r.a.createElement(
                          "small",
                          null,
                          "By",
                          " ",
                          r.a.createElement(
                            "a",
                            { href: "/user/".concat(this.props.username) },
                            this.props.username
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      M.contextType = A;
      var F = M,
        R = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(h.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    U.a,
                    { className: "mt-4 mb-4" },
                    r.a.createElement(
                      U.a.Body,
                      null,
                      r.a.createElement(
                        U.a.Title,
                        { className: "display-4" },
                        this.props.title
                      ),
                      r.a.createElement("hr", null),
                      r.a.createElement(
                        U.a.Text,
                        null,
                        r.a.createElement(
                          "small",
                          { className: "text-muted" },
                          "Created on ",
                          new Date(this.props.createdAt).toString(),
                          " | By",
                          " ",
                          r.a.createElement(
                            "a",
                            { href: "#" },
                            this.props.username
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.Component),
        V = (function(e) {
          function t(e) {
            var a;
            return (
              Object(u.a)(this, t),
              ((a = Object(h.a)(this, Object(m.a)(t).call(this, e))).state = {
                posts: [],
                author: null,
                latestPost: null,
                mounted: !1
              }),
              (a.showLatestPost = a.showLatestPost.bind(Object(p.a)(a))),
              (a.updatePosts = a.updatePosts.bind(Object(p.a)(a))),
              a
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "updatePosts",
                value: function() {
                  var e,
                    t,
                    a,
                    n = this;
                  return c.a.async(
                    function(s) {
                      for (;;)
                        switch ((s.prev = s.next)) {
                          case 0:
                            if (this.context.client) {
                              s.next = 5;
                              break;
                            }
                            console.debug("Waiting a tick on context..."),
                              setTimeout(this.updatePosts, 1),
                              (s.next = 23);
                            break;
                          case 5:
                            if (
                              0 !== this.state.posts.length ||
                              null !== this.state.latestPost
                            ) {
                              s.next = 23;
                              break;
                            }
                            return (
                              (s.prev = 6),
                              (s.next = 9),
                              c.a.awrap(
                                this.context.client.getPostsByUser(
                                  this.context.defaultUser.id
                                )
                              )
                            );
                          case 9:
                            if (((e = s.sent), (t = null), !(e.length > 0))) {
                              s.next = 16;
                              break;
                            }
                            return (
                              (a = e[0].id),
                              (s.next = 15),
                              c.a.awrap(this.context.client.getPost(a))
                            );
                          case 15:
                            t = s.sent;
                          case 16:
                            e.map(function(e) {
                              return (
                                (e.username = n.context.defaultUser.username), e
                              );
                            }),
                              this.setState({
                                author: this.context.defaultUser,
                                posts: e,
                                latestPost: t
                              }),
                              (s.next = 23);
                            break;
                          case 20:
                            (s.prev = 20),
                              (s.t0 = s.catch(6)),
                              console.error(s.t0);
                          case 23:
                          case "end":
                            return s.stop();
                        }
                    },
                    null,
                    this,
                    [[6, 20]]
                  );
                }
              },
              {
                key: "componentDidMount",
                value: function() {
                  return c.a.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            this.updatePosts();
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                key: "showLatestPost",
                value: function(e) {
                  e.preventDefault(),
                    this.context.updateModal({
                      enabled: !0,
                      title: this.state.latestPost.title,
                      body: this.state.latestPost.content,
                      footer: this.state.author.username
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t =
                      this.state.posts.length > 0 &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement("hr", { className: "my-2" }),
                        r.a.createElement("p", null, "View latest post"),
                        r.a.createElement(
                          "p",
                          { className: "lead" },
                          r.a.createElement(
                            O.a,
                            {
                              color: "primary",
                              onClick: this.showLatestPost,
                              href: this.state.posts[0].link
                            },
                            this.state.posts[0].title
                          )
                        )
                      );
                  return r.a.createElement(
                    "div",
                    { className: this.props.className },
                    r.a.createElement(
                      N.a,
                      null,
                      r.a.createElement(
                        "h1",
                        { className: "display-4" },
                        "lahiyam"
                      ),
                      r.a.createElement(
                        "p",
                        { className: "lead display-3" },
                        "Nonsensical whisperings"
                      ),
                      t
                    ),
                    r.a.createElement(
                      T.a,
                      { className: "mt-0" },
                      r.a.createElement(
                        S.a,
                        { className: "mt-0" },
                        this.state.latestPost &&
                          r.a.createElement(F, {
                            id: this.state.latestPost.id,
                            title: this.state.latestPost.title,
                            createdAt: this.state.latestPost.createdAt,
                            content: this.state.latestPost.content,
                            username: this.state.author.username,
                            canBeModal: !0
                          }),
                        this.state.posts.map(function(t) {
                          if (
                            !e.state.latestPost ||
                            t.id !== e.state.latestPost.id
                          )
                            return r.a.createElement(R, {
                              key: t.id,
                              id: t.id,
                              title: t.title,
                              createdAt: t.createdAt,
                              username: t.username
                            });
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      V.contextType = A;
      var G = a(61),
        J = a(32),
        Q = (function(e) {
          function t(e) {
            var a;
            return (
              Object(u.a)(this, t),
              ((a = Object(h.a)(this, Object(m.a)(t).call(this, e))).state = {
                postData: null
              }),
              a
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e, t;
                  return c.a.async(
                    function(a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (!this.context.client || this.state.postData) {
                              a.next = 16;
                              break;
                            }
                            return (
                              (a.prev = 1),
                              (a.next = 4),
                              c.a.awrap(
                                this.context.client.getPost(
                                  this.props.match.params.postId
                                )
                              )
                            );
                          case 4:
                            if (!(e = a.sent)) {
                              a.next = 11;
                              break;
                            }
                            return (
                              (a.next = 8),
                              c.a.awrap(this.context.client.getUser(e.userId))
                            );
                          case 8:
                            (t = a.sent),
                              (e.username = t.username),
                              this.setState({ postData: e });
                          case 11:
                            a.next = 16;
                            break;
                          case 13:
                            (a.prev = 13),
                              (a.t0 = a.catch(1)),
                              console.error(a.t0);
                          case 16:
                          case "end":
                            return a.stop();
                        }
                    },
                    null,
                    this,
                    [[1, 13]]
                  );
                }
              },
              {
                key: "componentDidUpdate",
                value: function() {
                  return c.a.async(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            console.log(this.props);
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    },
                    null,
                    this
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  return (
                    this.state.postData &&
                    r.a.createElement(F, {
                      id: this.state.postData.id,
                      title: this.state.postData.title,
                      content: this.state.postData.content,
                      createdAt: this.state.postData.createdAt || 0,
                      username: this.state.postData.username
                    })
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      Q.contextType = A;
      var q = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(h.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement("div", null, "User container");
                }
              }
            ]),
            t
          );
        })(s.Component),
        W = a(43),
        H = a.n(W),
        z = "localhost" === window.location.hostname ? D.b : D.a,
        K = z + D.e,
        Y = z + D.c,
        $ = (function() {
          function e() {
            Object(u.a)(this, e),
              (this.getUser = this.getUser.bind(this)),
              (this.getPost = this.getPost.bind(this)),
              (this.getPostsByUser = this.getPostsByUser.bind(this)),
              (this.getUserByUsername = this.getUserByUsername.bind(this)),
              (this.getDefaultUser = this.getDefaultUser.bind(this)),
              (this.submitPost = this.submitPost.bind(this));
          }
          return (
            Object(d.a)(e, [
              {
                key: "getUser",
                value: function(e) {
                  return H.a
                    .get(K, {
                      params: { id: e },
                      headers: { "Access-Control-Allow-Origin": "*" },
                      timeout: 3e3,
                      responseType: "json",
                      withCredentials: !1
                    })
                    .then(function(e) {
                      return e.data;
                    })
                    .catch(function(e) {
                      return console.error(e);
                    });
                }
              },
              {
                key: "getUserByUsername",
                value: function(e) {
                  return H.a
                    .get(D.e, {
                      params: { username: e },
                      headers: { "Access-Control-Allow-Origin": "*" }
                    })
                    .then(function(e) {
                      return e.data;
                    })
                    .catch(function(e) {
                      return console.error(e);
                    });
                }
              },
              {
                key: "getDefaultUser",
                value: function() {
                  return this.getUser(D.d);
                }
              },
              {
                key: "getPost",
                value: function(e) {
                  return H.a
                    .get(Y, {
                      params: { id: e },
                      headers: { "Access-Control-Allow-Origin": "*" }
                    })
                    .then(function(e) {
                      return (
                        (e.data.content = JSON.parse(e.data.content)), e.data
                      );
                    })
                    .catch(function(e) {
                      return console.error(e);
                    });
                }
              },
              {
                key: "getPostsByUser",
                value: function(e, t) {
                  return H.a
                    .get(Y, {
                      params: { userId: e, createdAt: t },
                      headers: { "Access-Control-Allow-Origin": "*" }
                    })
                    .then(function(e) {
                      return e.data;
                    })
                    .catch(function(e) {
                      return console.error(e);
                    });
                }
              },
              {
                key: "submitPost",
                value: function(e) {
                  return H.a
                    .post(
                      Y,
                      {
                        userId: D.d,
                        title: e.title,
                        content: JSON.stringify(e.content)
                      },
                      { headers: { "Access-Control-Allow-Origin": "*" } }
                    )
                    .then(function(e) {
                      return e.data;
                    })
                    .catch(function(e) {
                      return console.error(e);
                    });
                }
              }
            ]),
            e
          );
        })(),
        _ = a(290),
        X = a(289),
        Z = a(288),
        ee = a(126),
        te = a.n(ee);
      function ae(e) {
        return /^\w+$/.test(e);
      }
      var ne = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(h.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = [];
                  return (
                    this.props.tags.forEach(function(a, n) {
                      t.push(
                        r.a.createElement(
                          Z.a,
                          {
                            className: "mr-2",
                            pill: !0,
                            variant: "secondary",
                            key: n
                          },
                          r.a.createElement(
                            "span",
                            { style: { verticalAlign: "middle" } },
                            a
                          ),
                          r.a.createElement(
                            "span",
                            {
                              style: { cursor: "pointer" },
                              "data-tag-value": a,
                              onClick: e.props.removeTagListener
                            },
                            r.a.createElement(te.a, { className: "ml-1" })
                          )
                        )
                      );
                    }),
                    r.a.createElement(
                      "section",
                      { className: this.props.className },
                      t
                    )
                  );
                }
              }
            ]),
            t
          );
        })(s.Component),
        se =
          (a(268),
          a(269),
          (function(e) {
            function t(e) {
              var a, n, s, l, i, o, c;
              return (
                Object(u.a)(this, t),
                ((c = Object(h.a)(
                  this,
                  Object(m.a)(t).call(this, e)
                )).editorRef = void 0),
                (c.modules = void 0),
                (c.state = {
                  title:
                    null === (a = c.props.postData) || void 0 === a
                      ? void 0
                      : a.title,
                  tags:
                    (null === (n = c.props.postData) || void 0 === n
                      ? void 0
                      : n.tags) || new Set(),
                  editorDelta:
                    (null === (s = c.props.postData) || void 0 === s
                      ? void 0
                      : s.content) || "",
                  formValidated:
                    ((null === (l = c.props.postData) || void 0 === l
                      ? void 0
                      : l.title) &&
                      (null === (i = c.props.postData) || void 0 === i
                        ? void 0
                        : i.title.length) > 0 &&
                      void 0 !==
                        (null === (o = c.props.postData) || void 0 === o
                          ? void 0
                          : o.content)) ||
                    !1,
                  titleInvalid: void 0,
                  tagsInvalid: void 0,
                  quillValid: !0
                }),
                (c.editorRef = r.a.createRef()),
                (c.handleQuillChange = c.handleQuillChange.bind(
                  Object(p.a)(c)
                )),
                (c.handlePreviewClick = c.handlePreviewClick.bind(
                  Object(p.a)(c)
                )),
                (c.handleFormChangeEvent = c.handleFormChangeEvent.bind(
                  Object(p.a)(c)
                )),
                (c.handleCancel = c.handleCancel.bind(Object(p.a)(c))),
                (c.tagsChangeListener = c.tagsChangeListener.bind(
                  Object(p.a)(c)
                )),
                (c.removeTagListener = c.removeTagListener.bind(
                  Object(p.a)(c)
                )),
                (c.validateForm = c.validateForm.bind(Object(p.a)(c))),
                (c.modules = {
                  toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    ["link", "image", "video"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ script: "sub" }, { script: "super" }],
                    [{ indent: "-1" }, { indent: "+1" }],
                    [{ size: ["small", !1, "large", "huge"] }],
                    [{ header: [1, 2, 3, 4, 5, 6, !1] }],
                    [{ color: [] }, { background: [] }],
                    [{ font: [] }],
                    [{ align: [] }],
                    ["clean"]
                  ]
                }),
                c
              );
            }
            return (
              Object(v.a)(t, e),
              Object(d.a)(t, [
                {
                  key: "handleCancel",
                  value: function() {
                    this.props.history.goBack();
                  }
                },
                {
                  key: "handleQuillChange",
                  value: function() {
                    this.editorRef.hasOwnProperty("current") &&
                      null !== this.editorRef.current &&
                      this.setState({
                        editorDelta: this.editorRef.current
                          .getEditor()
                          .getContents()
                      });
                  }
                },
                {
                  key: "handleFormChangeEvent",
                  value: function(e) {
                    var t = e.currentTarget;
                    if ((console.log(t), console.log(t.id), "id" in t))
                      switch (t.id) {
                        case "formPostTitle":
                          t.value.trim().length > 0
                            ? this.setState({ titleInvalid: !1 })
                            : this.setState({
                                titleInvalid: void 0,
                                formValidated: void 0
                              }),
                            this.setState({ title: t.value.trim() });
                          break;
                        case "formPostTags":
                          (t.value = t.value.trim()),
                            "" === t.value || ae(t.value)
                              ? this.state.tagsInvalid &&
                                this.setState({ tagsInvalid: !1 })
                              : this.state.tagsInvalid ||
                                this.setState({ tagsInvalid: !0 });
                      }
                  }
                },
                {
                  key: "handlePreviewClick",
                  value: function(e) {
                    if (
                      (e.preventDefault(),
                      this.validateForm() &&
                        this.state.title &&
                        this.state.editorDelta &&
                        this.state.tags)
                    ) {
                      var t = {
                        title: this.state.title,
                        content: this.state.editorDelta,
                        tags: this.state.tags
                      };
                      this.props.onSubmit(t);
                    }
                  }
                },
                {
                  key: "tagsChangeListener",
                  value: function(e) {
                    if ("," === e.key) {
                      e.preventDefault();
                      var t = e.currentTarget.value.trim(),
                        a = this.state.tags;
                      "" !== t &&
                        ae(t) &&
                        (null === a || void 0 === a || a.add(t),
                        this.setState({ tags: a }),
                        (e.currentTarget.value = ""));
                    }
                  }
                },
                {
                  key: "removeTagListener",
                  value: function(e) {
                    var t = e.currentTarget.getAttribute("data-tag-value"),
                      a = this.state.tags;
                    null === a || void 0 === a || a.delete(t),
                      this.setState({ tags: a });
                  }
                },
                {
                  key: "validateForm",
                  value: function() {
                    if (this.state.formValidated) return !0;
                    var e =
                      !1 === this.state.titleInvalid &&
                      !0 === this.state.quillValid;
                    return this.setState({ formValidated: e }), e;
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      T.a,
                      { className: "mt-0" },
                      r.a.createElement(
                        S.a,
                        { className: "mt-0" },
                        r.a.createElement(
                          U.a,
                          null,
                          r.a.createElement(
                            U.a.Body,
                            null,
                            r.a.createElement(
                              E.a,
                              { validated: this.state.formValidated },
                              r.a.createElement(
                                E.a.Group,
                                { controlId: "formPostTitle" },
                                r.a.createElement(E.a.Label, null, "Title"),
                                r.a.createElement(E.a.Control, {
                                  isInvalid: this.state.titleInvalid,
                                  onChange: this.handleFormChangeEvent,
                                  type: "input",
                                  placeholder: "Enter title",
                                  value: this.state.title
                                })
                              ),
                              r.a.createElement(
                                E.a.Group,
                                { controlId: "formPostContent" },
                                r.a.createElement(E.a.Label, null, "Content"),
                                r.a.createElement(I.a, {
                                  modules: this.modules,
                                  ref: this.editorRef,
                                  defaultValue: this.state.editorDelta,
                                  onChange: this.handleQuillChange
                                })
                              ),
                              r.a.createElement(
                                E.a.Group,
                                { controlId: "formPostTags" },
                                r.a.createElement(E.a.Label, null, "Tags"),
                                r.a.createElement(E.a.Control, {
                                  onChange: this.handleFormChangeEvent,
                                  isInvalid: this.state.tagsInvalid,
                                  as: "input",
                                  onKeyPress: this.tagsChangeListener
                                }),
                                r.a.createElement(
                                  E.a.Text,
                                  null,
                                  this.state.tags &&
                                    r.a.createElement(ne, {
                                      className: "mt-2",
                                      tags: this.state.tags,
                                      removeTagListener: this.removeTagListener
                                    })
                                )
                              ),
                              r.a.createElement(
                                E.a.Group,
                                null,
                                r.a.createElement(
                                  T.a,
                                  {
                                    className:
                                      "row justify-content-end mr-0 ml-0"
                                  },
                                  r.a.createElement(
                                    X.a,
                                    null,
                                    r.a.createElement(
                                      E.a.Group,
                                      { controlId: "formPostCancel" },
                                      r.a.createElement(
                                        O.a,
                                        {
                                          onClick: this.handleCancel,
                                          className: "mr-3",
                                          variant: "outline-light"
                                        },
                                        "Cancel"
                                      )
                                    ),
                                    r.a.createElement(
                                      E.a.Group,
                                      { controlId: "formPostSubmit" },
                                      r.a.createElement(
                                        O.a,
                                        {
                                          onClick: this.handlePreviewClick,
                                          variant: "primary"
                                        },
                                        "Preview"
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(s.Component));
      se.contextType = A;
      var re = a(86),
        le = (function(e) {
          function t() {
            return (
              Object(u.a)(this, t),
              Object(h.a)(this, Object(m.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      re.a,
                      { key: "preview-alert", variant: "info" },
                      r.a.createElement(
                        re.a.Heading,
                        null,
                        "This a preview of what the post will look like."
                      ),
                      r.a.createElement(
                        "p",
                        null,
                        "If everything looks good, click the ",
                        r.a.createElement("b", null, "Save"),
                        " button. If you need to make changes, click the ",
                        r.a.createElement("b", null, "Editor"),
                        " button."
                      ),
                      r.a.createElement("hr", null),
                      r.a.createElement(
                        "div",
                        { className: "d-flex justify-content-end" },
                        r.a.createElement(
                          O.a,
                          {
                            onClick: this.props.onEditor,
                            variant: "outline-info",
                            className: "mr-2"
                          },
                          r.a.createElement(C.a, {
                            style: { verticalAlign: "middle" },
                            icon: "edit"
                          }),
                          r.a.createElement(
                            "span",
                            {
                              className: "ml-1",
                              style: { verticalAlign: "middle" }
                            },
                            "Editor"
                          )
                        ),
                        r.a.createElement(
                          O.a,
                          { variant: "info", onClick: this.props.onSave },
                          r.a.createElement(C.a, {
                            style: { verticalAlign: "middle" },
                            icon: "save"
                          }),
                          r.a.createElement(
                            "span",
                            {
                              className: "ml-1",
                              style: { verticalAlign: "middle" }
                            },
                            "Save"
                          )
                        )
                      )
                    ),
                    r.a.createElement(F, {
                      title: this.props.postData.title,
                      content: this.props.postData.content,
                      tags: this.props.postData.tags,
                      username:
                        this.context.defaultUser &&
                        this.context.defaultUser.username
                    })
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      le.contextType = A;
      var ie = a(62),
        oe = a.n(ie).a.import("delta"),
        ce = (function(e) {
          function t(e) {
            var a;
            Object(u.a)(this, t),
              (a = Object(h.a)(this, Object(m.a)(t).call(this, e)));
            var n = new oe();
            return (
              n.insert("London", { size: "huge" }),
              n.insert("\n", { header: 1 }),
              n.insert('console.log("blogging is fun")'),
              n.insert("\n", { "code-block": !0 }),
              (a.state = {
                postData: {
                  title: "Title",
                  content: n,
                  tags: new Set(["tag1", "tag2"])
                },
                preview: !0
              }),
              (a.postDataChangeListener = a.postDataChangeListener.bind(
                Object(p.a)(a)
              )),
              (a.toggleComposer = a.toggleComposer.bind(Object(p.a)(a))),
              (a.savePostData = a.savePostData.bind(Object(p.a)(a))),
              a
            );
          }
          return (
            Object(v.a)(t, e),
            Object(d.a)(t, [
              {
                key: "postDataChangeListener",
                value: function(e) {
                  this.setState({ postData: e, preview: !0 });
                }
              },
              {
                key: "toggleComposer",
                value: function() {
                  this.setState({ preview: !this.state.preview });
                }
              },
              {
                key: "savePostData",
                value: function() {
                  this.state.postData &&
                    this.context.client.submitPost(this.state.postData);
                }
              },
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.state.postData && this.state.preview
                      ? r.a.createElement(le, {
                          onEditor: this.toggleComposer,
                          postData: this.state.postData,
                          onSave: this.savePostData
                        })
                      : r.a.createElement(se, {
                          postData: this.state.postData,
                          editMode: this.props.match.params.mode,
                          history: this.props.history,
                          onSubmit: this.postDataChangeListener,
                          onSave: this.savePostData
                        })
                  );
                }
              }
            ]),
            t
          );
        })(s.Component);
      ce.contextType = A;
      var ue = (function(e) {
        function t(e) {
          var a;
          return (
            Object(u.a)(this, t),
            ((a = Object(h.a)(
              this,
              Object(m.a)(t).call(this, e)
            )).client = void 0),
            (a.state = {
              client: void 0,
              defaultUser: void 0,
              modal: { enabled: !1 }
            }),
            (a.updateModal = a.updateModal.bind(Object(p.a)(a))),
            (a.closeModal = a.closeModal.bind(Object(p.a)(a))),
            a
          );
        }
        return (
          Object(v.a)(t, e),
          Object(d.a)(t, [
            {
              key: "updateModal",
              value: function(e) {
                this.setState({ modal: e });
              }
            },
            {
              key: "closeModal",
              value: function() {
                var e = this.state.modal;
                (e.enabled = !1), this.setState({ modal: e });
              }
            },
            {
              key: "componentDidMount",
              value: function() {
                var e;
                return c.a.async(
                  function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (this.client && this.state.client) {
                            t.next = 6;
                            break;
                          }
                          return (
                            (this.client = new $()),
                            (t.next = 4),
                            c.a.awrap(this.client.getDefaultUser())
                          );
                        case 4:
                          (e = t.sent),
                            this.setState({
                              client: this.client,
                              defaultUser: e
                            });
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  },
                  null,
                  this
                );
              }
            },
            {
              key: "render",
              value: function() {
                return r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    G.BrowserRouter,
                    null,
                    r.a.createElement(
                      f.a,
                      null,
                      r.a.createElement(P, { className: "mb-2" }),
                      r.a.createElement(
                        J.g,
                        null,
                        r.a.createElement(
                          A.Provider,
                          {
                            value: {
                              client: this.state.client,
                              defaultUser: this.state.defaultUser,
                              updateModal: this.updateModal
                            }
                          },
                          r.a.createElement(J.d, {
                            exact: !0,
                            path: "/",
                            component: V
                          }),
                          r.a.createElement(
                            J.d,
                            Object.assign(
                              {
                                path: "/post/:postId",
                                component: function(e) {
                                  return r.a.createElement(Q, e);
                                }
                              },
                              this.props
                            )
                          ),
                          r.a.createElement(J.d, {
                            path: "/user",
                            component: function() {
                              return r.a.createElement(q, null);
                            }
                          }),
                          r.a.createElement(J.d, {
                            path: "/(edit|new)",
                            component: function(e) {
                              return r.a.createElement(ce, e);
                            },
                            mode: "edit",
                            editMode: "true"
                          }),
                          r.a.createElement(
                            _.a,
                            {
                              show: this.state.modal.enabled,
                              onHide: this.closeModal,
                              centered: !0,
                              autoFocus: !0,
                              backdrop: "static",
                              size: "lg"
                            },
                            r.a.createElement(
                              _.a.Header,
                              { closeButton: !0 },
                              r.a.createElement(
                                _.a.Title,
                                null,
                                this.state.modal.title
                              )
                            ),
                            r.a.createElement(
                              _.a.Body,
                              null,
                              "object" === typeof this.state.modal.body
                                ? r.a.createElement(B, {
                                    content: this.state.modal.body
                                  })
                                : this.state.modal.body
                            ),
                            this.state.modal.footer &&
                              r.a.createElement(
                                _.a.Footer,
                                null,
                                this.state.modal.footer
                              )
                          )
                        )
                      )
                    )
                  )
                );
              }
            }
          ]),
          t
        );
      })(s.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      a(270), a(271), a(272);
      i.a.render(r.a.createElement(ue, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  },
  [[131, 1, 2]]
]);
//# sourceMappingURL=main.996deac1.chunk.js.map
