export type Priority = 'low' | 'medium' | 'high'
export type FilterType = 'all' | 'pending' | 'completed' | 'high'

export interface Task {
  id: number
  title: string
  description: string
  dueDate: string
  priority: Priority
  completed: boolean
  category: string
}

export function getPriorityColor(priority: Priority): string {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800 border-red-200'
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200'
    case 'low':
      return 'bg-green-100 text-green-800 border-green-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case '工作':
      return 'bg-blue-500'
    case '生活':
      return 'bg-purple-500'
    case '健康':
      return 'bg-green-500'
    case '学习':
      return 'bg-orange-500'
    default:
      return 'bg-gray-500'
  }
}

export function getPriorityText(priority: Priority): string {
  switch (priority) {
    case 'high':
      return '高'
    case 'medium':
      return '中'
    case 'low':
      return '低'
    default:
      return priority
  }
}

export function calculateProgress(tasks: Task[]): number {
  if (tasks.length === 0) return 0
  return Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)
}
