type SummaryItemData = {
  category: string;
  score: number;
  icon: string;
  color: "red" | "orange" | "green" | "blue";
};

const summaryData: SummaryItemData[] = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    color: "red",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    color: "orange",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    color: "green",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    color: "blue",
  },
];

class SummaryItem {
  private templateEl: HTMLDivElement;
  private targetEl: HTMLDivElement;
  constructor(
    private targetId: string,
    private templateId: string,
    private summaryItemData: SummaryItemData
  ) {
    this.targetEl = document.getElementById(this.targetId) as HTMLDivElement;
    const template = document.getElementById(
      this.templateId
    ) as HTMLTemplateElement;

    this.templateEl = document.importNode(template.content, true)
      .firstElementChild as HTMLDivElement;
    this.modifyTemplate();
    this.renderItem();
  }

  private modifyTemplate() {
    this.templateEl.classList.add(
      `bg-${this.summaryItemData.color}-trans`,
      `text-${this.summaryItemData.color}`
    );
    this.templateEl.querySelector("img")!.src = this.summaryItemData.icon;
    this.templateEl.querySelector("p")!.innerText =
      this.summaryItemData.category;
    this.templateEl.querySelector<HTMLDivElement>(".current")!.innerText =
      this.summaryItemData.score.toString();
  }

  private renderItem() {
    this.targetEl.appendChild(this.templateEl);
  }
}

const summaryItemData = summaryData;
const resultScores = summaryItemData.map((item) => item.score);
const resultScoreSum = resultScores.reduce((prev, cur) => prev + cur, 0);
document.getElementById("result-score")!.innerText = Math.trunc(
  resultScoreSum / summaryItemData.length
).toString();

for (const summaryItem of summaryItemData) {
  new SummaryItem("summary-items", "summary-item-template", summaryItem);
}
