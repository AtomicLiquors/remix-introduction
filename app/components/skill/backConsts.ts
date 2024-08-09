const backConsts = {
    Spring: { 
      name: 'Spring', 
      color: '#6DB33F' 
    },
    MyBatis: { 
      name: 'MyBatis', 
      color: '#B52E31' 
    },
    MySQL: { 
      name: 'MySQL', 
      color: '#4479A1' 
    },
    NodeJS: { 
      name: 'Node.js', 
      color: '#339933' 
    },
    Express: { 
      name: 'Express', 
      color: '#000000' 
    },
    Django: { 
      name: 'Django', 
      color: '#092E20' 
    },
    Flask: { 
      name: 'Flask', 
      color: '#000000' 
    },
    RubyOnRails: { 
      name: 'Ruby on Rails', 
      color: '#CC0000' 
    },
    PostgreSQL: { 
      name: 'PostgreSQL', 
      color: '#336791' 
    },
    MongoDB: { 
      name: 'MongoDB', 
      color: '#47A248' 
    }
  } as const;
  
  type BackConst = typeof backConsts[keyof typeof backConsts];