import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Card, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
// import { Container, Row, Col } from 'react-grid-system';

import './_style.css';

class Fakechat extends Component {
  /* componentWillMount() {
    const { verifyData } = this.props;
    verifyData();
  } */

  render() {
    return (
      <div className="pageContent">
        <h2 className="pageTitle">
          <FormattedMessage id="sidebar.fakechat" />
        </h2>
        <Paper className="pageContainer">
          <small>
            Im Fakechat kannst du alle Funktionen des Bots unabhängig deines
            Chats ausprobieren.
          </small>
          <Divider className="marginDivider" />
          <Card className="pluginCard">
            <CardText />
          </Card>
        </Paper>
      </div>
    );
  }
}

Fakechat.propTypes = {};

export default withRouter(connect()(Fakechat));
