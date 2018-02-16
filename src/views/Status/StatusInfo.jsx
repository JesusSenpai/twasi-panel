import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { statusSelectors, statusOperations } from '../../state/status';

class StatusInfo extends Component {
  componentDidMount() {
    const { verifyData } = this.props;
    verifyData();
  }

  render() {
    const { status, startBot, stopBot, isStarting, isStopping } = this.props;
    return (
      <div>
        <div>
          <div>
            <div title="Twitchbot">
              <div type="flex" justify="center">
                <div>
                  <button
                    type="danger"
                    disabled={!status.isRunning}
                    onClick={stopBot}
                    loading={isStopping}>
                    Bot Stoppen
                  </button>
                  <button
                    type="primary"
                    disabled={status.isRunning}
                    onClick={startBot}
                    loading={isStarting}>
                    Bot Starten
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

StatusInfo.propTypes = {
  verifyData: PropTypes.func.isRequired,
  status: PropTypes.shape({}),
  startBot: PropTypes.func.isRequired,
  stopBot: PropTypes.func.isRequired,
  isStarting: PropTypes.bool.isRequired,
  isStopping: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  status: statusSelectors.getStatus(state),
  isStarting: statusSelectors.isStarting(state),
  isStopping: statusSelectors.isStopping(state)
});

const mapDispatchToProps = dispatch => ({
  verifyData: () => dispatch(statusOperations.verifyData()),
  stopBot: () => dispatch(statusOperations.stopBot()),
  startBot: () => dispatch(statusOperations.startBot())
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusInfo);
