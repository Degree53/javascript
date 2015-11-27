module.exports = {

    "rules": {
        "accessor-pairs": 0, // review
        "block-scoped-var": 0, // review
        "complexity": 0, // review
        "consistent-return": 2,
        "curly": [ 2, "all" ],
        "default-case": 2,
        "dot-location": [ 2, "property" ],
        "dot-notation": [ 2, {
			"allowKeywords": true,
			"allowPattern": ""
		}],
        "eqeqeq": [ 2, "smart" ],
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 0, // review
        "no-div-regex": 0,
        "no-else-return": 2,
        "no-empty-label": 2,
        "no-empty-pattern": 2,
        "no-eq-null": 0, // review
        "no-eval": 2,
        "no-extend-native": 0, // review
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": 0, // review
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": [ 2, {
			"ignore": [],
			"enforceConst": false,
			"detectObjects": false
		}],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-native-reassign": [ 2, {
			"exceptions": []
		}],
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-param-reassign": [ 2, {
			"props": true
		}],
        "no-process-env": 2,
        "no-proto": 2,
        "no-redeclare": [ 2, {
			"builtinGlobals": true
		}],
        "no-return-assign": 0, // review
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": [ 2, {
			"allowShortCircuit": false,
			"allowTernary": false
		}],
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-void": 0, // review
        "no-warning-comments": [ 2, {
			"terms": [ "todo", "fixme", "xxx" ],
			"location": "start"
		}],
        "no-with": 2,
        "radix": 0,
        "vars-on-top": 0, // review
        "wrap-iife": 0, // review
        "yoda": [ 2, "never" ]
    }
};
