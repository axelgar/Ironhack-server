'use strict';

const units = [{
  title: 'HTML Intro 1',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: ['www.google.com'],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Intro 1',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'P.P.',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 30,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Semantics & A11y 1',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Functions & Scope',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays 1',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Objects',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Intro',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Styling',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Responsive Web Design',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Flexbox',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays .map + .reduce + .filter',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays .sort + .reverse + . splice',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Intro 2',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Intro 2',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS functions scope',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Intro 3',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Conditionals & Loops',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Semantics & A11y 2',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Codepen Arrays & Objects',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Layout',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Links',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Typography',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML + CSS Add Header & Footer',
  mandatory: true,
  category: 'lessons',
  subCategory: 'code-along',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Diagrams',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Role Play Debugger',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Diagram',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'CSS Diagram',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Role-Play Card Deck Arrays',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Array functions diagrams',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Role-Play Bubble Sort',
  mandatory: true,
  category: 'lessons',
  subCategory: 'activity',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'History of the Web',
  mandatory: true,
  category: 'lessons',
  subCategory: 'talk',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Basics',
  mandatory: true,
  category: 'P&R',
  subCategory: 'P.P.',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 4',
  mandatory: true,
  category: 'P&R',
  subCategory: 'P.P.',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Intro 4',
  mandatory: true,
  category: 'P&R',
  subCategory: 'D.E.',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Functions & Arrays',
  mandatory: true,
  category: 'P&R',
  subCategory: 'D.E.',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 5',
  mandatory: true,
  category: 'P&R',
  subCategory: 'D.E.',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS all time movies 1',
  mandatory: true,
  category: 'P&R',
  subCategory: 'D.E.',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Intro 5',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTML Semantics & A11y 3',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 1',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 2',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone (CSS Responsive) 1',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Functions',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays 2',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Student Pages CSS',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS all time movies 2',
  mandatory: true,
  category: 'P&R',
  subCategory: 'review',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'JS Arrays 3',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone 3',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Slack Clone (CSS Responsive) 2',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Student Pages CSS Everything',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Welcome and Orientation',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'People & Stories',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Class Guidelines',
  mandatory: true,
  category: 'rituals',
  subCategory: 'deck',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'S.U. + K.O. 1',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 2',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 3',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 4',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 5',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'Course Overview',
  mandatory: true,
  category: 'rituals',
  subCategory: 'deck',
  links: [],
  learningObjectives: '1',
  module: '1',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'BREAK 1',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 2',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'Lunch',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 60
}, {
  title: 'BREAK 3',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'BREAK 4',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 15
}, {
  title: 'checkout',
  mandatory: false,
  category: 'break',
  subCategory: 'break',
  module: '1',
  duration: 0
}, {
  title: 'ES6',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'ES6 =>',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'ES6 Classes',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'ES6 Extra',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Node JS Intro',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Node JS & NPM & Common JS',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTTP',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Express',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'MongoDB',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Promises',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Mongoose & Promises',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Express GET / POST',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Express Generator',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Mongoose & Express (List & Read)',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Mongoose & Express (Create & Update)',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Mongoose & Express (Docs Relationships)',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Backend DEV',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'HTTP Server',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Express & Mongoose (List Standarts)',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Layout Template Partials',
  mandatory: true,
  category: 'lessons',
  subCategory: 'demo',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'M1 Retrospective',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'M2 Kick-off',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'S.U. + K.O. 6',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 7',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 8',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 9',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 10',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'Mob Website ES6',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Ironbeers',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Game M1 ES6',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Intro NodeJS',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Express Basic Site',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Advanced Querying',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '2',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'Angular Intro',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Angular CLI',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Typescript Intro',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Directives',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Authentication',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'SPA & REST',
  mandatory: true,
  category: 'lessons',
  subCategory: 'lecture',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'SPA iMemeDB',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'Banana Box',
  mandatory: true,
  category: 'P&R',
  subCategory: 'practice',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat lectus et felis ullamcorper, nec consequat sem semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum blandit leo quis nisl malesuada euismod. Vivamus ac neque elementum, pharetra ligula eu, pellentesque libero. Morbi dignissim placerat interdum. Morbi urna turpis, efficitur quis quam eget, rutrum luctus enim. Proin ex risus, fringilla vel malesuada eu, maximus vel nulla. Etiam sollicitudin mauris vel porta aliquet. Ut sollicitudin urna ultrices, facilisis nisl sit amet, sodales est. In commodo sodales lectus, nec maximus nisl dignissim in.'
}, {
  title: 'M2 Retrospective',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'M3 Kick-off',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Lorem ipsum dolor sit amet.'
}, {
  title: 'S.U. + K.O. 11',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 12',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 13',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 14',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}, {
  title: 'S.U. + K.O. 15',
  mandatory: true,
  category: 'rituals',
  subCategory: 'ritual',
  links: [],
  learningObjectives: '1',
  module: '3',
  duration: 60,
  description: 'Daily Standup and calendar review + KO'
}
];

module.exports = units;
