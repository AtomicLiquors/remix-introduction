const frontConsts = {
    HTML: { 
      name: 'HTML', 
      color: '#E34F26',
    },
    CSS: { 
      name: 'CSS', 
      color: '#1572B6' 
    },
    JavaScript: { 
      name: 'JavaScript', 
      color: '#F7DF1E' 
    },
    TypeScript: { 
      name: 'TypeScript', 
      color: '#3178C6' 
    },
    React: { 
      name: 'React', 
      color: '#61DAFB' 
    },
    Vue: { 
      name: 'Vue.js', 
      color: '#42B883' 
    },
    Angular: { 
      name: 'Angular', 
      color: '#DD0031' 
    },
    SASS: { 
      name: 'SASS', 
      color: '#CC6699' 
    },
    Tailwind: { 
      name: 'Tailwind CSS', 
      color: '#06B6D4' 
    },
    Bootstrap: { 
      name: 'Bootstrap', 
      color: '#7952B3' 
    }
  } as const satisfies Record<string, SkillConst>;
  
  type FrontConst = typeof frontConsts[keyof typeof frontConsts];