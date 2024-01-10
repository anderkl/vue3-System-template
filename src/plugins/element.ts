import {
  ElButton,
  ElSelect,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElPopover,
  ElMessage,
  ElForm,
  ElFormItem,
  ElLoading,
  ElInput,
  ElTooltip,
  ElDialog,
  ElScrollbar,
  ElMenu,
  ElMenuItem,
  ElSubMenu
} from 'element-plus'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
export default function loadComponent(app: any) {
  app.use(ElementPlus, { size: 'small', zIndex: 3000 })
  app.use(ElButton)
  app.use(ElSelect)
  app.use(ElBreadcrumb)
  app.use(ElBreadcrumbItem)
  app.use(ElIcon)
  app.use(ElDropdown)
  app.use(ElDropdownMenu)
  app.use(ElDropdownItem)
  app.use(ElPopover)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElLoading)
  app.use(ElInput)
  app.use(ElTooltip)
  app.use(ElDialog)
  app.use(ElScrollbar)
  app.use(ElMenu)
  app.use(ElSubMenu)
  app.use(ElMenuItem)

  app.config.globalProperties.$message = ElMessage
}
