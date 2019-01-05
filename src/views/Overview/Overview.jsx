import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Tabs, Tab } from '@material-ui/core/Tabs';
import Divider from '@material-ui/core/Divider';
import { Container, Row, Col } from 'react-grid-system';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TooltipM from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { AreaChart, Area, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, ReferenceArea, CartesianGrid, Label, LineChart, Line } from 'recharts';

import Kreygasm from '../common/resources/Kreygasm.png';
import LUL from '../common/resources/LUL.png';
import Kappa from '../common/resources/Kappa.png';
import PogChamp from '../common/resources/PogChamp.png';

import './_style.css';

const data = [
      {name: 'January', spent: 2000, earn: 2500},
      {name: 'February', spent: 2400, earn: 2600},
      {name: 'March', spent: 2000, earn: 2100},
      {name: 'April', spent: 2780, earn: 2500},
      {name: 'May', spent: 2600, earn: 2300},
      {name: 'June', spent: 2500, earn: 2700},
      {name: 'July', spent: 2600, earn: 2650},
];

const COLORS = ['#02d4d4', '#E87722', '#F1B300', '#009A17', '#00B8DE', '#006CB0', '#ff4f4a', '#85459F', '#D12B92', '#F67599'];

const data01 = [{name: '!twitter', value: 400},
                {name: '!check', value: 200},
                {name: '!noob', value: 278}, {name: '!sr', value: 189}]

const data02 = [
      {name: 'Page A', pv: 2400},
      {name: 'Page B', pv: 1398},
      {name: 'Page C', pv: 9800},
      {name: 'Page D', pv: 3908},
      {name: 'Page E', pv: 4800},
      {name: 'Page F', pv: 3800},
      {name: 'Page G', pv: 4300},
      {name: 'Page H', pv: 9800},
      {name: 'Page I', pv: 3908},
      {name: 'Page J', pv: 4800},
];

class Overview extends Component {
  render() {
    return (
      <div className="pageContent">
        <Container className="overviewHead">
          <Row>
            <Col sm={3}>
              <div className="translucentBox">
                <div className="media-body">
                  <h2 style={{ margin: '7px 0px 0px' }}>
                    <span>1337</span>
                  </h2>
                  <small>
                    <FormattedMessage id="overview.follower" />
                  </small>
                  <img
                    style={{ position: 'absolute', top: '15px', right: '30px', height: '50px' }}
                    src={Kreygasm}
                    alt="Kreygasm"
                  />
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="translucentBox">
                <div className="media-body">
                  <h2 style={{ margin: '7px 0px 0px' }}>
                    <span>1337</span>
                  </h2>
                  <small>
                    <FormattedMessage id="overview.viewer" />
                  </small>
                  <img
                    style={{ position: 'absolute', top: '15px', right: '30px', height: '50px' }}
                    src={LUL}
                    alt="LUL"
                  />
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="translucentBox">
                <div className="media-body">
                  <h2 style={{ margin: '7px 0px 0px' }}>
                    <span>1337</span>
                  </h2>
                  <small>
                    <FormattedMessage id="overview.messages" />
                  </small>
                  <img
                    style={{ position: 'absolute', top: '15px', right: '30px', height: '50px' }}
                    src={Kappa}
                    alt="Kappa"
                  />
                </div>
              </div>
            </Col>
            <Col sm={3}>
              <div className="translucentBox">
                <div className="media-body">
                  <h2 style={{ margin: '7px 0px 0px' }}>
                    <span>1337</span>
                  </h2>
                  <small>
                    <FormattedMessage id="overview.streams" />
                  </small>
                  <img
                    style={{ position: 'absolute', top: '15px', right: '30px', height: '50px' }}
                    src={PogChamp}
                    alt="PogChamp"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col sm={12}>
            <Paper className="pageContainer" style={{ marginTop: '0px' }}>
              <h4 className="pageContainerTitle">Dein letzter Stream
                <span style={{ float: 'right' }}>
                  <Button variant="contained" color="primary">Aktualisieren</Button>
                </span>
              </h4>
              <small>Hier findest du die Statistiken deines letzten, von Twasi erfassten Streams.</small>
              <Grid style={{ marginTop: '15px' }} container spacing={16}>
                <Grid item lg={6}>
                  <TextField
                    label="Titel"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    label="Spiel"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
            <Paper className="pageContainer" style={{ height: '200px', paddingRight: '0px', paddingLeft: '0px' }}>
              <h4 className="pageContainerTitle" style={{ textAlign: 'center' }}>
                Zuschauerverlauf
              </h4>

              <ResponsiveContainer height='100%' width='100%'>
                <AreaChart margin={{ top: 50, right: 0, left: 0, bottom: 0 }} data={data}>
                  {/*
                  <ReferenceArea x1={0} x2={20} y1={985} y2={1000} fill="#0088FE" fillOpacity="1">
                    <Label value="Minecraft" fill="#b7b7b7" offset={10} position="top" />
                  </ReferenceArea>
                  <ReferenceArea x1={0} x2={20} y1={0} y2={1000} fill="#0088FE" fillOpacity=".1"/>
                  <ReferenceArea x1={20} x2={50} y1={985} y2={1000} fill="#00C49F" fillOpacity="1">
                    <Label value="Grand Theft Auto V" fill="#b7b7b7" offset={10} position="top" />
                  </ReferenceArea>
                  <ReferenceArea x1={20} x2={50} y1={0} y2={1000} fill="#00C49F" fillOpacity=".1"/>
                  <ReferenceArea x1={50} x2={98} y1={985} y2={1000} fill="#FFBB28" fillOpacity="1">
                    <Label value="Red Dead Redemption 2" fill="#b7b7b7" offset={10} position="top" />
                  </ReferenceArea>
                  <ReferenceArea x1={50} x2={98} y1={0} y2={1000} fill="#FFBB28" fillOpacity=".1"/>
                  */}
                  <Tooltip/>
                  <Area type='monotone' dataKey='earn' strokeWidth='0' fill={COLORS[0]} fillOpacity="1" />
                </AreaChart>
              </ResponsiveContainer>

            </Paper>
            <Row>
              <Col sm={6}>
                <Paper className="pageContainer" style={{ height: '300px', paddingRight: '0px', paddingLeft: '0px' }}>
                  <h4 className="pageContainerTitle" style={{ textAlign: 'center' }}>
                    Genutzte Befehle
                  </h4>
                  <ResponsiveContainer height='100%' width='100%'>
                    <PieChart width={730} height={250}
                        margin={{top: 15, right: 0, left: 0, bottom: 0}}>
                      <Tooltip/>
                      <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} strokeWidth="0" fillOpacity="1">
                      {
                      	data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                      }
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </Paper>
              </Col>
              <Col sm={6}>
                <Paper className="pageContainer" style={{ height: '300px', paddingRight: '0px', paddingLeft: '0px' }}>
                  <h4 className="pageContainerTitle" style={{ textAlign: 'center' }}>
                    Gespielte Spiele
                  </h4>
                  <ResponsiveContainer height='100%' width='100%'>
                    <BarChart backgroundOpacity=".1" width={600} height={300} data={data02}
                        margin={{top: 15, right: 0, left: 0, bottom: 0}}>
                     <Tooltip cursor={{ fill: '#283c42' }} />
                     <Bar dataKey="pv" fill="#00aeae">
                     {
                       data02.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                     }
                     </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Paper>
              </Col>
            </Row>
          </Col>
          <Col sm={3}>
              <div>
                <List dense style={{ padding: '0px' }}>
                  <Paper className="pageContainer" style={{ padding: '0px', margin: '23px 0px 0px 0px' }}>
                    <ListItem>
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">1564184945</h4>
                        <small>Stream ID</small>
                      </Col>
                    </Row>
                    <TooltipM title="Jetzt Live" placement="top">
                      <Icon
                        color="secondary"
                        style={{ position: 'absolute', right: '17px', fontSize: '15px' }}
                      >
                        brightness_1
                      </Icon>
                    </TooltipM>
                    </ListItem>

                    <ListItem className="darkershade">
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">13:37</h4>
                        <small>Dauer</small>
                      </Col>
                    </Row>
                    <TooltipM title="+ 5:12" placement="top">
                      <Icon
                        color="primary"
                        style={{ position: 'absolute', right: '13px' }}
                      >
                        trending_up
                      </Icon>
                    </TooltipM>
                    </ListItem>

                    <ListItem>
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">1.243</h4>
                        <small>Chatnachrichten</small>
                      </Col>
                    </Row>
                    <TooltipM title="+ 125" placement="top">
                      <Icon
                        color="primary"
                        style={{ position: 'absolute', right: '13px' }}
                      >
                        trending_up
                      </Icon>
                    </TooltipM>
                    </ListItem>

                    <ListItem className="darkershade">
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">354</h4>
                        <small>Befehle ausgeführt</small>
                      </Col>
                    </Row>
                    <TooltipM title="- 5" placement="top">
                      <Icon
                        color="secondary"
                        style={{ position: 'absolute', right: '13px' }}
                      >
                        trending_down
                      </Icon>
                    </TooltipM>
                    </ListItem>

                    <ListItem>
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">54</h4>
                        <small>Follower +</small>
                      </Col>
                    </Row>
                    <TooltipM title="+- 0" placement="top">
                      <Icon
                        style={{ position: 'absolute', right: '13px', color: '#da7720' }}
                      >
                        trending_flat
                      </Icon>
                    </TooltipM>
                    </ListItem>

                    <ListItem className="darkershade">
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">263</h4>
                        <small>Aufrufe +</small>
                      </Col>
                    </Row>
                    <TooltipM title="+- 0" placement="top">
                      <Icon
                        style={{ position: 'absolute', right: '13px', color: '#da7720' }}
                      >
                        trending_flat
                      </Icon>
                    </TooltipM>
                    </ListItem>

                    <ListItem>
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">32</h4>
                        <small>Zuschauer Maximum</small>
                      </Col>
                    </Row>
                    <TooltipM title="+ 7" placement="top">
                      <Icon
                        color="primary"
                        style={{ position: 'absolute', right: '13px' }}
                      >
                        trending_up
                      </Icon>
                    </TooltipM>
                    </ListItem>

                    <ListItem className="darkershade">
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">25</h4>
                        <small>Zuschauer Durchschnitt</small>
                      </Col>
                    </Row>
                    <TooltipM title="- 2" placement="top">
                      <Icon
                        color="secondary"
                        style={{ position: 'absolute', right: '13px' }}
                      >
                        trending_down
                      </Icon>
                    </TooltipM>
                    </ListItem>

                    <ListItem>
                    <Row>
                      <Col sm={12}>
                        <h4 className="pageContainerTitle">197</h4>
                        <small>Individuelle Zuschauer</small>
                      </Col>
                    </Row>
                    <TooltipM title="- 50" placement="top">
                      <Icon
                        color="secondary"
                        style={{ position: 'absolute', right: '13px' }}
                      >
                        trending_down
                      </Icon>
                    </TooltipM>
                    </ListItem>
                  </Paper>
                </List>
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Overview.propTypes = {};

export default withRouter(connect()(Overview));
