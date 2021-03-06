import React from "react";
import { withRouter } from "react-router";
import ProgramList from "./list";

function Program(props) {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Program</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <button
            type="button"
            onClick={() => {
              props.history.push("./program/add");
            }}
            className="btn btn-sm btn-outline-secondary"
          >
            <span data-feather="calendar" />
            Add Program
          </button>
        </div>
      </div>
      <ProgramList></ProgramList>
    </>
  );
}

export default withRouter(Program);
