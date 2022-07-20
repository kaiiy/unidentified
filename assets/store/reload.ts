import { reactive } from '@vue/composition-api'

export const reload = reactive({
  // スペースキーによるリロードが可能か
  activeSpace: true,
})
