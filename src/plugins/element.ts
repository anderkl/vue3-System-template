import { createApp } from 'vue'
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
  ElSubMenu,
  ElCard
} from 'element-plus'
// import ElementPlus from 'element-plus'
export default function loadComponent(app: ReturnType<typeof createApp>) {
  // app.use(ElementPlus, { size: 'small', zIndex: 3000 })
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
  app.use(ElCard)

  app.config.globalProperties.$message = ElMessage
}
