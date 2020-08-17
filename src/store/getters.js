export default {
  panes: state => {
    return state.panes.length ? state.panes : ["dashboard"];
  }
};
