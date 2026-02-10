#!/usr/bin/env node

// analysers
import { checkVariableNames } from "./src/analysers/naming.js";
import { checkFileLength } from "./src/analysers/length.js";
import { checkDuplicates } from "./src/analysers/duplicates.js";
import { checkVariableStyle } from "./src/analysers/variableStyle.js";
import {checkCssSelectors} from "./src/analysers/cssSelectors.js";

import { handleError } from "./src/errors.js";
import { readFileSync } from "fs";
import { askForAnimations } from "./src/ui/animation.js";
