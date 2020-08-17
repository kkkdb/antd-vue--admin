export default {
  setState(state, data) {
    for (let item in data) {
      state[item] = data[item];
      localStorage.setItem(item, typeof data[item] === "object" ? JSON.stringify(data[item]) : data[item]);
    }
  },
  removePane(state, { activeKey, targetKey, callback }) {
    let lastIndex;
    state.panes.forEach((pane, i) => {
      if (pane === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = state.panes.filter(pane => pane !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex];
      } else {
        activeKey = panes[0];
      }
    }
    state.panes = panes;
    localStorage.setItem("panes", JSON.stringify(panes));
    callback && callback(activeKey);
  }
};
