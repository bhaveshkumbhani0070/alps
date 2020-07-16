const initialState = {
  todos: [{
    id: 213,
    title: 'Create the main page design',
    description: 'Selfies VHS hashtag skateboard art party vinyl bicycle rights. Venmo ugh hell of freegan knausgaard gentrify vape.'+ 
    'Hashtag selfies butcher brooklyn thundercats',
    completed: false,
    priority: 'high',
  },
  {
    id: 214,
    title: 'Write to Sarah',
    description: 'Selfies VHS hashtag skateboard art party vinyl bicycle rights. Venmo ugh hell of freegan knausgaard gentrify vape.'+ 
    'Hashtag selfies butcher brooklyn thundercats',
    completed: false,
    priority: 'low',
  },
  {
    id: 215,
    title: 'Make a mind-map',
    description: 'Selfies VHS hashtag skateboard art party vinyl bicycle rights. Venmo ugh hell of freegan knausgaard gentrify vape.'+ 
    'Hashtag selfies butcher brooklyn thundercats',
    completed: false,
    priority: 'medium',
  },
  {
    id: 216,
    title: 'Write a text',
    description: 'Selfies VHS hashtag skateboard art party vinyl bicycle rights. Venmo ugh hell of freegan knausgaard gentrify vape.'+ 
    'Hashtag selfies butcher brooklyn thundercats',
    completed: true,
    priority: 'low',
  },
  {
    id: 217,
    title: 'Make a blog post about marketing',
    description: 'Selfies VHS hashtag skateboard art party vinyl bicycle rights. Venmo ugh hell of freegan knausgaard gentrify vape.'+ 
    'Hashtag selfies butcher brooklyn thundercats',
    completed: true,
    priority: 'low',
  }],
  priorityFilter: '',
};

function getId(state) {
  return state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          title: action.title,
          description: action.description,
          priority: action.priority,
          completed: false,
          id: getId(state),
        }, ...state.todos],
      });
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(todo => (todo.id === action.id
          ? Object.assign({}, todo, {
            updated: false,
            completed: !todo.completed,
          }) : todo)),
      });
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id),
      });
    case 'PRIORITY_FILTER':
      return Object.assign({}, state, {
        priorityFilter: action.priorityFilter,
      });
    default:
      return state;
  }
};
export default todoReducer;
