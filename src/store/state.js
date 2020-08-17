export default {
  user_info: {
    id: "5e42284c33e0235a7e5145e7",
    name: "系统管理员",
    email: "375786117@qq.com",
    role: "admin",
    sex: 1,
    avatar: "//www.gravatar.com/avatar/ae6d4e19f36583b6c0fb717e654b45a9?s=200&r=pg&d=mm"
  },
  exclude: null,
  panes: JSON.parse(localStorage.getItem("panes")) || ["dashboard"],
  pagination_setting: {
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "30", "40"]
  },
  menu_list: [
    {
      view: "dashboard",
      icon: "dashboard",
      children: []
    },
    {
      view: "orderManage",
      icon: "unordered-list",
      children: [
        {
          view: "originalOrders"
        },
        {
          view: "omsOrders"
        },
        {
          view: "originalAfterSales"
        },
        {
          view: "omsAfterSales"
        },
        {
          view: "batchModifyOrder"
        },
        {
          view: "returnToStorage"
        }
      ]
    }
  ]
};
