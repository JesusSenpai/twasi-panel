import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CardContent from '@material-ui/core/CardContent';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';

import './_style.css';

class Timer extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  handleChange = (event, interval) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ interval });
  };

  state = {
    issue: 10,
    labelWidth: 115,
    interval: 0,
  };

  getCooldown() {
    if (this.state.interval <= 60) {
      if (this.state.interval === 0) {
        return '5 Minuten';
      } else if (this.state.interval === 60) {
        this.state.interval = 1;
        return this.state.interval+' Stunde';
      } else {
        if (this.state.interval > 1) {
          return this.state.interval+' Minuten';
        } else {
          return this.state.interval+' Minute';
        }
      }
    } else {
      return 'Fehler';
    }
  }

  render() {
    const { classes, onClose, ...other } = this.props;
    const { interval } = this.state;

    return (
      <Dialog
        onClose={this.handleClose}
        {...other}
      >
          <DialogContent>
            <h4 className="pageContainerTitle">
              <FormattedMessage id="timers.new_timer" />
            </h4>
            <small>
              <FormattedMessage id="timers.new_timer.subheadline" />
            </small>
            <br /><br />
            <Card className="pluginCard">
              <CardContent style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  id="outlined-textarea"
                  label={<FormattedMessage id="timers.new_timer.timer" />}
                  fullWidth
                  placeholder="Beispiel: !hosts"
                  helperText="Das ist dein Timer. Der Timer wird automatisch in dem eingestellten Interval ausgelöst."
                  margin="normal"
                  variant="outlined"
                />
              </CardContent>
            </Card>
            <Card className="pluginCard" style={{ marginTop: '15px' }}>
              <CardContent style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  id="outlined-textarea"
                  label={<FormattedMessage id="timers.new_timer.output" />}
                  fullWidth
                  placeholder="Beispiel: Mein Bot heißt Twasibot."
                  multiline
                  rows="3"
                  helperText="Das ist die Ausgabe deines Timers."
                  margin="normal"
                  variant="outlined"
                />
              </CardContent>
            </Card>
            <Card className="pluginCard" style={{ marginTop: '15px' }}>
              <CardContent style={{ paddingTop: '0px', paddingBottom: '8px' }}>
                <Typography style={{ paddingTop: '8px', paddingLeft: '12px', fontSize: '0.775rem' }}>Interval: {this.getCooldown()}</Typography>
                <Slider
                  style={{ padding: '22px 0px' }}
                  aria-labelledby="label"
                  value={interval}
                  min={5}
                  max={60}
                  step={1}
                  onChange={this.handleChange}
                />
                <Typography style={{ paddingLeft: '12px', fontSize: '0.775rem' }}>Hier kannst du einen Interval von bis zu einer Stunde einstellen.</Typography>
              </CardContent>
            </Card>
            <Button fullWidth style={{ borderRadius: '4px', marginTop: '15px' }} variant="contained" color="primary">
              <FormattedMessage id="timers.new_timer.savetimer" />
            </Button>
          </DialogContent>
      </Dialog>
    );
  }
}

Timer.propTypes = {
  onClose: PropTypes.func,
  classes: PropTypes.isRequired
};

export default (Timer);