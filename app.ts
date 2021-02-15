namespace kojac {
    export class App {
        stageManager: StageManager;

        constructor() {
            // One interval delay to ensure all static constructors have executed.
            setTimeout(() => {
                icons.init();
                this.stageManager = new StageManager();
                const console = new Console(this);
                this.pushStage(console);
            }, 1);
        }

        public pushStage(stage: Stage) {
            this.stageManager.push(stage);
        }

        public popStage() {
            this.stageManager.pop();
        }
    }
}