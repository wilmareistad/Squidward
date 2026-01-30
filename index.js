// Alla analysers
import { checkVariableNames } from "./src/analysers/naming.js";
import { checkFunctionLength } from "./src/analysers/length.js";
import { checkDuplications } from "./src/analysers/duplication.js";
import { checkTodos } from "./src/analysers/todos.js";

// Meddelanden
import { passive } from "./src/messages/passive.js";
import { serious } from "./src/messages/serious.js";

// Formattering
import { printResults } from "./src/output/formatter.js";

const file = argv[2];

const code = readFileSync(file, "utf-8");
