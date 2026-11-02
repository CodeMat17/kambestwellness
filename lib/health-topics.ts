export type HealthTopic = {
  id: string;
  title: string;
  summary: string;
  icon: "heart" | "stethoscope" | "label" | "chat" | "sprout";
  points: string[];
  sources: { label: string; href: string }[];
};

export const healthTopics: HealthTopic[] = [
  {
    id: "healthy-lifestyle",
    title: "Everyday healthy-lifestyle habits",
    summary:
      "Small, consistent habits around food, movement, sleep and stress support overall wellbeing.",
    icon: "heart",
    points: [
      "Eat a varied diet that includes vegetables, fruits, legumes and whole grains, and limit salt, added sugar and highly processed foods.",
      "The World Health Organization recommends that adults do at least 150–300 minutes of moderate-intensity physical activity across the week, such as brisk walking.",
      "Drink clean water regularly, aim for consistent sleep, and make time to rest.",
      "Avoid tobacco and limit alcohol.",
      "If you have a health condition, ask a qualified healthcare professional which changes are suitable for you before starting a new diet or exercise plan.",
    ],
    sources: [
      {
        label: "WHO — Healthy diet fact sheet",
        href: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
      },
      {
        label: "WHO — Physical activity fact sheet",
        href: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      },
    ],
  },
  {
    id: "health-checks",
    title: "Why routine health checks matter",
    summary:
      "Some common conditions show few or no early signs. Regular checks help you and your doctor spot changes early.",
    icon: "stethoscope",
    points: [
      "Raised blood pressure often has no symptoms, which is why measuring it regularly is important.",
      "Ask a qualified healthcare professional which checks are right for your age, family history and lifestyle — for example blood pressure, blood sugar, weight and eye checks.",
      "Keep a simple record of your results and bring it to appointments.",
      "Seek prompt medical care for new, severe or worsening symptoms rather than waiting for a routine check.",
    ],
    sources: [
      {
        label: "WHO — Hypertension fact sheet",
        href: "https://www.who.int/news-room/fact-sheets/detail/hypertension",
      },
    ],
  },
  {
    id: "product-labels",
    title: "Understanding health information and product labels",
    summary:
      "Knowing what to look for on a label helps you make careful, informed decisions.",
    icon: "label",
    points: [
      "Read the product name, ingredients, directions for use, warnings and expiry date before using any product.",
      "In Nigeria, check that a regulated product carries a NAFDAC registration number. A registration number does not mean every claim made about a product has been approved.",
      "Be cautious of wording such as “cures all”, “instant results” or “no side effects”.",
      "Check where health information comes from, when it was written, and whether it is supported by reliable sources.",
    ],
    sources: [
      {
        label: "NAFDAC — National Agency for Food and Drug Administration and Control",
        href: "https://www.nafdac.gov.ng",
      },
    ],
  },
  {
    id: "questions-for-professionals",
    title: "Questions to discuss with a healthcare professional",
    summary:
      "A short list of questions can make appointments more useful and help you understand your options.",
    icon: "chat",
    points: [
      "What could be causing my symptoms, and what tests do I need?",
      "What are my treatment options, and what are the benefits and risks of each?",
      "Is it safe for me to use herbal or traditional products alongside my current medicines?",
      "Are there warning signs that mean I should seek urgent care?",
      "When should I come back for a follow-up check?",
    ],
    sources: [],
  },
  {
    id: "herbal-products",
    title: "Responsible use of herbal products",
    summary:
      "“Natural” does not automatically mean safe for everyone. Use herbal products thoughtfully and with full information.",
    icon: "sprout",
    points: [
      "Always read and follow the ingredients, directions and warnings on the label.",
      "Some herbal products can interact with prescribed medicines. Tell your doctor or pharmacist about everything you take.",
      "Take extra care — and seek professional advice first — during pregnancy or breastfeeding, for children, older adults, and people with long-term conditions.",
      "Do not stop or change prescribed treatment without speaking to the professional who prescribed it.",
      "Stop using a product and seek medical advice if you notice an unexpected reaction.",
    ],
    sources: [
      {
        label: "WHO — Traditional, complementary and integrative medicine",
        href: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine",
      },
    ],
  },
];
