const caseStudies = {
  en: {
    schoolai: {
      title: "SchoolAI",
      eyebrow: "AI product engineering case study",
      summary:
        "A teacher-in-the-loop platform for reviewing photographed maths homework in Japanese juku, designed around a narrow promise: AI proposes; the teacher remains the final authority.",
      status: "Built and deployed · validation in progress",
      role: "Independent product engineer — product definition, architecture, backend, frontend and AWS delivery",
      links: [{ label: "Open SchoolAI", href: "https://school-ai.jp/" }],
      stack: [".NET 8", "React 19", "TypeScript", "AWS Lambda", "SQS FIFO", "WebSocket", "Amazon Bedrock", "Cognito", "PostgreSQL", "S3"],
      signals: [
        { value: "Async", label: "AI processing pipeline" },
        { value: "Human", label: "Final review authority" },
        { value: "Multi-tenant", label: "Role and school boundaries" },
      ],
      problem: {
        title: "The problem",
        body: [
          "Paper homework still carries valuable evidence: not only the final answer, but the first wrong step. Reviewing it consistently is slow, and a generic chatbot does not fit a school workflow.",
          "The product hypothesis is deliberately narrower than “an AI school”: capture a real solution, identify the likely mistake, route the suggestion to a teacher, and turn the approved result into the next learning action.",
        ],
      },
      architecture: {
        title: "Architecture shaped by trust",
        intro: "The AI path is asynchronous so a slow or failed model call cannot block the rest of the school workflow.",
        flow: ["Photo submission", "S3 + API", "SQS FIFO", "Worker Lambda + Bedrock", "Teacher review", "Student feedback"],
        notes: [
          "Cognito and tenant-aware authorization separate school, staff and student contexts.",
          "FIFO jobs, persisted state and WebSocket updates turn inference into an observable workflow instead of one fragile request.",
          "AI output is a suggestion. Approval, correction and rejection are explicit product states.",
        ],
      },
      decisions: {
        title: "Key product and engineering decisions",
        items: [
          { title: "Protect the existing workflow", text: "The first use case sits on top of paper homework instead of requiring a school to replace its curriculum or operating system." },
          { title: "Separate inference from authority", text: "Model confidence is not treated as a teacher decision. Human review is part of the architecture, not a disclaimer added to the UI." },
          { title: "Design for failure and cost", text: "Queueing, retries, persisted job status and provider boundaries make latency, failure and inference cost visible product concerns." },
          { title: "Stop adding surface area", text: "The codebase proves broad product execution; the next milestone is customer and quality evidence, not another module." },
        ],
      },
      outcome: {
        title: "What exists today",
        body: [
          "The implemented product covers multi-tenant roles, assignments, photographed submissions, asynchronous AI analysis, teacher review, feedback delivery, skill evidence and operational views.",
          "That is engineering evidence, not product-market proof. The current decision is a bounded validation run: narrow the supported maths scope, measure review quality and time saved, and secure a real pilot before expanding the roadmap.",
        ],
      },
      boundaries: {
        title: "Public case study, private source",
        body: "The source repositories remain private. This case study intentionally describes the problem, system boundaries and decisions without publishing credentials, endpoints, child data, private screenshots or implementation details that would weaken security.",
      },
      next: ["Build a consented evaluation set for the supported maths scope", "Measure teacher acceptance, unsafe misses and time saved", "Run one small juku pilot before committing to further product expansion"],
    },
    "hollow-way": {
      title: "Hollow Way",
      eyebrow: "Unity / interactive product case study",
      summary:
        "A calm isometric puzzle game for Android where a small robot crosses floating block islands through deterministic movement, material and hazard rules.",
      status: "In development · Android v1 scope being locked",
      role: "Independent game and product engineer — mechanics, architecture, UI pipeline, tooling and release preparation",
      links: [],
      stack: ["Unity 6", "C#", "URP", "Android", "Zenject", "Unity Localization", "Unity IAP", "AdMob", "Figma"],
      signals: [
        { value: "60 FPS", label: "Mobile performance target" },
        { value: "Deterministic", label: "Turn-based simulation" },
        { value: "EN / RU", label: "Seeded localization" },
      ],
      problem: {
        title: "The product challenge",
        body: [
          "A small puzzle game can still become an unshippable collection of mechanics, screens and assets. Hollow Way is an exercise in treating interaction, visual language, content tooling and release operations as one product system.",
          "The intended feeling is quiet, readable and satisfying. That makes response time, undo reliability, visual hierarchy and deterministic rules more important than spectacle.",
        ],
      },
      architecture: {
        title: "Architecture for iteration",
        intro: "Pure rules stay separate from rendering and platform integrations, which keeps puzzle behaviour testable and lets presentation evolve without rewriting the simulation.",
        flow: ["Player input", "Pure C# grid simulation", "State + undo", "Presentation layer", "UI feedback", "Save progression"],
        notes: [
          "Core owns grids, movement, pushing, stacking, hazards and undo; Presentation owns board rendering, cameras and effects.",
          "UI, save, economy, ads, purchases and localization sit behind their own boundaries.",
          "Editor tools generate and validate much of the interface and content, reducing fragile hand-wiring as the game changes.",
        ],
      },
      decisions: {
        title: "Key product and engineering decisions",
        items: [
          { title: "Determinism over hidden timing", text: "Hazards and movement resolve turn by turn, so players can reason about failure and trust undo." },
          { title: "One source behind generated UI", text: "Figma defines hierarchy and spacing; importers and builders own the runtime output so regeneration does not erase manual fixes." },
          { title: "Teach before combining", text: "Levels introduce movement, pushing, height, materials and hazards in a deliberate order before asking for mixed-mechanic mastery." },
          { title: "Release boundary before content volume", text: "Android stability, progression, store integrations and a coherent first campaign take priority over a huge level count." },
        ],
      },
      outcome: {
        title: "What exists today",
        body: [
          "The project includes the grid simulation, movement and push rules, undo, scoring, save progression, deterministic hazards, main navigation, level selection, HUD, shop and the main completion and failure flows.",
          "The remaining work is deliberately framed as release engineering: lock the campaign, reconcile a few mechanic decisions, finish the visual pass, replace test monetization configuration and validate the full loop on real Android devices.",
        ],
      },
      boundaries: {
        title: "Public case study, private source",
        body: "The game source and production assets remain private while the product is in development. The public evidence focuses on system design, workflow and release judgment without distributing proprietary code or unfinished assets.",
      },
      next: ["Lock the v1 campaign and mechanic rules", "Finish the Figma-to-Unity visual pass", "Validate performance, save data, billing and consent flows on target Android devices"],
    },
  },
  ja: {
    schoolai: {
      title: "SchoolAI",
      eyebrow: "AIプロダクトエンジニアリング事例",
      summary: "日本の学習塾で、撮影した数学の宿題を確認するためのteacher-in-the-loop型プラットフォーム。AIは提案し、最終判断は常に講師が行います。",
      status: "実装・デプロイ済み · 検証中",
      role: "個人プロダクトエンジニア — プロダクト定義、設計、バックエンド、フロントエンド、AWS運用",
      links: [{ label: "SchoolAIを開く", href: "https://school-ai.jp/" }],
      stack: [".NET 8", "React 19", "TypeScript", "AWS Lambda", "SQS FIFO", "WebSocket", "Amazon Bedrock", "Cognito", "PostgreSQL", "S3"],
      signals: [{ value: "非同期", label: "AI処理パイプライン" }, { value: "Human", label: "最終レビュー権限" }, { value: "Multi-tenant", label: "学校・役割の境界" }],
      problem: { title: "課題", body: ["紙の宿題には、最終回答だけでなく「最初にどこで間違えたか」という重要な情報があります。しかし、継続的な確認には時間がかかり、汎用チャットボットは学校の業務フローに合いません。", "プロダクト仮説は「AIスクール」ではありません。実際の解答を取り込み、誤りを推定し、講師に提案し、承認された結果を次の学習行動につなげるという狭いループです。"] },
      architecture: { title: "信頼を中心にしたアーキテクチャ", intro: "モデル呼び出しの遅延や失敗が学校業務全体を止めないよう、AI処理は非同期化しています。", flow: ["解答画像", "S3 + API", "SQS FIFO", "Worker Lambda + Bedrock", "講師レビュー", "生徒への返却"], notes: ["Cognitoとtenant-aware認可で学校、スタッフ、生徒の境界を分離。", "FIFOジョブ、永続化状態、WebSocket更新により、推論を観測可能なワークフローとして扱う。", "AI出力は提案であり、承認・修正・却下を明確な状態として表現。"] },
      decisions: { title: "主なプロダクト・技術判断", items: [{ title: "既存の学習方法を守る", text: "学校に教材や業務システムの置き換えを求めず、紙の宿題の上に最初の価値を追加します。" }, { title: "推論と権限を分ける", text: "モデルの確信度を講師の判断として扱わず、人によるレビューをUI上の注記ではなくアーキテクチャに組み込みます。" }, { title: "失敗とコストを設計対象にする", text: "キュー、再試行、永続化された状態、provider境界により、遅延・失敗・推論コストを見える化します。" }, { title: "機能拡張を止める", text: "次のマイルストーンは新機能ではなく、品質と顧客価値の検証です。" }] },
      outcome: { title: "現在できていること", body: ["マルチテナントの役割、課題、画像提出、非同期AI分析、講師レビュー、フィードバック、スキル証拠、運用ビューまで実装されています。", "ただし、実装量はproduct-market fitの証拠ではありません。次は対応する数学範囲を絞り、レビュー品質と時間削減を測定し、拡張前に実際のpilotを成立させます。"] },
      boundaries: { title: "公開事例・非公開ソース", body: "ソースリポジトリは非公開です。この事例では、認証情報、エンドポイント、児童データ、非公開画面、セキュリティを弱める実装詳細を公開せず、課題・境界・意思決定を説明します。" },
      next: ["対象とする数学範囲の評価データを作る", "講師の承認率、安全上の見逃し、削減時間を測る", "追加開発の前に小規模な学習塾pilotを実施する"],
    },
    "hollow-way": {
      title: "Hollow Way",
      eyebrow: "Unity・インタラクティブプロダクト事例",
      summary: "小型ロボットを操作し、浮遊する島を進むAndroid向けの静かなアイソメトリック3Dパズル。移動、素材、危険物は決定論的に動作します。",
      status: "開発中 · Android v1の範囲を確定中",
      role: "個人ゲーム／プロダクトエンジニア — メカニクス、設計、UIパイプライン、ツール、リリース準備",
      links: [],
      stack: ["Unity 6", "C#", "URP", "Android", "Zenject", "Unity Localization", "Unity IAP", "AdMob", "Figma"],
      signals: [{ value: "60 FPS", label: "モバイル目標" }, { value: "決定論的", label: "ターン制シミュレーション" }, { value: "EN / RU", label: "初期ローカライズ" }],
      problem: { title: "プロダクト上の課題", body: ["小規模なパズルゲームでも、メカニクス、画面、素材を増やすだけではリリースできません。Hollow Wayでは操作、ビジュアル、コンテンツツール、リリース運用を一つのプロダクトシステムとして設計しています。", "目指す体験は、静かで読みやすく、解けたときに満足できること。そのため、派手さより応答速度、Undoの信頼性、情報階層、決定論的なルールを重視します。"] },
      architecture: { title: "反復開発のための設計", intro: "純粋なゲームルールを描画やplatform連携から分離し、シミュレーションを検証可能に保ちながら表現を変更できます。", flow: ["プレイヤー入力", "Pure C#グリッド", "状態 + Undo", "描画レイヤー", "UIフィードバック", "進行保存"], notes: ["Coreはグリッド、移動、押す・積む、危険物、Undoを担当し、Presentationは描画、カメラ、演出を担当。", "UI、保存、経済、広告、課金、ローカライズをそれぞれの境界に分離。", "Editor toolsでUIとコンテンツの多くを生成・検証し、変更時の手作業を減らす。"] },
      decisions: { title: "主なプロダクト・技術判断", items: [{ title: "隠れたタイミングより決定性", text: "危険物と移動をターン単位で解決し、失敗の理由を理解でき、Undoを信頼できる設計にします。" }, { title: "生成UIにも一つのsource of truth", text: "Figmaで階層と余白を定義し、importerとbuilderがruntime出力を管理します。" }, { title: "組み合わせる前に教える", text: "移動、押す操作、高さ、素材、危険物を順番に導入してから複合パズルに進みます。" }, { title: "量よりリリース境界", text: "大量のレベルより、Androidの安定性、進行、ストア連携、まとまった最初のcampaignを優先します。" }] },
      outcome: { title: "現在できていること", body: ["グリッドシミュレーション、移動・押し出し、Undo、スコア、進行保存、決定論的な危険物、メイン画面、レベル選択、HUD、ショップ、クリア／失敗フローを実装しています。", "残りはリリースエンジニアリングとして整理しています。campaignとルールを確定し、ビジュアルを仕上げ、テスト用の収益化設定を本番用に置き換え、実機Androidで全体フローを検証します。"] },
      boundaries: { title: "公開事例・非公開ソース", body: "開発中のため、ゲームソースとproduction assetは非公開です。公開内容は、独自コードや未完成素材を配布せず、システム設計、制作フロー、リリース判断に焦点を当てています。" },
      next: ["v1のcampaignとメカニクスを確定する", "FigmaからUnityまでのビジュアルを完成させる", "対象Android端末で性能、保存、課金、同意フローを検証する"],
    },
  },
};

export const caseStudySlugs = ["schoolai", "hollow-way"];

export function getCaseStudy(locale, slug) {
  return (caseStudies[locale] ?? caseStudies.en)[slug];
}
