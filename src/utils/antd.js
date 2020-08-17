import Vue from "vue";
import { message } from "ant-design-vue";
import {
  Icon,
  Divider,
  Row,
  Col,
  Table,
  Button,
  FormModel,
  Input,
  Select,
  DatePicker,
  Checkbox,
  Radio,
  Upload,
  Modal,
  Tabs
} from "ant-design-vue";

const antdComponents = [Icon, Divider, Row, Col, Table, Button, FormModel, Input, Select, DatePicker, Checkbox, Radio, Upload, Modal, Tabs];
antdComponents.forEach(item => {
  Vue.use(item);
});
Vue.prototype.$message = message;
