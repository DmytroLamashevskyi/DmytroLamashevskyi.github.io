// Public, simplified views of the workflows described in the case studies.
export function getDiagramPreview(locale, slug) {
  const labels = locale === "ja" ? {
    "pos-analytics": ["要求", "キュー", "出力"],
    schoolai: ["画像", "キュー", "AI提案"],
    kaigiai: ["音声", "認識", "翻訳"],
    "hollow-way": ["入力", "ルール", "状態"],
  } : {
    "pos-analytics": ["Request", "Queue", "Export"],
    schoolai: ["Photo", "Queue", "AI review"],
    kaigiai: ["Audio", "Text", "LLM"],
    "hollow-way": ["Input", "Rules", "State"],
  };
  return labels[slug] ?? [];
}

export function getProjectDiagrams(locale, slug) {
  const ja = locale === "ja";
  const copy = (en, jp) => ja ? jp : en;
  const diagrams = {
    "pos-analytics": [
      {
        id: "export",
        title: copy("CSV export · background workflow", "CSV出力・バックグラウンド処理"),
        steps: [
          [copy("Request export", "出力を要求"), copy("User selects filters", "ユーザーが条件を選択")],
          ["API → RabbitMQ", copy("Start a background job", "バックグラウンドジョブを開始")],
          [copy("Export worker", "出力ワーカー"), copy("Fetch service data in pages", "サービスからページ単位で取得")],
          ["CSV → S3", copy("Stream rows as data arrives", "取得したデータを順次出力")],
          ["SSE → Browser", copy("Notify completion and provide a link", "完了通知とダウンロードリンク")],
        ],
        branches: [
          [copy("Memory boundary", "メモリの境界"), copy("Process one batch at a time; do not hold the complete dataset or file in memory.", "バッチ単位で処理し、全データやファイル全体をメモリに保持しません。")],
          [copy("Failure path", "失敗時の処理"), copy("Retry failed chunks within a limit; stop and roll back the export when attempts are exhausted.", "取得失敗は回数を制限して再試行し、上限に達したら出力を停止してロールバックします。")],
        ],
        caption: copy("RabbitMQ starts the job. Pagination and streaming bound memory use; SSE closes the loop with the user. Approximately 300 MB exports were handled by this workflow.", "RabbitMQで開始し、ページ取得とストリーミングでメモリ使用量を抑え、SSEで完了を通知します。この処理で約300MBのCSVを扱いました。"),
      },
      {
        id: "analytics",
        title: copy("Analytics · data and query boundaries", "分析・データとクエリの境界"),
        lanes: [
          { label: copy("Data integration", "データ連携"), steps: [[copy("Service data", "サービスデータ"), ""], ["RabbitMQ", copy("Integration", "連携")], ["ClickHouse", copy("Analytical data", "分析データ")]] },
          { label: copy("Query path", "クエリ処理"), steps: [[copy("Administration UI", "管理UI"), copy("Structured request", "構造化された要求")], [copy("Validate → SQL", "検証 → SQL"), copy("Constrained JSON-to-SQL layer", "制約付きJSON-to-SQL層")], ["ClickHouse", copy("Execute validated query", "検証済みクエリを実行")]] },
        ],
        branches: [["Redis", copy("Cache relatively static reference data to reduce synchronous service calls.", "変更頻度の低い参照データを保持し、同期サービス呼び出しを減らします。")], [copy("Background recalculation", "バックグラウンド再計算"), copy("Batch selected updates by tenant and time range, with locking for concurrent work.", "テナント・期間ごとに更新を分割し、ロックで並行処理に対応します。")]],
        caption: copy("These are separate views of data integration and querying, rather than one serial pipeline. The 10–20 second result applies to selected analytical updates.", "データ連携とクエリ処理を分けて示しています。一つの直列パイプラインではありません。10〜20秒という成果は一部の分析更新が対象です。"),
      },
    ],
    kaigiai: [{
      id: "speech", title: copy("Speech → contextual translation", "音声 → 文脈を踏まえた翻訳"),
      steps: [["WASAPI", copy("Microphone / system audio", "マイク・システム音声")], ["whisper.cpp", copy("Speech recognition", "音声認識")], [copy("Transcript + context", "文字起こし + 文脈"), copy("Text passed to the LLM", "LLMへ渡すテキスト")]],
      branches: [["llama.cpp", copy("Local inference option · hardware dependent", "ローカル推論・ハードウェア性能に依存")], ["Grok / Gemini", copy("Cloud inference options · Grok used in actual meetings", "クラウド推論・実際の会議ではGrokを使用")]],
      finish: [[copy("Translation in the desktop UI", "デスクトップUIに翻訳を表示"), "Rust / Tauri + React"], [copy("Local history", "ローカル履歴"), "SQLite"]],
      caption: copy("Choose a local or cloud LLM path. Cloud selection sends text to that provider. Real meetings exposed audio-volume and speaker-recognition limitations; no formal accuracy benchmark is claimed.", "ローカル／クラウドのLLM経路を選択します。クラウド利用時はテキストを推論先へ送信します。実会議で音量と話者認識の課題を確認しており、正式な精度ベンチマークはありません。"),
    }],
    schoolai: [{
      id: "review", title: copy("Homework → AI suggestion → teacher decision", "宿題 → AI提案 → 講師の判断"),
      steps: [[copy("Photo submission", "解答画像を提出"), "React → API / S3"], ["SQS FIFO", copy("Queue the analysis job", "分析ジョブをキューへ")], ["Lambda + Bedrock", copy("Produce a review suggestion", "レビュー案を生成")], [copy("Teacher review", "講師レビュー"), copy("Approve, correct or reject", "承認・修正・却下")], [copy("Student feedback", "生徒への返却"), copy("Deliver the reviewed result", "レビュー済み結果を返却")]],
      branches: [["Cognito + tenant authorization", copy("School and role boundaries apply across the workflow.", "処理全体で学校と役割のアクセス境界を適用します。")], [copy("Persisted status + WebSocket", "永続化された状態 + WebSocket"), copy("Track asynchronous work and report progress to the interface.", "非同期処理の状態を保持し、UIへ進捗を通知します。")]],
      caption: copy("The queue separates model latency from the submission request. AI proposes a result; the teacher retains final authority. The deployed product is still undergoing validation.", "キューで提出要求とモデル処理の遅延を分離します。AIは提案し、最終判断は講師が行います。デプロイ済み製品は検証中です。"),
    }],
    "hollow-way": [{
      id: "simulation", title: copy("Game rules separated from presentation", "ゲームルールと描画の分離"),
      steps: [[copy("Player input", "プレイヤー入力"), copy("Movement / interaction", "移動・操作")], [copy("Pure C# simulation", "Pure C#シミュレーション"), copy("Grid, movement and hazard rules", "グリッド・移動・危険物のルール")], [copy("State + undo", "状態 + Undo"), copy("Deterministic turn resolution", "決定論的なターン処理")]],
      branches: [[copy("Presentation", "描画"), copy("Board, camera, effects and UI feedback", "盤面・カメラ・演出・UIフィードバック")], [copy("Progression", "進行"), copy("Save progress behind a separate boundary", "独立した境界で進行状況を保存")]],
      caption: copy("A simplified responsibility view, not a gameplay screenshot. Keeping rules separate allows presentation to evolve while preserving predictable behaviour and undo. The game remains in development.", "ゲーム画面ではなく、責務を簡略化した図です。ルールの分離により、予測可能な動作とUndoを保ちながら描画を変更できます。ゲームは開発中です。"),
    }],
  };
  return diagrams[slug] ?? [];
}
