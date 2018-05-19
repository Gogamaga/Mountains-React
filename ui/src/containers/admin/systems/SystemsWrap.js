import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SystemsWrap from "../../../components/admin/systems/SystemsWrap";

export default withRouter(connect()(SystemsWrap));
