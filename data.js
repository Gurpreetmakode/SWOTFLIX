const swotData = {
  gurpreet: {
    name: "Gurpreet",
    subtitle: "The Analytical Strategist",
    tagline: "Finance, data and structured thinking — with a habit of going one layer deeper.",
    avatar: "G",
    avatarClass: "avatar-gurpreet",
    heroClass: "hero-gurpreet",
    meta: ["Finance & Investments", "Quantitative", "Team-oriented"],
    categories: {
      strengths: [
        "Good analytical and research skills",
        "Experience with DCF and valuation",
        "Comfortable with Excel and quantitative work",
        "Comfortable with Python, R and data analysis",
        "Confident with large datasets",
        "Leadership and teamwork experience"
      ],
      weaknesses: [
        "Sometimes overanalyse problems",
        "Limited real-world corporate experience",
        "Still developing advanced coding/data skills",
        "Limited large-data experience",
        "Can spend too much time perfecting work",
        "Difficulty saying ‘No’ when already overloaded"
      ],
      opportunities: [
        "Stronger econometrics training",
        "Build deeper finance specialization",
        "Develop advanced modelling skills",
        "Gain Bloomberg experience",
        "Access industry-grade data"
      ],
      threats: [
        "Limited hands-on experience",
        "Danish language requirements",
        "Economic downturns affecting opportunities",
        "Stronger profiles from experienced peers",
        "AI automating basic analysis",
        "Risk of overcomplicating analysis"
      ]
    }
  },

  adam: {
    name: "Adam",
    subtitle: "The Data Investor",
    tagline: "A finance-first profile combining market knowledge, coding and empirical research.",
    avatar: "A",
    avatarClass: "avatar-adam",
    heroClass: "hero-adam",
    meta: ["Finance & Investment", "Empirical Research", "Market Data"],
    categories: {
      strengths: [
        "Strong Finance and Investment background",
        "Skilled in Python, R, Stata and Excel",
        "Experienced in handling large datasets",
        "Experience in financial regulation and ESG interest",
        "Familiar with Bloomberg and Datastream",
        "Familiar with Southeast Asian market conditions"
      ],
      weaknesses: [
        "Limited qualitative research experience",
        "Unable to communicate in Danish",
        "Less confident in spoken English fluency",
        "Limited experience in corporate ESG qualitative analysis"
      ],
      opportunities: [
        "Apply event-study and empirical finance methods",
        "Use CBS financial databases and research resources",
        "Collaborate with peers experienced in empirical research",
        "Use AI to support coding and analysis"
      ],
      threats: [
        "Possible restrictions on database access",
        "Dependence on group members’ availability",
        "Tight deadlines for completing the research project"
      ]
    }
  },

  sebastian: {
    name: "Sebastian",
    subtitle: "The Conceptual Connector",
    tagline: "Strong at connecting theory, data and business practice — especially in ESG contexts.",
    avatar: "S",
    avatarClass: "avatar-sebastian",
    heroClass: "hero-sebastian",
    meta: ["ESG Experience", "Conceptual Thinking", "Mixed Methods"],
    categories: {
      strengths: [
        "Strong critical and conceptual thinking",
        "Connecting theory, data and business practice",
        "Creative thinking and problem solving",
        "Communication skills",
        "Comfortable with data handling and analysis",
        "Both qualitative and quantitative research experience",
        "Team player",
        "Work experience within ESG"
      ],
      weaknesses: [
        "Tendency to overanalyse problems",
        "Struggle to accept something that is merely ‘good enough’",
        "Quantitative and technical analytics skills less developed than conceptual abilities",
        "Investment and financial market knowledge still developing"
      ],
      opportunities: [
        "Develop knowledge of financial markets",
        "Gain experience with available databases",
        "Combine quantitative and qualitative research",
        "Build more in-depth finance experience and knowledge"
      ],
      threats: [
        "Deadlines",
        "Student job can be time-consuming",
        "Stronger profiles from peers",
        "Chasing more skills instead of building real depth"
      ]
    }
  },

  team: {
    name: "Team",
    subtitle: "The Ensemble Cast",
    tagline: "Three complementary profiles combining finance, ESG, coding, conceptual thinking and teamwork.",
    avatar: "3",
    avatarClass: "avatar-team",
    heroClass: "hero-team",
    meta: ["Adam + Gurpreet + Sebastian", "Complementary Skills", "Cross-functional"],
    categories: {
      strengths: [
        "Strong combined finance and investment foundation",
        "Broad toolkit across Excel, Python, R, Stata and data analysis",
        "Balance of quantitative and qualitative research skills",
        "ESG, regulation and business-practice experience",
        "Experience with large datasets and financial databases",
        "Strong teamwork, communication and critical thinking"
      ],
      weaknesses: [
        "Shared tendency to overanalyse and perfect work",
        "Uneven depth across technical, qualitative and market skills",
        "Limited Danish language capability",
        "Some gaps in hands-on corporate experience",
        "Competing study and work commitments"
      ],
      opportunities: [
        "Combine mixed methods for stronger project outcomes",
        "Use CBS databases, Bloomberg and Datastream more deeply",
        "Develop advanced modelling and econometrics together",
        "Use AI to accelerate coding and analysis",
        "Turn complementary strengths into clearer role specialization",
        "Build deeper industry and ESG project experience"
      ],
      threats: [
        "Tight deadlines and workload pressure",
        "Dependence on everyone’s availability",
        "Database or data-access restrictions",
        "Strong competition from more experienced peers",
        "Economic conditions may reduce opportunities",
        "Overcomplicating the analysis instead of prioritising execution"
      ]
    }
  }
};

const categoryConfig = {
  strengths: {
    label: "Top Episodes",
    code: "S",
    description: "What already works exceptionally well",
    accent: "strength"
  },
  weaknesses: {
    label: "Plot Twists",
    code: "W",
    description: "Internal challenges that can change the storyline",
    accent: "weakness"
  },
  opportunities: {
    label: "Next Season",
    code: "O",
    description: "Where the story can grow next",
    accent: "opportunity"
  },
  threats: {
    label: "Plot Disruptors",
    code: "T",
    description: "External or situational risks to watch",
    accent: "threat"
  }
};

// One-line hover explanations used on the Netflix-style cards.
swotData.gurpreet.explanations = {
  strengths: [
    "Breaks complex questions into clear, evidence-based conclusions.",
    "Can translate assumptions into structured valuation models and investment logic.",
    "Uses spreadsheets confidently for modelling, analysis and decision support.",
    "Can work across coding and statistical tools to analyse financial data.",
    "Comfortable cleaning, organising and extracting insights from large datasets.",
    "Works well across teams and can take ownership when coordination is needed."
  ],
  weaknesses: [
    "Can spend too long testing alternatives before committing to a conclusion.",
    "Academic experience is stronger than direct exposure to day-to-day corporate decisions.",
    "Advanced automation and programming depth is still being built.",
    "Experience exists, but exposure to truly industry-scale datasets is still limited.",
    "High standards can turn useful polishing into unnecessary extra work.",
    "Taking on too many tasks can dilute focus across competing priorities."
  ],
  opportunities: [
    "Deeper econometrics can strengthen causal analysis and empirical finance work.",
    "A sharper finance niche can turn broad skills into a clearer professional edge.",
    "More advanced modelling can connect finance theory with real investment decisions.",
    "Hands-on Bloomberg use can strengthen market research and data fluency.",
    "Professional datasets can make analysis more realistic and industry-relevant."
  ],
  threats: [
    "Employers may favour candidates who already have direct industry execution experience.",
    "Some local roles may remain harder to access without Danish proficiency.",
    "Weaker markets can reduce internships, hiring and project opportunities.",
    "Peers with longer work histories can appear more immediately job-ready.",
    "Routine analytical tasks are increasingly automated, raising the value of judgement.",
    "Too much complexity can slow delivery when a simpler answer would be stronger."
  ]
};

swotData.adam.explanations = {
  strengths: [
    "Brings a solid finance base that supports investment and market-focused analysis.",
    "Can move between several analytical tools depending on the research problem.",
    "Experienced in managing and analysing datasets with many observations and variables.",
    "Connects financial analysis with regulation and emerging ESG considerations.",
    "Can work with professional market-data platforms used in finance research.",
    "Adds regional insight into Southeast Asian markets and their operating context."
  ],
  weaknesses: [
    "Less experience with interview-based, interpretive and other qualitative methods.",
    "Danish language requirements can narrow access to some local opportunities.",
    "Spoken English confidence can affect how easily complex ideas are presented live.",
    "Corporate ESG assessment is less developed than the quantitative finance toolkit."
  ],
  opportunities: [
    "Event studies can turn finance theory into rigorous empirical evidence.",
    "CBS resources provide access to richer data and more advanced research questions.",
    "Working with complementary teammates can broaden both methods and interpretation.",
    "AI can speed repetitive coding while leaving more time for judgement and analysis."
  ],
  threats: [
    "Licensing limits can block the exact data needed for a planned analysis.",
    "Progress can slow when key tasks depend on everyone being available at once.",
    "Compressed timelines increase the risk of trading depth for completion."
  ]
};

swotData.sebastian.explanations = {
  strengths: [
    "Challenges assumptions and builds clear conceptual arguments before jumping to answers.",
    "Links academic ideas to evidence and practical business implications.",
    "Generates alternative ways to frame problems when the obvious route is weak.",
    "Can communicate complex ideas clearly across different audiences.",
    "Comfortable organising data and using it to support broader arguments.",
    "Can combine numerical evidence with qualitative interpretation in one analysis.",
    "Contributes collaboratively and adapts well to shared project responsibilities.",
    "Brings practical ESG exposure that grounds sustainability discussions in reality."
  ],
  weaknesses: [
    "Can continue analysing after the decision-relevant insight is already clear.",
    "High standards can make it difficult to stop once work is already strong enough.",
    "Technical analytics currently lag behind stronger conceptual and interpretive skills.",
    "Finance and market knowledge is still catching up with the ESG and conceptual base."
  ],
  opportunities: [
    "Deeper market knowledge can complement existing ESG and conceptual strengths.",
    "More database exposure can make research faster, broader and more evidence-driven.",
    "Mixed-method work can become a distinctive advantage across ESG and finance projects.",
    "Stronger finance depth can widen the range of roles and projects that fit the profile."
  ],
  threats: [
    "Short deadlines can constrain the depth that strong conceptual work usually needs.",
    "A demanding student job can compete directly with study and project time.",
    "Peers with deeper technical or finance backgrounds may look stronger on narrow criteria.",
    "Constantly adding new skills can prevent any one capability from becoming distinctive."
  ]
};

swotData.team.explanations = {
  strengths: [
    "Together the team covers core finance, investment and market-analysis foundations.",
    "The group can choose from several coding, spreadsheet and statistical tools.",
    "Quantitative depth is balanced by qualitative and conceptual interpretation.",
    "The team combines ESG, regulation and practical business perspectives.",
    "Large-data experience is reinforced by familiarity with professional finance databases.",
    "Different working styles still converge around collaboration and critical thinking."
  ],
  weaknesses: [
    "Several members can overanalyse, making speed and prioritisation a shared challenge.",
    "Capabilities are broad, but technical and qualitative depth is uneven across members.",
    "Limited Danish ability can affect access to locally focused projects and employers.",
    "Academic strength is ahead of direct corporate execution in some areas.",
    "Jobs, coursework and projects create competing demands on the same limited time."
  ],
  opportunities: [
    "Mixed methods let the team answer questions that one research style alone may miss.",
    "Deeper use of professional databases can raise both realism and analytical quality.",
    "Members can learn advanced modelling and econometrics from one another.",
    "AI can remove repetitive work and leave more time for interpretation and judgement.",
    "Clear role ownership can turn different strengths into a more efficient workflow.",
    "Real ESG and industry projects can convert academic capability into applied experience."
  ],
  threats: [
    "Heavy workloads can create bottlenecks when several deadlines arrive together.",
    "The team becomes vulnerable when one person owns a task but is unavailable.",
    "Restricted data access can force last-minute changes to otherwise strong research plans.",
    "More experienced teams may have an advantage in applied or employer-facing projects.",
    "Weak economic conditions can reduce the number of attractive external opportunities.",
    "A sophisticated team can still lose impact by making the final answer too complicated."
  ]
};
