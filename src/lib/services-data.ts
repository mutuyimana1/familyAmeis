export interface ServiceDetail {
    slug: string;
    title: string;
    shortDescription: string;
    paragraphs: string[];
    listTitle?: string;
    listItems?: string[];
}

export const servicesData: ServiceDetail[] = [
    {
        slug: "family-therapy",
        title: "Family Therapy Services",
        shortDescription: "Structured, short-term or long-term counseling to improve communication and strengthen relationships.",
        paragraphs: [
            "Family therapy services provide structured, short-term, or long-term counseling to improve communication, resolve conflicts, and strengthen relationships among family members.",
            "These services address issues like divorce, behavioral problems, addiction, and major life changes by focusing on interaction patterns rather than blaming individuals. Sessions typically last 50-90 minutes and can involve various combinations of family members."
        ]
    },
    {
        slug: "relationship-family-problems",
        title: "Relationship & Family Problems",
        shortDescription: "Addressing relationship problems with your spouse, partner, children and/or family of origin.",
        paragraphs: [
            "Relationship problems with your spouse, partner, children and/or family of origin can cause tremendous stress and unhappiness.",
            "Marriages, remarriages and complex extended family structures can make many ordinary situations difficult, filled with conflict and tension."
        ],
        listTitle: "Here are some typical situations that a trained family oriented therapist can assist with:",
        listItems: [
            "Your relationship with your siblings and/or parents has become strained",
            "Your new marriage/relationship hasn’t been accepted by your family and/or your partner’s family",
            "Your intimate dating relationships seem to end too soon",
            "You have frequent conflicts and arguments with friends, family members or people at work",
            "You are involved in a family business and tension has increased at home",
            "Other families seem to get along much better than yours does",
            "Family members seem unhappy or stressed when they are together",
            "Someone in the family is estranged, appears isolated, feels misunderstood",
            "The same issues and problems occur over and over and are never resolved",
            "Family members seem unable to comfort each other during a crisis",
            "One family member is verbally abusive or threatens others",
            "Parents tell children their adult problems",
            "You are a caregiver for an ill family member and feel exhausted",
            "You see your aging parents needing help and you don’t know what to do",
            "Your elderly parents require more than you can give and you feel guilty",
            "You have problems with intimacy",
            "You and your partner are considering getting married and want a “healthcheck”"
        ]
    },
    {
        slug: "life-relationship-mentorship",
        title: "Life and Relationship Mentorship",
        shortDescription: "Goal-oriented short-term therapy oriented toward the present and future.",
        paragraphs: [
            "While enough of the past must be understood to make sense of the present, this goal oriented short-term therapy is oriented toward the present and future and does not emphasize pathology and the past. Although there is no limit to the number of sessions that can be scheduled, our attitude toward time is to create positive change as quickly as possible and practical.",
            "This therapy utilizes the particular strengths and aptitudes that every client brings with them. These strengths are used in the most productive way to ameliorate problems and introduce flexibility, thereby creating new solutions and possibilities.",
            "The goal is for us to quickly become obsolete by helping to solve problems. We look for the shortest effective course of treatment. Toward this end, family members and significant others are sometimes asked to participate in the therapy. Decisions about who is to be included in the therapy are made while arranging for the initial appointment and from time to time during the therapy. Setting specific goals and identifying strategies to accomplish these goals are an important part of the therapy.",
            "Sometimes, clients will be asked to do certain tasks between sessions. The specifics are discussed and agreed to during the therapy appointment. Some examples of what might be asked include reading certain materials, writing a list, keeping track of specific information or to following a particular planned “exercise.” These “homework assignments” are customized to the situation, the problem and the individual(s). Completing these “assignments” shorten the course of treatment and also contribute toward a collaborative therapeutic relationship."
        ]
    },
    {
        slug: "separation-divorce-adjustment",
        title: "Separation and Divorce Adjustment",
        shortDescription: "Help for dealing with separation or divorce, reducing conflict, and making safe decisions.",
        paragraphs: [
            "Separation and divorce affects everyone in the family, from children to extended family members. Contemplating a separation or dealing with divorce are among the most stressful events that a person can experience.",
            "Your emotions can change from one extreme to another. Sometimes you feel that things are moving too quickly and other times you may feel that there is no resolution in sight. Since decisions made during this time can have long term consequences, seeking professional consultation from a psychologist has many benefits. A trained professional, expert in these matters, can bring comfort and clarity to what may be a confusing and sometimes frightening experience."
        ],
        listTitle: "Issues that should be considered during this time:",
        listItems: [
            "Have I sought counseling to be sure that I am making the best decision?",
            "What should I do about child custody and visitation issues?",
            "Is there anything I can do at this point in time to reduce conflict?",
            "What can I do to minimize stress and adversarial proceedings without sacrificing my future welfare?",
            "Do I feel safe?",
            "Am I moving to a place where my children will be comfortable, safe, and well supervised, even if the arrangement is temporary?",
            "Is there anything else I should do to stabilize my finances?",
            "Should I contact an attorney?",
            "What type of post-separation relationship would I like to have with my former spouse or partner?",
            "What roles am I giving up and what new roles am I expected to assume?",
            "Have my former spouse or partner and I been clear with each other regarding our post-separation expectations?",
            "How are the children adjusting?",
            "What else can I do to reduce tension and conflict in the situation?",
            "Where do I fit in as a newly single person?",
            "When should I consider beginning a new relationship? How can I safely do this? Am I on the rebound?"
        ]
    },
    {
        slug: "premarital-education",
        title: "Premarital Education",
        shortDescription: "State-of-the-art methods and interventions to improve marital or significant other relationships.",
        paragraphs: [
            "The field of marriage and family therapy has evolved rapidly. The approach used at the Center for Problem Solving uses state-of-the-art methods and interventions to improve marital or \"significant other\" relationships.",
            "Seeking professional help can improve the quality of your life more quickly than you might have thought. Although each couple is different, and the number of sessions needed for long lasting improvement cannot be predicted, positive change can happen more quickly than you might have thought possible. The sooner that you seek help, the sooner you can get your marriage back on track."
        ],
        listTitle: "Warning signs that may indicate a consultation is needed:",
        listItems: [
            "Arguments and conflicts never seem to lead to resolution",
            "You and your partner don’t understand each other the way you used to",
            "Children seem to have greater power and influence than they should",
            "Sexual desire, romance and passion are gone or greatly diminished",
            "You feel indifferent toward your partner",
            "You don’t feel like sharing inner thoughts and feelings with your partner (or they with you)",
            "Affection is diminished and/or withheld",
            "You keep looking for and emphasizing all the negative aspects of the relationship",
            "Fun, excitement, laughter and spontaneity seem to have disappeared when you are together",
            "You feel more comfortable when at work than at home",
            "You suspect or just discovered your partner is having an affair",
            "Promises made to or by your partner are not often kept",
            "You are afraid to discuss difficult issues with your partner",
            "One person seems to make all the important decisions",
            "Your partner seems more concerned about his or her family of origin than his or her immediate family",
            "You and your partner disagree about the use of birth control and/or whether or not to have (more) children"
        ]
    },
    {
        slug: "sexual-difficulties",
        title: "Sexual Difficulties",
        shortDescription: "Addressing dysfunctions, anxiety or pain to improve intimacy and relational health.",
        paragraphs: [
            "Some sexual difficulties are the result of emotional problems, and some are the result of physical problems. Sexual dysfunctions are often characterized by disorders of sexual desire and by problems in the sexual response cycle. These difficulties often cause distress in intimate relationships.",
            "It is also a good idea to have a thorough physical examination before assuming that the problems are psychological or emotional."
        ],
        listTitle: "Typical problems that consultation can help to solve:",
        listItems: [
            "You and your partner have stopped having sex",
            "Your or your partner have difficulty reaching orgasm",
            "You are unable to tell your partner what sexual practices you like",
            "Your partner no longer satisfies you",
            "You or your partner have difficulty obtaining or maintaining erections",
            "You don’t want your partner to touch you",
            "Sex is painful",
            "You are unable to maintain a monogamous relationship",
            "You have sexual urges, fantasies or practices that upset your partner",
            "Sex no longer feels mutually consensual"
        ]
    },
    {
        slug: "romantic-skills",
        title: "Romantic Relationship Skills",
        shortDescription: "Essential romantic relationship skills focus on building emotional safety, trust, and connection.",
        paragraphs: [
            "Essential romantic relationship skills focus on building emotional safety, trust, and connection through effective communication, empathy, and conflict resolution. Key skills include active listening, setting healthy boundaries, managing emotions, and practicing gratitude. These behaviors foster intimacy, respect, and long-term stability in a partnership."
        ],
        listTitle: "Core Communication & Emotional Skills:",
        listItems: [
            "Active Listening: Truly hearing your partner's perspective without immediately preparing a defense.",
            "Open & Honest Communication: Expressing your own needs, fears, and desires clearly and respectfully.",
            "Empathy: Validating your partner’s feelings, even if you do not agree with them.",
            "Emotional Regulation: Managing your own emotions to avoid reacting destructively during disagreements."
        ]
    },
    {
        slug: "relationship-maintenance",
        title: "Relationship Maintenance Skills",
        shortDescription: "Addressing issues early and fairly to prevent resentment and boost morale.",
        paragraphs: [
            "Ensuring your ongoing relationship maintains a healthy baseline involves proactive conflict resolution, compromise, and mutual appreciation."
        ],
        listTitle: "Key Relationship Maintenance Behaviors:",
        listItems: [
            "Conflict Resolution: Addressing issues early and fairly to prevent resentment, focusing on solving problems together.",
            "Compromise: Finding middle ground where both partners feel their needs are met, rather than one person winning.",
            "Setting Boundaries: Defining personal limits to maintain respect and safety within the relationship.",
            "Appreciation & Gratitude: Regularly acknowledging and valuing your partner to boost relationship morale."
        ]
    },
    {
        slug: "foundational-personal-skills",
        title: "Foundational Personal Skills",
        shortDescription: "Understanding your own needs and taking responsibility for your actions.",
        paragraphs: [
            "Healthy relationships start with healthy individuals. Cultivating your own personal skills impacts your external bonds."
        ],
        listTitle: "Foundational Personal Behaviors:",
        listItems: [
            "Self-Awareness & Self-Love: Understanding your own needs and taking responsibility for your actions.",
            "Quality Time: Investing time to nurture the bond and create shared experiences.",
            "Physical & Emotional Intimacy: Cultivating closeness through affection and trust-building."
        ]
    },
    {
        slug: "parenting-skills",
        title: "Parenting Skills",
        shortDescription: "Strengthening the entire family unit when parents and children work together.",
        paragraphs: [
            "When parents and children work together on solving problems, the entire family unit can be strengthened. Children and adolescents are seen in treatment at the Amis De La Famille Rwanda if one or preferably both of their parents are involved in treatment as well.",
            "We have found that involving in family therapy those persons who are most important to children in family therapy not only shortens the course of treatment, but also improves the outcome."
        ],
        listTitle: "Typical problems for which parents may consult us:",
        listItems: [
            "Observed sudden worrisome changes in your child’s behavior",
            "Your child is underachieving at school",
            "You have received a note or call from the school reporting difficulties",
            "You receive either no response or a sullen/sarcastic response to requests",
            "Your child seems to be unhappy, teary and/or without energy",
            "Your child’s sleep patterns appear to be disturbed",
            "Your child is not eating appropriately",
            "Your child is throwing temper tantrums and appears easily angered",
            "Your child is refuses to go to school",
            "You are worried that your child is or may be using drugs or alcohol",
            "Your child has stopped confiding in you",
            "Your child has trouble making or keeping friends",
            "Your children fight with each other",
            "You find yourself yelling at your children and/or have no time to enjoy them",
            "Your child continues to wet the bed",
            "Your child seems afraid to leave home or attend a sleep-over",
            "You and your spouse disagree about how the children should be treated",
            "Your children seem to be in charge of the household",
            "Your child wakes during the night and is afraid",
            "You or your spouse communicate through the children"
        ]
    },
    {
        slug: "psychotherapy",
        title: "Psychotherapy",
        shortDescription: "Collaborative, evidence-based treatment where a trained professional helps individuals change troubling emotions.",
        paragraphs: [
            "Psychotherapy, or talk therapy, is a collaborative, evidence-based treatment where a trained professional helps individuals identify and change troubling emotions, thoughts, and behaviors. It aims to improve mental health, alleviate symptoms of mental illness, and enhance coping skills, often lasting for months with long-lasting positive results."
        ],
        listTitle: "Key Aspects of Psychotherapy:",
        listItems: [
            "Purpose: To manage symptoms, improve daily functioning, and increase emotional well-being.",
            "Methods: It involves confidential, regular, one-on-one, or group sessions to discuss personal history, relationships, and behavior patterns.",
            "Cognitive Behavioral Therapy (CBT): Focuses on changing dysfunctional thinking and behavior.",
            "Psychodynamic Therapy: Increases awareness of how past experiences influence current issues.",
            "Acceptance and Commitment Therapy (ACT): Promotes accepting thoughts/feelings while focusing on the present.",
            "Interpersonal Therapy (IPT): Focuses on improving relationships.",
            "Applications: Effective for anxiety, depression, trauma, grief, and relationship issues. Often combined with medication."
        ]
    },
    {
        slug: "loneliness-fears-anxieties",
        title: "Loneliness, Fears and Anxieties",
        shortDescription: "Break free from the isolation of anxiety, fear, and loneliness.",
        paragraphs: [
            "You may find that the more lonely and anxious you feel, the more restricted your life becomes. It is easy to feel alone and to allow fear and anxiety to isolate you even more.",
            "You may find that you avoid things that you used to enjoy and find comfort from repeating the same routines over and over again."
        ],
        listTitle: "Signs of Anxiety and Fear:",
        listItems: [
            "Do you feel you worry more than other people do or feel easily fatigued?",
            "Do you feel like there is a lump in your throat or feel restless?",
            "Do you often worry that others don’t like you or become upset over mistakes?",
            "You don’t seem to have close friends to whom you can talk",
            "You avoid new situations because you might look foolish",
            "You find yourself avoiding contact with things or places that most people don’t avoid",
            "You feel afraid when in closed places or when in high places"
        ]
    },
    {
        slug: "stress-and-crisis",
        title: "Stress and Crisis",
        shortDescription: "Time-limited and trained professional support to overcome severe stress, work burn-out, or crisis.",
        paragraphs: [
            "If you are going through a crisis or feel stressed, this is a particularly opportune time to seek help. A crisis or ongoing stress can produce many symptoms including sleep disturbance, irritability, depression, and mood swings.",
            "Stress and crises are not confined to the home. There are special stresses in the workplace. Working with a trained professional, on a time-limited basis, during a difficult period can make all the difference to you and your family.",
            "You can have emotional reactions to a crisis after the crisis is over. The more frightening and threatening a crisis is, the more likely you may experience emotional after-effects. Seeking prompt treatment can help you recover more quickly."
        ],
        listTitle: "Indicators you may need assistance during a stressful time:",
        listItems: [
            "Do you often feel irritable and find that everything gets on your nerves?",
            "Do you snap at people or have problems concentrating?",
            "Do you feel “keyed up” or on edge?",
            "Do you clench your jaws, grind your teeth or find your muscles are tense?",
            "Are you having problems with digestion that are not easily diagnosed?",
            "Do you wake up suddenly and/or have difficulty going to sleep?",
            "Do you feel burned out or no longer laugh at things?",
            "Do you feel that you continue to think about or re-experience a crisis event?",
            "Are your emotions “deadened” or numb?"
        ]
    },
    {
        slug: "depression",
        title: "Depression",
        shortDescription: "Depression is a common problem, which can be experienced at any age, and can be successfully treated.",
        paragraphs: [
            "Most people experience some changes in mood. They can feel happy one day and perhaps a little sad on another. If, however, you find that feelings of sadness persist, you may be depressed.",
            "People who are depressed or stressed may not pay careful attention to what they are doing. They are more likely to be involved in accidents or hurt themselves during daily living.",
            "If you have thoughts about going to sleep and not wanting to wake up or think that things would be better if you didn’t exist, this is an indication of serious emotional problems. Contemplation of suicide indicates that urgent professional intervention is required."
        ],
        listTitle: "Questions that may indicate you are depressed:",
        listItems: [
            "Do you have less energy than other people?",
            "Have you lost your appetite or find yourself overeating?",
            "Are you sleeping too much or too little?",
            "Do you feel unmotivated to go to work?",
            "Have you isolated yourself or stopped socializing?",
            "Do you cry easily or feel hopeless about the future?",
            "Have you stopped doing things that you used to enjoy?",
            "Have you lost your sense of humor?",
            "Are you sad much of the time?"
        ]
    },
    {
        slug: "counselling",
        title: "Counselling",
        shortDescription: "A confidential, non-judgmental, and professional talk therapy to address mental health issues and life challenges.",
        paragraphs: [
            "Counselling is a confidential, non-judgmental, and professional \"talk therapy\" that helps individuals, couples, or families address mental health issues, life challenges, and emotional difficulties. Qualified counselors utilize active listening and specialized techniques to facilitate personal growth, improved relationships, and effective coping strategies."
        ],
        listTitle: "Key Aspects & Benefits of Counselling:",
        listItems: [
            "Purpose: Helps with issues like anxiety, depression, trauma, grief, addiction, and relationship problems.",
            "Process: Involves exploring feelings and behaviors, gaining self-understanding, and setting goals.",
            "Techniques: Counselors use open-ended questions and interpret non-verbal cues.",
            "Accessibility: Services are available in-person or via online platforms.",
            "Mental Health Improvement: Offers relief from depression, anxiety, and stress.",
            "Personal Development: Enhances self-esteem, self-confidence, and decision-making skills.",
            "Improved Relationships: Aids in better conflict resolution and communication."
        ]
    },
    {
        slug: "individual-group-counseling",
        title: "Individual and Group Counseling",
        shortDescription: "Private one-on-one therapy alongside shared experience-based group therapy.",
        paragraphs: [
            "Individual counseling offers private, one-on-one, customized therapy to explore personal issues, while group counseling involves a therapist leading multiple participants with shared experiences, offering peer support and varied perspectives. Both aim for healing and personal growth, but they differ in setting, cost, and focus."
        ],
        listTitle: "Differences & Aspects:",
        listItems: [
            "Individual Privacy & Focus: Highly tailored to the specific history and needs with maximum confidentiality.",
            "Individual Interaction: Focuses entirely on the relationship between the client and the therapist.",
            "Group Shared Experiences: Participants learn from others facing similar challenges.",
            "Group Community: Reduces isolation and offers peer encouragement.",
            "Group Cost-Effective: Generally more affordable than individual sessions.",
            "When to Choose Individual: Best for deep, personal issues, crises, or when privacy is needed.",
            "When to Choose Group: Ideal for social anxiety, building communication skills, or finding support through shared experience."
        ]
    },
    {
        slug: "mental-health-first-aid",
        title: "Mental Health First Aid Training",
        shortDescription: "An evidence-based program teaching how to respond to signs of mental health or substance use challenges.",
        paragraphs: [
            "Mental Health First Aid (MHFA) Training is an evidence-based program that teaches individuals how to identify, understand, and respond to signs of mental health or substance use challenges. Participants learn to provide initial, supportive care to peers or loved ones in crisis, emphasizing empathy and stabilization until professional help is available.",
            "The training is designed for everyone and is not intended to train people to be therapists, but rather to be a \"first aider\" to someone in distress."
        ],
        listTitle: "Key Aspects of MHFA Training:",
        listItems: [
            "Action Plan: Participants are taught the ALGEE action plan (Assess for risk, Listen nonjudgmentally, Give reassurance, Encourage professional help, Encourage self-help).",
            "Curriculum Focus: Training covers anxiety, depression, psychosis, substance use, suicide prevention, and self-harm.",
            "Training Formats: Courses are available in-person or virtually.",
            "Target Audiences: Specialized training is available for adults, youth, workplaces, and specific communities.",
            "Goal: To reduce stigma, increase mental health literacy, and provide confidence to help those in need."
        ]
    },
    {
        slug: "human-sexuality-counseling",
        title: "Human Sexuality Counseling",
        shortDescription: "Specialized psychotherapy addressed at sexual health, dysfunction, and relational intimacy.",
        paragraphs: [
            "Human sexuality counseling (or sex therapy) is a specialized form of psychotherapy focused on addressing sexual health, dysfunction, and relational intimacy. It helps individuals and partners resolve issues like low desire, pain, anxiety, or trauma, while providing education, promoting sexual wellness, and enhancing communication.",
            "Our Counselors are trained to navigate sensitive topics comfortably, using neutral, non-judgmental language to support diverse clients, including addressing sexuality within the context of aging, disability, and cultural backgrounds."
        ],
        listTitle: "Key Aspects of Human Sexuality Counseling:",
        listItems: [
            "Issues Addressed: Dysfunction (affecting ~43% of women, ~31% of men), libido mismatch, sexual trauma, pain, and anxiety/shame.",
            "Approaches: Using the PLISSIT model (Permission, Limited Information, Specific Suggestions, Intensive Therapy).",
            "Sex-Positive Focus: Nonjudgmental, affirmative care viewing sexuality as a core, healthy part of the human experience.",
            "Sex Counseling: Often involves psychoeducation and high-level, short-term support.",
            "Sex Therapy: Involves in-depth psychotherapy to address complex psychological or physical sexual issues."
        ]
    },
    {
        slug: "trauma-management",
        title: "Trauma Management",
        shortDescription: "Rapid, systematic, and multidisciplinary care centered on stabilization and injury management.",
        paragraphs: [
            "Trauma management involves rapid, systematic, and multidisciplinary care, centered on the ABCDE approach (Airway, Breathing, Circulation, Disability, Exposure) to stabilize life-threatening injuries. Initial management prioritizes securing the airway, controlling hemorrhage, and stabilizing the spine, followed by a secondary survey for comprehensive injury assessment.",
            "This protocol ensures systematic evaluation, reducing mortality through rapid intervention."
        ],
        listTitle: "Key Aspects of Trauma Management:",
        listItems: [
            "Airway: Ensure a clear airway, protect the cervical spine.",
            "Breathing: Assess oxygenation and ventilation, treat tension pneumothorax.",
            "Circulation: Control bleeding, establish IV access, treat shock.",
            "Disability: Rapid neurologic assessment using Glasgow Coma Scale or AVPU.",
            "Exposure: Fully expose the patient, prevent hypothermia.",
            "Secondary Survey: Detailed head-to-toe examination performed after stabilization.",
            "Resuscitation & Transfer: Immediate stabilization in the Emergency Department involving massive transfusion protocols if needed.",
            "Support: Providing comfort and care to manage potential physical and emotional trauma."
        ]
    }
];
