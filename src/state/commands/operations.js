import actions from './actions';
import selectors from './selectors';

import {getGraph} from '../../services/graphqlService';

const {
    updateAccessLevels,
    updateCommands,
    updateSingleCommand,
    updateAddCommand,
    updateEditCommand,
    updateDelCommand,
    updateDisabled,
    updateLoaded,
    updateLoading,
    updateActionSuccess
} = actions;

const loadAccessLevels = () => dispatch => {
    dispatch(getGraph('accessLevels{name,value}', 'commands')).then(data => {
        dispatch(updateAccessLevels(data.accessLevels));
    })
};

const loadCommands = () => dispatch => {
    dispatch(updateLoading(true));
    dispatch(getGraph('commands{id,name,content,uses,cooldown,accessLevel{name,value}}', 'commands')).then(data => {
        if (data == null) {
            dispatch(updateDisabled(true));
            return;
        }
        dispatch(updateCommands(data.commands));
    }).finally(() => {
        dispatch(updateLoading(false))
        dispatch(updateLoaded(true))
    });
};

const addCommand = (name, content, cooldown, accessLevel) => dispatch => {
    dispatch(updateActionSuccess(false));
    dispatch(getGraph(`create(name: "${name}", content: "${content}", cooldown: ${cooldown}, accessLevel: "${accessLevel}"){id}`, 'commands')).then(
    data => {
      dispatch(updateAddCommand(data.commands));
      dispatch(updateActionSuccess(true));
    }).finally(() => {
      dispatch(updateActionSuccess(false));
    });
};

const editCommand = (id, name, content, cooldown, accessLevel) => dispatch => {
    dispatch(updateActionSuccess(false));
    dispatch(getGraph(`update(id: "${id}", name: "${name}", content: "${content}", cooldown: ${cooldown}, accessLevel: "${accessLevel}"){id}`, 'commands')).then(
    data => {
      dispatch(updateEditCommand(data.commands));
      dispatch(updateActionSuccess(true));
    }).finally(() => {
      dispatch(updateActionSuccess(false));
    });
};

const delCommand = id => dispatch => {
    dispatch(updateActionSuccess(false));
    dispatch(getGraph(`delete(id: "${id}"){id}`, 'commands')).then(
    data => {
      dispatch(updateDelCommand(data.commands));
      dispatch(updateActionSuccess(true));
    }).finally(() => {
      dispatch(updateActionSuccess(false));
    });
};

const loadSingleCommand = id => dispatch => {
    dispatch(updateActionSuccess(false));
    dispatch(getGraph(`single(id: "${id}"){id}`, 'commands')).then(
    data => {
      dispatch(updateSingleCommand(data.commands));
      dispatch(updateActionSuccess(true));
    }).finally(() => {
      dispatch(updateActionSuccess(false));
    });
};

const verifyData = () => (dispatch, getState) => {
    const state = getState();

    const isLoaded = selectors.isLoaded(state);

    if (!isLoaded) {
        dispatch(loadCommands());
    }
};

export default {
    loadCommands,
    loadAccessLevels,
    loadSingleCommand,
    addCommand,
    editCommand,
    delCommand,
    verifyData,
    updateLoaded,
    updateLoading,
    updateActionSuccess
};
