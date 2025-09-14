import { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: '', description: '' });
  const [draggedItem, setDraggedItem] = useState(null);

  const addTask = () => {
    if (newTask.title.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: newTask.title,
          description: newTask.description,
          completed: false
        }
      ]);
      setNewTask({ title: '', description: '' });
    }
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditData({ title: task.title, description: task.description });
  };

  const saveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editingId
        ? { ...task, title: editData.title, description: editData.description }
        : task
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Функции для перетаскивания
  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
    e.target.style.opacity = '0.4';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const draggedOver = e.currentTarget;
    draggedOver.classList.add('bg-blue-50');
    
    setTimeout(() => {
      draggedOver.classList.remove('bg-blue-50');
    }, 200);
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setDraggedItem(null);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;
    
    const newTasks = [...tasks];
    const item = newTasks[draggedItem];
    
    newTasks.splice(draggedItem, 1);

    newTasks.splice(index, 0, item);
    
    setTasks(newTasks);
    setDraggedItem(null);
  };

  // SVG иконки
  const EditIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  const CancelIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const DeleteIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );

  const DragIcon = () => (
    <svg className="w-4 h-4 cursor-move" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  );

  return (
    <div className="min-h-[400px] bg-gray-100 py-4 md:py-8 px-2 ">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4 md:p-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Todo List</h1>
        
        {/* Форма добавления */}
        <div className="mb-4 md:mb-6 space-y-3">
          <input
            type="text"
            placeholder="Заголовок задачи"
            value={newTask.title}
            onChange={(e) => setNewTask({...newTask, title: e.target.value})}
            className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <textarea
            placeholder="Описание задачи"
            value={newTask.description}
            onChange={(e) => setNewTask({...newTask, description: e.target.value})}
            rows="2"
            className="w-full px-3 py-2 md:px-4 md:py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={addTask}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Добавить задачу
          </button>
        </div>

        {/* Список задач */}
        <div className="space-y-3 md:space-y-4">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500 py-4">Задачи отсутствуют</p>
          ) : (
            tasks.map((task, index) => (
              <div 
                key={task.id} 
                className="p-3 md:p-4 bg-gray-50 rounded-lg shadow relative group"
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                onDrop={(e) => handleDrop(e, index)}
              >
                {editingId === task.id ? (
                  // Режим редактирования
                  <div className="space-y-3">
                    <input
                      value={editData.title}
                      onChange={(e) => setEditData({...editData, title: e.target.value})}
                      className="w-full px-3 py-1 border rounded text-sm md:text-base"
                    />
                    <textarea
                      value={editData.description}
                      onChange={(e) => setEditData({...editData, description: e.target.value})}
                      className="w-full px-3 py-1 border rounded text-sm md:text-base"
                      rows="2"
                    />
                    <div className="flex space-x-2 justify-end">
                      <button
                        onClick={saveEdit}
                        className="p-1 md:p-2 text-green-600 hover:bg-green-100 rounded flex items-center"
                      >
                        <CheckIcon />
                        <span className="ml-1 text-sm md:text-base">Сохранить</span>
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="p-1 md:p-2 text-red-600 hover:bg-red-100 rounded flex items-center"
                      >
                        <CancelIcon />
                        <span className="ml-1 text-sm md:text-base">Отмена</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  // Режим просмотра
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-semibold text-base md:text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                        {task.title}
                      </h3>
                      <div className="flex space-x-1 md:space-x-2">
                        <div 
                          className="p-1 md:p-2 text-gray-400 hover:text-gray-600 cursor-move opacity-0 group-hover:opacity-100 transition-opacity"
                          draggable
                          onDragStart={(e) => handleDragStart(e, index)}
                        >
                          <DragIcon />
                        </div>
                        <button
                          onClick={() => startEditing(task)}
                          className="p-1 md:p-2 text-gray-600 hover:bg-gray-200 rounded flex items-center"
                          title="Редактировать"
                        >
                          <EditIcon />
                        </button>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="p-1 md:p-2 text-red-600 hover:bg-red-100 rounded flex items-center"
                          title="Удалить"
                        >
                          <DeleteIcon />
                        </button>
                      </div>
                    </div>
                    {task.description && (
                      <p className={`text-gray-600 text-sm md:text-base ${task.completed ? 'line-through' : ''}`}>
                        {task.description}
                      </p>
                    )}
                    <div className="flex items-center pt-2">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleCompletion(task.id)}
                        className="mr-2 h-4 w-4 text-blue-600 rounded"
                      />
                      <span className="text-xs md:text-sm text-gray-500">
                        {task.completed ? 'Завершена' : 'Активна'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;