// Função retorna um novo array com apenas as descrições das tarefas
const getTasksDescriptions = (tasksList) => {
  const taskDescription = tasksList.map(task => task.description);
  return taskDescription;
}


// Função para filtrar tarefas por prioridade
const filterTasksByPriority = (tasksList, priority) => {

  const filterPriority = tasksList.filter(element => element.priority.toLowerCase() === priority.toLowerCase());
  return filterPriority;
}


// Função para obter uma task pelo seu id
const findTaskById = (tasksList, id) => {
  const filterId = tasksList.find(element => element.id === id);
  return filterId;
}


//Adicionando uma nova função
const removeTask = (tasksList, id) => {
  const filterId = tasksList.findIndex(element => element.id === id)
  
  if (filterId > -1) {
    const remove = tasksList.splice(filterId, 1);
    return remove;
  }
  return "Tarefa não encontrada";
}
