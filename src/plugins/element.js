import Vue from 'vue'
import { Button, Form, FormItem, Input, MessageBox, Message, Row, Col, Avatar } from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Avatar)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message = Message
