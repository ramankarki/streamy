import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";

export default function App() {
  return (
    <section>
      <header></header>
      <BrowserRouter>
        <section>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/create" exact component={StreamCreate} />
          <Route path="/streams/show" exact component={StreamShow} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </section>
      </BrowserRouter>
    </section>
  );
}
