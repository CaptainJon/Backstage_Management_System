import Vue from 'vue'
import { Button, Form, FormItem, Input, MessageBox, Message, Row, Col, Avatar, Menu, MenuItem, Submenu, Header, Aside, Main, Container, Breadcrumb, BreadcrumbItem, Card, Table, TableColumn, DatePicker, Progress, ButtonGroup, Tooltip, RadioGroup, RadioButton, Select, Option, Dialog, Loading, Pagination } from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Avatar)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Progress)
Vue.use(ButtonGroup)
Vue.use(Tooltip)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Loading)
Vue.use(Pagination)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message
