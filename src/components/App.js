import React from "react";
import { Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import Header from "./Header";
import history from "../history";

export default function App() {
  return (
    <Router history={history}>
      <section className="ui container">
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
      </section>
    </Router>
  );
}
