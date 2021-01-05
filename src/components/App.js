import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import Header from "./Header";

export default function App() {
  return (
    <BrowserRouter>
      <section className="ui container">
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
      </section>
    </BrowserRouter>
  );
}
